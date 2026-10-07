import React from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight, Sparkles, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SITE_DATA } from '../../data/site';

export const PricingSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#0B0B0B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#B6F35A] mb-2 flex items-center gap-2">
              <span className="w-2 h-0.5 bg-[#B6F35A]"></span>
              <span>Account Options</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Our Account Plans
            </h2>
          </div>

          <p className="text-sm text-zinc-400 max-w-md leading-relaxed">
            Begin with zero financial commitment on a full demo account, or step up to live automated EA execution from just $250.
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {SITE_DATA.pricingPlans.map((plan, index) => {
            const isFeatured = plan.highlighted;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between ${
                  isFeatured
                    ? 'bg-[#151A12] border-2 border-[#B6F35A] shadow-[0_0_40px_rgba(182,243,90,0.18)] lg:-translate-y-2'
                    : 'bg-[#141414] border border-[#242424] hover:border-[#383838]'
                }`}
              >
                {/* Featured Badge */}
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#B6F35A] text-[#0B0B0B] text-xs font-black uppercase tracking-wider flex items-center gap-1.5 shadow-md">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Most Popular Live Tier</span>
                  </div>
                )}

                <div>
                  <div className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
                    {plan.name}
                  </div>

                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl sm:text-5xl font-extrabold text-white font-mono tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-xs text-zinc-400">/{plan.period}</span>
                  </div>

                  <p className="text-xs text-zinc-400 mb-6 min-h-[32px]">
                    {plan.tagline}
                  </p>

                  <div className="mb-6">
                    <Link
                      to={plan.ctaHref}
                      className={`w-full py-3.5 px-6 rounded-full font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                        isFeatured
                          ? 'bg-[#B6F35A] text-[#0B0B0B] hover:bg-[#C4F675] shadow-lg hover:scale-[1.02]'
                          : 'bg-[#222222] text-white hover:bg-[#2A2A2A] border border-[#333333]'
                      }`}
                    >
                      <span>{plan.ctaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-4 pt-4 border-t border-[#222222]">
                    Included Features:
                  </div>

                  <ul className="space-y-3">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-xs text-zinc-300">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          isFeatured ? 'bg-[#B6F35A] text-[#0B0B0B]' : 'bg-[#262626] text-[#B6F35A]'
                        }`}>
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-[#222222] flex items-center justify-between text-[11px] text-zinc-500">
                  <span>Requirement:</span>
                  <span className="font-semibold text-zinc-300">{plan.minDeposit}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Regulatory Note */}
        <div className="mt-12 text-center text-xs text-zinc-500 max-w-2xl mx-auto">
          All live accounts include Tier-1 segregated bank custody and negative balance protection. CFDs are leveraged products; trade responsibly.
        </div>

      </div>
    </section>
  );
};
