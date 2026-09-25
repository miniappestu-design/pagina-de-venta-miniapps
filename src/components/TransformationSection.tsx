import React from 'react';
import { XCircle, CheckCircle } from 'lucide-react';

export const TransformationSection: React.FC = () => {
  const beforeStates = [
    'No sé qué crear.',
    'No sé qué nicho elegir.',
    'No sé qué problema resolver.',
    'No sé cómo estructurar una oferta.',
    'No sé cómo convertir una idea en MiniApp.',
  ];

  const afterStates = [
    'Explorar nichos.',
    'Analizar oportunidades.',
    'Identificar necesidades.',
    'Definir cliente.',
    'Estructurar una oferta.',
    'Crear una MiniApp.',
    'Publicarla.',
  ];

  return (
    <section className="py-20 md:py-28 relative bg-[#04060d] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Claridad en el Proceso</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display mb-4">
            LA TRANSFORMACIÓN
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Pasa de la incertidumbre a un flujo estructurado con herramientas concretas.
          </p>
        </div>

        {/* Before & After Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {/* DE ESTO (Before) */}
          <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-rose-950/20 to-slate-950/40 border border-rose-500/20 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-bold uppercase tracking-wider font-mono">
                  DE ESTO...
                </span>
                <span className="text-xs text-slate-400">Bloqueo e improvisación</span>
              </div>

              <div className="space-y-3.5">
                {beforeStates.map((text, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-black/40 border border-rose-500/10 flex items-center gap-3.5 text-slate-300"
                  >
                    <XCircle className="w-5 h-5 text-rose-400/80 shrink-0" />
                    <span className="text-sm sm:text-base font-medium">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-xs text-slate-400 mt-6 pt-4 border-t border-white/5">
              Sensación de comenzar una y otra vez frente a una pantalla vacía sin dirección clara.
            </p>
          </div>

          {/* A ESTO (After) */}
          <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-cyan-950/30 via-slate-900/60 to-[#070b16] border border-cyan-400/40 shadow-xl shadow-cyan-950/30 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold uppercase tracking-wider font-mono">
                  ...A ESTO.
                </span>
                <span className="text-xs text-slate-400">Dirección y ejecución con IA</span>
              </div>

              <div className="space-y-3">
                {afterStates.map((text, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-900/80 border border-cyan-500/20 hover:border-cyan-400/40 flex items-center gap-3 text-slate-100 transition-colors"
                  >
                    <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0" />
                    <span className="text-sm sm:text-base font-semibold">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-xs text-cyan-300/80 mt-6 pt-4 border-t border-cyan-500/20">
              Un flujo paso a paso donde cada etapa alimenta la siguiente con certeza y apoyo interactivo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
