import React, { useState } from 'react';
import { Users, DollarSign, Award, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PartnershipAffiliatesPage: React.FC = () => {
  const [applied, setApplied] = useState(false);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141414] border border-[#2A2A2A] text-xs font-semibold text-[#B6F35A] mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>Introducing Brokers & Affiliates</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Introducing Broker <span className="text-[#B6F35A]">(IB) Program</span>
          </h1>
          <p className="mt-3 text-base text-zinc-400">
            Earn continuous volume rebates up to $15 per traded lot by introducing traders to Forex Bank Pro's automated Expert Advisor platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-8 rounded-3xl bg-[#141414] border border-[#242424]">
            <div className="text-2xl font-black font-mono text-[#B6F35A] mb-2">$15 / Lot</div>
            <h3 className="text-base font-bold text-white mb-2">Competitive Rebates</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Automated daily commission settlement paid straight into your multi-currency affiliate wallet with instant withdrawals.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#141414] border border-[#242424]">
            <div className="text-2xl font-black font-mono text-[#B6F35A] mb-2">Sub-IB Tiers</div>
            <h3 className="text-base font-bold text-white mb-2">Multi-Tier Network</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Earn secondary revenue on client volume referred by affiliates and introducing brokers within your downline network.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#141414] border border-[#242424]">
            <div className="text-2xl font-black font-mono text-[#B6F35A] mb-2">Real-Time</div>
            <h3 className="text-base font-bold text-white mb-2">Dedicated IB Portal</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Live click tracking, conversion funnels, deposit metrics, and marketing banners in your partner dashboard.
            </p>
          </div>
        </div>

        <div className="max-w-xl mx-auto rounded-3xl bg-[#141414] border border-[#242424] p-8 shadow-2xl">
          <h2 className="text-lg font-bold text-white mb-2">Register as an Introducing Broker</h2>
          <p className="text-xs text-zinc-400 mb-6">Start referring clients with dedicated affiliate tracking links.</p>

          {applied ? (
            <div className="p-4 rounded-2xl bg-[#B6F35A]/15 border border-[#B6F35A] text-white text-xs">
              Application submitted! Your IB tracking credentials will be sent to your email.
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setApplied(true); }} className="space-y-3">
              <input
                type="text"
                required
                placeholder="Full Name"
                className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl px-4 py-2.5 text-xs text-white outline-none focus:border-[#B6F35A]"
              />
              <input
                type="email"
                required
                placeholder="Email Address"
                className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl px-4 py-2.5 text-xs text-white outline-none focus:border-[#B6F35A]"
              />
              <input
                type="text"
                placeholder="Telegram / WhatsApp handle (Optional)"
                className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl px-4 py-2.5 text-xs text-white outline-none focus:border-[#B6F35A]"
              />
              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-[#B6F35A] text-[#0B0B0B] font-bold text-xs hover:bg-[#C4F675] transition-all"
              >
                Join IB Partner Network
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
