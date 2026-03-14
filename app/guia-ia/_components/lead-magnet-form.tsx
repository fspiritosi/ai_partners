"use client";

import { useState } from 'react';
import { Download, CheckCircle, Loader2 } from 'lucide-react';

export default function LeadMagnetForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, company }),
      });

      const data = await res.json();

      if (data?.success) {
        setStatus('success');
      } else {
        setErrorMsg(data?.message ?? 'Error al enviar. Intentá de nuevo.');
        setStatus('error');
      }
    } catch {
      setErrorMsg('Error de conexión. Intentá de nuevo.');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-white border-2 border-brand-green/30 rounded-2xl p-8 text-center shadow-xl">
        <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={32} className="text-brand-green" />
        </div>
        <h3 className="text-xl font-bold text-dark-blue mb-2">¡Listo! 🎉</h3>
        <p className="text-gray-600 mb-6">
          Tu guía está lista para descargar. También te la enviamos por email.
        </p>
        <a
          href="/guia-7-procesos-ia-pymes.pdf"
          download
          className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green/90 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-md"
        >
          <Download size={18} />
          Descargar Guía PDF
        </a>
        <p className="text-gray-400 text-xs mt-4">
          ¿Querés un análisis personalizado para tu empresa?{' '}
          <a href="/#contacto" className="text-accent-blue hover:underline">Agendá un diagnóstico</a>
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-xl">
      <div className="text-center mb-6">
        <div className="w-12 h-12 bg-accent-blue/10 rounded-full flex items-center justify-center mx-auto mb-3">
          <Download size={24} className="text-accent-blue" />
        </div>
        <h3 className="text-lg font-bold text-dark-blue">Descargá la guía gratis</h3>
        <p className="text-gray-500 text-sm mt-1">Completá tus datos y recibila al instante</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="lm-name" className="block text-sm font-medium text-gray-700 mb-1">
            Nombre *
          </label>
          <input
            id="lm-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Tu nombre"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-accent-blue/50 focus:border-accent-blue transition-all outline-none"
          />
        </div>

        <div>
          <label htmlFor="lm-email" className="block text-sm font-medium text-gray-700 mb-1">
            Email *
          </label>
          <input
            id="lm-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@empresa.com"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-accent-blue/50 focus:border-accent-blue transition-all outline-none"
          />
        </div>

        <div>
          <label htmlFor="lm-company" className="block text-sm font-medium text-gray-700 mb-1">
            Empresa <span className="text-gray-400">(opcional)</span>
          </label>
          <input
            id="lm-company"
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Nombre de tu empresa"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-accent-blue/50 focus:border-accent-blue transition-all outline-none"
          />
        </div>

        {status === 'error' && (
          <p className="text-red-500 text-sm bg-red-50 px-3 py-2 rounded-lg">{errorMsg}</p>
        )}

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-accent-blue hover:bg-accent-blue/90 disabled:opacity-60 text-white py-3 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
        >
          {status === 'loading' ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Enviando...
            </>
          ) : (
            <>
              <Download size={18} />
              Quiero la Guía Gratis
            </>
          )}
        </button>

        <p className="text-gray-400 text-xs text-center">
          No compartimos tu información. Podés darte de baja en cualquier momento.
        </p>
      </form>
    </div>
  );
}
