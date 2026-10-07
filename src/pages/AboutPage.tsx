import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Cpu, Globe2, ArrowRight, Award, Zap, CheckCircle2, Lock } from 'lucide-react';
import { SITE_DATA } from '../data/site';
import heroPortraitImg from '../assets/images/hero_trader_portrait_1791376125886.jpg';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141414] border border-[#2A2A2A] text-xs font-semibold text-[#B6F35A] mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>Quantitative Institutional Heritage</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Engineering Discipline into <span className="text-[#B6F35A]">Global Currency Markets</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed">
            Forex Bank Pro was founded on a singular conviction: emotional decision-making is the primary cause of trading failure. By combining algorithmic Expert Advisor (EA) architecture with strict downside risk controls, we bridge the gap between institutional quantitative models and retail market participants.
          </p>
        </div>

        {/* Section 1: Why Us */}
        <section id="why-us" className="py-16 border-t border-[#1F1F1F]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs font-bold uppercase tracking-wider text-[#B6F35A]">
                01. Why Forex Bank Pro
              </div>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">
                Cold Mathematical Execution Over Intuition
              </h2>
              <p className="text-sm text-zinc-400 leading-relaxed">
                The foreign exchange market generates upwards of $7.5 trillion in daily turnover. In this hyper-competitive environment, manual discretionary trading suffers from cognitive fatigue, fear of loss, and erratic lot sizing.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-[#B6F35A] shrink-0 mt-0.5" />
                  <span><strong>Zero Emotional Interference:</strong> Algorithmic logic enters, manages, and exits positions solely on empirical signals.</span>
                </div>
                <div className="flex items-start gap-3 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-[#B6F35A] shrink-0 mt-0.5" />
                  <span><strong>24-Hour Market Coverage:</strong> Active tracking across London, New York, Tokyo, and Sydney liquidity pools.</span>
                </div>
                <div className="flex items-start gap-3 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-[#B6F35A] shrink-0 mt-0.5" />
                  <span><strong>Accessible Capital Barrier:</strong> Start live EA automation from a low $250 minimum deposit.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl bg-[#141414] border border-[#2A2A2A] p-4 shadow-2xl relative">
                <img
                  src={heroPortraitImg}
                  alt="Forex Bank Pro Research Desk"
                  className="rounded-2xl w-full h-80 object-cover"
                />
                <div className="absolute bottom-8 left-8 right-8 p-4 rounded-xl bg-[#0B0B0B]/90 backdrop-blur-md border border-[#262626] flex items-center justify-between text-xs">
                  <span className="text-white font-bold">Quantitative Risk Committee</span>
                  <span className="text-[#B6F35A] font-mono">BVI & USA Regulated Entity</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Our System Architecture */}
        <section id="our-system" className="py-16 border-t border-[#1F1F1F]">
          <div className="text-xs font-bold uppercase tracking-wider text-[#B6F35A] mb-2">
            02. Technological Architecture
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight mb-8">
            How Our Expert Advisor Architecture Operates
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl bg-[#141414] border border-[#262626] hover:border-[#B6F35A] transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center text-[#B6F35A] mb-5">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">1. Signal Generation</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Multi-timeframe statistical models analyze volatility bands, liquidity imbalances, and trend momentum across major currency pairs.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#141414] border border-[#262626] hover:border-[#B6F35A] transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center text-[#B6F35A] mb-5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">2. Risk Sizing & Guards</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Before order transmission, positions are normalized according to maximum daily loss thresholds, hard stop-losses, and pair correlation filters.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#141414] border border-[#262626] hover:border-[#B6F35A] transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center text-[#B6F35A] mb-5">
                <Globe2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">3. Low-Latency Execution</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Orders are routed via Equinix LD4 fiber cross-connects with sub-12ms latency directly into tier-1 liquidity aggregators.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Vision & Governance */}
        <section id="vision" className="py-16 border-t border-[#1F1F1F]">
          <div className="rounded-3xl bg-[#141414] border border-[#262626] p-8 sm:p-12">
            <div className="max-w-2xl">
              <div className="text-xs font-bold uppercase tracking-wider text-[#B6F35A] mb-2">
                03. Governance & Vision
              </div>
              <h2 className="text-3xl font-extrabold text-white tracking-tight mb-4">
                Democratizing Algorithmic Alpha with Transparency
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                Our vision is to provide every investor—from a beginner testing a $250 live account to institutional introducing brokers—with the same quantitative rigor, execution speed, and fund safety enjoyed by sovereign desks.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/register/live"
                  className="px-6 py-3 rounded-full bg-[#B6F35A] text-[#0B0B0B] font-bold text-xs hover:bg-[#C4F675] transition-all"
                >
                  Start Live Trading ($250 Min)
                </Link>
                <Link
                  to="/funds/safety"
                  className="px-6 py-3 rounded-full bg-[#1A1A1A] border border-[#2A2A2A] text-white font-semibold text-xs hover:border-zinc-500 transition-all"
                >
                  Read Safety of Funds Protocol
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
