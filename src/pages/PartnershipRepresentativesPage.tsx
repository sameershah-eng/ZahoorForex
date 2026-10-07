import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, Globe2, CheckCircle2, ArrowRight } from 'lucide-react';
import { SITE_DATA } from '../data/site';

export const PartnershipRepresentativesPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141414] border border-[#2A2A2A] text-xs font-semibold text-[#B6F35A] mb-3">
            <Globe2 className="w-3.5 h-3.5" />
            <span>Global Regional Expansion</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Regional <span className="text-[#B6F35A]">Representatives</span> Program
          </h1>
          <p className="mt-3 text-base text-zinc-400">
            Establish a local Forex Bank Pro presence in your jurisdiction. Benefit from institutional branding, marketing budgets, and competitive revenue sharing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-7 space-y-6">
            <div className="rounded-3xl bg-[#141414] border border-[#242424] p-8 space-y-4">
              <h2 className="text-xl font-bold text-white">Representative Benefits</h2>
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-[#B6F35A] shrink-0 mt-0.5" />
                  <span><strong>Highest Tier Commission Sharing:</strong> Earn ongoing volume rebates on all trading turnover in your designated region.</span>
                </div>
                <div className="flex items-start gap-3 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-[#B6F35A] shrink-0 mt-0.5" />
                  <span><strong>Official Regional Office Co-Funding:</strong> Assistance with office setup, signage, and localized promotional events.</span>
                </div>
                <div className="flex items-start gap-3 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-[#B6F35A] shrink-0 mt-0.5" />
                  <span><strong>Dedicated Institutional Manager:</strong> Direct line to our corporate desk in Austin, TX and British Virgin Islands.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-3xl bg-[#141414] border border-[#242424] p-8">
            <h3 className="text-lg font-bold text-white mb-2">Apply as Representative</h3>
            <p className="text-xs text-zinc-400 mb-6">Submit your interest to establish an official regional branch.</p>

            {submitted ? (
              <div className="p-4 rounded-2xl bg-[#B6F35A]/15 border border-[#B6F35A] text-white text-xs">
                Thank you! Our institutional partnerships director will reach out within 24 hours.
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-3">
                <input
                  type="text"
                  required
                  placeholder="Your Full Name"
                  className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl px-4 py-2.5 text-xs text-white outline-none focus:border-[#B6F35A]"
                />
                <input
                  type="email"
                  required
                  placeholder="Corporate Email"
                  className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl px-4 py-2.5 text-xs text-white outline-none focus:border-[#B6F35A]"
                />
                <input
                  type="text"
                  required
                  placeholder="Proposed Country / City"
                  className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl px-4 py-2.5 text-xs text-white outline-none focus:border-[#B6F35A]"
                />
                <textarea
                  rows={3}
                  placeholder="Tell us about your local market experience..."
                  className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl px-4 py-2.5 text-xs text-white outline-none focus:border-[#B6F35A] resize-none"
                />
                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-[#B6F35A] text-[#0B0B0B] font-bold text-xs hover:bg-[#C4F675] transition-all"
                >
                  Submit Representative Application
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
