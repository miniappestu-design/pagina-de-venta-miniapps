import React, { useState } from 'react';
import { handleCheckout, handleWhatsApp, QUIZ_QUESTIONS, QUIZ_RESULTS } from '../data/defaults';
import { QuizResult } from '../types';
import { CheckCircle2, RotateCcw, ArrowRight, MessageCircle, Sparkles, Award } from 'lucide-react';

export const QuizSection: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [completedResult, setCompletedResult] = useState<QuizResult | null>(null);

  const totalQuestions = QUIZ_QUESTIONS.length;

  const handleSelectOption = (questionId: number, profile: string) => {
    const updated = { ...selectedAnswers, [questionId]: profile };
    setSelectedAnswers(updated);

    if (currentStep < totalQuestions - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      // Calculate dominant profile
      const counts: Record<string, number> = {
        explorador: 0,
        creador: 0,
        arquitecto: 0,
        emprendedor: 0,
      };

      Object.values(updated).forEach((prof) => {
        counts[prof] = (counts[prof] || 0) + 1;
      });

      let topProfile = 'explorador';
      let maxCount = -1;
      Object.entries(counts).forEach(([prof, count]) => {
        if (count > maxCount) {
          maxCount = count;
          topProfile = prof;
        }
      });

      const result = QUIZ_RESULTS[topProfile] || QUIZ_RESULTS.explorador;
      setCompletedResult(result);
    }
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setSelectedAnswers({});
    setCompletedResult(null);
  };

  const currentQ = QUIZ_QUESTIONS[currentStep];

  return (
    <section id="quiz" className="py-20 md:py-28 relative bg-[#04060d]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Diagnóstico Interactivo</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display mb-3">
            Descubre tu Perfil de Creador de MiniApps
          </h2>
          <p className="text-base text-slate-300">
            Responde 3 preguntas simples y obtén una recomendación personalizada para tu situación actual.
          </p>
        </div>

        {/* Quiz Container */}
        <div className="max-w-3xl mx-auto bg-gradient-to-b from-[#0b1224] to-[#070b16] border border-cyan-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-cyan-950/40 relative overflow-hidden">
          {/* Subtle Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[80px] pointer-events-none" />

          {!completedResult ? (
            <div>
              {/* Progress Header */}
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="text-xs sm:text-sm font-semibold text-cyan-400 font-mono uppercase tracking-wider">
                  Pregunta {currentStep + 1} de {totalQuestions}
                </span>
                <span className="text-xs text-slate-400">
                  {Math.round(((currentStep + 1) / totalQuestions) * 100)}% Completado
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden mb-8">
                <div
                  className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / totalQuestions) * 100}%` }}
                />
              </div>

              {/* Current Question Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-8 font-display leading-snug">
                {currentQ.question}
              </h3>

              {/* Options */}
              <div className="space-y-3.5 mb-8">
                {currentQ.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(currentQ.id, option.profile)}
                    className="w-full text-left p-4 sm:p-5 rounded-2xl bg-slate-900/80 hover:bg-cyan-950/40 border border-white/10 hover:border-cyan-400/50 text-slate-200 hover:text-white font-medium text-sm sm:text-base transition-all duration-200 flex items-center justify-between group cursor-pointer"
                  >
                    <span>{option.label}</span>
                    <div className="w-6 h-6 rounded-full border border-slate-600 group-hover:border-cyan-400 group-hover:bg-cyan-500/20 flex items-center justify-center shrink-0 ml-4 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </button>
                ))}
              </div>

              {/* Navigation Back */}
              {currentStep > 0 && (
                <div className="flex justify-start">
                  <button
                    onClick={() => setCurrentStep((prev) => prev - 1)}
                    className="text-xs font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    ← Volver a la pregunta anterior
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* Result Card */
            <div className="text-center py-4 animate-in fade-in duration-300">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-xs font-semibold mb-4">
                <Award className="w-4 h-4 text-cyan-400" />
                <span>{completedResult.badge}</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-violet-400 font-display mb-4">
                {completedResult.title}
              </h3>

              <div className="p-6 rounded-2xl bg-black/40 border border-white/10 text-left mb-6 space-y-4">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Diagnóstico:
                  </h4>
                  <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                    {completedResult.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-1">
                    Recomendación estratégica para ti:
                  </h4>
                  <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                    {completedResult.recommendation}
                  </p>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                <button
                  onClick={handleCheckout}
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm sm:text-base font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl shadow-lg shadow-cyan-500/25 transition-all cursor-pointer"
                >
                  <span>QUIERO ENTRAR A FÁBRICA DE MINIAPPS VERSE 🚀</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={handleWhatsApp}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:text-emerald-300 rounded-xl transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>QUIERO SABER MÁS 💬</span>
                </button>
              </div>

              <button
                onClick={handleRestart}
                className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reiniciar test</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
