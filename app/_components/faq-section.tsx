"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';

const faqs = [
  {
    question: '¿Necesito un equipo técnico para implementar IA?',
    answer: 'No. Justamente nuestro servicio está diseñado para PyMEs que no tienen un CTO ni un equipo de datos interno. Nosotros aportamos todo el conocimiento técnico y capacitamos a tu equipo para que pueda usar las herramientas con confianza.',
  },
  {
    question: '¿La IA va a reemplazar empleados en mi empresa?',
    answer: 'Nuestra filosofía es "IA como Co-piloto, no como Reemplazo". Buscamos que la IA amplifique las capacidades de tu equipo actual, no que lo sustituya. Las personas siguen tomando decisiones; la IA les da mejores datos y automatiza lo repetitivo.',
  },
  {
    question: '¿Cuánto tiempo toma ver resultados?',
    answer: 'Dependiendo del módulo, los primeros resultados se ven entre 2 y 6 semanas. El diagnóstico inicial toma solo 1-2 semanas y ya tendrás un roadmap claro de oportunidades con ROI estimado.',
  },
  {
    question: '¿Qué tipo de empresas atienden?',
    answer: 'Trabajamos con PyMEs regionales de entre 10 y 100 empleados, de cualquier industria. Nuestros clientes típicos son empresas de servicios, comercio, manufactura y logística que quieren modernizar sus operaciones.',
  },
  {
    question: '¿Qué pasa si el diagnóstico no encuentra oportunidades claras?',
    answer: 'Es poco probable, pero si el diagnóstico determina que la IA no generaría un impacto significativo en este momento, te lo decimos con honestidad. Preferimos construir relaciones de confianza antes que vender por vender.',
  },
  {
    question: '¿Puedo empezar solo con el diagnóstico?',
    answer: 'Sí, el Diagnóstico IA es un servicio independiente de USD 500. Si luego decidís avanzar con la implementación, ese monto se descuenta del primer módulo. Sin compromiso.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="faq" className="py-20 sm:py-28 bg-gray-50" ref={ref}>
      <div className="max-w-[800px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="w-14 h-14 bg-accent-blue/10 rounded-lg flex items-center justify-center mx-auto mb-4">
            <MessageCircleQuestion size={28} className="text-accent-blue" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-blue mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg text-gray-600">
            Las dudas más comunes sobre IA para PyMEs, respondidas con claridad.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs?.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-dark-blue text-sm sm:text-base pr-4">{faq?.question}</span>
                <ChevronDown
                  size={20}
                  className={`text-accent-blue flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                      {faq?.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
