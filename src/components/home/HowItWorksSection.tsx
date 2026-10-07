import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, UserPlus, Wallet, Zap, LineChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SITE_DATA } from '../../data/site';

export const HowItWorksSection: React.FC = () => {
  const stepIcons = [
    <UserPlus className="w-5 h-5 text-[#B6F35A]" />,
    <Wallet className="w-5 h-5 text-[#B6F35A]" />,
    <Zap className="w-5 h-5 text-[#B6F35A]" />,
    <LineChart className="w-5 h-5 text-[#B6F35A]" />,
  ];

  return (
    <section className="py-24 bg-[#0B0B0B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B6F35A] mb-3">
            <span className="w-2 h-0.5 bg-[#B6F35A]"></span>
            <span>Simple 4-Step Process</span>
            <span className="w-2 h-0.5 bg-[#B6F35A]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            How It Works
          </h2>
          <p className="mt-3 text-sm text-zinc-400">
            From initial registration to continuous algorithmic market execution in four straightforward steps.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {SITE_DATA.howItWorks.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="p-6 rounded-2xl bg-[#141414] border border-[#242424] hover:border-[#B6F35A] transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div>
                {/* Step Number & Icon Header */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-extrabold font-mono text-zinc-600 group-hover:text-[#B6F35A] transition-colors">
                    {step.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#1A1A1A] border border-[#2A2A2A] group-hover:border-[#B6F35A] flex items-center justify-center transition-colors">
                    {stepIcons[idx]}
                  </div>
                </div>

                <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#B6F35A] transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs text-zinc-400 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {idx < 3 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-zinc-600">
                  <ArrowRight className="w-5 h-5" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 text-center">
          <Link
            to="/register/live"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#B6F35A] text-[#0B0B0B] font-bold text-sm hover:bg-[#C4F675] hover:scale-[1.03] transition-all shadow-lg"
          >
            <span>Activate Your Live Account Now</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};
