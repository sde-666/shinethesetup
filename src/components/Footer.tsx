import React from 'react';
import { NavPage } from '../types';
import { Sparkles, ArrowUp, MessageSquare, ShieldCheck, Mail } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: NavPage) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Col 1 & 2: Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-black text-base shadow-sm">
                S
              </div>
              <span className="text-lg font-black text-white tracking-tight">
                Shine the Setup
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              <strong className="text-slate-200 font-semibold">Shine the Setup</strong> delivers the cheapest and most reliable website, mobile app, and LMS development for computer institutes, coaching academies, and educators. 100% code ownership, zero monthly fees.
            </p>
            <div className="flex items-center gap-3 pt-1 text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                Accepting New Institute Setups
              </span>
            </div>
          </div>

          {/* Col 3: Services Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Solutions
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-indigo-400 transition-colors"
                >
                  LMS Website
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-indigo-400 transition-colors"
                >
                  Institute Website
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-indigo-400 transition-colors"
                >
                  Student Android App
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-indigo-400 transition-colors"
                >
                  Sell Courses Online
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-indigo-400 transition-colors"
                >
                  YouTube Educational Setup
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-indigo-400 transition-colors"
                >
                  Complete Digital Setup
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-indigo-400 transition-colors"
                >
                  Home Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('portfolio')}
                  className="hover:text-indigo-400 transition-colors"
                >
                  Portfolio & Blueprints
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('pricing')}
                  className="hover:text-indigo-400 transition-colors"
                >
                  Transparent Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-indigo-400 transition-colors"
                >
                  About Our Mission
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-indigo-400 transition-colors"
                >
                  Contact & Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Direct Connect */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Support & Connect
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Have questions regarding server hosting, course DRM, or app store publishing?
            </p>
            <div className="space-y-2 pt-1">
              <a
                href="mailto:AdityaPathak776@gmail.com"
                className="flex items-center gap-2 text-xs text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>AdityaPathak776@gmail.com</span>
              </a>
              <button
                onClick={() => onNavigate('contact')}
                className="w-full py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors border border-slate-700/60"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>Book Instant Consultation</span>
              </button>
            </div>
          </div>
        </div>

        {/* SEO Category & Footprint Tags */}
        <div className="pt-8 pb-6 border-t border-slate-800/80 text-[11px] text-slate-500">
          <div className="font-semibold text-slate-400 mb-2">Category Focus:</div>
          <p className="leading-relaxed text-slate-400/90">
            Cheapest website development for education • Cheapest app development for coaching institutes • Low cost computer institute website &amp; app developer • Affordable LMS portal with timed CBT online exam software • NIELIT O-Level &amp; CCC educational web setup (Live client reference: <a href="https://skilldotpy.com" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2">skilldotpy.com</a>) • 100% turnkey source code ownership • Zero monthly per-student SaaS fees.
          </p>
        </div>

        {/* Bottom copyright bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span>© 2026 Shine the Setup. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline flex items-center gap-1 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
              100% Turnkey Code Handover
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors flex items-center gap-1 text-xs"
              aria-label="Scroll to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
