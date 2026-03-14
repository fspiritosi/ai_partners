import { Mail, Phone, User } from 'lucide-react';
import { LogoFull } from '@/components/logo';

export default function FooterSection() {
  return (
    <footer className="bg-dark-blue py-12">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <LogoFull />
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Consultora de IA para PyMEs regionales. Amplificamos las capacidades de tu equipo con Inteligencia Artificial.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2">
              <li><a href="#servicios" className="text-white/60 hover:text-white text-sm transition-colors">Servicios</a></li>
              <li><a href="#proceso" className="text-white/60 hover:text-white text-sm transition-colors">Proceso</a></li>
              <li><a href="#resultados" className="text-white/60 hover:text-white text-sm transition-colors">Resultados</a></li>
              <li><a href="#contacto" className="text-white/60 hover:text-white text-sm transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <User size={16} className="text-accent-blue flex-shrink-0" />
                <span>Fabricio Spiritosi</span>
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <Mail size={16} className="text-accent-blue flex-shrink-0" />
                <a href="mailto:ventas@codecontrol.com.ar" className="hover:text-white transition-colors">
                  ventas@codecontrol.com.ar
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <Phone size={16} className="text-accent-blue flex-shrink-0" />
                <a href="tel:+5492995810476" className="hover:text-white transition-colors">
                  +54 9 299 5810476
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-white/40 text-xs">
            © 2026 AI Consulting Partners. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
