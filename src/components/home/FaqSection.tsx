import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SITE_DATA } from '../../data/site';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(SITE_DATA.faqs[0]?.id || null);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-24 bg-[#0B0B0B] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block matching reference */}
        <div className="text-center mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-[#B6F35A] mb-2 flex items-center justify-center gap-2">
            <span className="w-2 h-0.5 bg-[#B6F35A]"></span>
            <span>Faq</span>
            <span className="w-2 h-0.5 bg-[#B6F35A]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm text-zinc-400 max-w-xl mx-auto leading-relaxed">
            Everything you need to know about our automated Expert Advisors, account safety, deposits, and risk controls.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {SITE_DATA.faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-[#141414] border border-[#242424] hover:border-[#333333] transition-colors overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(faq.id)}
                  className="w-full py-5 px-6 flex items-center justify-between text-left gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold text-white pr-4">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-[#1A1A1A] border border-[#2E2E2E] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 border-[#B6F35A] text-[#B6F35A]' : 'text-zinc-400'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-sm text-zinc-400 leading-relaxed border-t border-[#1C1C1C]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Footer Link */}
        <div className="mt-12 text-center">
          <Link
            to="/faq"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#B6F35A] hover:underline"
          >
            <span>Explore All Knowledge Base & FAQ Topics</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};
