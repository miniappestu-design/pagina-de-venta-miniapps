import React, { useState } from 'react';
import { COURSE_MODULES } from '../data/defaults';
import { Layers, ChevronDown, CheckCircle2 } from 'lucide-react';

export const ModulesSection: React.FC = () => {
  const [openModuleId, setOpenModuleId] = useState<number | null>(1);

  const toggleModule = (id: number) => {
    setOpenModuleId(openModuleId === id ? null : id);
  };

  return (
    <section id="modulos" className="py-20 md:py-28 relative bg-[#060a14] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Plan de Estudios Completo</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display mb-4">
            LOS 5 MÓDULOS DE FORMACIÓN
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Un recorrido práctico diseñado para llevarte de cero a la publicación de tus propias MiniApps.
          </p>
        </div>

        {/* 5 Expandable Modules Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {COURSE_MODULES.map((mod) => {
            const isOpen = openModuleId === mod.id;
            return (
              <div
                key={mod.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-slate-900/90 border-cyan-500/50 shadow-xl shadow-cyan-950/40 ring-1 ring-cyan-500/30'
                    : 'bg-slate-900/40 hover:bg-slate-900/70 border-white/10'
                }`}
              >
                {/* Header button */}
                <button
                  type="button"
                  onClick={() => toggleModule(mod.id)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    <span className="text-lg sm:text-xl font-bold font-mono text-cyan-400 px-3.5 py-1.5 rounded-xl bg-cyan-950/60 border border-cyan-500/30 shrink-0">
                      {mod.number}
                    </span>
                    <div>
                      <span className="text-xs uppercase tracking-widest text-slate-400 font-mono block mb-1">
                        MÓDULO {mod.id}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                        {mod.title}
                      </h3>
                      <p className="text-sm text-cyan-200 mt-0.5">
                        "{mod.summary}"
                      </p>
                    </div>
                  </div>

                  <div className={`p-2 rounded-xl bg-white/5 text-slate-300 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-cyan-400' : ''}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {/* Expanded Lessons */}
                {isOpen && (
                  <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-2 border-t border-white/10 animate-in fade-in duration-200">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Lecciones y contenidos prácticos:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {mod.topics.map((t, idx) => (
                        <div
                          key={idx}
                          className="p-3.5 rounded-xl bg-black/40 border border-white/5 flex items-start gap-2.5 text-xs sm:text-sm text-slate-200"
                        >
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{t}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
