import React from 'react';
import { handleCheckout, handleWhatsApp } from '../data/defaults';
import { MessageCircle, Sparkles } from 'lucide-react';

export const FinalCtaSection: React.FC = () => {
  return (
    <section className="py-24 md:py-32 relative bg-[#04060d] border-t border-white/5 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-600/20 via-violet-600/20 to-transparent blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Da el siguiente paso</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white font-display tracking-tight leading-tight mb-6">
          TU PRÓXIMA MINIAPP PUEDE EMPEZAR CON UNA IDEA.
        </h2>

        <p className="text-lg sm:text-2xl text-slate-300 max-w-3xl mx-auto mb-10 font-normal">
          Deja de empezar desde cero y empieza a construir con un proceso.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
          <button
            onClick={handleCheckout}
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm sm:text-base font-bold text-white bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl shadow-xl shadow-cyan-500/30 transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer text-center"
          >
            <span>🚀 QUIERO ENTRAR A FÁBRICA DE MINIAPPS VERSE</span>
          </button>

          <button
            onClick={handleWhatsApp}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-sm sm:text-base font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:text-emerald-300 rounded-xl transition-all cursor-pointer shadow-lg"
          >
            <MessageCircle className="w-5 h-5 text-emerald-400" />
            <span>💬 QUIERO HABLAR POR WHATSAPP</span>
          </button>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-white/10 text-xs text-slate-400 space-y-2">
          <p>© {new Date().getFullYear()} FÁBRICA DE MINIAPPS VERSE. Todos los derechos reservados.</p>
          <p className="text-[11px] text-slate-500 max-w-xl mx-auto">
            Este sitio web no forma parte del sitio web de Meta, Facebook o Instagram ni está respaldado por Meta Platforms, Inc. de ninguna manera. Los resultados pueden variar y dependen de la dedicación, esfuerzo y habilidades de cada persona.
          </p>
        </div>
      </div>
    </section>
  );
};
