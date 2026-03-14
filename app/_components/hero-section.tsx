"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://cdn.abacus.ai/images/21db597e-273f-4385-9559-c64abb3e710f.png"
          alt="Equipo profesional colaborando con tecnología IA"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-dark-blue/90 via-dark-blue/80 to-mid-blue/70" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <Sparkles size={16} className="text-brand-orange" />
            <span className="text-white/90 text-sm font-medium">Consultora de IA para PyMEs regionales</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            IA como <span className="text-accent-blue">Co-piloto</span>,<br />
            no como Reemplazo
          </h1>

          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Amplificamos las capacidades de tu equipo con Inteligencia Artificial.
            Potenciamos al personal, sin complejidad innecesaria. Solo resultados medibles.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 bg-accent-blue hover:bg-accent-blue/90 text-white px-8 py-4 rounded-md text-lg font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-[1.02]"
            >
              Solicitar Diagnóstico Gratuito
              <ArrowRight size={20} />
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-md text-lg font-semibold transition-all"
            >
              Ver Servicios
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
