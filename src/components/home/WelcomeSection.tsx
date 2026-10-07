import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, ShieldCheck, Cpu, Globe2, Activity } from 'lucide-react';
import tradingPlatformImg from '../../assets/images/trading_platform_visual_1791376147931.jpg';

export const WelcomeSection: React.FC = () => {
  const valueProps = [
    {
      title: "Sophisticated Algorithmic Execution",
      desc: "Quantitative Expert Advisors engineered to eliminate human emotional bias and execute high-probability set-ups."
    },
    {
      title: "Global Reach & 24-Hour Markets",
      desc: "Continuous round-the-clock liquidity access spanning Asian, European, and US currency sessions."
    },
    {
      title: "Disciplined Downside Risk Management",
      desc: "Automated stop-loss parameters, max drawdown protection, and dynamic lot sizing embedded in every position."
    },
    {
      title: "Real-Time Transparency & Reporting",
      desc: "Comprehensive trade logs, live tick analytics, and clear statement exports directly in your dashboard."
    }
  ];

  return (
    <section className="py-24 bg-[#0B0B0B] relative overflow-hidden">
      {/* Decorative subtle lime glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 rounded-full bg-[#B6F35A]/[0.03] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Visual Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-[#2A2A2A] bg-[#141414] shadow-2xl p-2.5">
              <div className="rounded-2xl overflow-hidden relative">
                <img
                  src={tradingPlatformImg}
                  alt="Forex Bank Pro Automated Trading Platform"
                  className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                {/* Floating Metrics Tag */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-[#0B0B0B]/90 backdrop-blur-md border border-[#2A2A2A] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#B6F35A]/15 border border-[#B6F35A]/30 flex items-center justify-center text-[#B6F35A]">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Algorithmic Precision</div>
                      <div className="text-[11px] text-[#A1A1AA]">Sub-millisecond execution engine</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-mono font-bold text-[#B6F35A]">24/5</div>
                    <div className="text-[10px] text-zinc-500">Live Surveillance</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating 3D Coin Badge */}
            <div className="absolute -top-6 -right-6 hidden sm:flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#1E1E1E] to-[#121212] border-2 border-[#B6F35A] shadow-[0_0_20px_rgba(182,243,90,0.3)] animate-float-slow">
              <span className="font-mono text-xl font-extrabold text-[#B6F35A]">FX</span>
            </div>
          </motion.div>

          {/* Right: Content & Value Props Checklist */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            {/* Eyebrow */}
            <div className="text-xs font-bold uppercase tracking-wider text-[#B6F35A] mb-2 flex items-center gap-2">
              <span className="w-2 h-0.5 bg-[#B6F35A]"></span>
              <span>Welcome to Forex Bank Pro</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Trade On Our <span className="text-[#B6F35A]">World Class</span> Platform
            </h2>

            <p className="mt-4 text-base text-zinc-400 leading-relaxed">
              Trading in global financial markets involves complex strategies. From institutional liquidity flows to automated risk containment, our proprietary Expert Advisor systems execute with cold statistical discipline.
            </p>

            {/* Checklist */}
            <div className="mt-8 space-y-4">
              {valueProps.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-[#141414] border border-transparent hover:border-[#222222] transition-colors"
                >
                  <div className="mt-1 w-6 h-6 rounded-full bg-[#B6F35A]/15 border border-[#B6F35A]/40 flex items-center justify-center text-[#B6F35A] shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">{item.title}</h3>
                    <p className="text-xs text-zinc-400 mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Action CTA */}
            <div className="mt-8 pt-4">
              <Link
                to="/register/live"
                className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#B6F35A] text-[#0B0B0B] font-bold text-sm hover:bg-[#C4F675] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 shadow-[0_0_25px_rgba(182,243,90,0.3)]"
              >
                <span>Sign Up Now</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
