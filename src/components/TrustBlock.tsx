import React from 'react';
import { Laptop, Route, Wrench, FolderGit2, Headphones } from 'lucide-react';

export const TrustBlock: React.FC = () => {
  const trustItems = [
    {
      icon: Laptop,
      title: 'Acceso Digital Inmediato',
      description: 'Accede a la plataforma formativa y a tus herramientas desde cualquier dispositivo con conexión a internet.',
    },
    {
      icon: Route,
      title: 'Formación Paso a Paso',
      description: 'Metodología estructurada en 5 módulos claros sin saltos conceptuales ni tecnicismos innecesarios.',
    },
    {
      icon: Wrench,
      title: 'Herramientas Integradas',
      description: 'Acceso a la Fábrica de MiniApps Verse y al Agente Verse diseñados para guiar tu ideación y estructura.',
    },
    {
      icon: FolderGit2,
      title: 'Recursos & Prompts',
      description: 'Material complementario, biblioteca de referencia de 180 MiniApps y aceleradores de implementación.',
    },
    {
      icon: Headphones,
      title: 'Soporte y Contacto',
      description: 'Canal de comunicación abierto para resolver dudas sobre el programa y la plataforma.',
    },
  ];

  return (
    <section className="py-16 relative bg-[#060a14] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-cyan-500/20 transition-colors text-center sm:text-left flex flex-col items-center sm:items-start"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white font-display mb-1.5">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
