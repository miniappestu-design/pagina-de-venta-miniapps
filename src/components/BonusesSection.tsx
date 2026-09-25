import React, { useState } from 'react';
import { BONUSES } from '../data/defaults';
import { Gift, ChevronDown, Layers, Eye, Zap, Anchor } from 'lucide-react';

export const BonusesSection: React.FC = () => {
  const [expandedBonusId, setExpandedBonusId] = useState<number | null>(1);

  const toggleBonus = (id: number) => {
    setExpandedBonusId(expandedBonusId === id ? null : id);
  };

  const getBonusIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers':
        return <Layers className="w-6 h-6 text-cyan-400" />;
      case 'Gift':
        return <Gift className="w-6 h-6 text-violet-400" />;
      case 'Eye':
        return <Eye className="w-6 h-6 text-amber-400" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-cyan-300" />;
      case 'Anchor':
        return <Anchor className="w-6 h-6 text-emerald-400" />;
      default:
        return <Gift className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="bonos" className="py-20 md:py-28 relative bg-[#04060d] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Gift className="w-3.5 h-3.5" />
            <span>Recursos Complementarios Exclusivos</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display mb-4">
            Y ADEMÁS, RECIBES ESTOS BONOS
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Aceleradores estratégicos incluidos para complementar tu proceso creativo.
          </p>
        </div>

        {/* 5 Bonuses Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {BONUSES.map((bonus, idx) => {
            const isExpanded = expandedBonusId === bonus.id;
            return (
              <div
                key={bonus.id}
                onClick={() => toggleBonus(bonus.id)}
                className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 border flex flex-col justify-between ${
                  isExpanded
                    ? 'bg-slate-900/90 border-cyan-400/50 shadow-xl shadow-cyan-950/40 ring-1 ring-cyan-500/30'
                    : 'bg-slate-900/40 hover:bg-slate-900/70 border-white/10'
                } ${idx === 0 ? 'md:col-span-2 lg:col-span-2' : ''}`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-cyan-950/70 text-cyan-300 border border-cyan-500/30">
                      {bonus.badge}
                    </span>
                    <div className="p-2 rounded-xl bg-black/40 border border-white/10">
                      {getBonusIcon(bonus.iconName)}
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white font-display mb-2 leading-snug">
                    {bonus.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    {bonus.shortDesc}
                  </p>

                  {/* Special Note if applicable */}
                  {bonus.specialNote && (
                    <div className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-xs font-semibold text-cyan-300 mb-4">
                      ✓ {bonus.specialNote}
                    </div>
                  )}

                  {/* Expanded Detail */}
                  {isExpanded && (
                    <div className="pt-3 border-t border-white/10 text-xs sm:text-sm text-slate-300 leading-relaxed animate-in fade-in duration-200 space-y-2">
                      <p>{bonus.detail}</p>
                    </div>
                  )}
                </div>

                <div className="pt-4 flex items-center justify-between text-xs font-semibold text-cyan-400 mt-2">
                  <span>{isExpanded ? 'Ver menos' : 'Toca para ver detalles'}</span>
                  <div className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
