import React from 'react';

// Sections & Components
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BeginnersSection } from './components/BeginnersSection';
import { QuizSection } from './components/QuizSection';
import { ProblemSection } from './components/ProblemSection';
import { MapMethodSection } from './components/MapMethodSection';
import { NichesSection } from './components/NichesSection';
import { CalculatorSection } from './components/CalculatorSection';
import { ProductPresentationSection } from './components/ProductPresentationSection';
import { ToolSection } from './components/ToolSection';
import { AgentVerseSection } from './components/AgentVerseSection';
import { TransformationSection } from './components/TransformationSection';
import { ModulesSection } from './components/ModulesSection';
import { BonusesSection } from './components/BonusesSection';
import { LibrarySection } from './components/LibrarySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { RobotCtaSection } from './components/RobotCtaSection';
import { OfferSection } from './components/OfferSection';
import { WhatsAppSection } from './components/WhatsAppSection';
import { TrustBlock } from './components/TrustBlock';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { MobileStickyBar } from './components/MobileStickyBar';

export default function App() {
  return (
    <div className="min-h-screen bg-[#04060d] text-[#e2e8f0] relative overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200 pb-20 md:pb-0">
      {/* Subtle Background Grid Pattern */}
      <div
        className="fixed inset-0 pointer-events-none opacity-20 z-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px]"
        aria-hidden="true"
      />

      <div className="relative z-10">
        {/* Navigation */}
        <Navbar />

        {/* 1. Hero Principal */}
        <Hero />

        {/* 2. Sección para Principiantes */}
        <BeginnersSection />

        {/* 3. Quiz Interactivo & Resultado Personalizado */}
        <QuizSection />

        {/* 4. Sección del Problema */}
        <ProblemSection />

        {/* 5. Método MAP */}
        <MapMethodSection />

        {/* 6. ¿Qué Puedes Crear? (Nichos) */}
        <NichesSection />

        {/* 7. Calculadora Interactiva */}
        <CalculatorSection />

        {/* 8. Presentación del Producto */}
        <ProductPresentationSection />

        {/* 9. Herramienta Fábrica de MiniApps Verse */}
        <ToolSection />

        {/* 10. Agente Verse */}
        <AgentVerseSection />

        {/* 11. Transformación */}
        <TransformationSection />

        {/* 12. Los 5 Módulos */}
        <ModulesSection />

        {/* 13. Bonos */}
        <BonusesSection />

        {/* 14. Biblioteca de 180 MiniApps */}
        <LibrarySection />

        {/* 15. Testimonios */}
        <TestimonialsSection />

        {/* Bloque Visual Robot CTA de Conversión */}
        <RobotCtaSection />

        {/* 16. Oferta + Contador Real */}
        <OfferSection />

        {/* 17. Sección WhatsApp ("¿TIENES DUDAS ANTES DE CREAR TU PRIMERA MINIAPP?") */}
        <WhatsAppSection />

        {/* 18. Bloque de Confianza */}
        <TrustBlock />

        {/* 19. FAQ Acordeón */}
        <FaqSection />

        {/* 20. CTA Final */}
        <FinalCtaSection />

        {/* Mobile Sticky Bar */}
        <MobileStickyBar />
      </div>
    </div>
  );
}
