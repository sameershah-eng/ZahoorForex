import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const Preloader: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Only show on initial app load in this tab
    const hasLoaded = sessionStorage.getItem('fbp_initial_loaded');
    if (hasLoaded) {
      setLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem('fbp_initial_loaded', 'true');
    }, 1100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] bg-[#0B0B0B] flex flex-col items-center justify-center pointer-events-auto"
        >
          {/* Subtle lime glow background */}
          <div className="absolute w-72 h-72 rounded-full bg-[#B6F35A]/10 blur-3xl pointer-events-none" />

          {/* Logo Pulse */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: [0.95, 1.05, 1], opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex items-center gap-3 relative z-10"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#141414] border border-[#2A2A2A] shadow-xl flex items-center justify-center">
              <span className="font-extrabold text-[#B6F35A] text-2xl tracking-tighter">FB</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-extrabold text-2xl tracking-tight">
                ForexBank<span className="text-[#B6F35A]">Pro</span>
              </span>
              <span className="text-[11px] text-[#A1A1AA] uppercase tracking-widest font-semibold">
                Automated Execution
              </span>
            </div>
          </motion.div>

          {/* Lime progress line */}
          <div className="w-48 h-1 bg-[#1A1A1A] rounded-full overflow-hidden mt-8 relative z-10 border border-[#2A2A2A]">
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ repeat: Infinity, duration: 1.0, ease: 'easeInOut' }}
              className="w-1/2 h-full bg-[#B6F35A] rounded-full shadow-[0_0_12px_#B6F35A]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
