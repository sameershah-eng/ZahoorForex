import React from 'react';
import { Link } from 'react-router-dom';
import { Headphones, Server, FileText, ArrowRight, ShieldCheck } from 'lucide-react';

export const FundsClientServicesPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141414] border border-[#2A2A2A] text-xs font-semibold text-[#B6F35A] mb-3">
            <Headphones className="w-3.5 h-3.5" />
            <span>Dedicated Client Support</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Client Support & <span className="text-[#B6F35A]">Institutional Services</span>
          </h1>
          <p className="mt-3 text-base text-zinc-400">
            Dedicated account management, 24/5 technical assistance, and low-latency algorithmic VPS hosting engineered for high-uptime EA performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-8 rounded-3xl bg-[#141414] border border-[#242424]">
            <div className="w-12 h-12 rounded-2xl bg-[#1E1E1E] border border-[#2E2E2E] flex items-center justify-center text-[#B6F35A] mb-6">
              <Headphones className="w-6 h-6" />
            </div>
            <h2 className="text-lg font-bold text-white mb-2">24/5 Live Technical Support</h2>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Our engineering desk is online throughout global market trading hours to assist with EA configuration, order telemetry, and account verification.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#141414] border border-[#242424]">
            <div className="w-12 h-12 rounded-2xl bg-[#1E1E1E] border border-[#2E2E2E] flex items-center justify-center text-[#B6F35A] mb-6">
              <Server className="w-6 h-6" />
            </div>
            <h2 className="text-lg font-bold text-white mb-2">Ultra Low-Latency VPS</h2>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Co-located virtual private servers in Equinix LD4 (London) ensuring continuous 24-hour EA uptime without requiring your personal computer to stay on.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#141414] border border-[#242424]">
            <div className="w-12 h-12 rounded-2xl bg-[#1E1E1E] border border-[#2E2E2E] flex items-center justify-center text-[#B6F35A] mb-6">
              <FileText className="w-6 h-6" />
            </div>
            <h2 className="text-lg font-bold text-white mb-2">Comprehensive Reporting</h2>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Daily and monthly automated trade statement PDFs, tax accounting exports, and live drawdown analytics available directly inside your client portal.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/contact"
            className="px-8 py-3.5 rounded-full bg-[#B6F35A] text-[#0B0B0B] font-bold text-xs inline-flex items-center gap-2 hover:bg-[#C4F675]"
          >
            <span>Contact Client Support</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
};
