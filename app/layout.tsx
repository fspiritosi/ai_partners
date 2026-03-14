import type { Metadata } from 'next';
import './globals.css';

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXTAUTH_URL ?? 'http://localhost:3000';
  return {
    metadataBase: new URL(baseUrl),
    title: 'AI Consulting Partners | IA como Co-piloto para PyMEs',
    description: 'Consultora de Inteligencia Artificial para PyMEs regionales. Amplificamos tu equipo con IA, sin reemplazarlo. Diagnóstico, implementación y soporte continuo.',
    icons: {
      icon: '/favicon.svg',
      shortcut: '/favicon.svg',
    },
    openGraph: {
      title: 'AI Consulting Partners | IA como Co-piloto para PyMEs',
      description: 'Consultora de IA para PyMEs regionales. Amplificamos tu equipo con IA.',
      type: 'website',
      images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      {/* 
        Si en el futuro necesitás agregar scripts externos (analytics, chat, etc.)
        podés hacerlo acá con <head><script src="..." /></head> 
      */}
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
