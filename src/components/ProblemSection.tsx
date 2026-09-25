import React, { useState } from 'react';
import { ArrowDown, Lightbulb, Target, AlertTriangle, Users, Gift, Cpu, ArrowRight } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      label: 'IDEA',
      icon: Lightbulb,
      description: 'Una chispa inicial basada en tus conocimientos, experiencia o una necesidad detectada.',
      badge: '01. Punto de partida',
    },
    {
      label: 'NICHO',
      icon: Target,
      description: 'Identificar el segmento de mercado con problemas concretos y disposición a interactuar.',
      badge: '02. Audiencia clave',
    },
    {
      label: 'PROBLEMA',
      icon: AlertTriangle,
      description: 'El dolor específico, cálculo tedioso o tarea manual que consume tiempo a las personas.',
      badge: '03. Fricción a resolver',
    },
    {
      label: 'CLIENTE',
      icon: Users,
      description: 'Entender a la persona exacta: qué busca, qué le preocupa y qué resultado espera recibir.',
      badge: '04. Perfil ideal',
    },
    {
      label: 'OFERTA',
      icon: Gift,
      description: 'Empaquetar la solución en una promesa clara, tangible y de alto valor percibido.',
      badge: '05. Propuesta clara',
    },
    {
      label: 'MINIAPP',
      icon: Cpu,
      description: 'La experiencia interactiva viva que entrega el diagnóstico, cálculo o resultado con IA.',
      badge: '06. Solución interactiva',
    },
  ];

  return (
    <section className="py-20 md:py-28 relative bg-[#060a14] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display mb-6 tracking-tight">
            ¿Y SI NO TUVIERAS QUE EMPEZAR CON UNA HOJA EN BLANCO?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Crear una MiniApp no debería significar pasar horas intentando descubrir qué crear, para quién, qué problema resolver, cómo estructurarla y cómo llevarla a internet.
          </p>
        </div>

        {/* Visual Sequential Flow: IDEA ↓ NICHO ↓ PROBLEMA ↓ CLIENTE ↓ OFERTA ↓ MINIAPP */}
        <div className="max-w-5xl mx-auto mb-12">
          {/* Desktop & Tablet horizontal connected chain */}
          <div className="hidden sm:grid grid-cols-6 gap-2 relative mb-8">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isSelected = activeStep === idx;
              return (
                <div key={step.label} className="relative flex flex-col items-center">
                  <button
                    onClick={() => setActiveStep(idx)}
                    className={`w-full p-4 rounded-2xl border text-center transition-all duration-200 cursor-pointer flex flex-col items-center gap-2 ${
                      isSelected
                        ? 'bg-slate-900 border-cyan-400 shadow-lg shadow-cyan-950/50 scale-105'
                        : 'bg-slate-900/40 hover:bg-slate-900/70 border-white/10'
                    }`}
                  >
                    <div className={`p-2.5 rounded-xl bg-black/40 border ${isSelected ? 'border-cyan-400/50 text-cyan-400' : 'border-white/10 text-slate-400'}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold tracking-wider uppercase text-white font-display">
                      {step.label}
                    </span>
                  </button>

                  {idx < steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-cyan-400/60 font-bold text-xs pointer-events-none">
                      →
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile vertical flow showing IDEA ↓ NICHO ↓ PROBLEMA ↓ CLIENTE ↓ OFERTA ↓ MINIAPP */}
          <div className="sm:hidden flex flex-col items-center gap-2 mb-8">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isSelected = activeStep === idx;
              return (
                <React.Fragment key={step.label}>
                  <button
                    onClick={() => setActiveStep(idx)}
                    className={`w-full p-4 rounded-2xl border flex items-center justify-between text-left transition-all ${
                      isSelected
                        ? 'bg-slate-900 border-cyan-400 shadow-md shadow-cyan-950/50'
                        : 'bg-slate-900/50 border-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-xl bg-black/40 border ${isSelected ? 'border-cyan-400/50 text-cyan-400' : 'border-white/10 text-slate-400'}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-white font-display block">
                          {step.label}
                        </span>
                        <span className="text-[11px] text-slate-400">{step.badge}</span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-cyan-400" />
                  </button>
                  {idx < steps.length - 1 && (
                    <div className="py-0.5 text-cyan-400 font-bold">
                      <ArrowDown className="w-4 h-4" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Active Step Details */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0b1328] via-[#090e1c] to-[#0b1328] border border-cyan-500/30 shadow-xl">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shrink-0">
                  {React.createElement(steps[activeStep].icon, { className: 'w-7 h-7' })}
                </div>
                <div>
                  <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider font-mono">
                    {steps[activeStep].badge}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                    {steps[activeStep].label}
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base mt-1 max-w-2xl">
                    {steps[activeStep].description}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 self-end md:self-center">
                <button
                  onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1))}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 text-xs text-slate-300 hover:text-white border border-slate-700 transition-colors cursor-pointer"
                >
                  Anterior
                </button>
                <button
                  onClick={() => setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0))}
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 border border-cyan-500/40 text-xs font-semibold transition-colors cursor-pointer"
                >
                  <span>Siguiente paso</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
