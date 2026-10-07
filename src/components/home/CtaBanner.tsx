import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { SITE_DATA } from '../../data/site';

export const CtaBanner: React.FC = () => {
  return (
    <section className="py-20 bg-[#0B0B0B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl bg-[#141414] border border-[#2A2A2A] p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl">
          {/* Radial lime sunburst background decor on the right */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 pointer-events-none opacity-20 sm:opacity-30">
            <svg viewBox="0 0 200 200" className="w-full h-full animate-[spin_60s_linear_infinite]">
              {[...Array(24)].map((_, i) => (
                <line
                  key={i}
                  x1="100"
                  y1="100"
                  x2={100 + 95 * Math.cos((i * 15 * Math.PI) / 180)}
                  y2={100 + 95 * Math.sin((i * 15 * Math.PI) / 180)}
                  stroke="#B6F35A"
                  strokeWidth="2"
                  strokeDasharray="4 6"
                />
              ))}
            </svg>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1A1A] border border-[#2E2E2E] text-xs font-semibold text-[#B6F35A] mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Low Starting Capital Threshold</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Start trading with <br className="hidden sm:inline" />
                only <span className="text-[#B6F35A]">$250</span>
              </h2>
              <p className="mt-3 text-sm text-zinc-400">
                Deploy live automated Expert Advisors with strict stop-loss protocols, or practice completely risk-free with a $10,000 demo account.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
              <Link
                to="/register/live"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#B6F35A] text-[#0B0B0B] font-extrabold text-sm hover:bg-[#C4F675] hover:scale-[1.03] transition-all shadow-xl active:scale-[0.98]"
              >
                <span>Register Live</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/register/demo"
                className="inline-flex items-center justify-center px-6 py-4 rounded-full bg-[#1E1E1E] hover:bg-[#252525] border border-[#2E2E2E] text-white font-semibold text-sm transition-all"
              >
                <span>Try Demo First</span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
