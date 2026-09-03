import React from 'react';
import { NavPage, ServiceItem, PortfolioItem } from '../../types';
import { SERVICES_DATA } from '../../data/content';
import { ServiceCard } from '../ServiceCard';
import { PricingSection } from '../PricingSection';
import { PortfolioSection } from '../PortfolioSection';
import { ProcessSection } from '../ProcessSection';
import { AboutSection } from '../AboutSection';
import { ContactSection } from '../ContactSection';
import { SeoValueSection } from '../SeoValueSection';
import { 
  Sparkles, 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle, 
  ShieldCheck, 
  Users, 
  GraduationCap, 
  Smartphone,
  Globe,
  Youtube,
  Laptop,
  FileCheck2,
  Lock,
  Layers,
  ExternalLink
} from 'lucide-react';

interface HomeViewProps {
  onNavigate: (page: NavPage) => void;
  onOpenServiceModal: (service: ServiceItem) => void;
  onOpenPortfolioModal: (item: PortfolioItem) => void;
  onSelectServiceForInquiry: (serviceName: string) => void;
  selectedInquiryService?: string;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onOpenServiceModal,
  onOpenPortfolioModal,
  onSelectServiceForInquiry,
  selectedInquiryService,
}) => {
  return (
    <div className="space-y-0 animate-fadeIn">
      {/* Clean Text-Only Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-28 bg-radial-gradient">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          {/* Top Category Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100/90 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>Shine the Setup • Cheapest Website &amp; App Development for Education &amp; Computer Institutes</span>
          </div>

          {/* Main Hero Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12] mb-6">
            Turn Your <span className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-600 bg-clip-text text-transparent">Offline Institute</span> Into a Digital Brand.
          </h1>

          {/* Clean Sub-headline */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal mb-8">
            <strong className="font-semibold text-slate-800">Shine the Setup</strong> engineers the cheapest, most reliable digital technology your coaching or computer institute needs — custom websites, student Android apps, online CBT exam engines, and course selling LMS portals with 100% source code ownership and zero monthly fees.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 mb-6">
            <button
              id="hero-primary-cta-btn"
              onClick={() => onSelectServiceForInquiry('Complete Digital Setup')}
              className="px-8 py-4 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-xl shadow-indigo-600/25 hover:shadow-indigo-600/35 hover:-translate-y-0.5 transition-all flex items-center gap-2.5"
            >
              <span>Transform My Institute</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <a
              id="hero-preview-lms-btn"
              href="https://skilldotpy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-4 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-lg shadow-slate-900/15 transition-all hover:-translate-y-0.5 flex items-center gap-2.5 group"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Preview Live LMS: skilldotpy.com</span>
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
            </a>
            <button
              id="hero-secondary-cta-btn"
              onClick={() => onNavigate('services')}
              className="px-7 py-4 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm border border-slate-200 shadow-sm transition-all hover:border-slate-300 hover:-translate-y-0.5"
            >
              Explore Services &amp; Architecture
            </button>
          </div>

          {/* Live LMS Website Callout Pill */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-slate-200/80 shadow-2xs text-xs text-slate-600 mb-10 backdrop-blur-xs">
            <span className="font-semibold text-slate-700">Live Client LMS Website:</span>
            <a
              href="https://skilldotpy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-bold text-indigo-600 hover:text-indigo-800 underline underline-offset-2"
            >
              <span>skilldotpy.com</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span className="text-slate-400 hidden sm:inline">•</span>
            <span className="text-slate-500 hidden sm:inline">NIELIT O-Level &amp; CCC Educational Portal with CBT Tests &amp; PDF Notes</span>
          </div>

          {/* Trust Guarantees Strip */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs sm:text-sm font-semibold text-slate-600 mb-14">
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              <span>Full Source Code Ownership</span>
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              <span>Zero Recurring SaaS Per-Student Fees</span>
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              <span>14–21 Day Rapid Delivery</span>
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              <span>Dedicated Technical Support</span>
            </span>
          </div>

          {/* Clean 4-Pillar Text Matrix */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left pt-6 border-t border-slate-200/80">
            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-3">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-1">Institute Web Portals</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  High-converting websites with course syllabi, fee structures, faculty credentials, and instant admission inquiry funnels.
                </p>
              </div>
              <a
                href="https://skilldotpy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-800 pt-2 border-t border-slate-100 group"
              >
                <span>Preview Live LMS (skilldotpy.com)</span>
                <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1">Student Android Apps</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Custom-branded mobile apps with chapter-wise video players, offline PDF notes, and instant batch notice broadcasts.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1">Online CBT Exam Portals</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Timed MCQ test engines with real-time countdowns, automatic scorecards, zero-cheat monitoring, and practice sets.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-3">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1">Single Unified System</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Manage your website, app users, courses, test results, and student inquiries from one centralized administrative panel.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white border-t border-slate-200/80" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-3">
              One Partner • Complete Setup
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Everything Your Institute Needs to Go Digital
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Stop struggling with disconnected tools and expensive recurring SaaS lock-ins. Build one unified digital ecosystem tailored for your students and admissions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_DATA.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onOpenDetails={onOpenServiceModal}
                onSelectForInquiry={onSelectServiceForInquiry}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-colors"
            >
              <span>View Full Technical Architecture Breakdown</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* Pricing & Custom Stack Estimator */}
      <PricingSection onSelectPlan={onSelectServiceForInquiry} />

      {/* Portfolio Showcase */}
      <PortfolioSection
        onOpenCaseStudy={onOpenPortfolioModal}
        onSelectForInquiry={onSelectServiceForInquiry}
      />

      {/* 4-Step Process Timeline */}
      <ProcessSection onStartConsultation={() => onNavigate('about')} />

      {/* About Section */}
      <AboutSection onContactClick={() => onSelectServiceForInquiry('General Transformation Inquiry')} />

      {/* SEO Value & FAQ Section */}
      <SeoValueSection onSelectForInquiry={onSelectServiceForInquiry} />

      {/* Ready To Shine Banner */}
      <section className="py-16 bg-white border-t border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-12 text-center shadow-2xl relative overflow-hidden">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
              Ready To Shine?
            </span>
            <h2 className="text-2xl sm:text-4xl font-black mt-2 text-white">
              Let's build your institute's digital future today.
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mt-3 leading-relaxed">
              Tell us about your batch size, courses, and future milestones. We'll engineer the exact digital setup you need with zero guesswork.
            </p>
            <div className="mt-8">
              <button
                onClick={() => onSelectServiceForInquiry('Complete Digital Setup')}
                className="px-8 py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-indigo-600/30 inline-flex items-center gap-2"
              >
                <span>Start a Conversation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Contact & Inquiry Form */}
      <ContactSection initialService={selectedInquiryService} />
    </div>
  );
};
