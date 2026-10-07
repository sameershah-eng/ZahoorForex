import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import { Lock, LogIn, CheckCircle2, AlertCircle, Loader2, ArrowRight } from 'lucide-react';

const loginSchema = z.object({
  email: z.string().email('Please enter a valid email'),
  password: z.string().min(6, 'Password is required'),
  rememberMe: z.boolean().optional(),
});

type LoginFormData = z.infer<typeof loginSchema>;

export const LoginPage: React.FC = () => {
  const [submitting, setSubmitting] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    setSubmitting(true);
    setErrorMessage(null);

    const apiUrl = import.meta.env.VITE_API_URL;
    try {
      if (apiUrl) {
        const res = await fetch(`${apiUrl}/api/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error('Invalid email or password.');
      } else {
        await new Promise((resolve) => setTimeout(resolve, 800));
      }

      setLoggedIn(true);
    } catch (err: any) {
      setErrorMessage(err.message || 'Login failed.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#0B0B0B] flex items-center justify-center">
      <div className="max-w-md w-full mx-auto px-4">
        
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-2xl bg-[#141414] border border-[#2A2A2A] flex items-center justify-center text-[#B6F35A] mx-auto mb-4">
            <Lock className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-extrabold text-white">Client Portal Login</h1>
          <p className="text-xs text-zinc-400 mt-1">Access your automated EA portfolio & reports</p>
        </div>

        <div className="rounded-3xl bg-[#141414] border border-[#242424] p-8 shadow-2xl">
          {loggedIn ? (
            <div className="text-center py-6">
              <div className="w-12 h-12 rounded-full bg-[#B6F35A]/15 border border-[#B6F35A] flex items-center justify-center text-[#B6F35A] mx-auto mb-4">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h2 className="text-lg font-bold text-white mb-2">Welcome Back!</h2>
              <p className="text-xs text-zinc-400 mb-6">
                Connected to MetaTrader EA live feeds. Redirecting to dashboard...
              </p>
              <Link
                to="/"
                className="w-full py-3 rounded-full bg-[#B6F35A] text-[#0B0B0B] font-bold text-xs inline-flex items-center justify-center"
              >
                Return to Overview
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {errorMessage && (
                <div className="p-3 rounded-xl bg-rose-500/15 border border-rose-500 text-rose-300 text-xs">
                  {errorMessage}
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                  Account Email
                </label>
                <input
                  type="email"
                  {...register('email')}
                  placeholder="trader@domain.com"
                  className="w-full bg-[#1A1A1A] border border-[#2A2A2A] focus:border-[#B6F35A] focus:ring-1 focus:ring-[#B6F35A] rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none"
                />
                {errors.email && (
                  <span className="text-xs text-rose-400 mt-1 block">{errors.email.message}</span>
                )}
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">
                    Password
                  </label>
                  <Link to="/contact" className="text-[11px] text-[#B6F35A] hover:underline">
                    Forgot password?
                  </Link>
                </div>
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

              <div className="flex items-center justify-between text-xs text-zinc-400 pt-1">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    {...register('rememberMe')}
                    className="w-3.5 h-3.5 rounded bg-[#1A1A1A] border border-[#2A2A2A] accent-[#B6F35A]"
                  />
                  <span>Remember this device</span>
                </label>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3.5 rounded-full bg-[#B6F35A] text-[#0B0B0B] font-bold text-sm hover:bg-[#C4F675] shadow-lg flex items-center justify-center gap-2 transition-all disabled:opacity-50 mt-4"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Verifying...</span>
                  </>
                ) : (
                  <>
                    <LogIn className="w-4 h-4" />
                    <span>Sign In to Portal</span>
                  </>
                )}
              </button>

              <div className="text-center pt-4 border-t border-[#222222] text-xs text-zinc-400">
                Don't have an account yet?{' '}
                <Link to="/register/live" className="text-[#B6F35A] hover:underline font-bold">
                  Open Live Account ($250 Min)
                </Link>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
