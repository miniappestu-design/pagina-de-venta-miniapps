import React from 'react';
import { handleWhatsApp } from '../data/defaults';
import { MessageCircle } from 'lucide-react';

export const WhatsAppSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 relative bg-[#04060d] border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-[#071320] via-[#091829] to-[#071320] border-2 border-cyan-400/50 text-center shadow-2xl shadow-cyan-950/60 relative overflow-hidden">
          {/* Subtle glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/15 blur-[90px] pointer-events-none rounded-full" />

          <div className="w-16 h-16 rounded-2xl bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-cyan-500/20">
            <MessageCircle className="w-8 h-8" />
          </div>

          {/* EXACT TITLE REQUIRED BY USER */}
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-display mb-4 tracking-tight">
            ¿TIENES DUDAS ANTES DE CREAR TU PRIMERA MINIAPP?
          </h3>

          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed mb-8">
            Si quieres conocer más sobre el curso, la herramienta, el Agente Verse, los módulos, los bonos o el acceso, puedes escribirnos directamente por WhatsApp.
          </p>

          <button
            onClick={handleWhatsApp}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 text-sm sm:text-base font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-300 hover:from-cyan-300 hover:to-teal-200 rounded-xl shadow-xl shadow-cyan-500/30 transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 text-slate-950" />
            <span>QUIERO HABLAR CON ALGUIEN 💬</span>
          </button>
        </div>
      </div>
    </section>
  );
};
