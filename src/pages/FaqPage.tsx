import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Search, HelpCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SITE_DATA } from '../data/site';

export const FaqPage: React.FC = () => {
  const [search, setSearch] = useState('');
  const [openId, setOpenId] = useState<string | null>(SITE_DATA.faqs[0]?.id || null);

  const filteredFaqs = SITE_DATA.faqs.filter((f) => 
    f.question.toLowerCase().includes(search.toLowerCase()) ||
    f.answer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#0B0B0B]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141414] border border-[#2A2A2A] text-xs font-semibold text-[#B6F35A] mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Knowledge Base & Support</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Frequently Asked <span className="text-[#B6F35A]">Questions</span>
          </h1>
          <p className="mt-3 text-sm text-zinc-400">
            Find immediate answers regarding automated EA strategies, fund security, deposits, and account minimums.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-10">
          <Search className="w-5 h-5 text-zinc-500 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search questions (e.g. Expert Advisor, deposit, risk, withdraw)..."
            className="w-full bg-[#141414] border border-[#242424] focus:border-[#B6F35A] focus:ring-1 focus:ring-[#B6F35A] rounded-2xl pl-12 pr-4 py-4 text-sm text-white placeholder-zinc-500 outline-none transition-all"
          />
        </div>

        {/* Accordion */}
        <div className="space-y-3.5">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;

              return (
                <div
                  key={faq.id}
                  className="rounded-2xl bg-[#141414] border border-[#242424] overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    className="w-full py-5 px-6 flex items-center justify-between text-left gap-4"
                  >
                    <span className="text-sm sm:text-base font-bold text-white">
                      {faq.question}
                    </span>
                    <div className={`w-8 h-8 rounded-full bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center shrink-0 transition-transform ${
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
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-zinc-400 leading-relaxed border-t border-[#1C1C1C]">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 text-zinc-500 text-sm">
              No matching questions found for "{search}". You can contact our support desk directly.
            </div>
          )}
        </div>

        {/* Still have questions? */}
        <div className="mt-16 p-8 rounded-3xl bg-[#141414] border border-[#242424] text-center">
          <h3 className="text-lg font-bold text-white mb-2">Still need assistance?</h3>
          <p className="text-xs text-zinc-400 mb-6">Our 24/5 support desk and institutional coordinators are here to assist.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#B6F35A] text-[#0B0B0B] font-bold text-xs hover:bg-[#C4F675]"
          >
            <span>Contact Support Desk</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
};
