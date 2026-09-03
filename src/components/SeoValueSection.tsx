import React, { useState } from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  ShieldCheck, 
  Sparkles, 
  ExternalLink,
  Zap,
  TrendingUp,
  DollarSign
} from 'lucide-react';

interface SeoValueSectionProps {
  onSelectForInquiry: (serviceName: string) => void;
}

export const SeoValueSection: React.FC<SeoValueSectionProps> = ({ onSelectForInquiry }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Why is Shine the Setup the cheapest website & app development service for computer and coaching institutes?",
      answer: "Most digital agencies charge over ₹1,00,000 for custom software, while SaaS providers (like Classplus or Teachmint) trap institutes with expensive recurring annual fees, charges per active student, and cuts on course sales. Shine the Setup eliminates all middlemen: we build your custom institute website, LMS portal, and Android mobile app at direct, low-cost flat rates starting from just ₹12,000 with 100% source code ownership and zero monthly per-student subscriptions."
    },
    {
      question: "Can I get an educational portal with online CBT exams, test series, and PDF notes like skilldotpy.com?",
      answer: "Yes! Skill.py (skilldotpy.com) is our live client production platform built for NIELIT O-Level and CCC computer students. It features chapter-wise PDF notes downloads, video lecture playlists, automated timed CBT mock tests with instant scorecards, and an AI doubt solver. We can deploy a similar or customized architecture for your institute in 14–21 business days."
    },
    {
      question: "Do I have to pay any monthly per-student fee or commission on course sales?",
      answer: "No, never. Unlike other education apps that demand ₹50–₹200 per student per month or take 3%–10% of your earnings, Shine the Setup provides complete source code and hosting handover. 100% of student fee payments flow directly into your own bank account via your direct UPI QR code or payment gateway with zero commissions."
    },
    {
      question: "Which educational institutes and coaching centers is Shine the Setup built for?",
      answer: "We specialize in computer training institutes (NIELIT, CCC, PGDCA, DCA, Tally, Python, Web Development, Typing), competitive exam coaching academies (SSC, Railway, Banking, Police, State PSC), school and college tuition centers, and independent YouTube educators looking to launch their own branded mobile app and course storefront."
    },
    {
      question: "How quickly does Shine the Setup deliver my website, LMS, or Android mobile app?",
      answer: "A standard responsive institute website is typically delivered in 5 to 7 business days. A full-scale LMS portal with CBT online exam engines and course selling is ready in 10 to 14 days, and a complete ecosystem including the custom Android student app is deployed in 14 to 21 business days."
    }
  ];

  return (
    <section className="py-20 bg-white border-t border-slate-200/80" id="why-cheapest">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with High-Relevance SEO Headings */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
            <DollarSign className="w-3.5 h-3.5 text-emerald-600" />
            <span>Most Cost-Effective Education Tech in India</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            The Cheapest &amp; Most Reliable Website &amp; App Development for Institutes
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            <strong className="text-slate-800 font-semibold">Shine the Setup</strong> delivers enterprise-grade digital infrastructure at transparent, budget-friendly rates. Own your complete technology without paying ongoing SaaS rent.
          </p>
        </div>

        {/* Comparison Table: Shine the Setup vs Others */}
        <div className="mb-16 overflow-hidden rounded-3xl border border-slate-200 shadow-sm bg-slate-50/50">
          <div className="p-6 bg-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Transparent Cost Comparison
              </span>
              <h3 className="text-lg sm:text-xl font-black text-white mt-1">
                How Shine the Setup Saves Your Institute ₹1,00,000+ Every Year
              </h3>
            </div>
            <a
              href="https://skilldotpy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-colors"
            >
              <span>Live Example: skilldotpy.com</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-100/90 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th className="p-4 sm:p-5">Feature &amp; Pricing Factor</th>
                  <th className="p-4 sm:p-5 bg-indigo-50/80 text-indigo-950 font-black border-x border-indigo-100">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      <span>Shine the Setup</span>
                    </div>
                  </th>
                  <th className="p-4 sm:p-5 text-slate-500">Subscription SaaS (Classplus, etc.)</th>
                  <th className="p-4 sm:p-5 text-slate-500">Traditional Software Agencies</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-slate-800">Upfront Investment</td>
                  <td className="p-4 sm:p-5 bg-indigo-50/40 font-bold text-emerald-700 border-x border-indigo-100">
                    Lowest Flat Price (From ₹12,000)
                  </td>
                  <td className="p-4 sm:p-5 text-slate-600">₹25,000 – ₹50,000 Annual Fee</td>
                  <td className="p-4 sm:p-5 text-slate-600">₹1,50,000+ Upfront Quote</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-slate-800">Monthly Per-Student Fees</td>
                  <td className="p-4 sm:p-5 bg-indigo-50/40 font-bold text-emerald-700 border-x border-indigo-100 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>₹0 (Unlimited Students)</span>
                  </td>
                  <td className="p-4 sm:p-5 text-slate-600 flex items-center gap-1.5">
                    <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                    <span>₹50 – ₹200 per active student</span>
                  </td>
                  <td className="p-4 sm:p-5 text-slate-600">Varies on server setup</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-slate-800">Source Code Ownership</td>
                  <td className="p-4 sm:p-5 bg-indigo-50/40 font-bold text-indigo-900 border-x border-indigo-100 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>100% Full Code Ownership</span>
                  </td>
                  <td className="p-4 sm:p-5 text-slate-600 flex items-center gap-1.5">
                    <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                    <span>0% (Rented platform lock-in)</span>
                  </td>
                  <td className="p-4 sm:p-5 text-slate-600">Extra fee for repository transfer</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-slate-800">Course Sale Commission</td>
                  <td className="p-4 sm:p-5 bg-indigo-50/40 font-bold text-emerald-700 border-x border-indigo-100 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>0% Commission (Direct UPI)</span>
                  </td>
                  <td className="p-4 sm:p-5 text-slate-600 flex items-center gap-1.5">
                    <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                    <span>3% to 10% platform cuts</span>
                  </td>
                  <td className="p-4 sm:p-5 text-slate-600">Gateway fees only</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-slate-800">Turnaround Time</td>
                  <td className="p-4 sm:p-5 bg-indigo-50/40 font-bold text-indigo-900 border-x border-indigo-100">
                    7 to 21 Business Days
                  </td>
                  <td className="p-4 sm:p-5 text-slate-600">Instant template with restrictions</td>
                  <td className="p-4 sm:p-5 text-slate-600">60 to 90 Days Average</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Frequently Asked Questions (FAQ) with Direct Answer Targets */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-indigo-600 mb-2">
              <HelpCircle className="w-4 h-4" />
              <span>Questions &amp; Answers</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
              Frequently Asked Questions About Shine the Setup
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Everything coaching directors and computer institute owners ask about pricing, delivery, and technology.
            </p>
          </div>

          <div className="space-y-3.5">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div 
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-indigo-600 transition-colors text-sm sm:text-base"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <span className="p-1 rounded-lg bg-slate-100 text-slate-500 shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Direct CTA Prompt inside SEO section */}
          <div className="mt-10 p-6 rounded-2xl bg-indigo-50/80 border border-indigo-100 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left">
              <div className="text-sm font-bold text-slate-900">Want a custom quotation for your computer or coaching institute?</div>
              <div className="text-xs text-slate-600">Tell us your courses and batch requirements for an immediate transparent estimate.</div>
            </div>
            <button
              onClick={() => onSelectForInquiry('Cheapest Website & App Package')}
              className="px-6 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-sm transition-all whitespace-nowrap"
            >
              Get Lowest Price Quote
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
