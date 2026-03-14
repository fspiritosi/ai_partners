import Header from '../_components/header';
import FooterSection from '../_components/footer-section';
import LeadMagnetForm from './_components/lead-magnet-form';
import { CheckCircle, Zap, Clock, TrendingUp, ArrowRight, BookOpen, Sparkles } from 'lucide-react';

export const metadata = {
  title: 'Guía Gratuita: 7 Procesos que tu PyME puede automatizar con IA | AI Consulting Partners',
  description: 'Descargá gratis la guía práctica con 7 procesos concretos que cualquier PyME puede automatizar con Inteligencia Artificial esta semana.',
};

const processes = [
  {
    number: '01',
    title: 'Atención al cliente',
    description: 'Respuestas automáticas inteligentes que resuelven el 70% de las consultas frecuentes.',
  },
  {
    number: '02',
    title: 'Presupuestos y cotizaciones',
    description: 'Generación semi-automática de presupuestos personalizados en minutos.',
  },
  {
    number: '03',
    title: 'Gestión de emails',
    description: 'Clasificación, priorización y respuestas sugeridas para tu bandeja de entrada.',
  },
  {
    number: '04',
    title: 'Reportes y análisis',
    description: 'Dashboards inteligentes que convierten datos crudos en decisiones accionables.',
  },
  {
    number: '05',
    title: 'Publicaciones y contenido',
    description: 'Creación de contenido para redes, web y comunicaciones internas asistido por IA.',
  },
  {
    number: '06',
    title: 'Gestión de inventario',
    description: 'Predicción de demanda y alertas automáticas de reposición de stock.',
  },
  {
    number: '07',
    title: 'Onboarding de empleados',
    description: 'Asistente IA que responde dudas frecuentes y guía a nuevos miembros del equipo.',
  },
];

const benefits = [
  { icon: Clock, text: 'Ahorrá entre 10 y 20 horas semanales en tareas repetitivas' },
  { icon: TrendingUp, text: 'Aumentá la productividad de tu equipo sin contratar más personal' },
  { icon: Zap, text: 'Implementaciones simples que podés arrancar esta semana' },
  { icon: CheckCircle, text: 'Sin conocimientos técnicos previos requeridos' },
];

export default function GuiaIAPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-dark-blue via-mid-blue to-dark-blue pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent-blue rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-green rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-[1000px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <BookOpen size={16} className="text-brand-orange" />
              <span className="text-white/90 text-sm font-medium">Guía Gratuita — Descarga Inmediata</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              7 Procesos que tu PyME puede{' '}
              <span className="text-accent-blue">automatizar con IA</span>{' '}
              esta semana
            </h1>
            <p className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto">
              Una guía práctica y sin tecnicismos para que cualquier empresa de 10 a 100 empleados 
              empiece a ahorrar tiempo y dinero con Inteligencia Artificial.
            </p>
          </div>
        </div>
      </section>

      {/* Content + Form */}
      <section className="py-16 sm:py-20">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-5 gap-12 items-start">

            {/* Left: What you'll learn */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl sm:text-3xl font-bold text-dark-blue mb-8">
                ¿Qué vas a encontrar en la guía?
              </h2>

              <div className="space-y-5 mb-10">
                {processes.map((process) => (
                  <div
                    key={process.number}
                    className="flex gap-4 p-4 rounded-xl bg-gray-50 hover:bg-accent-blue/5 transition-colors"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center">
                      <span className="text-accent-blue font-bold text-sm">{process.number}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-dark-blue mb-1">{process.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{process.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Benefits */}
              <div className="bg-dark-blue/5 rounded-2xl p-6">
                <h3 className="font-bold text-dark-blue mb-4 flex items-center gap-2">
                  <Sparkles size={20} className="text-brand-orange" />
                  Después de leer esta guía vas a poder:
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <benefit.icon size={18} className="text-brand-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{benefit.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-2">
              <div className="sticky top-24">
                <LeadMagnetForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA bottom */}
      <section className="bg-gradient-to-r from-dark-blue to-mid-blue py-12">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            ¿Querés ir más allá de la guía?
          </h2>
          <p className="text-white/70 mb-6">
            Agendá un Diagnóstico IA personalizado para tu empresa. Analizamos tus procesos y te mostramos exactamente dónde la IA puede generarte mayor impacto.
          </p>
          <a
            href="/#contacto"
            className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
          >
            Agendar Diagnóstico IA
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
