import React, { useState } from 'react';
import { Calculator, AlertCircle } from 'lucide-react';

export const CalculatorSection: React.FC = () => {
  const [quantity, setQuantity] = useState<number>(1);
  const referencePrice = 9.99;

  const total = (quantity * referencePrice).toFixed(2);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value, 10);
    setQuantity(val);
  };

  return (
    <section id="calculadora" className="py-20 md:py-28 relative bg-[#04060d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>Simulador Interactivo</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display mb-4">
            ¿CUÁNTO PODRÍA REPRESENTAR VENDER MINIAPPS?
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Juega con la calculadora y visualiza un ejemplo.
          </p>
        </div>

        {/* Interactive Calculator Box */}
        <div className="max-w-3xl mx-auto bg-gradient-to-b from-[#0b1328] to-[#070b16] border border-cyan-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-cyan-950/40 relative">
          <div className="space-y-8">
            {/* Slider Control */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <label htmlFor="miniapp-range" className="text-sm sm:text-base font-semibold text-slate-200">
                  Cantidad de MiniApps:
                </label>
                <div className="px-4 py-1.5 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-xl font-bold font-mono">
                  {quantity} {quantity === 1 ? 'MiniApp' : 'MiniApps'}
                </div>
              </div>

              <input
                id="miniapp-range"
                type="range"
                min="1"
                max="100"
                value={quantity}
                onChange={handleSliderChange}
                className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />

              <div className="flex justify-between text-xs text-slate-400 mt-2 font-mono">
                <span>1 MiniApp</span>
                <span>25</span>
                <span>50</span>
                <span>75</span>
                <span>100 MiniApps</span>
              </div>
            </div>

            {/* Price Formula Display */}
            <div className="p-6 rounded-2xl bg-black/50 border border-white/10 text-center space-y-3">
              <span className="text-xs uppercase tracking-widest text-slate-400 font-mono">
                Cálculo del ejemplo:
              </span>

              <div className="text-xl sm:text-2xl font-mono text-cyan-300 font-semibold">
                {quantity} {quantity === 1 ? 'MiniApp' : 'MiniApps'} × US${referencePrice} ={' '}
                <span className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">
                  US${total}
                </span>
              </div>

              <p className="text-xs text-slate-400">
                (Basado en un precio referencial de ejemplo de US$9.99 por herramienta)
              </p>
            </div>

            {/* Multiple illustrative milestones */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <button
                type="button"
                onClick={() => setQuantity(5)}
                className="p-3 rounded-xl bg-slate-900/60 hover:bg-slate-800 border border-white/5 text-left cursor-pointer transition-colors"
              >
                <span className="text-[11px] text-slate-400 block font-mono">Ejemplo 5 unidades</span>
                <span className="text-sm font-bold text-slate-200">5 × US$9.99 = US$49.95</span>
              </button>
              <button
                type="button"
                onClick={() => setQuantity(20)}
                className="p-3 rounded-xl bg-slate-900/60 hover:bg-slate-800 border border-white/5 text-left cursor-pointer transition-colors"
              >
                <span className="text-[11px] text-slate-400 block font-mono">Ejemplo 20 unidades</span>
                <span className="text-sm font-bold text-slate-200">20 × US$9.99 = US$199.80</span>
              </button>
              <button
                type="button"
                onClick={() => setQuantity(50)}
                className="p-3 rounded-xl bg-slate-900/60 hover:bg-slate-800 border border-white/5 text-left cursor-pointer transition-colors"
              >
                <span className="text-[11px] text-slate-400 block font-mono">Ejemplo 50 unidades</span>
                <span className="text-sm font-bold text-slate-200">50 × US$9.99 = US$499.50</span>
              </button>
            </div>

            {/* MANDATORY NOTICE */}
            <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-900/90 border border-amber-500/20 text-xs text-slate-300 leading-relaxed">
              <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-amber-300 font-semibold block mb-0.5">
                  Aviso ilustrativo:
                </strong>
                <p>
                  El precio real de una MiniApp puede variar según su complejidad, mercado, cliente y propuesta de valor.
                </p>
                <p className="text-slate-400 text-[11px] mt-1">
                  IMPORTANTE: US$9.99 NO ES EL PRECIO DEL CURSO. Se utiliza únicamente dentro de esta calculadora como ejemplo numérico ilustrativo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
