import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useTransform, useSpring } from 'motion/react';
import { 
  ArrowRight, 
  Play, 
  ShieldCheck, 
  TrendingUp, 
  Sparkles, 
  CheckCircle2, 
  Wallet, 
  ArrowUpRight, 
  DollarSign,
  Zap,
  Activity,
  Globe2,
  Lock,
  BarChart3
} from 'lucide-react';

import heroPortraitImg from '../../assets/images/hero_trader_portrait_1791376125886.jpg';
import heroBackdropImg from '../../assets/images/hero_forex_vision_backdrop_1791377846621.jpg';

export const Hero: React.FC = () => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  // Mouse tilt tracking for 3D hero phone mockup
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateXSpring = useSpring(useTransform(mouseY, [-300, 300], [12, -12]), { stiffness: 120, damping: 20 });
  const rotateYSpring = useSpring(useTransform(mouseX, [-300, 300], [-12, 12]), { stiffness: 120, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[96vh] flex flex-col justify-center pt-28 sm:pt-32 pb-20 overflow-hidden bg-[#0B0B0B]"
    >
      {/* 1. High-Resolution Professional Algorithmic Trading Background (Clearly Visible & Premium) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src={heroBackdropImg}
          alt="Forex Bank Pro Algorithmic Trading Command Center"
          className="w-full h-full object-cover object-center opacity-50 filter brightness-105 contrast-110 scale-100 transition-all duration-700"
          referrerPolicy="no-referrer"
        />
        {/* Professional balanced gradient vignette for high contrast and readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B]/80 via-[#0B0B0B]/40 to-[#0B0B0B]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B]/85 via-transparent to-[#0B0B0B]/85" />
        {/* Subtle grid pattern texture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Radial neon lime ambient glow blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#B6F35A]/[0.09] blur-[140px] pointer-events-none animate-pulse-glow z-1" />
      <div className="absolute top-1/2 -left-20 w-96 h-96 rounded-full bg-[#B6F35A]/[0.05] blur-[120px] pointer-events-none z-1" />

      {/* Floating Sparkles & 3D Coins SVG Decor */}
      <motion.div 
        animate={{ y: [0, -15, 0], rotate: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        className="absolute top-36 right-[8%] hidden xl:block pointer-events-none z-10"
      >
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#B6F35A] to-[#8BC34A] border-2 border-white/40 shadow-[0_0_25px_rgba(182,243,90,0.4)] flex items-center justify-center text-[#0B0B0B] font-extrabold text-xl shadow-lg">
          $
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 14, 0], rotate: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute bottom-32 left-[6%] hidden xl:block pointer-events-none z-10"
      >
        <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#1E1E1E] to-[#2E2E2E] border border-[#B6F35A]/60 shadow-[0_0_15px_rgba(182,243,90,0.2)] flex items-center justify-center text-[#B6F35A] font-bold text-sm">
          €
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20">
        
        {/* Top Eyebrow Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex justify-center mb-5"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#141414]/90 border border-[#2E2E2E] backdrop-blur-md text-xs font-semibold text-[#B6F35A] shadow-md">
            <span className="w-2 h-2 rounded-full bg-[#B6F35A] animate-ping" />
            <span>24/5 Automated Expert Advisor Execution</span>
          </div>
        </motion.div>

        {/* Big Attention-Grabbing Headline matching reference */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center max-w-4xl mx-auto mb-6"
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08]">
            <span>"Trading </span>
            <span className="text-[#B6F35A] drop-shadow-[0_0_35px_rgba(182,243,90,0.4)]">
              Expansion
            </span>
            <span>"</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg lg:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Sophisticated automated Expert Advisor (EA) trading with institutional risk controls, 24-hour liquidity reach, and transparent real-time execution.
          </p>

          {/* Quick Value Pillars Strip */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-4 text-xs font-mono font-medium text-zinc-400">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B6F35A]"></span>
              Sub-12ms Equinix LD4 Latency
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B6F35A]"></span>
              Spreads From 0.0 Pips
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B6F35A]"></span>
              Live Account From $250
            </span>
          </div>
        </motion.div>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <Link
            to="/register/live"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#B6F35A] text-[#0B0B0B] font-extrabold text-base hover:bg-[#C4F675] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 shadow-[0_0_30px_rgba(182,243,90,0.4)]"
          >
            <span>Start Trading Live</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            to="/register/demo"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#141414]/90 hover:bg-[#1A1A1A] border border-[#2A2A2A] hover:border-[#B6F35A] text-white font-semibold text-base transition-all duration-200 backdrop-blur-md"
          >
            <Play className="w-4 h-4 text-[#B6F35A]" />
            <span>Try Free Demo Content</span>
            <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
          </Link>
        </motion.div>

        {/* Visual Showcase: Left Portrait Card + Right Tilted Phone Mockup (Matching Reference Image) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          
          {/* Left: Portrait Card with Video Badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative group cursor-pointer max-w-xs w-full" onClick={() => setVideoModalOpen(true)}>
              {/* Card wrapper */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#2A2A2A] group-hover:border-[#B6F35A] bg-[#141414] transition-all duration-300 shadow-2xl">
                <img
                  src={heroPortraitImg}
                  alt="Forex Bank Pro Financial Specialist"
                  className="w-full h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                {/* Floating "Let's See how we did it" Badge */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-3 rounded-2xl bg-[#0B0B0B]/85 backdrop-blur-md border border-[#2A2A2A]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#B6F35A] flex items-center justify-center text-[#0B0B0B]">
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs font-bold text-white leading-tight">
                        Let's See how we did it
                      </div>
                      <div className="text-[10px] text-zinc-400">
                        Watch 2-min EA walkthrough
                      </div>
                    </div>
                  </div>
                  <Sparkles className="w-4 h-4 text-[#B6F35A]" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Tilted 3D Phone Mockup with Portfolio Balance UI */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-7 flex justify-center lg:justify-start"
          >
            <motion.div
              style={{
                rotateX: rotateXSpring,
                rotateY: rotateYSpring,
                transformPerspective: 1000,
              }}
              className="w-full max-w-sm rounded-[38px] p-3.5 bg-[#141414] border-2 border-[#2A2A2A] shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative animate-float-slow"
            >
              {/* Phone Inner Shell */}
              <div className="rounded-[30px] bg-[#0B0B0B] border border-[#242424] p-5 overflow-hidden relative">
                
                {/* Phone Speaker Notch */}
                <div className="flex justify-center mb-4">
                  <div className="w-20 h-3 rounded-full bg-[#1A1A1A] border border-[#2A2A2A]" />
                </div>

                {/* Top User Bar */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#1A1A1A]">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center text-xs font-bold text-[#B6F35A]">
                      EA
                    </div>
                    <div>
                      <div className="text-[11px] text-zinc-400">Active EA Portfolio</div>
                      <div className="text-xs font-bold text-white">Live MetaTrader #8429</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#B6F35A]/15 border border-[#B6F35A]/40 text-[10px] font-bold text-[#B6F35A]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B6F35A] animate-pulse"></span>
                    <span>ONLINE</span>
                  </div>
                </div>

                {/* Balance Display */}
                <div className="text-left mb-4">
                  <div className="text-xs text-zinc-400 mb-0.5">Investment Portfolio</div>
                  <div className="text-3xl font-extrabold text-white tracking-tight font-mono">
                    $20,350<span className="text-zinc-500 text-xl">.00</span>
                  </div>
                  <div className="flex items-center gap-1.5 mt-1 text-xs text-[#B6F35A] font-semibold">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                    <span>+$2,640.20 (+14.8%) EA Profit</span>
                  </div>
                </div>

                {/* Quick Action Buttons: Top Up & Withdraw */}
                <div className="grid grid-cols-2 gap-2 mb-5">
                  <Link
                    to="/funds/deposit"
                    className="py-2 px-3 rounded-xl bg-[#B6F35A] text-[#0B0B0B] text-xs font-bold text-center hover:bg-[#C4F675] transition-colors"
                  >
                    Top Up
                  </Link>
                  <Link
                    to="/funds/deposit"
                    className="py-2 px-3 rounded-xl bg-[#1A1A1A] text-zinc-200 text-xs font-semibold text-center border border-[#2A2A2A] hover:border-zinc-500 transition-colors"
                  >
                    Withdraw
                  </Link>
                </div>

                {/* Mini Asset Allocation List */}
                <div className="space-y-2 text-xs">
                  <div className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">
                    Automated Open Orders
                  </div>

                  <div className="p-2.5 rounded-xl bg-[#141414] border border-[#202020] flex items-center justify-between">
                    <div>
                      <div className="font-bold text-white flex items-center gap-1">
                        <span>EUR/USD</span>
                        <span className="text-[10px] text-[#B6F35A] bg-[#B6F35A]/10 px-1 rounded">BUY 0.50</span>
                      </div>
                      <div className="text-[10px] text-zinc-500">Trailing Stop Active</div>
                    </div>
                    <div className="text-right font-mono font-semibold text-[#B6F35A]">
                      +$438.10
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-[#141414] border border-[#202020] flex items-center justify-between">
                    <div>
                      <div className="font-bold text-white flex items-center gap-1">
                        <span>XAU/USD</span>
                        <span className="text-[10px] text-[#B6F35A] bg-[#B6F35A]/10 px-1 rounded">BUY 0.20</span>
                      </div>
                      <div className="text-[10px] text-zinc-500">Gold Momentum EA</div>
                    </div>
                    <div className="text-right font-mono font-semibold text-[#B6F35A]">
                      +$1,120.40
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-[#141414] border border-[#202020] flex items-center justify-between">
                    <div>
                      <div className="font-bold text-white flex items-center gap-1">
                        <span>USD/JPY</span>
                        <span className="text-[10px] text-rose-400 bg-rose-500/10 px-1 rounded">SELL 0.30</span>
                      </div>
                      <div className="text-[10px] text-zinc-500">Resistance Reversal</div>
                    </div>
                    <div className="text-right font-mono font-semibold text-[#B6F35A]">
                      +$385.00
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#1A1A1A] flex items-center justify-between text-[11px] text-zinc-400">
                  <span>Drawdown Cap: 3.5%</span>
                  <span className="text-[#B6F35A]">Protected by FBP</span>
                </div>

              </div>
            </motion.div>
          </motion.div>

        </div>

      </div>

      {/* Video Walkthrough Modal */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-[#141414] border border-[#2A2A2A] rounded-2xl max-w-lg w-full p-6 relative shadow-2xl">
            <button
              onClick={() => setVideoModalOpen(false)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white text-lg font-bold"
            >
              ✕
            </button>
            <h3 className="text-lg font-bold text-white mb-2">Forex Bank Pro Automated EA Overview</h3>
            <p className="text-xs text-zinc-400 mb-4">
              Our automated system handles continuous market surveillance and trade execution based on algorithmic models.
            </p>
            <div className="aspect-video bg-black rounded-xl border border-[#2A2A2A] flex flex-col items-center justify-center p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-[#B6F35A] flex items-center justify-center text-[#0B0B0B] mb-3">
                <Play className="w-6 h-6 fill-current ml-1" />
              </div>
              <p className="text-sm font-semibold text-white">Algorithmic Workflow Demonstration</p>
              <p className="text-xs text-zinc-400 mt-1">Register for a free demo account to experience live execution.</p>
            </div>
            <div className="mt-5 flex justify-end gap-3">
              <Link
                to="/register/demo"
                onClick={() => setVideoModalOpen(false)}
                className="px-4 py-2 rounded-full bg-[#B6F35A] text-[#0B0B0B] font-bold text-xs"
              >
                Try Free Demo
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
