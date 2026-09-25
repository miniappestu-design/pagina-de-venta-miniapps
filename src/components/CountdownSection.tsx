import React, { useState, useEffect } from 'react';
import { Clock, AlertTriangle } from 'lucide-react';

const DEADLINE_STORAGE_KEY = 'verse_countdown_deadline_timestamp';

export const CountdownSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    isFinished: boolean;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0, isFinished: false });

  useEffect(() => {
    // Get or initialize persistent deadline (3 days from first load)
    let targetTime: number;
    try {
      const stored = localStorage.getItem(DEADLINE_STORAGE_KEY);
      if (stored) {
        targetTime = parseInt(stored, 10);
      } else {
        targetTime = Date.now() + 3 * 24 * 60 * 60 * 1000 + 14 * 60 * 60 * 1000;
        localStorage.setItem(DEADLINE_STORAGE_KEY, targetTime.toString());
      }
    } catch {
      targetTime = Date.now() + 3 * 24 * 60 * 60 * 1000 + 14 * 60 * 60 * 1000;
    }

    const calculateTime = () => {
      const now = Date.now();
      const diff = targetTime - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isFinished: true });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isFinished: false });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-3xl mx-auto my-8 p-6 sm:p-8 rounded-2xl bg-[#090f22] border border-cyan-500/30 text-center shadow-xl">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold mb-3">
        <Clock className="w-3.5 h-3.5 text-cyan-400" />
        <span>Vigencia de la Convocatoria</span>
      </div>

      <h3 className="text-lg sm:text-xl font-bold text-white font-display uppercase tracking-wider mb-6">
        ESTA OFERTA ESPECIAL TERMINA EN:
      </h3>

      {timeLeft.isFinished ? (
        <div className="p-4 rounded-xl bg-rose-950/30 border border-rose-500/30 flex items-center justify-center gap-3 text-rose-300">
          <AlertTriangle className="w-5 h-5 text-rose-400" />
          <span className="font-bold text-sm sm:text-base uppercase tracking-wider">
            LA OFERTA ACTUAL HA FINALIZADO
          </span>
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-3 sm:gap-4 max-w-lg mx-auto">
          {/* Days */}
          <div className="p-3 sm:p-4 rounded-xl bg-black/50 border border-cyan-500/20">
            <span className="text-2xl sm:text-4xl font-extrabold text-white font-mono block">
              {String(timeLeft.days).padStart(2, '0')}
            </span>
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-slate-400 font-mono">
              DÍAS
            </span>
          </div>

          {/* Hours */}
          <div className="p-3 sm:p-4 rounded-xl bg-black/50 border border-cyan-500/20">
            <span className="text-2xl sm:text-4xl font-extrabold text-white font-mono block">
              {String(timeLeft.hours).padStart(2, '0')}
            </span>
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-slate-400 font-mono">
              HORAS
            </span>
          </div>

          {/* Minutes */}
          <div className="p-3 sm:p-4 rounded-xl bg-black/50 border border-cyan-500/20">
            <span className="text-2xl sm:text-4xl font-extrabold text-white font-mono block">
              {String(timeLeft.minutes).padStart(2, '0')}
            </span>
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-slate-400 font-mono">
              MINUTOS
            </span>
          </div>

          {/* Seconds */}
          <div className="p-3 sm:p-4 rounded-xl bg-black/50 border border-cyan-500/20">
            <span className="text-2xl sm:text-4xl font-extrabold text-cyan-400 font-mono block">
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-slate-400 font-mono">
              SEGUNDOS
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
