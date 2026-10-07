import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { CheckCircle2, AlertCircle, Loader2, Play, Sparkles, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

const demoSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  virtualBalance: z.enum(['$10,000', '$25,000', '$50,000']),
});

type DemoFormData = z.infer<typeof demoSchema>;

export const RegisterDemoPage: React.FC = () => {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DemoFormData>({
    resolver: zodResolver(demoSchema),
    defaultValues: {
      virtualBalance: '$10,000',
    },
  });

  const onSubmit = async (data: DemoFormData) => {
    setSubmitting(true);
    setErrorMessage(null);

    const apiUrl = import.meta.env.VITE_API_URL;
    try {
      if (apiUrl) {
        const res = await fetch(`${apiUrl}/api/register/demo`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error('Demo registration failed.');
      } else {
        await new Promise((resolve) => setTimeout(resolve, 600));
      }

      setSuccess(true);
      confetti({ particleCount: 70, spread: 60 });
    } catch (err: any) {
      setErrorMessage(err.message || 'Error creating demo profile.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#0B0B0B]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141414] border border-[#2A2A2A] text-xs font-semibold text-[#B6F35A] mb-3">
            <Play className="w-3.5 h-3.5" />
            <span>100% Risk-Free Simulation</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Try Free <span className="text-[#B6F35A]">Demo Account</span>
          </h1>
          <p className="mt-2 text-sm text-zinc-400">
            Practice with $10,000 in virtual funds and observe automated Expert Advisor logic without risking real capital.
          </p>
        </div>

        <div className="rounded-3xl bg-[#141414] border border-[#242424] p-6 sm:p-10 shadow-2xl">
          {success ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-6"
            >
              <div className="w-16 h-16 rounded-full bg-[#B6F35A]/15 border-2 border-[#B6F35A] flex items-center justify-center text-[#B6F35A] mx-auto mb-5">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Demo Account Ready!</h2>
              <p className="text-xs text-zinc-400 max-w-sm mx-auto mb-6">
                Your sandbox environment has been credited with $10,000 virtual balance and live market feeds.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  to="/calculator"
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#B6F35A] text-[#0B0B0B] font-bold text-xs"
                >
                  Test in FX Calculator
                </Link>
                <Link
                  to="/register/live"
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#1A1A1A] border border-[#2A2A2A] text-white text-xs font-semibold"
                >
                  Switch to Live Account ($250 Min)
                </Link>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {errorMessage && (
                <div className="p-3 rounded-xl bg-rose-500/15 border border-rose-500 text-rose-300 text-xs">
                  {errorMessage}
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  {...register('fullName')}
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full bg-[#1A1A1A] border border-[#2A2A2A] focus:border-[#B6F35A] focus:ring-1 focus:ring-[#B6F35A] rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none"
                />
                {errors.fullName && (
                  <span className="text-xs text-rose-400 mt-1 block">{errors.fullName.message}</span>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  {...register('email')}
                  placeholder="sarah@example.com"
                  className="w-full bg-[#1A1A1A] border border-[#2A2A2A] focus:border-[#B6F35A] focus:ring-1 focus:ring-[#B6F35A] rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none"
                />
                {errors.email && (
                  <span className="text-xs text-rose-400 mt-1 block">{errors.email.message}</span>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                  Virtual Capital Amount
                </label>
                <select
                  {...register('virtualBalance')}
                  className="w-full bg-[#1A1A1A] border border-[#2A2A2A] focus:border-[#B6F35A] focus:ring-1 focus:ring-[#B6F35A] rounded-xl px-4 py-3 text-sm text-white outline-none"
                >
                  <option value="$10,000">$10,000 Virtual Balance (Standard)</option>
                  <option value="$25,000">$25,000 Virtual Balance</option>
                  <option value="$50,000">$50,000 Virtual Balance</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 rounded-full bg-[#B6F35A] text-[#0B0B0B] font-bold text-sm hover:bg-[#C4F675] shadow-lg flex items-center justify-center gap-2 transition-all disabled:opacity-50 mt-6"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Allocating Demo Account...</span>
                  </>
                ) : (
                  <>
                    <span>Create Free Demo Account</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
