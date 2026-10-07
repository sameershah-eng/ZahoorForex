import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Lock, Building, FileCheck2, ArrowRight } from 'lucide-react';
import { SITE_DATA } from '../data/site';

export const FundsSafetyPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141414] border border-[#2A2A2A] text-xs font-semibold text-[#B6F35A] mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Fiduciary Custody Standards</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Safety of <span className="text-[#B6F35A]">Client Funds</span>
          </h1>
          <p className="mt-3 text-base text-zinc-400">
            At Forex Bank Pro, client capital security is our foundational pillar. We employ institutional segregation, regulatory compliance, and negative balance protection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-8 rounded-3xl bg-[#141414] border border-[#242424]">
            <div className="w-12 h-12 rounded-2xl bg-[#1E1E1E] border border-[#2E2E2E] flex items-center justify-center text-[#B6F35A] mb-6">
              <Building className="w-6 h-6" />
            </div>
            <h2 className="text-lg font-bold text-white mb-2">Segregated Bank Accounts</h2>
            <p className="text-xs text-zinc-400 leading-relaxed">
              100% of client balances are held in segregated trust accounts at Tier-1 credit institutions. Client money is never co-mingled with corporate operating expenses or used for operational hedging.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#141414] border border-[#242424]">
            <div className="w-12 h-12 rounded-2xl bg-[#1E1E1E] border border-[#2E2E2E] flex items-center justify-center text-[#B6F35A] mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h2 className="text-lg font-bold text-white mb-2">Negative Balance Protection</h2>
            <p className="text-xs text-zinc-400 leading-relaxed">
              We guarantee that your account balance can never drop below zero during extreme market shocks or gap events. Your downside liability is strictly limited to your deposited funds.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#141414] border border-[#242424]">
            <div className="w-12 h-12 rounded-2xl bg-[#1E1E1E] border border-[#2E2E2E] flex items-center justify-center text-[#B6F35A] mb-6">
              <FileCheck2 className="w-6 h-6" />
            </div>
            <h2 className="text-lg font-bold text-white mb-2">Regulatory Audits</h2>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Operating under British Virgin Islands registration #{SITE_DATA.brand.registrationNumber} and US business operations, our financial books undergo regular independent balance sheet reconciliations.
            </p>
          </div>
        </div>

        <div className="p-8 rounded-3xl bg-[#141414] border border-[#242424] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-white">Experience secure algorithmic trading</h3>
            <p className="text-xs text-zinc-400 mt-1">Start with a Live Starter Account from $250 or practice in Demo mode.</p>
          </div>
          <Link
            to="/register/live"
            className="px-8 py-3.5 rounded-full bg-[#B6F35A] text-[#0B0B0B] font-bold text-xs hover:bg-[#C4F675]"
          >
            Open Live Account ($250 Min)
          </Link>
        </div>

      </div>
    </div>
  );
};
