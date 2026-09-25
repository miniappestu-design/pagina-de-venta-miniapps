import React, { useState } from 'react';
import {
  LIBRARY_CATEGORIES_CATALOG,
} from '../data/miniappsData';
import { HOTMART_CHECKOUT, handleCheckout } from '../data/defaults';
import {
  Search,
  ArrowRight,
  Lock,
  X,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';

export const LibrarySection: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState<'all' | 1 | 2>('all');
  const [activeNicheHover, setActiveNicheHover] = useState<string | null>(null);
  const [showAccessModal, setShowAccessModal] = useState<boolean>(false);
  const [selectedItemName, setSelectedItemName] = useState<string>('');

  // Selected level filter
  const displayedCategories = LIBRARY_CATEGORIES_CATALOG.filter((cat) => {
    if (selectedLevel === 'all') return true;
    return cat.level === selectedLevel;
  });

  const handleCardClick = (title: string) => {
    setSelectedItemName(title);
    setShowAccessModal(true);
  };

  // Curated showcase sample cards from the reference images to show high visual fidelity
  const previewSampleApps = [
    {
      num: '108',
      cat: 'Artesanía & DIY',
      title: 'PLANIFICADOR DE MACRAMÉ Y LONGITUD DE CUERDAS PARA TAPICES',
      desc: 'Calcular el largo de tiras de algodón para tapices, porta macetas y plumas decorativas sin desperdicio.',
      tag: 'Nivel 2 · Alta Demanda',
    },
    {
      num: '102',
      cat: 'Artesanía & DIY',
      title: 'CALCULADORA DE PROPORCIONES PARA RESINA EPOXI',
      desc: 'Calcula el ratio exacto entre componente A y B por peso o volumen para evitar burbujas y mal curado.',
      tag: 'Nivel 2 · Viral en TikTok',
    },
    {
      num: '103',
      cat: 'Artesanía & DIY',
      title: 'GUÍA DE RESTAURACIÓN DE MUEBLES DE MADERA Y PINTURA A LA TIZA',
      desc: 'Paso a paso para decapar, lijar, aplicar chalk paint, encerar y proteger maderas antiguas.',
      tag: 'Nivel 2 · Reformas',
    },
    {
      num: '104',
      cat: 'Hogar & Organización',
      title: 'CALCULADORA DE AZULEJOS, PINTURA Y PAPEL PINTADO PARA REFORMAS',
      desc: 'Calcula metros cuadrados de pared, rollos necesarios y merma recomendada del 10% sin equivocaciones.',
      tag: 'Nivel 2 · Ahorro Hogar',
    },
    {
      num: '105',
      cat: 'Artesanía & DIY',
      title: 'GENERADOR DE PATRONES DE COSTURA BÁSICA Y CORTE DE TELA',
      desc: 'Adapta medidas corporales básicas a patrones de faldas, cojines y tote bags sin desperdicio de tela.',
      tag: 'Nivel 2 · Costura Express',
    },
    {
      num: '061',
      cat: 'Finanzas & Inversiones',
      title: 'SIMULADOR DE INTERÉS COMPUESTO Y LIBERTAD FINANCIERA',
      desc: 'Proyecta el crecimiento de tu capital a 5, 10 y 20 años con aportes mensuales e interés real ajustado.',
      tag: 'Nivel 1 · Finanzas Personales',
    },
  ];

  return (
    <section id="biblioteca-180" className="py-20 md:py-28 relative bg-[#060a14] border-t border-white/5 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Lock className="w-3.5 h-3.5 text-cyan-400" />
            <span>Recurso Exclusivo Para Alumnos</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-display tracking-tight mb-2">
            180 MINIAPPS RENTABLES
          </h2>

          <p className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-sky-400 font-display mb-4">
            PARA COPIAR Y VENDER
          </p>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Una biblioteca curada y validada con 180 ideas listas en nichos comprobados. Cada MiniApp incluye su arquitectura, fórmula interactiva, prompt de creación y estructura de venta.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/50 border border-white/10 text-xs text-slate-400 font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Demostración visual del catálogo · Acceso completo incluido en el programa</span>
          </div>
        </div>

        {/* Buscador Visual Superior (Estético) */}
        <div className="max-w-3xl mx-auto mb-12">
          <div
            onClick={() => handleCardClick('Buscador de la Biblioteca')}
            className="relative group cursor-pointer"
          >
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
              <Search className="w-5 h-5 text-cyan-400" />
            </div>
            <div className="w-full pl-12 pr-28 py-4 rounded-2xl bg-[#0b1222]/90 border border-cyan-500/30 text-slate-400 text-sm sm:text-base group-hover:border-cyan-400 group-hover:bg-[#0f1830] transition-all shadow-xl shadow-cyan-950/20 flex items-center justify-between">
              <span>Buscar MiniApp o nicho... (ej. Macramé, Resina, Finanzas, Skincare)</span>
              <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono font-semibold">
                <Lock className="w-3 h-3" /> 180 Ideas
              </span>
            </div>
          </div>

          {/* Level Filter Tabs (Visuales) */}
          <div className="flex flex-wrap items-center justify-between gap-3 mt-4 px-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                ELIGE UN NICHO:
              </span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <button
                onClick={() => setSelectedLevel('all')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedLevel === 'all'
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900/80 text-slate-300 hover:text-white border border-white/5'
                }`}
              >
                Todos los Nichos (180)
              </button>
              <button
                onClick={() => setSelectedLevel(1)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedLevel === 1
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900/80 text-slate-300 hover:text-white border border-white/5'
                }`}
              >
                Nivel 1: Principales
              </button>
              <button
                onClick={() => setSelectedLevel(2)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedLevel === 2
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900/80 text-slate-300 hover:text-white border border-white/5'
                }`}
              >
                Nivel 2: Especializadas
              </button>
            </div>
          </div>
        </div>

        {/* ========================================================
            SECCIÓN VISUAL: TARJETAS GRANDES DE CATEGORÍAS
            ======================================================== */}
        <div className="space-y-16 mb-20">
          
          {/* NIVEL 1: CATEGORÍAS PRINCIPALES */}
          {(selectedLevel === 'all' || selectedLevel === 1) && (
            <div>
              <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-white/10 pb-4">
                <div>
                  <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase block mb-1">
                    NIVEL 1
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                    CATEGORÍAS PRINCIPALES
                  </h3>
                </div>
                <span className="text-xs text-slate-400 font-mono">
                  8 Nichos de Gran Demanda Masiva
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {LIBRARY_CATEGORIES_CATALOG.filter((c) => c.level === 1).map((category) => (
                  <div
                    key={category.slug}
                    onClick={() => handleCardClick(category.name)}
                    onMouseEnter={() => setActiveNicheHover(category.slug)}
                    onMouseLeave={() => setActiveNicheHover(null)}
                    className="group relative rounded-2xl overflow-hidden aspect-[4/3] border border-white/10 hover:border-cyan-400/60 shadow-xl transition-all duration-300 cursor-pointer hover:shadow-cyan-950/40 hover:-translate-y-1"
                  >
                    {/* Imagen de fondo con zoom suave */}
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />

                    {/* Overlay oscuro */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#04060d] via-[#04060d]/75 to-black/35 group-hover:via-[#04060d]/65 transition-colors" />

                    {/* Contenido de la tarjeta */}
                    <div className="absolute inset-0 p-5 flex flex-col justify-between">
                      {/* Top Badge */}
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-1 rounded-md bg-black/60 border border-white/15 text-[11px] font-mono font-semibold text-cyan-300 uppercase tracking-wider backdrop-blur-sm">
                          NIVEL 1
                        </span>
                        <span className="text-xs font-mono text-slate-300 bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm flex items-center gap-1">
                          <Lock className="w-3 h-3 text-cyan-400" />
                          {category.count} MiniApps
                        </span>
                      </div>

                      {/* Bottom Info */}
                      <div>
                        <h4 className="text-lg sm:text-xl font-bold text-white font-display mb-1 group-hover:text-cyan-200 transition-colors">
                          {category.name}
                        </h4>
                        <p className="text-xs text-slate-300 line-clamp-2 mb-3 leading-relaxed">
                          {category.description}
                        </p>
                        <div className="flex items-center justify-between pt-2 border-t border-white/10">
                          <span className="text-xs font-semibold text-cyan-300 group-hover:text-cyan-200 flex items-center gap-1">
                            Explorar MiniApps →
                          </span>
                          <div className="w-8 h-8 rounded-full bg-cyan-500/20 group-hover:bg-cyan-400 text-cyan-300 group-hover:text-slate-950 border border-cyan-500/40 flex items-center justify-center transition-all">
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* NIVEL 2: CATEGORÍAS ESPECIALIZADAS */}
          {(selectedLevel === 'all' || selectedLevel === 2) && (
            <div>
              <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-white/10 pb-4">
                <div>
                  <span className="text-xs font-mono font-bold tracking-widest text-emerald-400 uppercase block mb-1">
                    NIVEL 2
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                    CATEGORÍAS ESPECIALIZADAS
                  </h3>
                </div>
                <span className="text-xs text-slate-400 font-mono">
                  Nichos de Alta Conversión, Hobbies y Reformas
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {LIBRARY_CATEGORIES_CATALOG.filter((c) => c.level === 2).map((category) => (
                  <div
                    key={category.slug}
                    onClick={() => handleCardClick(category.name)}
                    className="group relative rounded-2xl overflow-hidden aspect-[4/3] border border-white/10 hover:border-emerald-400/60 shadow-xl transition-all duration-300 cursor-pointer hover:shadow-emerald-950/40 hover:-translate-y-1"
                  >
                    {/* Imagen de fondo con zoom */}
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />

                    {/* Overlay oscuro */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#04060d] via-[#04060d]/75 to-black/35 group-hover:via-[#04060d]/65 transition-colors" />

                    {/* Contenido de la tarjeta */}
                    <div className="absolute inset-0 p-5 flex flex-col justify-between">
                      {/* Top Badge */}
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-1 rounded-md bg-black/60 border border-white/15 text-[11px] font-mono font-semibold text-emerald-300 uppercase tracking-wider backdrop-blur-sm">
                          NIVEL 2
                        </span>
                        <span className="text-xs font-mono text-slate-300 bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm flex items-center gap-1">
                          <Lock className="w-3 h-3 text-emerald-400" />
                          {category.count} MiniApps
                        </span>
                      </div>

                      {/* Bottom Info */}
                      <div>
                        <h4 className="text-lg sm:text-xl font-bold text-white font-display mb-1 group-hover:text-emerald-200 transition-colors">
                          {category.name}
                        </h4>
                        <p className="text-xs text-slate-300 line-clamp-2 mb-3 leading-relaxed">
                          {category.description}
                        </p>
                        <div className="flex items-center justify-between pt-2 border-t border-white/10">
                          <span className="text-xs font-semibold text-emerald-300 group-hover:text-emerald-200 flex items-center gap-1">
                            Explorar MiniApps →
                          </span>
                          <div className="w-8 h-8 rounded-full bg-emerald-500/20 group-hover:bg-emerald-400 text-emerald-300 group-hover:text-slate-950 border border-emerald-500/40 flex items-center justify-center transition-all">
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* ========================================================
            PREVIEW DE TARJETAS DE MINIAPPS (MOSTRAR VALOR REAL PERO PROTEGIDO)
            ======================================================== */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase block mb-1">
                VISTA PREVIA DEL CATÁLOGO
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                MUESTRA DE LAS 180 MINIAPPS LISTAS
              </h3>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
              <Lock className="w-3.5 h-3.5" />
              <span>Contenido protegido · Solo para alumnos</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {previewSampleApps.map((app) => (
              <div
                key={app.num}
                onClick={() => handleCardClick(app.title)}
                className="group relative rounded-2xl bg-[#090f1d] border border-white/10 hover:border-cyan-400/50 p-6 flex flex-col justify-between transition-all duration-200 hover:shadow-xl hover:shadow-cyan-950/30 cursor-pointer"
              >
                <div>
                  {/* Número y Categoría */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-2xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">
                      {app.num}
                    </span>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 bg-black/40 px-2.5 py-1 rounded-md border border-white/5">
                      {app.cat}
                    </span>
                  </div>

                  {/* Nombre de la MiniApp */}
                  <h4 className="text-base font-bold text-white font-display mb-2 group-hover:text-cyan-200 transition-colors leading-snug">
                    {app.title}
                  </h4>

                  {/* Descripción */}
                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    {app.desc}
                  </p>
                </div>

                {/* Botón VER IDEA Protegido */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-cyan-400/80">
                    {app.tag}
                  </span>
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-cyan-500/10 group-hover:bg-cyan-500 text-cyan-300 group-hover:text-slate-950 font-bold text-xs border border-cyan-500/30 transition-all">
                    <Lock className="w-3 h-3" />
                    <span>VER IDEA →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Banner Central de Acceso a la Biblioteca */}
          <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-cyan-950/40 via-[#0b1328] to-blue-950/40 border border-cyan-500/30 text-center max-w-3xl mx-auto shadow-2xl">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 flex items-center justify-center mx-auto mb-4">
              <Lock className="w-6 h-6" />
            </div>

            <h4 className="text-xl sm:text-2xl font-black text-white font-display mb-2">
              Esta biblioteca forma parte del acceso a FÁBRICA DE MINIAPPS VERSE
            </h4>

            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mb-6 leading-relaxed">
              Los 180 prompts de creación, las arquitecturas completas y las páginas de venta de referencia se desbloquean inmediatamente al inscribirte en el curso.
            </p>

            <button
              onClick={handleCheckout}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 text-slate-950 font-extrabold text-sm sm:text-base shadow-xl shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:scale-[1.02] transition-all cursor-pointer"
            >
              <span>QUIERO ACCEDER A LAS 180 MINIAPPS 🚀</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ========================================================
            MODAL DE CONTENIDO PROTEGIDO ("🔒 Biblioteca exclusiva para alumnos")
            ======================================================== */}
        {showAccessModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
            onClick={() => setShowAccessModal(false)}
          >
            <div
              className="relative w-full max-w-md bg-[#090f1e] border border-cyan-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-cyan-950/80 text-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Botón Cerrar */}
              <button
                onClick={() => setShowAccessModal(false)}
                className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                title="Cerrar ventana"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Icono de Candado */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/40 text-cyan-300 flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-cyan-400" />
              </div>

              {/* Título de Candado */}
              <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase block mb-1">
                🔒 Biblioteca exclusiva para alumnos
              </span>

              <h3 className="text-xl sm:text-2xl font-black text-white font-display mb-3">
                {selectedItemName ? selectedItemName : 'Recurso Protegido'}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                Esta biblioteca forma parte del acceso a <strong>FÁBRICA DE MINIAPPS VERSE</strong>. Para proteger el valor comercial de las 180 MiniApps, los prompts y las páginas de venta completas son exclusivos para los estudiantes del programa.
              </p>

              <div className="p-3.5 rounded-xl bg-black/50 border border-white/10 mb-6 text-left space-y-2">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Acceso a los 180 prompts de creación</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Estructuras y páginas de venta de referencia</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Herramienta interactiva Fábrica Verse incluida</span>
                </div>
              </div>

              {/* Botón CTA al Checkout */}
              <button
                onClick={handleCheckout}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 text-slate-950 font-black text-sm shadow-lg shadow-cyan-500/25 transition-all cursor-pointer"
              >
                <span>QUIERO ACCEDER 🚀</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setShowAccessModal(false)}
                className="mt-3 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                Cerrar vista previa
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
