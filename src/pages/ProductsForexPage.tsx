import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Cpu, ShieldCheck, ArrowRight, Activity } from 'lucide-react';
import { SITE_DATA } from '../data/site';

export const ProductsForexPage: React.FC = () => {
  const forexPairs = [
    { symbol: 'EUR/USD', name: 'Euro / US Dollar', spread: '0.2 pips', leverage: '1:100', session: '24/5 Overlap' },
    { symbol: 'GBP/USD', name: 'British Pound / US Dollar', spread: '0.4 pips', leverage: '1:100', session: 'London / NY' },
    { symbol: 'USD/JPY', name: 'US Dollar / Japanese Yen', spread: '0.3 pips', leverage: '1:100', session: 'Tokyo / NY' },
    { symbol: 'AUD/USD', name: 'Australian Dollar / US Dollar', spread: '0.5 pips', leverage: '1:100', session: 'Sydney / Asian' },
    { symbol: 'USD/CAD', name: 'US Dollar / Canadian Dollar', spread: '0.6 pips', leverage: '1:100', session: 'New York' },
    { symbol: 'USD/CHF', name: 'US Dollar / Swiss Franc', spread: '0.5 pips', leverage: '1:100', session: 'European' },
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141414] border border-[#2A2A2A] text-xs font-semibold text-[#B6F35A] mb-3">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Forex Currency Markets</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Algorithmic Trading on <span className="text-[#B6F35A]">Major & Minor Forex Pairs</span>
          </h1>
          <p className="mt-3 text-base text-zinc-400 leading-relaxed">
            Trade with deep institutional liquidity, raw spreads from 0.0 pips, and automated Expert Advisor order execution around the clock.
          </p>
        </div>

        {/* Forex Table */}
        <div className="rounded-3xl bg-[#141414] border border-[#242424] overflow-hidden p-6 sm:p-8 shadow-2xl mb-16">
          <h2 className="text-xl font-bold text-white mb-6">Popular Forex Pair Specifications</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-[#242424] text-zinc-400">
                  <th className="py-3 px-4 font-semibold uppercase">Pair Symbol</th>
                  <th className="py-3 px-4 font-semibold uppercase">Market Description</th>
                  <th className="py-3 px-4 font-semibold uppercase text-[#B6F35A]">Raw Spread</th>
                  <th className="py-3 px-4 font-semibold uppercase">Max Leverage</th>
                  <th className="py-3 px-4 font-semibold uppercase">Active Liquidity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1F1F1F]">
                {forexPairs.map((pair) => (
                  <tr key={pair.symbol} className="hover:bg-[#1A1A1A] transition-colors">
                    <td className="py-3.5 px-4 font-mono font-bold text-white">{pair.symbol}</td>
                    <td className="py-3.5 px-4 text-zinc-300">{pair.name}</td>
                    <td className="py-3.5 px-4 font-mono text-[#B6F35A] font-bold">{pair.spread}</td>
                    <td className="py-3.5 px-4 text-zinc-400">{pair.leverage}</td>
                    <td className="py-3.5 px-4 text-zinc-400">{pair.session}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 rounded-3xl bg-[#141414] border border-[#242424] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white">Ready to automate currency trades?</h3>
            <p className="text-xs text-zinc-400 mt-1">Open a live account starting from just $250 or practice in demo mode.</p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/register/live"
              className="px-6 py-3 rounded-full bg-[#B6F35A] text-[#0B0B0B] font-bold text-xs hover:bg-[#C4F675]"
            >
              Open Live Account ($250 Min)
            </Link>
            <Link
              to="/calculator"
              className="px-6 py-3 rounded-full bg-[#1A1A1A] text-white border border-[#2A2A2A] text-xs font-semibold"
            >
              Calculate Pips
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
