import React, { useState } from 'react';
import { MAP_PILLARS } from '../data/defaults';
import { Compass, Cpu, Globe, Megaphone, ChevronDown, CheckCircle2 } from 'lucide-react';

export const MapMethodSection: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const getPillarIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Compass className="w-8 h-8 text-cyan-400" />;
      case 1:
        return <Cpu className="w-8 h-8 text-violet-400" />;
      case 2:
        return <Globe className="w-8 h-8 text-emerald-400" />;
      case 3:
        return <Megaphone className="w-8 h-8 text-amber-400" />;
      default:
        return <Compass className="w-8 h-8 text-cyan-400" />;
    }
  };

  return (
    <section id="como-funciona" className="py-20 md:py-28 relative bg-[#04060d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Metodología Estructurada</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display mb-4">
            EL MÉTODO MAP
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Los cuatro pilares para pasar de una idea abstracta a una MiniApp interactiva en internet.
          </p>
        </div>

        {/* 4 Large Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {MAP_PILLARS.map((pillar, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <div
                key={pillar.title}
                onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                className={`cursor-pointer rounded-3xl p-6 sm:p-8 transition-all duration-300 border ${
                  isExpanded
                    ? 'bg-gradient-to-b from-[#0e162d] to-[#070b16] border-cyan-400/50 shadow-2xl shadow-cyan-950/40 ring-1 ring-cyan-500/30'
                    : 'bg-slate-900/40 hover:bg-slate-900/70 border-white/10 hover:border-cyan-500/30'
                }`}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-black/60 border border-white/10 flex items-center justify-center shrink-0">
                      {getPillarIcon(idx)}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest font-mono">
                        Fase 0{idx + 1}
                      </span>
                      <h3 className="text-2xl font-bold text-white font-display">
                        {pillar.title}
                      </h3>
                    </div>
                  </div>

                  <div className={`p-2 rounded-xl bg-white/5 text-slate-300 transition-transform duration-300 ${isExpanded ? 'rotate-180 text-cyan-400' : ''}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </div>

                <p className="text-base sm:text-lg font-medium text-cyan-200 mb-3 leading-snug">
                  "{pillar.subtitle}"
                </p>

                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {pillar.description}
                </p>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-white/10 animate-in fade-in duration-200 space-y-2.5">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Lo que dominas en este pilar:
                    </p>
                    {pillar.keyPoints.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-sm text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-cyan-400">
                  <span>{isExpanded ? 'Ocultar detalles' : 'Toca para ver entregables'}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
