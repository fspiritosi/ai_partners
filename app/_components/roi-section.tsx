"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TrendingUp, Clock, DollarSign, BarChart3 } from 'lucide-react';

const stats = [
  { icon: Clock, value: 40, suffix: '%', label: 'Reducción de tiempo en tareas repetitivas' },
  { icon: DollarSign, value: 3, suffix: 'x', label: 'Retorno sobre la inversión promedio' },
  { icon: TrendingUp, value: 25, suffix: '%', label: 'Aumento en productividad del equipo' },
  { icon: BarChart3, value: 60, suffix: '%', label: 'Menos errores en procesos automatizados' },
];

function AnimatedCounter({ target, suffix, isVisible }: { target: number; suffix: string; isVisible: boolean }) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return;
    hasAnimated.current = true;
    let start = 0;
    const duration = 2000;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isVisible, target]);

  return (
    <span className="text-4xl sm:text-5xl font-bold text-white">
      {count}{suffix}
    </span>
  );
}

export default function RoiSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="resultados" className="py-20 sm:py-28 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 z-0">
        <Image
          src="https://cdn.abacus.ai/images/153bb224-538b-4295-b5f8-f840310fac18.png"
          alt="Resultados y métricas de rendimiento empresarial"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-dark-blue/90" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Resultados Esperados
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Números reales basados en implementaciones exitosas en PyMEs de la región.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats?.map((stat, index) => {
            const Icon = stat?.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-center hover:bg-white/15 transition-all"
              >
                <div className="w-12 h-12 bg-accent-blue/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  {Icon && <Icon size={24} className="text-accent-blue" />}
                </div>
                <AnimatedCounter target={stat?.value ?? 0} suffix={stat?.suffix ?? ''} isVisible={inView} />
                <p className="text-white/70 text-sm mt-3">{stat?.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
