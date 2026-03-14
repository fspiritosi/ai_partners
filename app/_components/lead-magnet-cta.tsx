import { BookOpen, ArrowRight, Download } from 'lucide-react';

export default function LeadMagnetCta() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-accent-blue/5 via-white to-brand-green/5">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left - Info */}
            <div className="p-8 sm:p-10 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 bg-accent-blue/10 rounded-full px-3 py-1 mb-4 w-fit">
                <Download size={14} className="text-accent-blue" />
                <span className="text-accent-blue text-xs font-semibold uppercase tracking-wider">Guía Gratuita</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-dark-blue mb-4 leading-tight">
                7 Procesos que tu PyME puede automatizar con IA esta semana
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Una guía práctica, sin tecnicismos, con ejemplos concretos para empresas de 10 a 100 empleados. 
                Descubrí cómo ahorrar entre 10 y 20 horas semanales.
              </p>
              <a
                href="/guia-ia"
                className="inline-flex items-center gap-2 bg-accent-blue hover:bg-accent-blue/90 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg w-fit"
              >
                <BookOpen size={18} />
                Descargar Gratis
                <ArrowRight size={16} />
              </a>
            </div>

            {/* Right - Visual */}
            <div className="bg-gradient-to-br from-dark-blue to-mid-blue p-8 sm:p-10 flex flex-col justify-center items-center text-center">
              <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                <BookOpen size={40} className="text-white" />
              </div>
              <div className="space-y-3">
                {[
                  'Atención al cliente automatizada',
                  'Presupuestos en minutos',
                  'Reportes inteligentes',
                  'Gestión de inventario predictiva',
                  '...y 3 procesos más',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-white/80 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-blue flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
