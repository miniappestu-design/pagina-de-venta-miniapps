import React from 'react';
import { Users, MessageSquareQuote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonios" className="py-20 md:py-28 relative bg-[#04060d] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Users className="w-3.5 h-3.5" />
            <span>Historias Reales</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display mb-4">
            EXPERIENCIAS DE NUESTRA COMUNIDAD
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Transparencia y honestidad: compartimos únicamente vivencias y casos reales de nuestra comunidad.
          </p>
        </div>

        {/* Elegant Placeholder */}
        <div className="max-w-2xl mx-auto text-center p-8 sm:p-12 rounded-3xl bg-slate-900/40 border border-white/10 shadow-xl">
          <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto mb-5">
            <MessageSquareQuote className="w-8 h-8" />
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-white font-display uppercase tracking-wide mb-3">
            PRÓXIMAMENTE EXPERIENCIAS DE NUESTRA COMUNIDAD.
          </h3>

          <p className="text-sm sm:text-base text-slate-300 max-w-lg mx-auto leading-relaxed">
            Mantenemos una estricta política de transparencia: no fabricamos testimonios ficticios ni inventamos métricas falsas. Esta sección se irá actualizando con casos de estudio verificados de personas reales.
          </p>
        </div>
      </div>
    </section>
  );
};
