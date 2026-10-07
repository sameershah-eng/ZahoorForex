import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Play, BookOpen, Radio } from 'lucide-react';
import { SITE_DATA } from '../../data/site';

export const StatsRow: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [count, setCount] = useState({ stat1: 0, stat2: 0, stat3: 0, stat4: 0 });

  useEffect(() => {
    if (isInView) {
      const duration = 1500;
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Easing out cubic
        const easeOut = 1 - Math.pow(1 - progress, 3);

        setCount({
          stat1: Math.floor(easeOut * 480),
          stat2: Math.floor(easeOut * 99),
          stat3: Math.floor(easeOut * 24),
          stat4: Math.floor(easeOut * 12),
        });

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView]);

  return (
    <section ref={ref} className="py-24 bg-[#141414] border-y border-[#222222] relative overflow-hidden">
      {/* Decorative blurred background blobs */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[#B6F35A]/[0.04] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header Block matching reference */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-[#B6F35A] mb-2 flex items-center justify-center gap-2">
            <span className="w-2 h-0.5 bg-[#B6F35A]"></span>
            <span>People Trust Us</span>
            <span className="w-2 h-0.5 bg-[#B6F35A]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Institutional Execution Worldwide
          </h2>
          <p className="mt-4 text-sm text-zinc-400">
            Algorithmic precision across global foreign exchange liquidity hubs, engineered for retail traders and institutional desks alike.
          </p>

          {/* Action pills matching reference screenshot */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <Link
              to="/pre-test"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#B6F35A] text-[#0B0B0B] text-xs font-bold hover:bg-[#C4F675] transition-all shadow-md"
            >
              <BookOpen className="w-4 h-4" />
              <span>Test Your Knowledge</span>
            </Link>
            <Link
              to="/media"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1A1A1A] border border-[#2A2A2A] text-white text-xs font-semibold hover:border-zinc-500 transition-all"
            >
              <Play className="w-4 h-4 text-[#B6F35A]" />
              <span>Tutorial Guides</span>
            </Link>
            <Link
              to="/calculator"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1A1A1A] border border-[#2A2A2A] text-white text-xs font-semibold hover:border-zinc-500 transition-all"
            >
              <Radio className="w-4 h-4 text-[#B6F35A]" />
              <span>Live FX Calculator</span>
            </Link>
          </div>
        </div>

        {/* Stats Grid with Large Lime Numbers */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-[#1A1A1A] border border-[#2A2A2A] text-center group hover:border-[#B6F35A] transition-colors"
          >
            <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-mono text-[#B6F35A] tracking-tight">
              {isInView ? `${count.stat1}K+` : '0K+'}
            </div>
            <div className="mt-2 text-xs font-bold uppercase tracking-wider text-white">
              [Add stat]
            </div>
            <div className="text-[11px] text-zinc-400 mt-1">
              Registered users across 120+ countries
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-6 rounded-2xl bg-[#1A1A1A] border border-[#2A2A2A] text-center group hover:border-[#B6F35A] transition-colors"
          >
            <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-mono text-[#B6F35A] tracking-tight">
              {isInView ? `${count.stat2}.9%` : '0.0%'}
            </div>
            <div className="mt-2 text-xs font-bold uppercase tracking-wider text-white">
              [Add stat]
            </div>
            <div className="text-[11px] text-zinc-400 mt-1">
              Automated algorithmic system uptime
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-6 rounded-2xl bg-[#1A1A1A] border border-[#2A2A2A] text-center group hover:border-[#B6F35A] transition-colors"
          >
            <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-mono text-[#B6F35A] tracking-tight">
              {isInView ? `${count.stat3}/5` : '0/5'}
            </div>
            <div className="mt-2 text-xs font-bold uppercase tracking-wider text-white">
              [Add stat]
            </div>
            <div className="text-[11px] text-zinc-400 mt-1">
              Continuous quantitative market execution
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="p-6 rounded-2xl bg-[#1A1A1A] border border-[#2A2A2A] text-center group hover:border-[#B6F35A] transition-colors"
          >
            <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-mono text-[#B6F35A] tracking-tight">
              {isInView ? `${count.stat4}ms` : '0ms'}
            </div>
            <div className="mt-2 text-xs font-bold uppercase tracking-wider text-white">
              [Add stat]
            </div>
            <div className="text-[11px] text-zinc-400 mt-1">
              Average Equinix LD4 execution latency
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
