export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import nodemailer from 'nodemailer';

// ============================================================
// CONFIGURACIÓN DE EMAIL — Completar con tus datos en .env
// ============================================================
// Variables de entorno necesarias:
//
//   SMTP_HOST=smtp.gmail.com          # Host del servidor SMTP (Gmail, Outlook, tu proveedor, etc.)
//   SMTP_PORT=587                      # Puerto SMTP (587 para TLS, 465 para SSL)
//   SMTP_SECURE=false                  # true para puerto 465 (SSL), false para 587 (TLS/STARTTLS)
//   SMTP_USER=tu-email@gmail.com       # Tu email o usuario SMTP
//   SMTP_PASS=xxxx-xxxx-xxxx-xxxx      # Tu contraseña o App Password (ver nota abajo)
//   SMTP_FROM=tu-email@gmail.com       # Dirección "From" que aparece en el email
//   CONTACT_EMAIL=ventas@codecontrol.com.ar  # Email donde recibís las notificaciones
//
// --- NOTA para Gmail ---
// Gmail requiere una "App Password" (no tu contraseña normal).
// 1. Activá la verificación en 2 pasos en tu cuenta Google
// 2. Andá a https://myaccount.google.com/apppasswords
// 3. Generá una contraseña para "Correo" > "Otro" > "AI Consulting Web"
// 4. Usá esa contraseña de 16 caracteres como SMTP_PASS
//
// --- NOTA para Outlook/Hotmail ---
// SMTP_HOST=smtp.office365.com, SMTP_PORT=587, SMTP_SECURE=false
//
// --- NOTA para un servidor propio ---
// Usá los datos que te proporcione tu proveedor de hosting/email
// ============================================================

function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST ?? 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT ?? '587', 10),
    secure: process.env.SMTP_SECURE === 'true', // true para 465, false para 587
    auth: {
      user: process.env.SMTP_USER ?? '',
      pass: process.env.SMTP_PASS ?? '',
    },
  });
}

export async function POST(request: Request) {
  try {
    const data = await request?.json();
    const name = data?.name ?? '';
    const email = data?.email ?? '';
    const phone = data?.phone ?? '';
    const company = data?.company ?? '';
    const message = data?.message ?? '';

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Nombre, email y mensaje son obligatorios.' },
        { status: 400 }
      );
    }

    // Save to database
    await prisma.contact.create({
      data: { name, email, phone, company, message },
    });

    // Send notification email via Nodemailer
    try {
      const contactEmail = process.env.CONTACT_EMAIL ?? 'ventas@codecontrol.com.ar';
      const fromEmail = process.env.SMTP_FROM ?? process.env.SMTP_USER ?? '';

      const htmlBody = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0D1B2A; border-bottom: 2px solid #218BC3; padding-bottom: 10px;">
            Nuevo Contacto desde el Sitio Web
          </h2>
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Nombre:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p style="margin: 10px 0;"><strong>Teléfono:</strong> ${phone || 'No proporcionado'}</p>
            <p style="margin: 10px 0;"><strong>Empresa:</strong> ${company || 'No proporcionado'}</p>
            <p style="margin: 10px 0;"><strong>Mensaje:</strong></p>
            <div style="background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #218BC3;">
              ${message}
            </div>
          </div>
          <p style="color: #666; font-size: 12px;">
            Enviado el: ${new Date().toLocaleString('es-AR', { timeZone: 'America/Buenos_Aires' })}
          </p>
        </div>
      `;

      const transporter = createTransporter();
      await transporter.sendMail({
        from: `"AI Consulting Partners" <${fromEmail}>`,
        to: contactEmail,
        replyTo: email, // Para poder responder directo al prospecto
        subject: `Nuevo contacto: ${name} - ${company || 'Sin empresa'}`,
        html: htmlBody,
      });
    } catch (emailErr) {
      console.error('Error sending notification email:', emailErr);
      // No falla el formulario si el email falla
    }

    return NextResponse.json({ success: true, message: 'Consulta enviada exitosamente.' });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, message: 'Error interno del servidor. Intentá de nuevo.' },
      { status: 500 }
    );
  }
}