import React, { useState, useEffect, useRef, useCallback } from 'react';
import { handleCheckout } from '../data/defaults';
import robotImage from '../assets/images/verse_robot_guide_1790342617555.jpg';
import { Sparkles, ArrowRight, ShieldCheck, Zap, MessageCircle } from 'lucide-react';

/* ==================================================
   CONFIGURACIÓN WHATSAPP (Fácil de modificar)
   ================================================== */
export const WHATSAPP_NUMBER = '56932051719';
export const WHATSAPP_DEFAULT_MESSAGE = 'Hola, tengo dudas sobre cómo crear mi MiniApp y me gustaría hablar con el equipo.';
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_DEFAULT_MESSAGE)}`;

export const RobotCtaSection: React.FC = () => {
  // Estado para seguimiento de cursor / touch (valores normalizados -1 a 1)
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isInteracting, setIsInteracting] = useState<boolean>(false);
  const [isHoveringMainCta, setIsHoveringMainCta] = useState<boolean>(false);
  const [isHoveringWhatsAppCta, setIsHoveringWhatsAppCta] = useState<boolean>(false);
  const [buttonPulse, setButtonPulse] = useState<boolean>(false);

  // Globo de diálogo del robot (Mensaje dinámico)
  const [dialogVisible, setDialogVisible] = useState<boolean>(false);
  const [dialogText, setDialogText] = useState<string>('¿Necesitas ayuda? 👋');
  const dialogTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dialogPhaseRef = useRef<NodeJS.Timeout | null>(null);

  // Referencias para el contenedor interactivo del robot
  const robotCardRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState<boolean>(false);

  // Disparar mensaje del robot de manera sutil
  const triggerRobotMessage = useCallback(() => {
    if (dialogTimeoutRef.current) clearTimeout(dialogTimeoutRef.current);
    if (dialogPhaseRef.current) clearTimeout(dialogPhaseRef.current);

    setDialogText('¿Necesitas ayuda? 👋');
    setDialogVisible(true);

    // Fase 2: después de 2 segundos cambia a "Nuestro equipo está aquí para ayudarte."
    dialogPhaseRef.current = setTimeout(() => {
      setDialogText('Nuestro equipo está aquí para ayudarte.');
    }, 2200);

    // Ocultar suavemente después de 5.5 segundos
    dialogTimeoutRef.current = setTimeout(() => {
      setDialogVisible(false);
    }, 5500);
  }, []);

  // Intersection Observer para detectar entrada en pantalla
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            // Saludo sutil al entrar en pantalla la primera vez
            const timer = setTimeout(() => {
              triggerRobotMessage();
            }, 1200);
            return () => clearTimeout(timer);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      if (dialogTimeoutRef.current) clearTimeout(dialogTimeoutRef.current);
      if (dialogPhaseRef.current) clearTimeout(dialogPhaseRef.current);
    };
  }, [triggerRobotMessage]);

  // Manejo de movimiento de mouse suave (Parallax 3D suave)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!robotCardRef.current) return;
    const rect = robotCardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1; // -1 to 1
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1; // -1 to 1
    setMousePos({ x, y });
    setIsInteracting(true);
  };

  const handleMouseEnter = () => {
    setIsInteracting(true);
  };

  const handleMouseLeave = () => {
    setIsInteracting(false);
    setMousePos({ x: 0, y: 0 });
  };

  // Manejo táctil para teléfonos móviles
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!robotCardRef.current || e.touches.length === 0) return;
    const touch = e.touches[0];
    const rect = robotCardRef.current.getBoundingClientRect();
    const x = Math.max(-1, Math.min(1, ((touch.clientX - rect.left) / rect.width) * 2 - 1));
    const y = Math.max(-1, Math.min(1, ((touch.clientY - rect.top) / rect.height) * 2 - 1));
    setMousePos({ x, y });
    setIsInteracting(true);
  };

  const handleTouchStart = () => {
    setIsInteracting(true);
    triggerRobotMessage();
  };

  const handleTouchEnd = () => {
    setIsInteracting(false);
    // Vuelve suavemente a la posición de reposo
    setTimeout(() => {
      setMousePos({ x: 0, y: 0 });
    }, 400);
  };

  // Reacción táctil desde botones en móvil
  const handleButtonTouchTrigger = () => {
    setButtonPulse(true);
    setTimeout(() => setButtonPulse(false), 600);
  };

  const openWhatsApp = () => {
    window.open(WHATSAPP_LINK, '_blank', 'noopener,noreferrer');
  };

  // Cálculo de rotaciones y desplazamientos 3D según el estado
  // Si está interactuando con el CTA principal: el robot se inclina sutilmente hacia la derecha (hacia el botón)
  // Si está interactuando con WhatsApp: el robot se inclina hacia abajo-derecha
  let rotateX = 0;
  let rotateY = 0;
  let translateX = 0;
  let translateY = 0;
  let scale = 1;

  if (isHoveringMainCta) {
    // Inclinación dirigida hacia el CTA principal
    rotateY = 8;
    rotateX = -3;
    translateX = 6;
    translateY = -3;
    scale = 1.025;
  } else if (isHoveringWhatsAppCta) {
    // Inclinación hacia el CTA de WhatsApp
    rotateY = 6;
    rotateX = 5;
    translateX = 4;
    translateY = 4;
    scale = 1.02;
  } else if (isInteracting) {
    // Seguimiento natural del cursor o toque (suave y limitado a un rango elegante)
    rotateX = -mousePos.y * 7;
    rotateY = mousePos.x * 9;
    translateX = mousePos.x * 6;
    translateY = mousePos.y * 4;
    scale = 1.02;
  }

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 relative bg-[#050812] border-t border-white/5 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div
        className={`absolute top-1/2 left-1/4 -translate-y-1/2 w-[550px] h-[550px] rounded-full blur-[140px] pointer-events-none transition-all duration-700 ${
          isHoveringWhatsAppCta
            ? 'bg-emerald-500/15'
            : isHoveringMainCta || buttonPulse
            ? 'bg-cyan-400/20'
            : 'bg-cyan-500/10'
        }`}
      />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:28px_28px] opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#0c1427]/90 via-[#070b16]/95 to-[#050811] border border-cyan-500/30 shadow-2xl shadow-cyan-950/50 p-6 sm:p-10 md:p-14 overflow-hidden">
          
          {/* Subtle tech decorative lines */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 via-transparent to-transparent pointer-events-none" />
          <div className="absolute -top-px left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
          <div className="absolute -bottom-px left-1/3 right-1/3 h-[1px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Robot Image Column (Interactivo 3D + Microanimaciones) */}
            <div className="lg:col-span-5 relative flex justify-center order-2 lg:order-1">
              <div
                ref={robotCardRef}
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onClick={triggerRobotMessage}
                className="relative w-full max-w-md sm:max-w-lg lg:max-w-none group cursor-pointer select-none"
                style={{ perspective: '1100px' }}
                title="Toca o interactúa con el Agente Verse"
              >
                
                {/* Glow halo behind the robot que reacciona a los botones */}
                <div
                  className={`absolute inset-0 rounded-3xl blur-2xl transition-all duration-700 pointer-events-none ${
                    isHoveringWhatsAppCta
                      ? 'bg-gradient-to-tr from-emerald-500/30 to-cyan-500/25 scale-105'
                      : isHoveringMainCta || buttonPulse
                      ? 'bg-gradient-to-tr from-cyan-400/35 via-cyan-500/30 to-blue-600/30 scale-105'
                      : 'bg-gradient-to-tr from-cyan-500/25 to-blue-600/20 group-hover:scale-105'
                  }`}
                />

                {/* Pequeño Mensaje / Globo de diálogo contextual del Robot */}
                <div
                  className={`absolute -top-6 sm:-top-8 left-1/2 -translate-x-1/2 z-30 transition-all duration-500 pointer-events-none ${
                    dialogVisible
                      ? 'opacity-100 translate-y-0 scale-100'
                      : 'opacity-0 translate-y-2 scale-95'
                  }`}
                >
                  <div className="bg-slate-950/95 border border-cyan-400/50 shadow-xl shadow-cyan-950/80 rounded-2xl px-4 py-2 text-center text-xs sm:text-sm font-medium text-cyan-200 backdrop-blur-md whitespace-nowrap flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span>{dialogText}</span>
                  </div>
                  {/* Flechita del globo */}
                  <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-cyan-400/50 mx-auto" />
                </div>

                {/* Visual container con microanimación idle + parallax reactivo */}
                <div
                  className="relative rounded-2xl overflow-hidden border border-cyan-400/30 bg-[#080d1a] shadow-xl shadow-cyan-900/40 transition-transform duration-300 ease-out will-change-transform"
                  style={{
                    transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translate3d(${translateX}px, ${translateY}px, 0) scale(${scale})`,
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Imagen del Robot (Exactamente la original con animación idle fluida) */}
                  <div className={inView && !isInteracting ? 'animate-subtle-breathing' : ''}>
                    <img
                      src={robotImage}
                      alt="Agente Inteligente Verse guiando hacia la creación de MiniApps"
                      className="w-full h-auto object-cover object-center transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>

                  {/* Reflejo de luz dinámica que sigue el cursor o touch */}
                  <div
                    className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                    style={{
                      background: isInteracting
                        ? `radial-gradient(circle at ${(mousePos.x + 1) * 50}% ${(mousePos.y + 1) * 50}%, rgba(34, 211, 238, 0.18) 0%, transparent 60%)`
                        : 'none',
                    }}
                  />

                  {/* Gradient overlay for cinematic blending */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070b16] via-transparent to-cyan-500/5 pointer-events-none" />
                  
                  {/* Floating AI status chip interactivo */}
                  <div
                    className={`absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 bg-slate-950/85 backdrop-blur-md border rounded-xl px-4 py-2.5 flex items-center gap-3 shadow-lg transition-colors duration-300 ${
                      isHoveringWhatsAppCta
                        ? 'border-emerald-400/50'
                        : isHoveringMainCta || buttonPulse
                        ? 'border-cyan-300 shadow-cyan-500/20'
                        : 'border-cyan-400/30'
                    }`}
                  >
                    <span className="relative flex h-2.5 w-2.5">
                      <span
                        className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                          isHoveringWhatsAppCta ? 'bg-emerald-400' : 'bg-cyan-400'
                        }`}
                      ></span>
                      <span
                        className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
                          isHoveringWhatsAppCta ? 'bg-emerald-500' : 'bg-cyan-500'
                        }`}
                      ></span>
                    </span>
                    <div className="text-left">
                      <p
                        className={`text-[11px] font-semibold uppercase tracking-wider font-mono transition-colors ${
                          isHoveringWhatsAppCta ? 'text-emerald-300' : 'text-cyan-300'
                        }`}
                      >
                        {isHoveringWhatsAppCta
                          ? 'Soporte Activo'
                          : isHoveringMainCta
                          ? 'Enfocando MiniApp'
                          : 'Agente Verse Activo'}
                      </p>
                      <p className="text-[10px] text-slate-400">
                        {isHoveringWhatsAppCta
                          ? 'Listo para resolver tus dudas'
                          : 'Listo para convertir tu idea en MiniApp'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Subtle direction indicator pointing to the CTA */}
                <div
                  className={`hidden lg:flex items-center gap-2 absolute -right-6 top-1/2 -translate-y-1/2 translate-x-1/2 px-3 py-1.5 rounded-full backdrop-blur-md text-xs font-mono font-bold transition-all duration-300 ${
                    isHoveringMainCta
                      ? 'bg-cyan-400 text-slate-950 scale-110 shadow-lg shadow-cyan-500/50'
                      : 'bg-cyan-500/10 border border-cyan-400/40 text-cyan-300 animate-pulse'
                  }`}
                >
                  <span>{isHoveringMainCta ? '¡CREA AHORA!' : 'PULSA AQUÍ'}</span>
                  <ArrowRight
                    className={`w-3.5 h-3.5 transition-transform ${
                      isHoveringMainCta ? 'translate-x-1' : ''
                    }`}
                  />
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 text-left order-1 lg:order-2 space-y-6">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>De la Idea a la Realidad con IA</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-300 font-display tracking-tight">
                  ¿TIENES UNA IDEA?
                </h3>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-cyan-400 font-display tracking-tight leading-none">
                  CONVIÉRTELA EN UNA MINIAPP.
                </h2>
              </div>

              {/* Secondary text */}
              <p className="text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
                Aprende a transformar ideas, conocimientos y soluciones en experiencias interactivas con IA.
              </p>

              {/* Benefits bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 text-sm text-slate-300">
                  <div className="p-1 rounded-full bg-cyan-500/20 text-cyan-400 shrink-0">
                    <Zap className="w-3.5 h-3.5" />
                  </div>
                  <span>Sin saber programar</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-300">
                  <div className="p-1 rounded-full bg-cyan-500/20 text-cyan-400 shrink-0">
                    <Zap className="w-3.5 h-3.5" />
                  </div>
                  <span>Con prompts guiados paso a paso</span>
                </div>
              </div>

              {/* CTA Section (Principal + WhatsApp Secundario) */}
              <div className="pt-3 space-y-6">
                
                {/* 1. CTA Principal (Más destacado) */}
                <div className="space-y-2">
                  <button
                    onClick={handleCheckout}
                    onMouseEnter={() => setIsHoveringMainCta(true)}
                    onMouseLeave={() => setIsHoveringMainCta(false)}
                    onTouchStart={handleButtonTouchTrigger}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-black text-slate-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-500 hover:from-cyan-300 hover:to-blue-400 rounded-2xl shadow-xl shadow-cyan-500/30 hover:shadow-cyan-400/50 hover:scale-[1.02] active:scale-[0.99] transition-all duration-300 cursor-pointer text-center group"
                  >
                    <span className="tracking-wide">🚀 QUIERO CREAR MI PRIMERA MINIAPP</span>
                    <ArrowRight className="w-5 h-5 text-slate-950 group-hover:translate-x-1.5 transition-transform duration-200" />
                  </button>

                  {/* Micro-trust copy */}
                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-1">
                    <span className="flex items-center gap-1.5 text-slate-400">
                      <ShieldCheck className="w-4 h-4 text-cyan-400" />
                      Acceso inmediato y seguro
                    </span>
                    <span className="text-slate-600">•</span>
                    <span>Garantía incondicional de 7 días</span>
                  </div>
                </div>

                {/* 2. CTA Secundario de WhatsApp (Elegante y no competidor) */}
                <div className="pt-2 border-t border-white/10">
                  <div className="rounded-2xl p-4 sm:p-5 bg-slate-900/50 border border-slate-800/80 hover:border-emerald-500/30 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      
                      {/* Texto explicativo */}
                      <div className="space-y-1 text-left">
                        <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-400 uppercase tracking-wider font-mono">
                          <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>💬 ¿TIENES ALGUNA DUDA?</span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-300 leading-snug">
                          ¿Quieres saber más sobre cómo crear tu MiniApp? Nuestro equipo está disponible para responder tus preguntas y ayudarte a resolver cualquier duda.
                        </p>
                      </div>

                      {/* Botón secundario de WhatsApp */}
                      <div className="shrink-0">
                        <button
                          onClick={openWhatsApp}
                          onMouseEnter={() => setIsHoveringWhatsAppCta(true)}
                          onMouseLeave={() => setIsHoveringWhatsAppCta(false)}
                          onTouchStart={handleButtonTouchTrigger}
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 active:bg-emerald-500/30 border border-emerald-500/40 hover:border-emerald-400 rounded-xl transition-all duration-200 cursor-pointer shadow-lg shadow-emerald-950/40 hover:scale-[1.02] active:scale-[0.98]"
                        >
                          <MessageCircle className="w-4 h-4 text-emerald-400" />
                          <span>HABLAR CON NUESTRO EQUIPO →</span>
                        </button>
                      </div>

                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
