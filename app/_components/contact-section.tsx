"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, CheckCircle, AlertCircle, Mail, Phone, User as UserIcon, Building, MessageSquare } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e?.target ?? {};
    setFormData((prev) => ({ ...(prev ?? {}), [name ?? '']: value ?? '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e?.preventDefault?.();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res?.json?.();

      if (res?.ok && data?.success) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      } else {
        setStatus('error');
        setErrorMsg(data?.message ?? 'Hubo un error al enviar el formulario.');
      }
    } catch (err) {
      console.error('Contact form error:', err);
      setStatus('error');
      setErrorMsg('Error de conexión. Por favor, intentá de nuevo.');
    }
  };

  return (
    <section id="contacto" className="py-20 sm:py-28 bg-white" ref={ref}>
      <div className="max-w-[800px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-blue mb-4">
            Hablemos de tu empresa
          </h2>
          <p className="text-lg text-gray-600">
            Contanos sobre tu negocio y te respondemos en menos de 24 horas.
          </p>
        </motion.div>

        {status === 'success' ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-brand-green/10 border border-brand-green/30 rounded-lg p-8 text-center"
          >
            <CheckCircle size={48} className="text-brand-green mx-auto mb-4" />
            <h3 className="text-xl font-bold text-dark-blue mb-2">¡Mensaje enviado con éxito!</h3>
            <p className="text-gray-600">Recibimos tu consulta. Te contactaremos en menos de 24 horas.</p>
            <button
              onClick={() => setStatus('idle')}
              className="mt-6 bg-dark-blue hover:bg-mid-blue text-white px-6 py-3 rounded-md text-sm font-semibold transition-all"
            >
              Enviar otra consulta
            </button>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-gray-50 rounded-lg p-6 sm:p-8 shadow-lg"
          >
            <div className="grid sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="block text-sm font-medium text-dark-blue mb-1.5">Nombre *</label>
                <div className="relative">
                  <UserIcon size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData?.name ?? ''}
                    onChange={handleChange}
                    placeholder="Tu nombre completo"
                    className="w-full pl-10 pr-4 py-3 rounded-md border border-gray-200 focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 outline-none transition-all text-sm text-gray-900 bg-white"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-dark-blue mb-1.5">Email *</label>
                <div className="relative">
                  <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData?.email ?? ''}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    className="w-full pl-10 pr-4 py-3 rounded-md border border-gray-200 focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 outline-none transition-all text-sm text-gray-900 bg-white"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-dark-blue mb-1.5">Teléfono</label>
                <div className="relative">
                  <Phone size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData?.phone ?? ''}
                    onChange={handleChange}
                    placeholder="+54 9 ..."
                    className="w-full pl-10 pr-4 py-3 rounded-md border border-gray-200 focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 outline-none transition-all text-sm text-gray-900 bg-white"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-dark-blue mb-1.5">Empresa</label>
                <div className="relative">
                  <Building size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="company"
                    value={formData?.company ?? ''}
                    onChange={handleChange}
                    placeholder="Nombre de tu empresa"
                    className="w-full pl-10 pr-4 py-3 rounded-md border border-gray-200 focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 outline-none transition-all text-sm text-gray-900 bg-white"
                  />
                </div>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-dark-blue mb-1.5">Mensaje *</label>
              <div className="relative">
                <MessageSquare size={18} className="absolute left-3 top-3 text-gray-400" />
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData?.message ?? ''}
                  onChange={handleChange}
                  placeholder="Contanos brevemente sobre tu empresa y qué desafío querés resolver con IA..."
                  className="w-full pl-10 pr-4 py-3 rounded-md border border-gray-200 focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 outline-none transition-all text-sm text-gray-900 bg-white resize-none"
                />
              </div>
            </div>

            {status === 'error' && (
              <div className="flex items-center gap-2 text-red-600 bg-red-50 border border-red-200 rounded-md p-3 mb-4 text-sm">
                <AlertCircle size={18} />
                <span>{errorMsg}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full flex items-center justify-center gap-2 bg-accent-blue hover:bg-accent-blue/90 disabled:bg-mid-blue disabled:opacity-70 text-white px-8 py-4 rounded-md text-base font-semibold transition-all shadow-md hover:shadow-lg"
            >
              {status === 'loading' ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Enviar Consulta
                </>
              )}
            </button>

            <p className="text-xs text-gray-600 mt-4 text-center">
              Tu información es confidencial y solo será utilizada para responder a tu consulta.
            </p>
          </motion.form>
        )}
      </div>
    </section>
  );
}
