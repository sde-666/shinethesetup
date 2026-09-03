import React, { useState, useEffect } from 'react';
import { NavPage } from '../types';
import { Sparkles, Menu, X, ArrowUpRight, PhoneCall, ShieldCheck, ExternalLink } from 'lucide-react';

interface NavbarProps {
  currentPage: NavPage;
  onNavigate: (page: NavPage) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: NavPage; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'pricing', label: 'Pricing & Packages' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (page: NavPage) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top micro-banner */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-medium text-[11px] border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              2026 Batch Ready
            </span>
            <span className="hidden sm:inline text-slate-400">
              Empowering 120+ Coaching & Computer Institutes across India
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-slate-400">
            <a
              href="https://skilldotpy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-indigo-950/80 text-indigo-300 hover:text-white border border-indigo-700/60 font-semibold transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Live LMS: skilldotpy.com</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
            <span className="hidden md:flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
              100% Turnkey Source Code
            </span>
            <button
              onClick={() => handleLinkClick('contact')}
              className="text-indigo-400 hover:text-indigo-300 font-semibold flex items-center gap-1 transition-colors"
            >
              <PhoneCall className="w-3 h-3" />
              Direct Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
            : 'bg-white border-b border-slate-100 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-3 group text-left focus:outline-none"
            id="brand-logo-btn"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-700 flex items-center justify-center text-white font-extrabold text-lg shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              S
            </div>
            <div>
              <div className="flex items-center gap-1.5 font-bold text-slate-900 text-lg leading-tight">
                <span>Shine the Setup</span>
                <span className="w-2 h-2 rounded-full bg-indigo-600 inline-block"></span>
              </div>
              <p className="text-[11px] font-medium text-slate-500 tracking-tight hidden sm:block">
                Digital Infrastructure for Education
              </p>
            </div>
          </button>

          {/* Desktop Navigation Menu */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 p-1.5 rounded-full border border-slate-200/80">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-150 ${
                    isActive
                      ? 'bg-white text-indigo-700 shadow-sm font-bold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => handleLinkClick('contact')}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 transition-all shadow-sm shadow-indigo-600/30 hover:shadow-indigo-600/40 hover:-translate-y-0.5 active:translate-y-0"
              id="header-cta-btn"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => handleLinkClick('contact')}
              className="px-3 py-1.5 rounded-full text-xs font-bold text-white bg-indigo-600"
            >
              Talk
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          ></div>
          <div className="fixed top-[105px] right-4 left-4 bg-white rounded-2xl p-5 shadow-2xl border border-slate-200 z-50 max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col gap-1.5">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleLinkClick(item.id)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                      isActive
                        ? 'bg-indigo-50 text-indigo-700 font-bold border border-indigo-100'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-indigo-600"></span>}
                  </button>
                );
              })}
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href="https://skilldotpy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs shadow-sm"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Preview Live LMS: skilldotpy.com</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
              <button
                onClick={() => handleLinkClick('contact')}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-indigo-600 text-white font-bold text-sm shadow-md shadow-indigo-600/20"
              >
                <span>Transform My Institute</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <div className="text-center text-xs text-slate-400">
                Turn your offline institute into a modern digital brand
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
