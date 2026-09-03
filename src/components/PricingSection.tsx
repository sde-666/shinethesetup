import React, { useState } from 'react';
import { PRICING_DATA } from '../data/content';
import { 
  Check, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  Calculator, 
  Zap, 
  Info,
  Calendar
} from 'lucide-react';

interface PricingSectionProps {
  onSelectPlan: (planName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  // Interactive Custom Bundle Builder
  const [selectedServices, setSelectedServices] = useState<{ [key: string]: boolean }>({
    website: true,
    lms: true,
    app: false,
    youtube: false,
  });

  const bundleOptions = [
    { id: 'website', name: 'Institute Website', original: 16000, price: 12000, days: 6 },
    { id: 'lms', name: 'Course Selling LMS', original: 50000, price: 40000, days: 12 },
    { id: 'app', name: 'Student Android App', original: 75000, price: 50000, days: 16 },
    { id: 'youtube', name: 'Educational YouTube Setup', original: 10000, price: 6000, days: 5 },
  ];

  const toggleBundleItem = (id: string) => {
    setSelectedServices(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const selectedCount = Object.values(selectedServices).filter(Boolean).length;
  const totalOriginal = bundleOptions.reduce((acc, opt) => selectedServices[opt.id] ? acc + opt.original : acc, 0);
  let totalCalculated = bundleOptions.reduce((acc, opt) => selectedServices[opt.id] ? acc + opt.price : acc, 0);

  // If 4 items selected, provide special Complete Ecosystem bundle price ₹80,000 (instead of 108,000)
  if (selectedCount === 4) {
    totalCalculated = 80000;
  } else if (selectedCount >= 3) {
    // 5% extra bundle incentive
    totalCalculated = Math.round(totalCalculated * 0.95);
  }

  const calculatedSavings = totalOriginal - totalCalculated;
  const maxDays = Math.max(...bundleOptions.filter(o => selectedServices[o.id]).map(o => o.days), 7);

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200/80" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-100/80 border border-indigo-200 text-indigo-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Simple & Transparent
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Our Digital Setup Packages
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Clear, honest pricing for institutes ready to transition from manual offline work to a professional digital brand.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {PRICING_DATA.map((plan) => {
            const isFeatured = plan.featured;
            const isPopular = plan.popular;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between ${
                  isFeatured
                    ? 'bg-slate-900 text-white border-2 border-indigo-500 shadow-xl shadow-indigo-500/15 ring-4 ring-indigo-500/10 lg:col-span-2'
                    : isPopular
                    ? 'bg-white border-2 border-indigo-600 shadow-xl shadow-indigo-600/10'
                    : 'bg-white border border-slate-200 shadow-sm hover:shadow-md'
                }`}
              >
                {/* Badge if Popular or Featured */}
                {isPopular && (
                  <div className="absolute top-0 right-7 -translate-y-1/2 px-3 py-1 rounded-full bg-indigo-600 text-white text-[11px] font-extrabold uppercase tracking-wider shadow-sm">
                    Most Popular
                  </div>
                )}
                {isFeatured && (
                  <div className="absolute top-0 right-7 -translate-y-1/2 px-3.5 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-[11px] font-extrabold uppercase tracking-wider shadow-md">
                    ★ All-in-One Full Ecosystem
                  </div>
                )}

                <div>
                  {/* Title & Tagline */}
                  <div className="mb-4">
                    <h3 className={`text-xl font-black ${isFeatured ? 'text-white' : 'text-slate-900'}`}>
                      {plan.name}
                    </h3>
                    <p className={`text-xs mt-1 ${isFeatured ? 'text-slate-300' : 'text-slate-500'}`}>
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Price Block */}
                  <div className="my-5 pb-5 border-b border-slate-100 dark:border-slate-800">
                    <div className="flex items-baseline gap-2">
                      <span className={`text-3xl sm:text-4xl font-black ${isFeatured ? 'text-white' : 'text-slate-900'}`}>
                        ₹{plan.ourPrice.toLocaleString('en-IN')}
                      </span>
                      <span className="text-sm line-through text-slate-400 font-semibold">
                        ₹{plan.worthPrice.toLocaleString('en-IN')}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mt-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 text-xs font-bold border border-emerald-500/20">
                        Save ₹{plan.saveAmount.toLocaleString('en-IN')}
                      </span>
                      <span className={`text-[11px] flex items-center gap-1 ${isFeatured ? 'text-slate-400' : 'text-slate-500'}`}>
                        <Calendar className="w-3 h-3" />
                        {plan.timeline}
                      </span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2.5 mb-6">
                    <div className={`text-[11px] font-bold uppercase tracking-wider ${isFeatured ? 'text-indigo-400' : 'text-slate-400'}`}>
                      What's Included
                    </div>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs">
                        <Check className={`w-4 h-4 shrink-0 mt-0.5 ${isFeatured ? 'text-indigo-400' : 'text-indigo-600'}`} />
                        <span className={isFeatured ? 'text-slate-200' : 'text-slate-700'}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                  <p className={`text-[11px] mb-3 ${isFeatured ? 'text-slate-400' : 'text-slate-500'}`}>
                    {plan.scopeNote}
                  </p>
                  <button
                    onClick={() => onSelectPlan(plan.name)}
                    className={`w-full py-3 rounded-full text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                      isFeatured
                        ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30'
                        : isPopular
                        ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-600/20'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                    }`}
                  >
                    <span>Choose {plan.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Custom Bundle Calculator */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-indigo-600 mb-1">
                <Calculator className="w-4 h-4" />
                Custom Stack Estimator
              </div>
              <h3 className="text-xl font-black text-slate-900">
                Mix & Match Your Institute's Infrastructure
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Select exactly the modules you need today; scale up later anytime.
              </p>
            </div>
            {selectedCount > 0 && (
              <span className="px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold">
                {selectedCount} Module{selectedCount > 1 ? 's' : ''} Selected
              </span>
            )}
          </div>

          {/* Selector Toggles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
            {bundleOptions.map((opt) => {
              const isChecked = !!selectedServices[opt.id];
              return (
                <div
                  key={opt.id}
                  onClick={() => toggleBundleItem(opt.id)}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between select-none ${
                    isChecked
                      ? 'bg-indigo-50/70 border-indigo-300 ring-2 ring-indigo-500/10'
                      : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => {}} // Handled by parent container click
                      className="w-4 h-4 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500"
                    />
                    <div>
                      <div className="text-xs font-bold text-slate-900">{opt.name}</div>
                      <div className="text-[11px] text-slate-500">
                        ₹{opt.price.toLocaleString('en-IN')}{' '}
                        <span className="line-through text-slate-400">₹{opt.original.toLocaleString('en-IN')}</span>
                      </div>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-slate-500">~{opt.days}d</span>
                </div>
              );
            })}
          </div>

          {/* Calculator Output summary */}
          {selectedCount > 0 ? (
            <div className="bg-slate-900 text-white rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="text-xs text-slate-400">Estimated Project Investment</div>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <span className="text-2xl sm:text-3xl font-black text-white">
                    ₹{totalCalculated.toLocaleString('en-IN')}
                  </span>
                  <span className="text-sm line-through text-slate-400">
                    ₹{totalOriginal.toLocaleString('en-IN')}
                  </span>
                  <span className="text-xs text-emerald-400 font-bold bg-emerald-500/20 px-2 py-0.5 rounded-full">
                    Total Savings: ₹{calculatedSavings.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="text-[11px] text-slate-400 mt-1 flex items-center gap-2">
                  <span>⏱️ Estimated Turnaround: {maxDays} to {maxDays + 5} Business Days</span>
                </div>
              </div>

              <button
                onClick={() => {
                  const names = bundleOptions
                    .filter(b => selectedServices[b.id])
                    .map(b => b.name)
                    .join(', ');
                  onSelectPlan(`Custom Bundle (${names})`);
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-md shadow-indigo-600/30 flex items-center justify-center gap-2"
              >
                <span>Book This Custom Stack</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <div className="text-center py-4 text-xs text-slate-400">
              Select at least one module above to calculate bundle estimate.
            </div>
          )}

          {/* Scope Note */}
          <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-slate-400 text-center">
            <Info className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span>*Final quotation depends on project scope, custom features and third-party services.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
