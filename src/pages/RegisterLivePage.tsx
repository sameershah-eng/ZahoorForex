import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight, CheckCircle2, AlertCircle, Loader2, Lock, ShieldAlert, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SITE_DATA } from '../data/site';

const liveRegisterSchema = z.object({
  fullName: z.string().min(2, 'Full legal name is required'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(6, 'Please enter a valid telephone number'),
  country: z.string().min(2, 'Please select your country of residence'),
  currency: z.enum(['USD', 'EUR', 'GBP']),
  initialDeposit: z.enum(['$250 - $1,000', '$1,000 - $5,000', '$5,000 - $25,000', '$25,000+']),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
  riskAgreement: z.boolean().refine((val) => val === true, {
    message: 'You must acknowledge the leveraged CFD risk disclosure',
  }),
});

type LiveRegisterFormData = z.infer<typeof liveRegisterSchema>;

export const RegisterLivePage: React.FC = () => {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LiveRegisterFormData>({
    resolver: zodResolver(liveRegisterSchema),
    defaultValues: {
      currency: 'USD',
      initialDeposit: '$250 - $1,000',
      riskAgreement: false,
    },
  });

  const onSubmit = async (data: LiveRegisterFormData) => {
    setSubmitting(true);
    setErrorMessage(null);

    const apiUrl = import.meta.env.VITE_API_URL;

    try {
      if (apiUrl) {
        const res = await fetch(`${apiUrl}/api/register/live`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error('Registration failed. Please verify your details.');
      } else {
        // Fallback simulation
        await new Promise((resolve) => setTimeout(resolve, 900));
      }

      setSuccess(true);
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.5 },
      });
    } catch (err: any) {
      setErrorMessage(err.message || 'An unexpected error occurred during account creation.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#0B0B0B]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141414] border border-[#2A2A2A] text-xs font-semibold text-[#B6F35A] mb-3">
            <Lock className="w-3.5 h-3.5" />
            <span>256-Bit SSL Encrypted Registration</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Open Live Account <span className="text-[#B6F35A]">($250 Min)</span>
          </h1>
          <p className="mt-2 text-sm text-zinc-400">
            Deploy live automated Expert Advisors with Tier-1 bank segregation and automated risk containment.
          </p>
        </div>

        {/* Regulatory Risk Notice */}
        <div className="mb-8 p-4 rounded-2xl bg-[#141414] border border-[#262626] flex items-start gap-3 text-xs text-zinc-300">
          <ShieldAlert className="w-5 h-5 text-[#B6F35A] shrink-0 mt-0.5" />
          <div>
            <strong className="text-white block font-semibold mb-0.5">Mandatory Risk Disclosure:</strong>
            {SITE_DATA.brand.riskWarning}
          </div>
        </div>

        {/* Form Container */}
        <div className="rounded-3xl bg-[#141414] border border-[#242424] p-6 sm:p-10 shadow-2xl">
          
          {success ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="w-16 h-16 rounded-full bg-[#B6F35A]/15 border-2 border-[#B6F35A] flex items-center justify-center text-[#B6F35A] mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-extrabold text-white mb-2">Live Account Created!</h2>
              <p className="text-xs sm:text-sm text-zinc-300 max-w-md mx-auto mb-6 leading-relaxed">
                Your credentials and MetaTrader EA connection instructions have been generated. You can now deposit funds starting from $250.
              </p>
              <div className="p-4 rounded-2xl bg-[#0B0B0B] border border-[#2A2A2A] max-w-sm mx-auto mb-8 text-xs text-left font-mono space-y-1">
                <div className="text-zinc-500">Account Type: <span className="text-white">Live Starter (EA Ready)</span></div>
                <div className="text-zinc-500">Status: <span className="text-[#B6F35A]">Active & Verified</span></div>
                <div className="text-zinc-500">Min Capital: <span className="text-white">$250 USD</span></div>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  to="/funds/deposit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#B6F35A] text-[#0B0B0B] font-bold text-sm hover:bg-[#C4F675] transition-all"
                >
                  Proceed to Deposit ($250 Min)
                </Link>
                <Link
                  to="/login"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#1A1A1A] border border-[#2A2A2A] text-white text-sm font-semibold hover:border-zinc-500 transition-all"
                >
                  Access Client Portal
                </Link>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              
              {errorMessage && (
                <div className="p-4 rounded-2xl bg-rose-500/15 border border-rose-500 text-rose-300 flex items-center gap-3 text-xs">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                    Full Legal Name *
                  </label>
                  <input
                    type="text"
                    {...register('fullName')}
                    placeholder="e.g. Johnathan Smith"
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
                    placeholder="john@example.com"
                    className="w-full bg-[#1A1A1A] border border-[#2A2A2A] focus:border-[#B6F35A] focus:ring-1 focus:ring-[#B6F35A] rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none"
                  />
                  {errors.email && (
                    <span className="text-xs text-rose-400 mt-1 block">{errors.email.message}</span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    {...register('phone')}
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-[#1A1A1A] border border-[#2A2A2A] focus:border-[#B6F35A] focus:ring-1 focus:ring-[#B6F35A] rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none"
                  />
                  {errors.phone && (
                    <span className="text-xs text-rose-400 mt-1 block">{errors.phone.message}</span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                    Country of Residence *
                  </label>
                  <select
                    {...register('country')}
                    className="w-full bg-[#1A1A1A] border border-[#2A2A2A] focus:border-[#B6F35A] focus:ring-1 focus:ring-[#B6F35A] rounded-xl px-4 py-3 text-sm text-white outline-none"
                  >
                    <option value="">Select country...</option>
                    <option value="United States">United States</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Germany">Germany</option>
                    <option value="Australia">Australia</option>
                    <option value="Canada">Canada</option>
                    <option value="Singapore">Singapore</option>
                    <option value="United Arab Emirates">United Arab Emirates</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.country && (
                    <span className="text-xs text-rose-400 mt-1 block">{errors.country.message}</span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                    Base Currency
                  </label>
                  <select
                    {...register('currency')}
                    className="w-full bg-[#1A1A1A] border border-[#2A2A2A] focus:border-[#B6F35A] focus:ring-1 focus:ring-[#B6F35A] rounded-xl px-4 py-3 text-sm text-white outline-none"
                  >
                    <option value="USD">USD - US Dollar</option>
                    <option value="EUR">EUR - Euro</option>
                    <option value="GBP">GBP - British Pound</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                    Planned Initial Deposit
                  </label>
                  <select
                    {...register('initialDeposit')}
                    className="w-full bg-[#1A1A1A] border border-[#2A2A2A] focus:border-[#B6F35A] focus:ring-1 focus:ring-[#B6F35A] rounded-xl px-4 py-3 text-sm text-white outline-none"
                  >
                    <option value="$250 - $1,000">$250 - $1,000 (Starter Live)</option>
                    <option value="$1,000 - $5,000">$1,000 - $5,000 (Growth Tier)</option>
                    <option value="$5,000 - $25,000">$5,000 - $25,000 (Advanced)</option>
                    <option value="$25,000+">$25,000+ (Institutional Pro)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                  Portal Password (8+ characters) *
                </label>
                <input
                  type="password"
                  {...register('password')}
                  placeholder="••••••••••••"
                  className="w-full bg-[#1A1A1A] border border-[#2A2A2A] focus:border-[#B6F35A] focus:ring-1 focus:ring-[#B6F35A] rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none"
                />
                {errors.password && (
                  <span className="text-xs text-rose-400 mt-1 block">{errors.password.message}</span>
                )}
              </div>

              {/* Checkbox agreement */}
              <div className="pt-2">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    {...register('riskAgreement')}
                    className="w-4 h-4 rounded bg-[#1A1A1A] border border-[#2A2A2A] text-[#B6F35A] focus:ring-[#B6F35A] mt-0.5 accent-[#B6F35A]"
                  />
                  <span className="text-xs text-zinc-400 leading-relaxed">
                    I acknowledge that CFDs are complex leveraged instruments and understand that automated EA trading involves significant risk of capital loss. I agree to the <Link to="/terms" className="text-[#B6F35A] underline">Terms of Service</Link> and <Link to="/risk-disclosure" className="text-[#B6F35A] underline">Risk Disclosure</Link>.
                  </span>
                </label>
                {errors.riskAgreement && (
                  <span className="text-xs text-rose-400 mt-1 block">{errors.riskAgreement.message}</span>
                )}
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 rounded-full bg-[#B6F35A] text-[#0B0B0B] font-bold text-sm hover:bg-[#C4F675] shadow-[0_0_25px_rgba(182,243,90,0.3)] flex items-center justify-center gap-2 transition-all disabled:opacity-50 mt-6"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Creating Live Account...</span>
                  </>
                ) : (
                  <>
                    <span>Complete Live Registration ($250 Min)</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="text-center pt-2 text-xs text-zinc-500">
                Want to test risk-free first? <Link to="/register/demo" className="text-[#B6F35A] hover:underline font-semibold">Open Free Demo Account ($10k)</Link>
              </div>

            </form>
          )}

        </div>

      </div>
    </div>
  );
};
