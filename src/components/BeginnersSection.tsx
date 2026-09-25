import React, { useState } from 'react';
import { handleCheckout, handleWhatsApp, BEGINNERS_CARDS } from '../data/defaults';
import { HelpCircle, ChevronDown, Lightbulb, Compass, Terminal, Globe, ArrowRight, MessageCircle } from 'lucide-react';

export const BeginnersSection: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>('no-se-que-crear');

  const getIcon = (id: string) => {
    switch (id) {
      case 'no-se-que-crear':
        return <Lightbulb className="w-6 h-6 text-amber-400" />;
      case 'no-se-estructurar':
        return <Compass className="w-6 h-6 text-cyan-400" />;
      case 'no-se-prompts':
        return <Terminal className="w-6 h-6 text-violet-400" />;
      case 'no-se-publicar':
        return <Globe className="w-6 h-6 text-emerald-400" />;
      default:
        return <HelpCircle className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="principiantes" className="py-20 md:py-28 relative bg-[#060a14] border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Para todos los niveles</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display mb-4">
            ¿NUNCA HAS CREADO UNA MINIAPP?
          </h2>

          <p className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400 tracking-wide uppercase">
            NO PASA NADA. NO NECESITAS LLEGAR SABIENDO.
          </p>
        </div>

        {/* 4 Interactive Expandable Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          {BEGINNERS_CARDS.map((card) => {
            const isExpanded = expandedCard === card.id;
            return (
              <div
                key={card.id}
                onClick={() => setExpandedCard(isExpanded ? null : card.id)}
                className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 border ${
                  isExpanded
                    ? 'bg-slate-900/90 border-cyan-500/50 shadow-xl shadow-cyan-950/40'
                    : 'bg-slate-900/40 hover:bg-slate-900/70 border-white/10 hover:border-cyan-500/30'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-black/40 border border-white/10 shrink-0">
                      {getIcon(card.id)}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white font-display">
                        {card.title}
                      </h3>
                      <p className="text-sm text-slate-300 mt-1 leading-snug">
                        {card.shortText}
                      </p>
                    </div>
                  </div>
                  <div className={`p-1.5 rounded-lg bg-white/5 text-slate-300 transition-transform duration-300 shrink-0 ${isExpanded ? 'rotate-180 text-cyan-400' : ''}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </div>

                {/* Expandable Explanation */}
                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-white/10 text-sm text-slate-200 leading-relaxed bg-cyan-950/20 p-3.5 rounded-xl border border-cyan-500/20 animate-in fade-in duration-200">
                    <p className="flex items-start gap-2">
                      <span className="text-cyan-400 font-bold">💡 Solución Verse:</span>
                      <span>{card.expandedText}</span>
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Central Banner & Action */}
        <div className="max-w-3xl mx-auto rounded-2xl p-8 bg-gradient-to-r from-cyan-950/70 via-slate-900/80 to-violet-950/70 border border-cyan-500/30 text-center shadow-xl">
          <p className="text-xl sm:text-2xl font-extrabold text-white font-display mb-6 tracking-wide">
            "NO NECESITAS SABERLO TODO PARA EMPEZAR."
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleCheckout}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm sm:text-base font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl shadow-lg shadow-cyan-500/25 transition-all cursor-pointer"
            >
              <span>QUIERO APRENDER 🚀</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={handleWhatsApp}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 hover:text-emerald-300 rounded-xl transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>QUIERO HACER UNA PREGUNTA 💬</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
