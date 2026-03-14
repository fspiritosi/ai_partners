"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Search, Layers, HeadphonesIcon, CheckCircle, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Diagnóstico IA',
    price: 'USD 500',
    priceNote: 'Se descuenta si avanzás a implementación',
    description: 'Evaluamos tu empresa para identificar exactamente dónde la IA puede generar mayor impacto con menor riesgo.',
    image: 'https://cdn.abacus.ai/images/97d4da3b-68fb-46d1-9b4d-4ac501a75c5a.png',
    features: [
      'Relevamiento de procesos actuales',
      'Mapa de oportunidades de IA',
      'Análisis de ROI estimado por área',
      'Plan de implementación priorizado',
      'Informe ejecutivo detallado',
    ],
    accent: 'bg-accent-blue',
  },
  {
    icon: Layers,
    title: 'Implementación Guiada',
    price: 'USD 800 - 1.200',
    priceNote: 'Por módulo (5 módulos disponibles)',
    description: 'Te acompañamos paso a paso en la implementación de soluciones de IA adaptadas a tu operación.',
    image: 'https://cdn.abacus.ai/images/73b96e59-b99c-4ca6-b4af-fe5d65031588.png',
    features: [
      'Automatización de procesos clave',
      'Integración con tus herramientas actuales',
      'Capacitación personalizada del equipo',
      'Testing y ajuste fino',
      'Documentación y guías de uso',
    ],
    accent: 'bg-brand-green',
  },
  {
    icon: HeadphonesIcon,
    title: 'Retainer Mensual',
    price: 'Desde USD 300/mes',
    priceNote: '3 planes: USD 300 / 500 / 800',
    description: 'Soporte continuo para que tu equipo siga creciendo con IA. Evolución constante, sin depender de consultorías puntuales.',
    image: 'https://cdn.abacus.ai/images/3402625e-f868-4898-8696-7fc76f725fac.png',
    features: [
      'Soporte técnico y estratégico mensual',
      'Auditoría de uso y optimización',
      'Acceso a nuevas herramientas y updates',
      'Sesiones de capacitación mensuales',
      'Canal de consulta prioritario',
    ],
    accent: 'bg-brand-orange',
  },
];

export default function ServicesSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="servicios" className="py-20 sm:py-28 bg-white" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-blue mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tres niveles de acompañamiento diseñados para PyMEs que quieren crecer con Inteligencia Artificial.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services?.map((service, index) => {
            const Icon = service?.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden border border-gray-100 flex flex-col"
              >
                <div className="relative aspect-video bg-gray-200">
                  <Image
                    src={service?.image ?? ''}
                    alt={service?.title ?? 'Servicio'}
                    fill
                    className="object-cover"
                  />
                  <div className={`absolute top-4 left-4 ${service?.accent} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                    {service?.title}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    {Icon && <Icon size={24} className="text-accent-blue" />}
                    <h3 className="text-xl font-bold text-dark-blue">{service?.title}</h3>
                  </div>

                  <div className="mb-4">
                    <span className="text-2xl font-bold text-dark-blue">{service?.price}</span>
                    <p className="text-sm text-gray-500 mt-1">{service?.priceNote}</p>
                  </div>

                  <p className="text-gray-600 text-sm mb-5 leading-relaxed">{service?.description}</p>

                  <ul className="space-y-2 mb-6 flex-1">
                    {service?.features?.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle size={16} className="text-brand-green mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contacto"
                    className="inline-flex items-center justify-center gap-2 bg-dark-blue hover:bg-mid-blue text-white px-6 py-3 rounded-md text-sm font-semibold transition-all w-full"
                  >
                    Consultar
                    <ArrowRight size={16} />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
