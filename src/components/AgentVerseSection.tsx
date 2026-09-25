import React, { useState } from 'react';
import { Search, Lightbulb, Puzzle, Bot, ShieldCheck } from 'lucide-react';
import agenteImgAsset from '../assets/images/agente_verse_1790332126500.jpg';

export const AgentVerseSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const capabilities = [
    {
      id: 'analizar-ofertas',
      title: 'ANALIZAR OFERTAS',
      icon: Search,
      badge: 'Auditoría Conceptual',
      summary: 'Te ayuda a analizar la propuesta de valor y elementos de tracción.',
      bullets: [
        'Te ayuda a examinar la claridad y relevancia de la promesa.',
        'Te ayuda a detectar posibles dudas u objeciones del usuario.',
        'Te ayuda a evaluar la estructura de precios y beneficios.',
      ],
      sampleOutput:
        '"Análisis de oferta: La propuesta actual es clara en su resultado en 3 minutos. Sugerencia: refuerza la especificidad del entregable final para elevar el valor percibido del diagnóstico."',
    },
    {
      id: 'encontrar-oportunidades',
      title: 'ENCONTRAR OPORTUNIDADES',
      icon: Lightbulb,
      badge: 'Exploración de Mercado',
      summary: 'Te ayuda a identificar oportunidades y espacios desatendidos.',
      bullets: [
        'Te ayuda a explorar vacíos de interactividad en tu nicho.',
        'Te ayuda a identificar preguntas frecuentes que pueden convertirse en calculadoras.',
        'Te ayuda a detectar servicios repetitivos que se pueden sistematizar.',
      ],
      sampleOutput:
        '"Oportunidad detectada: En el nicho de entrenamiento físico, la mayoría comparte hojas de cálculo estáticas; una MiniApp interactiva de distribución de macronutrientes aumentará drásticamente el engagement."',
    },
    {
      id: 'estructurar-ideas',
      title: 'ESTRUCTURAR IDEAS',
      icon: Puzzle,
      badge: 'Arquitectura de Experiencia',
      summary: 'Te ayuda a estructurar el flujo paso a paso de tu MiniApp.',
      bullets: [
        'Te ayuda a diseñar el orden lógico de las preguntas o inputs.',
        'Te ayuda a definir qué fórmula o razonamiento de IA debe aplicarse.',
        'Te ayuda a estructurar el mensaje de entrega y recomendaciones finales.',
      ],
      sampleOutput:
        '"Estructura sugerida: Paso 1 (Meta de ahorro) → Paso 2 (Ingresos actuales) → Paso 3 (Gastos fijos) → Salida interactiva (Índice de libertad y 3 recomendaciones prioritarias)."',
    },
  ];

  return (
    <section id="agente-verse" className="py-20 md:py-28 relative bg-[#060a14] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Bot className="w-3.5 h-3.5" />
            <span>Inteligencia Acompañante</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display mb-4">
            CONOCE AL AGENTE VERSE
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Tu agente especializado para analizar oportunidades y estructurar ofertas.
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          {/* Visual Hologram Core Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm rounded-3xl p-3 bg-gradient-to-b from-cyan-500/30 via-violet-500/20 to-transparent border border-cyan-500/40 shadow-2xl shadow-cyan-950/60">
              <div className="relative rounded-2xl overflow-hidden aspect-square bg-[#070b16] border border-white/10">
                <img
                  src={agenteImgAsset}
                  alt="Agente Verse Core Emblem"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060a14] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <span className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-widest block mb-1">
                    AGENTE VERSE
                  </span>
                  <p className="text-xs text-slate-300">
                    Diseñado para asistir, enfocar y acelerar tu proceso creativo.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Capabilities Selector & Detail */}
          <div className="lg:col-span-7 space-y-6">
            {/* 3 Function Tabs */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {capabilities.map((cap, idx) => {
                const Icon = cap.icon;
                const isSelected = activeTab === idx;
                return (
                  <button
                    key={cap.id}
                    onClick={() => setActiveTab(idx)}
                    className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'bg-slate-900 border-cyan-400 shadow-lg shadow-cyan-950/50'
                        : 'bg-slate-900/40 hover:bg-slate-900/70 border-white/10'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className={`p-2 rounded-xl ${isSelected ? 'bg-cyan-500/20 text-cyan-400' : 'bg-black/40 text-slate-400'}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 uppercase">
                        0{idx + 1}
                      </span>
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-white font-display leading-tight">
                      {cap.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Tab Detail Display */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#090f20] border border-cyan-500/30 shadow-xl space-y-5 animate-in fade-in duration-200">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  {capabilities[activeTab].badge}
                </span>
                <span className="text-xs text-slate-400 font-mono">Modo de consulta</span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-display mb-2">
                  {capabilities[activeTab].title}
                </h3>
                <p className="text-sm sm:text-base text-cyan-200 font-medium">
                  {capabilities[activeTab].summary}
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-white/10">
                {capabilities[activeTab].bullets.map((b, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                    <span className="text-cyan-400 mt-1">✦</span>
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              {/* Sample output simulation */}
              <div className="p-4 rounded-xl bg-black/50 border border-cyan-500/20 font-mono text-xs text-slate-300 leading-relaxed">
                <span className="text-cyan-400 font-semibold block mb-1">
                  Ejemplo de análisis con el Agente:
                </span>
                {capabilities[activeTab].sampleOutput}
              </div>
            </div>

            {/* Realistic Transparency Notice */}
            <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-900/60 border border-white/10 text-xs text-slate-400 leading-relaxed">
              <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <p>
                <strong className="text-slate-300">Enfoque profesional:</strong> El Agente Verse es un asistente de análisis y estructuración. No hace promesas de ventas ni garantiza resultados mágicos; te ayuda a analizar, te ayuda a identificar y te ayuda a estructurar con criterio lógico.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
