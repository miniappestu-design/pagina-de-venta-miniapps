import React, { useState } from 'react';
import {
  Wrench,
  Lock,
  ArrowRight,
  Sparkles,
  Heart,
  TrendingUp,
  Layers,
  UserCheck,
  Package,
  Terminal,
  ShieldCheck,
  CheckCircle2,
  X,
  ChevronLeft,
  ChevronRight,
  Eye,
  Sliders,
} from 'lucide-react';
import { handleCheckout } from '../data/defaults';

// Screenshot assets from real tool
import screenshot1 from '../assets/images/fabrica_miniapps_1790332115924.jpg';
import screenshot2 from '../assets/images/herramienta_deseos_1790334436565.jpg';
import screenshot3 from '../assets/images/herramienta_prompt_1790334450157.jpg';

export const ToolSection: React.FC = () => {
  // Active demo step for visual showcase
  const [activeStepTab, setActiveStepTab] = useState<number>(1);
  const [showToolModal, setShowToolModal] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'simulation' | 'screenshots'>('simulation');
  const [galleryIndex, setGalleryIndex] = useState<number>(0);

  const galleryScreenshots = [
    {
      src: screenshot1,
      title: 'Panel de Control Principal · Fábrica de MiniApps Verse',
      description: 'Mapeo visual de sectores, nichos de mercado y estructuras de interacción.',
    },
    {
      src: screenshot2,
      title: 'Matriz de Deseos Humanos y Mercados Emocionales',
      description: 'Selección de los detonadores psicológicos que garantizan uso y recurrencia.',
    },
    {
      src: screenshot3,
      title: 'Radiografía del Mercado y Generador de Prompts Verse',
      description: 'Generación asistida del prompt parametrizado listo para ejecutar con IA.',
    },
  ];

  // 8 steps of the methodology
  const toolSteps = [
    { num: 1, name: 'Nichos / Mercados', icon: Layers },
    { num: 2, name: 'Deseos Primarios', icon: Heart },
    { num: 3, name: 'Mercados Emocionales', icon: Sparkles },
    { num: 4, name: 'Transformación', icon: TrendingUp },
    { num: 5, name: 'Lifestyle & Pasiones', icon: Layers },
    { num: 6, name: 'Cliente Ideal', icon: UserCheck },
    { num: 7, name: 'Oferta del Producto', icon: Package },
    { num: 8, name: 'Radiografía del Mercado', icon: Terminal },
  ];

  const handleInteractiveTrigger = () => {
    setShowToolModal(true);
  };

  return (
    <section id="herramienta" className="py-20 md:py-28 relative bg-[#04060d] border-t border-white/5 overflow-hidden">
      
      {/* Glow effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-500/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================
            MENSAJE PRINCIPAL REQUERIDO
            ======================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Wrench className="w-3.5 h-3.5 text-blue-400" />
            <span>Herramienta Exclusiva del Programa</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display mb-3 tracking-tight">
            ¿NO SABES QUÉ MINIAPP CREAR?
          </h2>

          <p className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 font-display mb-3">
            NO PASA NADA.
          </p>

          <div className="text-xl sm:text-2xl font-black text-white font-display mb-4 flex items-center justify-center gap-2">
            <span>🏭 FÁBRICA DE MINIAPPS VERSE</span>
          </div>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            <strong>Fábrica de MiniApps Verse</strong> te ayuda a explorar nichos, mercados, ideas, cliente ideal y ofertas para estructurar tu próxima MiniApp.
          </p>

          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            * Pero la herramienta completa está disponible dentro de <strong>FÁBRICA DE MINIAPPS VERSE</strong>. A continuación puedes ver una demostración visual de su flujo.
          </p>

          {/* Toggle between Simulation & Real Screenshots */}
          <div className="inline-flex items-center p-1 rounded-2xl bg-[#0a1122] border border-blue-500/30 mt-6 shadow-lg">
            <button
              onClick={() => setViewMode('simulation')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                viewMode === 'simulation'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Sliders className="w-4 h-4 text-cyan-300" />
              <span>Demostración Visual Guiada</span>
            </button>
            <button
              onClick={() => setViewMode('screenshots')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                viewMode === 'screenshots'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Eye className="w-4 h-4 text-teal-300" />
              <span>Capturas de la Interfaz Real</span>
            </button>
          </div>
        </div>

        {/* ========================================================
            MODO 1: SIMULACIÓN VISUAL DE LA APLICACIÓN
            ======================================================== */}
        {viewMode === 'simulation' && (
          <div className="max-w-5xl mx-auto bg-[#080d1a] border border-blue-500/30 rounded-3xl overflow-hidden shadow-2xl shadow-blue-950/60">
            
            {/* Top Bar of the SaaS Tool Interface */}
            <div className="bg-[#0b1326] px-5 py-4 border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="h-4 w-px bg-white/10 mx-1" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-300 flex items-center gap-1.5">
                  <Lock className="w-3 h-3 text-cyan-400" />
                  FÁBRICA DE MINIAPPS VERSE · ENTORNO DE ESTRUCTURACIÓN
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono text-cyan-400/90 bg-cyan-950/60 border border-cyan-500/30 px-2.5 py-1 rounded-md">
                  VISTA PREVIA DE ALUMNO
                </span>
              </div>
            </div>

            {/* Stepper Tabs (Visually Selectable) */}
            <div className="bg-[#060a14] px-4 py-3 border-b border-white/5 overflow-x-auto scrollbar-none">
              <div className="flex items-center gap-2 min-w-max">
                {toolSteps.map((st) => {
                  const isActive = activeStepTab === st.num;
                  return (
                    <button
                      key={st.num}
                      onClick={() => setActiveStepTab(st.num)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                        isActive
                          ? 'bg-blue-600 text-white font-bold shadow-md shadow-blue-600/40 ring-1 ring-cyan-400/50'
                          : 'bg-black/40 text-slate-400 hover:text-slate-200 border border-white/5'
                      }`}
                    >
                      <span className="w-4 h-4 rounded-full flex items-center justify-center text-[10px] bg-black/40">
                        {st.num}
                      </span>
                      <span>{st.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Workspace Area */}
            <div className="p-6 sm:p-8 min-h-[420px] flex flex-col justify-between">
              
              {/* 1. NICHOS / MERCADOS */}
              {activeStepTab === 1 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 block mb-1">
                      ETAPA 1 DE 8
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                      1. NICHOS / MERCADOS
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1">
                      Exploración inicial de mercados y nichos con alta intención de búsqueda e insatisfacción con soluciones tradicionales.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                    {[
                      { name: 'Finanzas & Emprendimiento', desc: 'Presupuestos, rentabilidad, cotizaciones e inversiones.', selected: true },
                      { name: 'Salud, Nutrición & Fitness', desc: 'Déficit calórico, rutinas, pérdida de peso y hábitos.', selected: false },
                      { name: 'Negocios Locales & Servicios', desc: 'Barberías, talleres, reformas y comercios de barrio.', selected: false },
                      { name: 'Educación & Oposiciones', desc: 'Oposiciones, baremos, técnicas de estudio y memorización.', selected: false },
                      { name: 'Belleza, Skincare & Estética', desc: 'Diagnóstico de piel, cosmética y rutinas de cuidado.', selected: false },
                      { name: 'Artesanía, Hogar & DIY', desc: 'Macramé, resina epoxi, costura y reformas del hogar.', selected: false },
                    ].map((n) => (
                      <div
                        key={n.name}
                        onClick={handleInteractiveTrigger}
                        className={`p-4 rounded-2xl border transition-all cursor-pointer text-left ${
                          n.selected
                            ? 'bg-blue-950/70 border-blue-500 ring-2 ring-blue-500/40 shadow-lg shadow-blue-900/30'
                            : 'bg-black/30 border-white/10 hover:border-blue-500/40 hover:bg-slate-900/40'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <h4 className="text-sm font-bold text-white">
                            {n.name}
                          </h4>
                          {n.selected ? (
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-500 text-white font-bold">
                              ACTIVO
                            </span>
                          ) : (
                            <span className="w-2 h-2 rounded-full bg-slate-600" />
                          )}
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {n.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="p-3.5 rounded-xl bg-blue-950/30 border border-blue-500/30 flex items-center justify-between text-xs">
                    <span className="text-cyan-200">
                      💡 <strong>Mapeo de mercado:</strong> Explora oportunidades sin partir de una hoja en blanco.
                    </span>
                    <button
                      onClick={() => setActiveStepTab(2)}
                      className="text-cyan-400 font-bold hover:underline cursor-pointer flex items-center gap-1"
                    >
                      <span>Ver siguiente paso</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {/* 2. DESEOS HUMANOS PRIMARIOS */}
              {activeStepTab === 2 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 block mb-1">
                      ETAPA 2 DE 8
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                      2. DESEOS HUMANOS PRIMARIOS
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1">
                      Mapeo de las cuatro fuerzas motivacionales universales que impulsan la decisión de uso:
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      {
                        title: 'Dinero y Libertad',
                        desc: 'Generación de ingresos, ahorro recurrente, autonomía de horarios y seguridad financiera.',
                        active: true,
                      },
                      {
                        title: 'Salud y Apariencia',
                        desc: 'Energía corporal, pérdida de grasa, vitalidad física y apariencia estética saludable.',
                        active: false,
                      },
                      {
                        title: 'Relaciones',
                        desc: 'Vínculo de pareja, amistades, conexión social y respeto interpersonal en su entorno.',
                        active: false,
                      },
                      {
                        title: 'Autoestima e Identidad',
                        desc: 'Seguridad en uno mismo, paz mental, pertenencia comunitaria y autovaloración.',
                        active: false,
                      },
                    ].map((d) => (
                      <div
                        key={d.title}
                        onClick={handleInteractiveTrigger}
                        className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                          d.active
                            ? 'bg-blue-950/70 border-blue-500 ring-2 ring-blue-500/40 shadow-lg shadow-blue-900/30'
                            : 'bg-black/30 border-white/10 hover:border-blue-500/40 hover:bg-slate-900/40'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-base font-bold text-white font-display">
                            {d.title}
                          </h4>
                          <span
                            className={`text-[11px] font-mono px-2 py-0.5 rounded ${
                              d.active
                                ? 'bg-blue-500 text-white font-bold'
                                : 'bg-black/50 text-slate-400'
                            }`}
                          >
                            {d.active ? 'Seleccionado en Demo' : 'Explorar'}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                          {d.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="p-3.5 rounded-xl bg-blue-950/30 border border-blue-500/30 flex items-center justify-between text-xs">
                    <span className="text-cyan-200">
                      🎯 Mapeado con <strong>Dinero y Libertad</strong>
                    </span>
                    <button
                      onClick={() => setActiveStepTab(3)}
                      className="text-cyan-400 font-bold hover:underline cursor-pointer flex items-center gap-1"
                    >
                      <span>Ver siguiente paso</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {/* 3. MERCADOS EMOCIONALMENTE FUERTES */}
              {activeStepTab === 3 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 block mb-1">
                      ETAPA 3 DE 8
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                      3. MERCADOS EMOCIONALMENTE FUERTES
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1">
                      Espacios de alta fricción emocional donde el usuario busca alivio o claridad inmediata:
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      {
                        title: 'Ansiedad y Dolor Emocional',
                        desc: 'Reducción de incertidumbre, calma mental, superación de dudas y estrés cotidiano.',
                        active: false,
                      },
                      {
                        title: 'Sexualidad y Deseo',
                        desc: 'Confianza íntima, atracción, comunicación honesta y bienestar de pareja.',
                        active: false,
                      },
                      {
                        title: 'Estatus y Reconocimiento',
                        desc: 'Autoridad, respeto profesional, reputación y validación frente a pares.',
                        active: true,
                      },
                      {
                        title: 'Espiritualidad y Propósito',
                        desc: 'Sentido vital, coherencia de valores y trascendencia personal.',
                        active: false,
                      },
                    ].map((m) => (
                      <div
                        key={m.title}
                        onClick={handleInteractiveTrigger}
                        className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                          m.active
                            ? 'bg-blue-950/70 border-blue-500 ring-2 ring-blue-500/40 shadow-lg shadow-blue-900/30'
                            : 'bg-black/30 border-white/10 hover:border-blue-500/40 hover:bg-slate-900/40'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-base font-bold text-white font-display">
                            {m.title}
                          </h4>
                          <span
                            className={`text-[11px] font-mono px-2 py-0.5 rounded ${
                              m.active
                                ? 'bg-blue-500 text-white font-bold'
                                : 'bg-black/50 text-slate-400'
                            }`}
                          >
                            {m.active ? 'Seleccionado en Demo' : 'Explorar'}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                          {m.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="p-3.5 rounded-xl bg-blue-950/30 border border-blue-500/30 flex items-center justify-between text-xs">
                    <span className="text-cyan-200">
                      ⚡ Motor activo: <strong>Estatus y Reconocimiento</strong>
                    </span>
                    <button
                      onClick={() => setActiveStepTab(4)}
                      className="text-cyan-400 font-bold hover:underline cursor-pointer flex items-center gap-1"
                    >
                      <span>Ver siguiente paso</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {/* 4. MERCADOS DE TRANSFORMACIÓN */}
              {activeStepTab === 4 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 block mb-1">
                      ETAPA 4 DE 8
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                      4. MERCADOS DE TRANSFORMACIÓN
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1">
                      Sectores enfocados en resultados profesionales, monetización, habilidades y optimización:
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      {
                        title: 'Marketing y Negocios',
                        desc: 'Adquisición de clientes, embudos de venta, cotizaciones y conversión.',
                        active: true,
                      },
                      {
                        title: 'IA y Productividad',
                        desc: 'Herramientas de IA, flujos de trabajo inteligentes y ahorro de horas.',
                        active: false,
                      },
                      {
                        title: 'Educación y Habilidades',
                        desc: 'Aprendizaje de competencias de alta demanda y actualización continua.',
                        active: false,
                      },
                      {
                        title: 'Carrera y Profesión',
                        desc: 'Ascensos, entrevistas de empleo, cambio de sector y networking.',
                        active: false,
                      },
                    ].map((t) => (
                      <div
                        key={t.title}
                        onClick={handleInteractiveTrigger}
                        className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                          t.active
                            ? 'bg-blue-950/70 border-blue-500 ring-2 ring-blue-500/40 shadow-lg shadow-blue-900/30'
                            : 'bg-black/30 border-white/10 hover:border-blue-500/40 hover:bg-slate-900/40'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-base font-bold text-white font-display">
                            {t.title}
                          </h4>
                          <span
                            className={`text-[11px] font-mono px-2 py-0.5 rounded ${
                              t.active
                                ? 'bg-blue-500 text-white font-bold'
                                : 'bg-black/50 text-slate-400'
                            }`}
                          >
                            {t.active ? 'Seleccionado en Demo' : 'Explorar'}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                          {t.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="p-3.5 rounded-xl bg-blue-950/30 border border-blue-500/30 flex items-center justify-between text-xs">
                    <span className="text-cyan-200">
                      🚀 Eje de transformación: <strong>Marketing y Negocios</strong>
                    </span>
                    <button
                      onClick={() => setActiveStepTab(5)}
                      className="text-cyan-400 font-bold hover:underline cursor-pointer flex items-center gap-1"
                    >
                      <span>Ver siguiente paso</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {/* 5. LIFESTYLE & PASIONES */}
              {activeStepTab === 5 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 block mb-1">
                      ETAPA 5 DE 8
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                      5. LIFESTYLE & PASIONES
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1">
                      Intereses cotidianos y pasiones con comunidades dedicadas y alta recurrencia de uso:
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      {
                        title: 'Belleza y Estética',
                        desc: 'Skincare facial, maquillaje, estilo de vestimenta y rutinas corporales.',
                        active: false,
                      },
                      {
                        title: 'Casa y Rutina',
                        desc: 'Organización de espacios, limpieza por zonas, recetas prácticas y reformas.',
                        active: true,
                      },
                      {
                        title: 'Hobbies y Comunidades',
                        desc: 'Artesanía, fotografía, música, coleccionismo, plantas y bricolaje.',
                        active: false,
                      },
                      {
                        title: 'Maternidad y Familia',
                        desc: 'Crianza respetuosa, alimentación infantil y equilibrio hogareño.',
                        active: false,
                      },
                    ].map((l) => (
                      <div
                        key={l.title}
                        onClick={handleInteractiveTrigger}
                        className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                          l.active
                            ? 'bg-blue-950/70 border-blue-500 ring-2 ring-blue-500/40 shadow-lg shadow-blue-900/30'
                            : 'bg-black/30 border-white/10 hover:border-blue-500/40 hover:bg-slate-900/40'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-base font-bold text-white font-display">
                            {l.title}
                          </h4>
                          <span
                            className={`text-[11px] font-mono px-2 py-0.5 rounded ${
                              l.active
                                ? 'bg-blue-500 text-white font-bold'
                                : 'bg-black/50 text-slate-400'
                            }`}
                          >
                            {l.active ? 'Seleccionado en Demo' : 'Explorar'}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                          {l.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="p-3.5 rounded-xl bg-blue-950/30 border border-blue-500/30 flex items-center justify-between text-xs">
                    <span className="text-cyan-200">
                      🏡 Vertical activa: <strong>Casa y Rutina</strong>
                    </span>
                    <button
                      onClick={() => setActiveStepTab(6)}
                      className="text-cyan-400 font-bold hover:underline cursor-pointer flex items-center gap-1"
                    >
                      <span>Ver siguiente paso</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {/* 6. CLIENTE IDEAL */}
              {activeStepTab === 6 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 block mb-1">
                      ETAPA 6 DE 8
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                      6. CLIENTE IDEAL
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1">
                      Definición estructurada de para quién se construye la MiniApp y qué dolor específico resuelve:
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="p-5 rounded-2xl bg-black/40 border border-blue-500/30">
                      <span className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider block mb-2">
                        Perfil del Usuario Simulado:
                      </span>
                      <div className="p-3.5 rounded-xl bg-[#0b1222] border border-white/10 text-white text-xs sm:text-sm">
                        "Emprendedores y profesionales independientes que pierden horas calculando costos manuales y cotizaciones desactualizadas."
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="p-3.5 rounded-xl bg-[#060a14] border border-white/5">
                        <span className="text-[11px] font-mono text-cyan-400 block mb-1">Fricción Principal</span>
                        <p className="text-xs text-slate-300">Cálculos manuales en Excel o papel</p>
                      </div>
                      <div className="p-3.5 rounded-xl bg-[#060a14] border border-white/5">
                        <span className="text-[11px] font-mono text-emerald-400 block mb-1">Urgencia</span>
                        <p className="text-xs text-slate-300">Respuesta inmediata en &lt; 2 minutos</p>
                      </div>
                      <div className="p-3.5 rounded-xl bg-[#060a14] border border-white/5">
                        <span className="text-[11px] font-mono text-blue-400 block mb-1">Disposición de Pago</span>
                        <p className="text-xs text-slate-300">Alta disposición si ahorra tiempo</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-blue-950/30 border border-blue-500/30 flex items-center justify-between text-xs">
                    <span className="text-cyan-200">
                      👤 Audiencia definida con precisión
                    </span>
                    <button
                      onClick={() => setActiveStepTab(7)}
                      className="text-cyan-400 font-bold hover:underline cursor-pointer flex items-center gap-1"
                    >
                      <span>Ver siguiente paso</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {/* 7. OFERTA DEL PRODUCTO */}
              {activeStepTab === 7 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 block mb-1">
                      ETAPA 7 DE 8
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                      7. OFERTA DEL PRODUCTO
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1">
                      Estructuración de la propuesta de valor interactiva para convertir visitantes en usuarios:
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="p-5 rounded-2xl bg-black/40 border border-blue-500/30">
                      <span className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider block mb-2">
                        Concepto de MiniApp Estructurado:
                      </span>
                      <div className="p-3.5 rounded-xl bg-[#0b1222] border border-white/10 text-white text-xs sm:text-sm">
                        "Calculadora de Rentabilidad Express & Diagnóstico de Costos Ocultos con Hoja de Ruta Personalizada."
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div className="p-4 rounded-xl bg-[#060a14] border border-white/5">
                        <span className="text-xs font-bold text-cyan-300 block mb-1">Mecanismo Único</span>
                        <p className="text-xs text-slate-300">Algoritmo interactivo de 4 variables sin registro obligatorio.</p>
                      </div>
                      <div className="p-4 rounded-xl bg-[#060a14] border border-white/5">
                        <span className="text-xs font-bold text-emerald-300 block mb-1">Resultado de Alto Valor</span>
                        <p className="text-xs text-slate-300">Reporte visual con semáforo de rentabilidad y recomendaciones.</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-blue-950/30 border border-blue-500/30 flex items-center justify-between text-xs">
                    <span className="text-cyan-200">
                      📦 Oferta interactiva paquetizada
                    </span>
                    <button
                      onClick={() => setActiveStepTab(8)}
                      className="text-cyan-400 font-bold hover:underline cursor-pointer flex items-center gap-1"
                    >
                      <span>Ver resultado final</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {/* 8. RADIOGRAFÍA DEL MERCADO (PROTEGIDA) */}
              {activeStepTab === 8 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 block mb-1">
                      ETAPA 8 DE 8 · RESULTADO FINAL
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                      8. RADIOGRAFÍA DEL MERCADO
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1">
                      La herramienta sintetiza las 7 etapas anteriores y genera la radiografía completa junto al prompt de creación listo para la IA.
                    </p>
                  </div>

                  {/* Resumen Visual de la Radiografía */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-4 rounded-2xl bg-black/40 border border-white/10">
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 uppercase">Nicho:</span>
                      <p className="text-xs font-bold text-white truncate">Finanzas & Negocios</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 uppercase">Deseo:</span>
                      <p className="text-xs font-bold text-white truncate">Dinero y Libertad</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 uppercase">Motor:</span>
                      <p className="text-xs font-bold text-white truncate">Estatus y Respeto</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 uppercase">Formato:</span>
                      <p className="text-xs font-bold text-white truncate">Calculadora Express</p>
                    </div>
                  </div>

                  {/* Prompt Output Visualmente Protegido */}
                  <div className="relative rounded-2xl overflow-hidden border border-blue-500/40 bg-black/80 p-5">
                    {/* Blurred Content */}
                    <div className="filter blur-sm select-none pointer-events-none opacity-40 font-mono text-xs text-slate-300 space-y-2">
                      <p>Actúa como arquitecto de software de MiniApps y estratega de negocios en Fábrica de MiniApps Verse.</p>
                      <p>Analiza la siguiente configuración de mercado: Finanzas & Emprendimiento | Dinero y Libertad | Estatus...</p>
                      <p>1. Estructura la arquitectura de componentes React con estados reactivos...</p>
                      <p>2. Define la lógica algorítmica de cálculo interactivo en tiempo real...</p>
                      <p>3. Diseña la pantalla de salida con recomendaciones visuales de alto impacto...</p>
                    </div>

                    {/* Lock Overlay */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-gradient-to-t from-[#090f20]/95 via-[#090f20]/80 to-[#090f20]/60 text-center">
                      <div className="w-12 h-12 rounded-2xl bg-blue-500/20 border border-blue-500/40 text-cyan-300 flex items-center justify-center mb-3">
                        <Lock className="w-6 h-6 text-cyan-400" />
                      </div>

                      <h4 className="text-base sm:text-lg font-bold text-white font-display mb-1">
                        Prompt Completo & Radiografía Protegidos
                      </h4>

                      <p className="text-xs text-slate-300 max-w-md mb-4 leading-relaxed">
                        La herramienta completa y sus generadores de prompts están disponibles exclusivamente para alumnos de <strong>FÁBRICA DE MINIAPPS VERSE</strong>.
                      </p>

                      <button
                        onClick={handleCheckout}
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-black text-xs sm:text-sm shadow-lg shadow-blue-500/25 transition-all cursor-pointer"
                      >
                        <span>QUIERO ACCEDER A LA FÁBRICA 🚀</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Botones de navegación estética entre etapas */}
              <div className="flex items-center justify-between gap-3 pt-6 border-t border-white/10 mt-6">
                <button
                  onClick={() => setActiveStepTab((p) => Math.max(1, p - 1))}
                  disabled={activeStepTab === 1}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-colors ${
                    activeStepTab === 1
                      ? 'text-slate-600 bg-slate-900/30 border border-white/5 cursor-not-allowed'
                      : 'text-slate-300 bg-slate-800 hover:bg-slate-700 hover:text-white border border-slate-700 cursor-pointer'
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Anterior</span>
                </button>

                <div className="hidden sm:flex items-center gap-1.5">
                  {toolSteps.map((s) => (
                    <div
                      key={s.num}
                      className={`h-1.5 rounded-full transition-all ${
                        activeStepTab === s.num
                          ? 'w-6 bg-cyan-400'
                          : activeStepTab > s.num
                          ? 'w-2 bg-blue-500'
                          : 'w-2 bg-slate-700'
                      }`}
                    />
                  ))}
                </div>

                {activeStepTab === 8 ? (
                  <button
                    onClick={() => setActiveStepTab(1)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-all cursor-pointer"
                  >
                    <span>Ver desde el inicio</span>
                  </button>
                ) : (
                  <button
                    onClick={() => setActiveStepTab((p) => Math.min(8, p + 1))}
                    className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-all cursor-pointer shadow-md shadow-blue-600/30"
                  >
                    <span>Siguiente Etapa</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            MODO 2: CAPTURAS DE LA INTERFAZ REAL
            ======================================================== */}
        {viewMode === 'screenshots' && (
          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-3xl p-3 bg-gradient-to-b from-blue-500/20 via-slate-800 to-transparent border border-blue-500/30 shadow-2xl">
              <div className="relative rounded-2xl overflow-hidden bg-[#070b16] aspect-[16/9] border border-white/10">
                <img
                  src={galleryScreenshots[galleryIndex].src}
                  alt={galleryScreenshots[galleryIndex].title}
                  className="w-full h-full object-cover"
                />

                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#04060d] via-[#04060d]/85 to-transparent p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-white font-display">
                      {galleryScreenshots[galleryIndex].title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300">
                      {galleryScreenshots[galleryIndex].description}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-cyan-400 shrink-0">
                    {galleryIndex + 1} de {galleryScreenshots.length}
                  </span>
                </div>

                <button
                  onClick={() =>
                    setGalleryIndex((prev) =>
                      prev > 0 ? prev - 1 : galleryScreenshots.length - 1
                    )
                  }
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/70 hover:bg-black/90 text-white border border-white/15 transition-all cursor-pointer"
                  aria-label="Captura anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={() =>
                    setGalleryIndex((prev) =>
                      prev < galleryScreenshots.length - 1 ? prev + 1 : 0
                    )
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/70 hover:bg-black/90 text-white border border-white/15 transition-all cursor-pointer"
                  aria-label="Captura siguiente"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-3 gap-3 mt-3">
                {galleryScreenshots.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setGalleryIndex(idx)}
                    className={`relative rounded-xl overflow-hidden aspect-[16/9] border transition-all text-left cursor-pointer ${
                      galleryIndex === idx
                        ? 'border-blue-400 ring-2 ring-blue-500/40 opacity-100'
                        : 'border-white/10 opacity-60 hover:opacity-90'
                    }`}
                  >
                    <img src={item.src} alt={item.title} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            CTA PRINCIPAL DE LA HERRAMIENTA
            ======================================================== */}
        <div className="mt-14 text-center">
          <button
            onClick={handleCheckout}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 sm:px-10 sm:py-5 rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 hover:from-blue-500 hover:via-cyan-400 hover:to-teal-300 text-slate-950 font-black text-base sm:text-lg shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-400/50 hover:scale-[1.02] transition-all cursor-pointer"
          >
            <span>QUIERO ACCEDER A LA FÁBRICA 🚀</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          <p className="text-xs text-slate-400 mt-3 font-mono">
            Acceso inmediato a la herramienta completa al unirte al programa · Garantía de 7 días
          </p>
        </div>

        {/* Modal de Herramienta Protegida al interactuar */}
        {showToolModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
            onClick={() => setShowToolModal(false)}
          >
            <div
              className="relative w-full max-w-md bg-[#090f1e] border border-blue-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-blue-950/80 text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowToolModal(false)}
                className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                title="Cerrar ventana"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/40 text-cyan-300 flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-cyan-400" />
              </div>

              <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase block mb-1">
                🔒 Herramienta Exclusiva para Alumnos
              </span>

              <h3 className="text-xl sm:text-2xl font-black text-white font-display mb-3">
                Fábrica de MiniApps Verse
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                La herramienta completa está disponible dentro de <strong>FÁBRICA DE MINIAPPS VERSE</strong>. Esta demostración te enseña cómo estructurarás tus ideas una vez dentro de la plataforma de alumnos.
              </p>

              <div className="p-3.5 rounded-xl bg-black/50 border border-white/10 mb-6 text-left space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Exploración completa de los 8 pasos sin límites</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Generador de radiografías y prompts para IA</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Biblioteca de 180 MiniApps incluida</span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 text-slate-950 font-black text-sm shadow-lg shadow-cyan-500/25 transition-all cursor-pointer"
              >
                <span>QUIERO ACCEDER A LA FÁBRICA 🚀</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setShowToolModal(false)}
                className="mt-3 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                Continuar viendo la demostración
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
