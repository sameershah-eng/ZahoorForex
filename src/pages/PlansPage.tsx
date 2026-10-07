import React from 'react';
import { Link } from 'react-router-dom';
import { Check, X, ShieldAlert, Sparkles, ArrowRight } from 'lucide-react';
import { SITE_DATA } from '../data/site';

export const PlansPage: React.FC = () => {
  const comparisonRows = [
    { feature: "Minimum Deposit", demo: "$0", starter: "$250 USD", pro: "[Add tier] USD" },
    { feature: "Automated EA Execution", demo: "Simulated", starter: "Live Active", pro: "Live Priority VIP" },
    { feature: "Spreads on EUR/USD", demo: "Standard 1.2 pips", starter: "From 0.8 pips", pro: "Raw from 0.0 pips" },
    { feature: "Leverage Range", demo: "Up to 1:100", starter: "Up to 1:100", pro: "Custom institutional" },
    { feature: "Segregated Tier-1 Bank Account", demo: "No (Virtual)", starter: "Yes (Fully Segregated)", pro: "Yes (Dedicated Custody)" },
    { feature: "Negative Balance Protection", demo: "N/A", starter: "Included Guaranteed", pro: "Included Guaranteed" },
    { feature: "Equinix LD4 Low-Latency VPS", demo: "Optional Add-on", starter: "Available", pro: "Included Free" },
    { feature: "Dedicated Account Representative", demo: "Community Help", starter: "24/5 Tech Support", pro: "1-on-1 Senior Director" },
    { feature: "Multi-Account (MAM/PAMM) Access", demo: "No", starter: "Standard", pro: "Full Unrestricted" },
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141414] border border-[#2A2A2A] text-xs font-semibold text-[#B6F35A] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparent Account Structures</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Account Tiers & <span className="text-[#B6F35A]">Specifications</span>
          </h1>
          <p className="mt-3 text-sm text-zinc-400">
            Choose the tier tailored to your capital profile. Start with a $0 demo or live automated execution from $250.
          </p>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {SITE_DATA.pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-3xl p-8 flex flex-col justify-between ${
                plan.highlighted
                  ? 'bg-[#151A12] border-2 border-[#B6F35A] shadow-[0_0_35px_rgba(182,243,90,0.18)]'
                  : 'bg-[#141414] border border-[#242424]'
              }`}
            >
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                  {plan.name}
                </div>
                <div className="text-4xl font-mono font-extrabold text-white mb-1">
                  {plan.price}
                </div>
                <div className="text-xs text-zinc-400 mb-6">{plan.minDeposit}</div>
                <p className="text-xs text-zinc-300 leading-relaxed mb-6">{plan.tagline}</p>
              </div>

              <div>
                <Link
                  to={plan.ctaHref}
                  className={`w-full py-3 px-6 rounded-full font-bold text-xs flex items-center justify-center gap-2 transition-all ${
                    plan.highlighted
                      ? 'bg-[#B6F35A] text-[#0B0B0B] hover:bg-[#C4F675]'
                      : 'bg-[#222222] text-white hover:bg-[#2A2A2A]'
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Comparison Table */}
        <div className="rounded-3xl bg-[#141414] border border-[#242424] overflow-hidden p-6 sm:p-8 shadow-2xl mb-16">
          <h2 className="text-xl font-bold text-white mb-6">Detailed Specifications Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-[#242424] text-zinc-400">
                  <th className="py-4 px-4 font-semibold uppercase">Feature / Parameter</th>
                  <th className="py-4 px-4 font-semibold uppercase">Free Demo</th>
                  <th className="py-4 px-4 font-semibold uppercase text-[#B6F35A]">Starter Live ($250)</th>
                  <th className="py-4 px-4 font-semibold uppercase">Pro Institutional</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1F1F1F]">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#1A1A1A]/50 transition-colors">
                    <td className="py-3.5 px-4 font-semibold text-white">{row.feature}</td>
                    <td className="py-3.5 px-4 text-zinc-400">{row.demo}</td>
                    <td className="py-3.5 px-4 font-bold text-[#B6F35A]">{row.starter}</td>
                    <td className="py-3.5 px-4 text-zinc-300">{row.pro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Regulatory Risk Notice */}
        <div className="p-6 rounded-3xl bg-[#121212] border border-[#242424] flex items-start gap-3 text-xs text-zinc-400">
          <ShieldAlert className="w-5 h-5 text-[#B6F35A] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-white block font-semibold mb-1">Compliance & Leverage Notice:</strong>
            {SITE_DATA.brand.riskWarning}
          </p>
        </div>

      </div>
    </div>
  );
};
