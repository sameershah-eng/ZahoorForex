import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Award, CheckCircle2, XCircle, ArrowRight, RotateCcw, ShieldCheck, Sparkles, HelpCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SITE_DATA } from '../data/site';

export const PreTestPage: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  const questions = SITE_DATA.preTestQuestions;
  const currentQ = questions[currentIdx];

  const handleSelectOption = (optIdx: number) => {
    if (showExplanation) return;
    setSelectedAnswers((prev) => ({ ...prev, [currentIdx]: optIdx }));
    setShowExplanation(true);
  };

  const handleNext = () => {
    setShowExplanation(false);
    if (currentIdx < questions.length - 1) {
      setCurrentIdx((prev) => prev + 1);
    } else {
      setQuizFinished(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const handleRestart = () => {
    setSelectedAnswers({});
    setCurrentIdx(0);
    setShowExplanation(false);
    setQuizFinished(false);
  };

  const score = Object.entries(selectedAnswers).reduce((acc, [qIdx, ansIdx]) => {
    return questions[Number(qIdx)].correctIndex === ansIdx ? acc + 1 : acc;
  }, 0);

  const percentage = Math.round((score / questions.length) * 100);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#0B0B0B]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141414] border border-[#2A2A2A] text-xs font-semibold text-[#B6F35A] mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Trader Readiness Assessment</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Trading Knowledge <span className="text-[#B6F35A]">Pre-Test</span>
          </h1>
          <p className="mt-2 text-sm text-zinc-400">
            Evaluate your understanding of leveraged CFDs, Expert Advisors, and downside risk management protocols.
          </p>
        </div>

        {/* Quiz Content Container */}
        <div className="rounded-3xl bg-[#141414] border border-[#242424] p-6 sm:p-10 shadow-2xl relative">
          
          {!quizFinished ? (
            <div>
              {/* Progress Bar & Counter */}
              <div className="mb-8">
                <div className="flex justify-between items-center text-xs font-semibold text-zinc-400 mb-2">
                  <span>Question {currentIdx + 1} of {questions.length}</span>
                  <span className="text-[#B6F35A] font-mono">{Math.round(((currentIdx + 1) / questions.length) * 100)}% Completed</span>
                </div>
                <div className="w-full h-2 bg-[#222222] rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-[#B6F35A] rounded-full shadow-[0_0_10px_#B6F35A]"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              {/* Question */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentQ.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-lg sm:text-xl font-bold text-white mb-6">
                    {currentQ.question}
                  </h2>

                  {/* Options */}
                  <div className="space-y-3 mb-6">
                    {currentQ.options.map((option, optIdx) => {
                      const isSelected = selectedAnswers[currentIdx] === optIdx;
                      const isCorrect = currentQ.correctIndex === optIdx;
                      
                      let btnStyle = "bg-[#1A1A1A] border-[#2A2A2A] text-zinc-300 hover:border-zinc-500";
                      if (showExplanation) {
                        if (isCorrect) {
                          btnStyle = "bg-[#B6F35A]/15 border-[#B6F35A] text-white";
                        } else if (isSelected) {
                          btnStyle = "bg-rose-500/15 border-rose-500 text-white";
                        } else {
                          btnStyle = "bg-[#1A1A1A] border-[#242424] text-zinc-500 opacity-60";
                        }
                      } else if (isSelected) {
                        btnStyle = "bg-[#1E2619] border-[#B6F35A] text-white";
                      }

                      return (
                        <button
                          key={optIdx}
                          type="button"
                          onClick={() => handleSelectOption(optIdx)}
                          disabled={showExplanation}
                          className={`w-full text-left p-4 rounded-2xl border text-sm font-medium transition-all flex items-center justify-between gap-3 ${btnStyle}`}
                        >
                          <span>{option}</span>
                          {showExplanation && isCorrect && (
                            <CheckCircle2 className="w-5 h-5 text-[#B6F35A] shrink-0" />
                          )}
                          {showExplanation && isSelected && !isCorrect && (
                            <XCircle className="w-5 h-5 text-rose-500 shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Explanation card after picking */}
                  {showExplanation && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-2xl bg-[#0B0B0B] border border-[#2E2E2E] mb-6 text-xs text-zinc-300 leading-relaxed"
                    >
                      <strong className="text-[#B6F35A] block mb-1">Knowledge Insight:</strong>
                      {currentQ.explanation}
                    </motion.div>
                  )}

                  {/* Next Question CTA */}
                  {showExplanation && (
                    <div className="flex justify-end">
                      <button
                        type="button"
                        onClick={handleNext}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#B6F35A] text-[#0B0B0B] font-bold text-sm hover:bg-[#C4F675] shadow-lg transition-all"
                      >
                        <span>{currentIdx < questions.length - 1 ? 'Next Question' : 'View Results'}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  )}

                </motion.div>
              </AnimatePresence>

            </div>
          ) : (
            /* Results Screen */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-6"
            >
              <div className="w-20 h-20 rounded-full bg-[#B6F35A]/15 border-2 border-[#B6F35A] flex items-center justify-center text-[#B6F35A] mx-auto mb-6">
                <Award className="w-10 h-10" />
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                Assessment Complete!
              </h2>

              <p className="text-zinc-400 text-sm mb-6">
                You scored <span className="text-[#B6F35A] font-bold font-mono text-lg">{score}</span> out of <span className="font-mono text-white font-bold">{questions.length}</span> ({percentage}%)
              </p>

              {/* Recommendation Box */}
              <div className="p-6 rounded-2xl bg-[#0B0B0B] border border-[#2A2A2A] max-w-lg mx-auto mb-8 text-left">
                <div className="flex items-center gap-2 text-sm font-bold text-white mb-2">
                  <ShieldCheck className="w-5 h-5 text-[#B6F35A]" />
                  <span>Personalized Recommendation:</span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {percentage >= 80 ? (
                    "Outstanding comprehension of automated trading mechanics and CFD risk dynamics. You are well-positioned to begin with a live Starter account from $250."
                  ) : percentage >= 60 ? (
                    "Good foundational grasp. We recommend starting with our Free Demo Account with $10,000 virtual balance to observe EA order flows in real-time."
                  ) : (
                    "We recommend reviewing our educational articles and exploring the Free Demo Account to familiarize yourself with risk management before trading live capital."
                  )}
                </p>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to={percentage >= 80 ? "/register/live" : "/register/demo"}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#B6F35A] text-[#0B0B0B] font-bold text-sm hover:bg-[#C4F675] shadow-lg transition-all"
                >
                  <span>{percentage >= 80 ? 'Open Live Account ($250 Min)' : 'Try Free Demo Account'}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <button
                  type="button"
                  onClick={handleRestart}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#1A1A1A] border border-[#2A2A2A] text-white font-semibold text-sm hover:border-zinc-500 transition-all"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Retake Pre-Test</span>
                </button>
              </div>

            </motion.div>
          )}

        </div>

      </div>
    </div>
  );
};
