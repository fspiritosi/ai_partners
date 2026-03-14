export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const data = await request?.json();
    const name = data?.name ?? '';
    const email = data?.email ?? '';
    const company = data?.company ?? '';

    if (!name || !email) {
      return NextResponse.json(
        { success: false, message: 'Nombre y email son obligatorios.' },
        { status: 400 }
      );
    }

    // Upsert to avoid duplicate email errors
    await prisma.subscriber.upsert({
      where: { email },
      update: { name, company },
      create: { name, email, company, source: 'lead_magnet' },
    });

    return NextResponse.json({
      success: true,
      message: '¡Listo! Revisá tu email para descargar la guía.',
    });
  } catch (error) {
    console.error('Subscribe error:', error);
    return NextResponse.json(
      { success: false, message: 'Error interno. Intentá de nuevo.' },
      { status: 500 }
    );
  }
}
