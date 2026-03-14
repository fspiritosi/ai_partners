"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ClipboardCheck, Target, Wrench, GraduationCap, Rocket } from 'lucide-react';

const steps = [
  {
    icon: ClipboardCheck,
    step: '01',
    title: 'Diagnóstico',
    description: 'Entendemos tu negocio, procesos y equipo. Identificamos dónde la IA genera mayor impacto.',
  },
  {
    icon: Target,
    step: '02',
    title: 'Plan Estratégico',
    description: 'Diseñamos un roadmap personalizado con prioridades claras, tiempos y ROI esperado.',
  },
  {
    icon: Wrench,
    step: '03',
    title: 'Implementación',
    description: 'Configuramos las herramientas, integramos con tus sistemas y automatizamos procesos.',
  },
  {
    icon: GraduationCap,
    step: '04',
    title: 'Capacitación',
    description: 'Entrenamos a tu equipo para que use las soluciones con confianza y autonomía.',
  },
  {
    icon: Rocket,
    step: '05',
    title: 'Evolución Continua',
    description: 'Monitoreamos resultados, optimizamos y sumamos nuevas funcionalidades.',
  },
];

export default function ProcessSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="proceso" className="py-20 sm:py-28 bg-dark-blue" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Nuestra Metodología
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Un proceso claro y probado para que la adopción de IA en tu empresa sea ordenada y sin sorpresas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-4 sm:gap-6">
          {steps?.map((step, index) => {
            const Icon = step?.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-5 text-center hover:bg-white/10 transition-all group"
              >
                <div className="text-accent-blue text-sm font-bold mb-3">{step?.step}</div>
                <div className="w-12 h-12 bg-accent-blue/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-blue/30 transition-colors">
                  {Icon && <Icon size={24} className="text-accent-blue" />}
                </div>
                <h3 className="text-white font-semibold mb-2 text-sm sm:text-base">{step?.title}</h3>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed">{step?.description}</p>
                {index < (steps?.length ?? 0) - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 sm:-right-4 w-6 sm:w-8 h-[2px] bg-accent-blue/40" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
