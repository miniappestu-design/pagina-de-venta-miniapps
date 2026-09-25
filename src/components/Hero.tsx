import React from 'react';
import { handleCheckout, handleWhatsApp } from '../data/defaults';
import { Sparkles, MessageCircle, ArrowDown, CheckCircle2 } from 'lucide-react';
import heroImgAsset from '../assets/images/hero_verse_1790332104605.jpg';

export const Hero: React.FC = () => {
  const scrollToHowItWorks = () => {
    const el = document.getElementById('principiantes');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
      {/* Background glow meshes */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-600/20 via-violet-600/20 to-transparent blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-cyan-500/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-semibold tracking-wide mb-8 shadow-lg shadow-cyan-950/40">
            <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span>🚀 CREA MINIAPPS CON INTELIGENCIA ARTIFICIAL</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 font-display">
            Deja de empezar desde cero.{' '}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-violet-400">
              Empieza a crear MiniApps.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-3xl leading-relaxed mb-10 font-normal">
            Aprende a transformar ideas, conocimientos, contenidos y soluciones en MiniApps interactivas utilizando inteligencia artificial.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-xl mb-6">
            <button
              onClick={handleCheckout}
              className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-3 px-8 py-4 text-sm sm:text-base font-bold text-white bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl shadow-xl shadow-cyan-500/30 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer text-center"
            >
              <span>QUIERO ENTRAR A FÁBRICA DE MINIAPPS VERSE 🚀</span>
            </button>

            <button
              onClick={handleWhatsApp}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 text-sm sm:text-base font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800/90 border border-slate-700/80 hover:border-emerald-500/50 hover:text-emerald-300 rounded-xl transition-all duration-200 cursor-pointer shadow-lg shadow-black/40"
            >
              <MessageCircle className="w-5 h-5 text-emerald-400" />
              <span>QUIERO SABER MÁS 💬</span>
            </button>
          </div>

          {/* Quick value trust bullets */}
          <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-400 mb-10">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              Acceso 100% digital e inmediato
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              Herramienta interactiva incluida
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              No requieres saber programar
            </span>
          </div>

          {/* Small Discover CTA */}
          <button
            onClick={scrollToHowItWorks}
            className="group inline-flex items-center gap-2 text-xs font-semibold text-cyan-400/80 hover:text-cyan-300 uppercase tracking-widest transition-colors mb-14 cursor-pointer"
          >
            <span>DESCUBRIR CÓMO FUNCIONA</span>
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Hero Interactive Visual Showcase */}
        <div className="relative mx-auto max-w-5xl">
          <div className="relative rounded-2xl p-2 bg-gradient-to-b from-cyan-500/20 via-violet-500/10 to-transparent border border-white/10 shadow-2xl shadow-cyan-950/40">
            <div className="relative rounded-xl overflow-hidden bg-[#070b16] aspect-[16/9] border border-white/5">
              <img
                src={heroImgAsset}
                alt="Fábrica de MiniApps Verse Software Preview"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              {/* Glass overlay badge */}
              <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md p-4 rounded-xl bg-[#090e1c]/90 backdrop-blur-md border border-cyan-500/30 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                  <p className="text-xs sm:text-sm font-semibold text-white">
                    Ecosistema Interactivo FÁBRICA DE MINIAPPS VERSE
                  </p>
                </div>
                <p className="text-xs text-slate-300 mt-1">
                  Estructuración de ideas, prompts especializados y publicación con IA.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
