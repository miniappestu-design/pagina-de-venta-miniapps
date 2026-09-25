import React, { useState } from 'react';
import { NICHES_DATA } from '../data/defaults';
import { Utensils, Scissors, Dumbbell, Sparkles, GraduationCap, Briefcase, Store, Info, ArrowUpRight } from 'lucide-react';

export const NichesSection: React.FC = () => {
  const [selectedNicheId, setSelectedNicheId] = useState<string>('restaurantes');

  const getNicheIcon = (iconName: string) => {
    switch (iconName) {
      case 'Utensils':
        return <Utensils className="w-5 h-5" />;
      case 'Scissors':
        return <Scissors className="w-5 h-5" />;
      case 'Dumbbell':
        return <Dumbbell className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5" />;
      case 'Store':
        return <Store className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  const currentNiche = NICHES_DATA.find((n) => n.id === selectedNicheId) || NICHES_DATA[0];

  return (
    <section id="nichos" className="py-20 md:py-28 relative bg-[#060a14] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Versatilidad de Mercado</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display mb-4">
            ¿QUÉ PUEDES CREAR?
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Explora ejemplos de posibilidades interactivas que pueden construirse en diversos nichos y mercados.
          </p>
        </div>

        {/* Niche Category Selector Pills / Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-5xl mx-auto mb-10">
          {NICHES_DATA.map((niche) => {
            const isSelected = selectedNicheId === niche.id;
            return (
              <button
                key={niche.id}
                onClick={() => setSelectedNicheId(niche.id)}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/30 font-bold scale-102'
                    : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/10'
                }`}
              >
                {getNicheIcon(niche.iconName)}
                <span>{niche.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Niche Showcase Container */}
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-[#0b1328] to-[#070b16] border border-cyan-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-cyan-950/40">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8">
            <div className="flex items-center gap-4">
              <div className="p-3.5 rounded-2xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                {getNicheIcon(currentNiche.iconName)}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white font-display">
                  {currentNiche.name}
                </h3>
                <p className="text-sm text-slate-300 mt-0.5">
                  {currentNiche.shortDescription}
                </p>
              </div>
            </div>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-800/80 text-cyan-300 border border-slate-700">
              Ejemplos ilustrativos
            </span>
          </div>

          {/* Examples Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {currentNiche.examples.map((ex, i) => (
              <div
                key={i}
                className="p-5 sm:p-6 rounded-2xl bg-black/40 border border-white/10 hover:border-cyan-500/30 transition-all space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider font-mono">
                    {ex.type}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-slate-500" />
                </div>

                <h4 className="text-lg font-bold text-white font-display leading-snug">
                  {ex.title}
                </h4>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {ex.description}
                </p>

                <div className="pt-2 text-xs text-slate-400 flex items-start gap-1.5 border-t border-white/5">
                  <span className="text-emerald-400 font-semibold">Valor aportado:</span>
                  <span>{ex.benefit}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Clarification banner */}
          <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-400 leading-relaxed">
            <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <p>
              <strong className="text-slate-200">Aviso importante:</strong> Estos ejemplos representan posibilidades y casos de uso prácticos que puedes idear y construir con el método; se presentan con fines ilustrativos y no constituyen productos comerciales preexistentes cerrados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
