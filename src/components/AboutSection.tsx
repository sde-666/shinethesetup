import React from 'react';
import { AUDIENCE_LIST } from '../data/content';
import { 
  Lightbulb, 
  TrendingUp, 
  Users, 
  Quote, 
  Check, 
  X, 
  ArrowRight,
  GraduationCap,
  Building2,
  Sparkles
} from 'lucide-react';

interface AboutSectionProps {
  onContactClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onContactClick }) => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            About Shine the Setup
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            We Help Education <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Move Forward</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Technology should make teaching and running an educational institute easier — not more complicated.
          </p>
        </div>

        {/* Offline vs Digital Transformation Graphic Card */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-xl mb-16 overflow-hidden">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
              The Evolution
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
              Why Institutes Are Making The Shift
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* The Old Way */}
            <div className="bg-slate-800/60 rounded-2xl p-6 border border-slate-700/60">
              <div className="flex items-center gap-2 text-rose-400 text-xs font-bold uppercase tracking-wider mb-4">
                <X className="w-4 h-4" />
                The Offline Bottleneck
              </div>
              <ul className="space-y-3 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-1.5"></span>
                  <span>Students strictly limited to 3–5 kilometer local radius</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-1.5"></span>
                  <span>Hours spent printing notes, grading MCQs & manually logging attendance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-1.5"></span>
                  <span>Lost admission inquiries because parents couldn't find course details online</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-1.5"></span>
                  <span>Manual fee collection via paper receipts and cash reconciliation</span>
                </li>
              </ul>
            </div>

            {/* The Shine the Setup Way */}
            <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/40 rounded-2xl p-6 border border-indigo-500/30">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
                <Check className="w-4 h-4" />
                With Shine the Setup
              </div>
              <ul className="space-y-3 text-xs text-slate-200">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-1.5"></span>
                  <span>Students enroll and access study material 24/7 on Web & Android App</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-1.5"></span>
                  <span>Automated MCQ tests with instant grading & serial certificate generation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-1.5"></span>
                  <span>Instant UPI admission checkout + automated WhatsApp notification</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-1.5"></span>
                  <span>Authority educational YouTube presence bringing organic enrollments</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 3 Core Values */}
        <div className="mb-16">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Our Core Principles
            </span>
            <h3 className="text-2xl font-black text-slate-900 mt-1">
              Built on 3 Non-Negotiable Pillars
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 hover:border-indigo-200 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-700 mb-4">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-black text-slate-900">Simple & Usable</h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Technology should be practical and intuitive for institute directors, staff, and non-technical students alike. No convoluted setups.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 hover:border-indigo-200 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-700 mb-4">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-black text-slate-900">Growth-Focused</h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Every line of code and user interface we build has one metric: helping your institute improve admission reach, automate operations, or scale revenue.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 hover:border-indigo-200 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-700 mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-black text-slate-900">Education-First</h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                We understand teaching pedagogies, syllabus structuring, test timings, and batch workflows because we specialize exclusively in the education vertical.
              </p>
            </div>
          </div>
        </div>

        {/* Who We Help & Quote Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Who we help */}
          <div className="lg:col-span-7 bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200">
            <h3 className="text-xl font-black text-slate-900 mb-2">Who We Help</h3>
            <p className="text-xs text-slate-600 mb-6">
              Our priority is educational businesses and teachers who want to build a lasting digital asset.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {AUDIENCE_LIST.map((aud, idx) => (
                <div key={idx} className="bg-white p-3.5 rounded-2xl border border-slate-200/80">
                  <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-indigo-600" />
                    <span>{aud.title}</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1 leading-snug">{aud.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quote & CTA */}
          <div className="lg:col-span-5 bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 flex flex-col justify-between">
            <div>
              <Quote className="w-10 h-10 text-indigo-400/40 mb-4" />
              <blockquote className="text-base sm:text-lg font-bold text-white leading-snug">
                “Your institute already has the knowledge, the faculty, and the trust. We help build the digital infrastructure to deliver it.”
              </blockquote>
              <div className="text-xs text-indigo-400 font-semibold mt-3">
                — Shine the Setup Team
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800">
              <button
                onClick={onContactClick}
                className="w-full py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-md flex items-center justify-center gap-2"
              >
                <span>Discuss Your Institute's Requirements</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
