import React from 'react';
import { Compass, BookOpen, Wrench, Sparkles, Bot, Globe, Megaphone } from 'lucide-react';

export const ProductPresentationSection: React.FC = () => {
  const pillars = [
    {
      title: 'Método MAP',
      icon: Compass,
      desc: 'El marco paso a paso para pasar de la idea a la MiniApp en internet con orden y claridad.',
    },
    {
      title: 'Formación',
      icon: BookOpen,
      desc: 'Lecciones directas al grano, sin rodeos teóricos, enfocadas en la ejecución real.',
    },
    {
      title: 'Herramientas',
      icon: Wrench,
      desc: 'Soporte interactivo para estructurar tus mercados, clientes ideales y ofertas sin bloquearte.',
    },
    {
      title: 'Recursos',
      icon: Sparkles,
      desc: 'Esquemas de interacción, prompts refinados y guías prácticas para acelerar tu proceso.',
    },
    {
      title: 'Agente Verse',
      icon: Bot,
      desc: 'Tu copiloto especializado para analizar propuestas de valor y ordenar tus ideas de producto.',
    },
    {
      title: 'Publicación',
      icon: Globe,
      desc: 'Guía clara para poner tu MiniApp en internet de forma accesible y adaptable a cualquier dispositivo.',
    },
    {
      title: 'Atracción',
      icon: Megaphone,
      desc: 'Estrategias de comunicación para presentar tu MiniApp de forma atractiva y captar interesados.',
    },
  ];

  return (
    <section className="py-20 md:py-28 relative bg-[#060a14] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <span>El Ecosistema Completo</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display mb-4 tracking-tight">
            TE PRESENTAMOS FÁBRICA DE MINIAPPS VERSE
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Un sistema práctico para aprender a crear, estructurar, publicar y atraer personas hacia tus MiniApps.
          </p>
        </div>

        {/* 7 Core Pillar Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`p-6 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 ${
                  idx === 6 ? 'sm:col-span-2 lg:col-span-3 xl:col-span-1' : ''
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white font-display mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
