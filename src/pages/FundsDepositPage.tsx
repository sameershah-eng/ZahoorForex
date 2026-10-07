import React from 'react';
import { Link } from 'react-router-dom';
import { CreditCard, Wallet, Banknote, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { SITE_DATA } from '../data/site';

export const FundsDepositPage: React.FC = () => {
  const methods = [
    { name: 'Credit & Debit Cards (Visa / Mastercard)', fee: '0% Free', processing: 'Instant (Under 60 sec)', min: '$250 USD' },
    { name: 'Bank Wire Transfer (SWIFT / SEPA)', fee: '0% Free', processing: '1 - 2 Business Days', min: '$250 USD' },
    { name: 'Cryptocurrency (USDT TRC20/ERC20, BTC)', fee: '0% Free', processing: 'Instant (Blockchain Confirms)', min: '$250 USD' },
    { name: 'Electronic Wallets (Neteller, Skrill)', fee: '0% Free', processing: 'Instant', min: '$250 USD' },
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141414] border border-[#2A2A2A] text-xs font-semibold text-[#B6F35A] mb-3">
            <CreditCard className="w-3.5 h-3.5" />
            <span>Fast & Secure Gateways</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Deposit & <span className="text-[#B6F35A]">Withdrawal</span>
          </h1>
          <p className="mt-3 text-base text-zinc-400">
            Fund your trading account seamlessly from $250 with zero deposit fees and 24/7 automated withdrawal request processing.
          </p>
        </div>

        <div className="rounded-3xl bg-[#141414] border border-[#242424] p-6 sm:p-8 mb-12 shadow-2xl">
          <h2 className="text-lg font-bold text-white mb-6">Payment Gateways & Speed</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-[#242424] text-zinc-400">
                  <th className="py-3 px-4 font-semibold uppercase">Method</th>
                  <th className="py-3 px-4 font-semibold uppercase text-[#B6F35A]">Deposit Fee</th>
                  <th className="py-3 px-4 font-semibold uppercase">Processing Speed</th>
                  <th className="py-3 px-4 font-semibold uppercase">Minimum Deposit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1F1F1F]">
                {methods.map((m, idx) => (
                  <tr key={idx} className="hover:bg-[#1A1A1A] transition-colors">
                    <td className="py-3.5 px-4 font-bold text-white">{m.name}</td>
                    <td className="py-3.5 px-4 font-mono text-[#B6F35A] font-bold">{m.fee}</td>
                    <td className="py-3.5 px-4 text-zinc-300">{m.processing}</td>
                    <td className="py-3.5 px-4 text-zinc-400 font-mono">{m.min}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="p-8 rounded-3xl bg-[#141414] border border-[#242424] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-white">Ready to fund your live account?</h3>
            <p className="text-xs text-zinc-400 mt-1">Start from $250 with instant credit and zero platform fees.</p>
          </div>
          <Link
            to="/register/live"
            className="px-8 py-3.5 rounded-full bg-[#B6F35A] text-[#0B0B0B] font-bold text-xs hover:bg-[#C4F675]"
          >
            Deposit & Open Live Account ($250 Min)
          </Link>
        </div>

      </div>
    </div>
  );
};
