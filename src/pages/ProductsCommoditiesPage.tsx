import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';

export const ProductsCommoditiesPage: React.FC = () => {
  const commodities = [
    { symbol: 'XAU/USD', name: 'Spot Gold / USD', contract: '100 oz', typicalSpread: '0.8 pips' },
    { symbol: 'XAG/USD', name: 'Spot Silver / USD', contract: '5,000 oz', typicalSpread: '1.5 pips' },
    { symbol: 'USOIL', name: 'WTI Crude Oil', contract: '1,000 barrels', typicalSpread: '2.5 pips' },
    { symbol: 'UKOIL', name: 'Brent Crude Oil', contract: '1,000 barrels', typicalSpread: '2.8 pips' },
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141414] border border-[#2A2A2A] text-xs font-semibold text-[#B6F35A] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Commodities & Precious Metals</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Trade Precious Metals & <span className="text-[#B6F35A]">Energies</span>
          </h1>
          <p className="mt-3 text-base text-zinc-400">
            Hedge macro inflationary shocks and volatility with Gold, Silver, and Crude Oil CFDs powered by automated Expert Advisors.
          </p>
        </div>

        <div className="rounded-3xl bg-[#141414] border border-[#242424] p-6 sm:p-8 mb-12">
          <h2 className="text-lg font-bold text-white mb-4">Commodity Contracts</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-[#242424] text-zinc-400">
                  <th className="py-3 px-4 font-semibold">Symbol</th>
                  <th className="py-3 px-4 font-semibold">Commodity</th>
                  <th className="py-3 px-4 font-semibold">Standard Contract Size</th>
                  <th className="py-3 px-4 font-semibold text-[#B6F35A]">Typical Spread</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1F1F1F]">
                {commodities.map((c) => (
                  <tr key={c.symbol} className="hover:bg-[#1A1A1A] transition-colors">
                    <td className="py-3 px-4 font-mono font-bold text-[#B6F35A]">{c.symbol}</td>
                    <td className="py-3 px-4 text-white font-medium">{c.name}</td>
                    <td className="py-3 px-4 text-zinc-400">{c.contract}</td>
                    <td className="py-3 px-4 font-mono text-zinc-300">{c.typicalSpread}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/register/live"
            className="px-8 py-3.5 rounded-full bg-[#B6F35A] text-[#0B0B0B] font-bold text-xs inline-flex items-center gap-2 hover:bg-[#C4F675]"
          >
            <span>Trade Commodities from $250</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
};
