import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, ArrowRight, Home } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-[80vh] bg-[#0B0B0B] flex items-center justify-center">
      <div className="max-w-md mx-auto px-4 text-center">
        <div className="w-16 h-16 rounded-2xl bg-[#141414] border border-[#2A2A2A] flex items-center justify-center text-[#B6F35A] mx-auto mb-6">
          <AlertTriangle className="w-8 h-8" />
        </div>
        <div className="text-5xl font-mono font-black text-white mb-2">404</div>
        <h1 className="text-xl font-bold text-white mb-2">Page Not Found</h1>
        <p className="text-xs text-zinc-400 mb-8 leading-relaxed">
          The requested trading page or resource could not be found. Check the URL or return to our platform homepage.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#B6F35A] text-[#0B0B0B] font-bold text-xs hover:bg-[#C4F675] shadow-lg transition-all"
        >
          <Home className="w-4 h-4" />
          <span>Return to Homepage</span>
        </Link>
      </div>
    </div>
  );
};
