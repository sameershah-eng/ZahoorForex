import React from 'react';
import { Link } from 'react-router-dom';
import { Layers, ArrowRight, ShieldCheck } from 'lucide-react';

export const ProductsShareCfdsPage: React.FC = () => {
  const shares = [
    { ticker: 'AAPL', company: 'Apple Inc.', exchange: 'NASDAQ', leverage: '1:20' },
    { ticker: 'NVDA', company: 'NVIDIA Corporation', exchange: 'NASDAQ', leverage: '1:20' },
    { ticker: 'MSFT', company: 'Microsoft Corporation', exchange: 'NASDAQ', leverage: '1:20' },
    { ticker: 'TSLA', company: 'Tesla Inc.', exchange: 'NASDAQ', leverage: '1:20' },
    { ticker: 'AMZN', company: 'Amazon.com Inc.', exchange: 'NASDAQ', leverage: '1:20' },
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141414] border border-[#2A2A2A] text-xs font-semibold text-[#B6F35A] mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Global Equities CFDs</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Trade Global <span className="text-[#B6F35A]">Share CFDs</span>
          </h1>
          <p className="mt-3 text-base text-zinc-400">
            Gain exposure to global corporate giants with fast order execution, long/short flexibility, and zero physical custody overhead.
          </p>
        </div>

        <div className="rounded-3xl bg-[#141414] border border-[#242424] p-6 sm:p-8 mb-12">
          <h2 className="text-lg font-bold text-white mb-4">Leading Global Stock CFDs</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-[#242424] text-zinc-400">
                  <th className="py-3 px-4 font-semibold">Ticker</th>
                  <th className="py-3 px-4 font-semibold">Corporation</th>
                  <th className="py-3 px-4 font-semibold">Primary Exchange</th>
                  <th className="py-3 px-4 font-semibold text-[#B6F35A]">Leverage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1F1F1F]">
                {shares.map((s) => (
                  <tr key={s.ticker} className="hover:bg-[#1A1A1A] transition-colors">
                    <td className="py-3 px-4 font-mono font-bold text-[#B6F35A]">{s.ticker}</td>
                    <td className="py-3 px-4 text-white font-medium">{s.company}</td>
                    <td className="py-3 px-4 text-zinc-400">{s.exchange}</td>
                    <td className="py-3 px-4 text-zinc-300 font-mono">{s.leverage}</td>
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
            <span>Open Account ($250 Min)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
};
