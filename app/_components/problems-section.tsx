"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ShieldAlert, Clock, Brain, TrendingDown, Users, HelpCircle } from 'lucide-react';

const problems = [
  {
    icon: ShieldAlert,
    title: '"La IA va a reemplazar a mi equipo"',
    description: 'El miedo a la automatización frena la adopción. Nosotros potenciamos personas, no las sustituimos.',
  },
  {
    icon: Clock,
    title: 'Procesos manuales que consumen horas',
    description: 'Tareas repetitivas que podrían automatizarse siguen robando tiempo valioso a tu equipo.',
  },
  {
    icon: Brain,
    title: 'Falta de expertise técnico interno',
    description: 'No tenés un CTO ni un equipo de datos. Necesitás un guía externo que hable tu idioma.',
  },
  {
    icon: TrendingDown,
    title: 'Competidores avanzando más rápido',
    description: 'Mientras dudás, tu competencia ya está usando IA para ser más eficiente y captar más clientes.',
  },
  {
    icon: Users,
    title: 'Herramientas de IA sin adopción real',
    description: 'Compraste herramientas pero tu equipo no las usa. Falta capacitación y acompañamiento.',
  },
  {
    icon: HelpCircle,
    title: '¿Por dónde empiezo?',
    description: 'La cantidad de opciones abruma. Necesitás un diagnóstico claro y un plan paso a paso.',
  },
];

export default function ProblemsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-20 sm:py-28 bg-gray-50" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-blue mb-4">
            ¿Te sentís identificado?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estos son los desafíos más comunes que enfrentan las PyMEs al pensar en Inteligencia Artificial.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems?.map((problem, index) => {
            const Icon = problem?.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 bg-accent-blue/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent-blue/20 transition-colors">
                  {Icon && <Icon size={24} className="text-accent-blue" />}
                </div>
                <h3 className="text-lg font-semibold text-dark-blue mb-2">{problem?.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{problem?.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
