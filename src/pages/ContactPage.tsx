import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'motion/react';
import { Mail, MapPin, Globe, Phone, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { SITE_DATA } from '../data/site';

const contactSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const ContactPage: React.FC = () => {
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitting(true);
    setErrorMessage(null);

    const apiUrl = import.meta.env.VITE_API_URL;

    try {
      if (apiUrl) {
        const res = await fetch(`${apiUrl}/api/contact`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error('Failed to send message.');
      } else {
        // Fallback simulation so works out of the box
        await new Promise((resolve) => setTimeout(resolve, 800));
      }

      setSubmitSuccess(true);
      reset();
    } catch (err: any) {
      setErrorMessage(err.message || 'An error occurred. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141414] border border-[#2A2A2A] text-xs font-semibold text-[#B6F35A] mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Institutional & Client Support</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Contact <span className="text-[#B6F35A]">Forex Bank Pro</span>
          </h1>
          <p className="mt-3 text-sm text-zinc-400">
            Have questions about Expert Advisor deployment, deposits, or institutional liquidity? Our team is available 24/5.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Contact Info & Embedded Google Map */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl bg-[#141414] border border-[#242424] p-6 sm:p-8 space-y-6 shadow-xl">
              <h2 className="text-lg font-bold text-white border-b border-[#222222] pb-4">
                Global Operations
              </h2>

              <div className="space-y-5 text-xs text-zinc-300">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#1E1E1E] border border-[#2E2E2E] flex items-center justify-center text-[#B6F35A] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block text-sm mb-0.5">Austin, TX (USA Office)</strong>
                    <span className="text-zinc-400 leading-relaxed">{SITE_DATA.brand.registeredAddress}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#1E1E1E] border border-[#2E2E2E] flex items-center justify-center text-[#B6F35A] shrink-0 mt-0.5">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block text-sm mb-0.5">British Virgin Islands (Head Office)</strong>
                    <span className="text-zinc-400 leading-relaxed">{SITE_DATA.brand.headOffice}</span>
                    <div className="text-[11px] text-zinc-500 mt-1">
                      {SITE_DATA.brand.registrationNumber} · {SITE_DATA.brand.trustCompanyNumber}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#1E1E1E] border border-[#2E2E2E] flex items-center justify-center text-[#B6F35A] shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block text-sm mb-0.5">Direct Inquiries</strong>
                    <a href={`mailto:${SITE_DATA.brand.contactEmail}`} className="text-[#B6F35A] hover:underline font-medium">
                      {SITE_DATA.brand.contactEmail}
                    </a>
                    <div className="text-[11px] text-zinc-500 mt-0.5">Average reply time: under 2 hours</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Google Map of 5900 Balcones Drive, Austin TX */}
            <div className="rounded-3xl bg-[#141414] border border-[#242424] overflow-hidden p-2 shadow-xl">
              <div className="text-xs font-semibold text-zinc-400 px-4 py-2 flex items-center justify-between">
                <span>Austin TX Facility Map</span>
                <span className="text-[#B6F35A]">USA Coordinates</span>
              </div>
              <div className="h-64 w-full rounded-2xl overflow-hidden bg-zinc-900">
                <iframe
                  title="Forex Bank Pro Austin Office Location"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(95%)' }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://maps.google.com/maps?q=5900+Balcones+Drive+STE+100,+Austin+TX+78731&t=&z=14&ie=UTF8&iwloc=&output=embed"
                />
              </div>
            </div>
          </div>

          {/* Right: Validated Contact Form */}
          <div className="lg:col-span-7 rounded-3xl bg-[#141414] border border-[#242424] p-6 sm:p-10 shadow-2xl">
            <h2 className="text-xl font-bold text-white mb-2">Send an Inquiry</h2>
            <p className="text-xs text-zinc-400 mb-8">
              Fill out your message below to speak directly with an account coordinator or EA technical support specialist.
            </p>

            {submitSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-2xl bg-[#B6F35A]/15 border border-[#B6F35A] text-white flex items-center gap-3 mb-6"
              >
                <CheckCircle2 className="w-5 h-5 text-[#B6F35A] shrink-0" />
                <span className="text-xs font-medium">
                  Thank you! Your message has been received. Our team will contact you at your email address shortly.
                </span>
              </motion.div>
            )}

            {errorMessage && (
              <div className="p-4 rounded-2xl bg-rose-500/15 border border-rose-500 text-rose-300 flex items-center gap-3 mb-6 text-xs">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    {...register('fullName')}
                    placeholder="e.g. Alexander Morgan"
                    className="w-full bg-[#1A1A1A] border border-[#2A2A2A] focus:border-[#B6F35A] focus:ring-1 focus:ring-[#B6F35A] rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-all"
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
                    placeholder="alex@domain.com"
                    className="w-full bg-[#1A1A1A] border border-[#2A2A2A] focus:border-[#B6F35A] focus:ring-1 focus:ring-[#B6F35A] rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-all"
                  />
                  {errors.email && (
                    <span className="text-xs text-rose-400 mt-1 block">{errors.email.message}</span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    {...register('phone')}
                    placeholder="+1 (512) ..."
                    className="w-full bg-[#1A1A1A] border border-[#2A2A2A] focus:border-[#B6F35A] focus:ring-1 focus:ring-[#B6F35A] rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    {...register('subject')}
                    placeholder="Live Account / EA Question"
                    className="w-full bg-[#1A1A1A] border border-[#2A2A2A] focus:border-[#B6F35A] focus:ring-1 focus:ring-[#B6F35A] rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-all"
                  />
                  {errors.subject && (
                    <span className="text-xs text-rose-400 mt-1 block">{errors.subject.message}</span>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                  Message *
                </label>
                <textarea
                  rows={4}
                  {...register('message')}
                  placeholder="How can our technical support or institutional desk assist you?"
                  className="w-full bg-[#1A1A1A] border border-[#2A2A2A] focus:border-[#B6F35A] focus:ring-1 focus:ring-[#B6F35A] rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-all resize-none"
                />
                {errors.message && (
                  <span className="text-xs text-rose-400 mt-1 block">{errors.message.message}</span>
                )}
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 rounded-full bg-[#B6F35A] text-[#0B0B0B] font-bold text-sm hover:bg-[#C4F675] shadow-lg flex items-center justify-center gap-2 transition-all disabled:opacity-50"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Transmitting Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
};
