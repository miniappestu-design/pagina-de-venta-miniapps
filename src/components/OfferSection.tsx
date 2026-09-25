import React from 'react';
import { handleCheckout, handleWhatsApp, OLD_PRICE, CURRENT_PRICE } from '../data/defaults';
import { CountdownSection } from './CountdownSection';
import { CheckCircle2, ArrowRight, MessageCircle, ShieldCheck, Zap } from 'lucide-react';

export const OfferSection: React.FC = () => {
  const valueStack = [
    'Curso completo estructurado paso a paso',
    'El Método MAP (Mapear, Arquitectar, Publicar, Atraer)',
    'Los 5 módulos de formación técnica y estratégica',
    'Herramienta interactiva Fábrica de MiniApps Verse',
    'Agente Verse para análisis de ofertas y oportunidades',
    'Biblioteca de 180 MiniApps listas como referencia',
    'Páginas de venta correspondientes para cada MiniApp',
    'Todos los bonos especiales y aceleradores de prompts',
  ];

  return (
    <section id="oferta" className="py-20 md:py-28 relative bg-[#060a14] border-t border-white/5 overflow-hidden">
      {/* Background glow meshes */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-r from-cyan-600/15 via-violet-600/15 to-transparent blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>Acceso Inmediato Todo Incluido</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display mb-4">
            ENTRA A FÁBRICA DE MINIAPPS VERSE
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Todo lo que necesitas para comenzar a crear y publicar MiniApps con inteligencia artificial hoy mismo.
          </p>
        </div>

        {/* Real Countdown Section Component */}
        <CountdownSection />

        {/* Offer Conversion Card */}
        <div className="max-w-3xl mx-auto rounded-3xl p-8 sm:p-12 bg-gradient-to-b from-[#0b1328] via-[#080d1c] to-[#050811] border-2 border-cyan-500/40 shadow-2xl shadow-cyan-950/60 relative">
          {/* Badge */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/30 font-display">
            OFERTA ESPECIAL DISPONIBLE
          </div>

          {/* Pricing Header */}
          <div className="text-center pt-2 pb-8 border-b border-white/10">
            <div className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-1">
              Precio normal de lanzamiento:
            </div>
            <div className="text-2xl font-bold text-slate-500 line-through mb-3">
              ANTES: {OLD_PRICE}
            </div>

            <div className="inline-block">
              <span className="text-xs uppercase font-mono text-cyan-400 block mb-1">
                PRECIO OFICIAL HOY:
              </span>
              <div className="text-5xl sm:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-white font-display tracking-tight">
                {CURRENT_PRICE}
              </div>
            </div>

            <p className="text-xs text-slate-400 mt-2">
              Pago único · Sin suscripciones recurrentes · Acceso digital
            </p>
          </div>

          {/* Value Checklist */}
          <div className="py-8 space-y-3.5">
            <p className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono mb-4">
              Lo que recibes dentro de tu acceso:
            </p>
            {valueStack.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 text-sm sm:text-base text-slate-100">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleCheckout}
              className="flex-1 inline-flex items-center justify-center gap-2.5 px-8 py-4 font-extrabold text-sm sm:text-base text-white bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl shadow-xl shadow-cyan-500/30 transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer text-center"
            >
              <span>QUIERO APROVECHAR LA OFERTA 🚀</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={handleWhatsApp}
              className="inline-flex items-center justify-center gap-2 px-6 py-4 font-semibold text-sm sm:text-base text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:text-emerald-300 rounded-xl transition-all cursor-pointer shadow-lg"
            >
              <MessageCircle className="w-5 h-5 text-emerald-400" />
              <span>HABLAR POR WHATSAPP 💬</span>
            </button>
          </div>

          {/* Security note */}
          <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-center gap-2 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>Transacción segura y procesada con encriptación a través de Hotmart</span>
          </div>
        </div>
      </div>
    </section>
  );
};
