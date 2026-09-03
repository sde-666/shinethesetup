/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { NavPage, ServiceItem, PortfolioItem } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './components/views/HomeView';
import { ServicesView } from './components/views/ServicesView';
import { PortfolioView } from './components/views/PortfolioView';
import { AboutView } from './components/views/AboutView';
import { ContactView } from './components/views/ContactView';
import { PricingSection } from './components/PricingSection';
import { ServiceModal } from './components/ServiceModal';
import { PortfolioModal } from './components/PortfolioModal';

export default function App() {
  const [currentPage, setCurrentPage] = useState<NavPage>('home');
  const [activeServiceModal, setActiveServiceModal] = useState<ServiceItem | null>(null);
  const [activePortfolioModal, setActivePortfolioModal] = useState<PortfolioItem | null>(null);
  const [selectedInquiryService, setSelectedInquiryService] = useState<string>('LMS Website');

  // Handle URL hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['home', 'services', 'portfolio', 'pricing', 'about', 'contact'].includes(hash)) {
        setCurrentPage(hash as NavPage);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: NavPage) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectServiceForInquiry = (serviceName: string) => {
    setSelectedInquiryService(serviceName);
    // If on home page, scroll smoothly to the contact section; else navigate to contact page
    if (currentPage === 'home') {
      const contactElem = document.getElementById('contact');
      if (contactElem) {
        contactElem.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    handleNavigate('contact');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-indigo-600 selection:text-white">
      {/* Top Sticky Navigation */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main View Router */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onOpenServiceModal={setActiveServiceModal}
            onOpenPortfolioModal={setActivePortfolioModal}
            onSelectServiceForInquiry={handleSelectServiceForInquiry}
            selectedInquiryService={selectedInquiryService}
          />
        )}

        {currentPage === 'services' && (
          <ServicesView
            onNavigate={handleNavigate}
            onOpenServiceModal={setActiveServiceModal}
            onSelectServiceForInquiry={handleSelectServiceForInquiry}
          />
        )}

        {currentPage === 'portfolio' && (
          <PortfolioView
            onNavigate={handleNavigate}
            onOpenCaseStudy={setActivePortfolioModal}
            onSelectForInquiry={handleSelectServiceForInquiry}
          />
        )}

        {currentPage === 'pricing' && (
          <div className="py-8">
            <PricingSection onSelectPlan={handleSelectServiceForInquiry} />
          </div>
        )}

        {currentPage === 'about' && (
          <AboutView
            onNavigate={handleNavigate}
            onSelectForInquiry={handleSelectServiceForInquiry}
          />
        )}

        {currentPage === 'contact' && (
          <div className="py-8">
            <ContactView initialService={selectedInquiryService} />
          </div>
        )}
      </main>

      {/* Modals */}
      <ServiceModal
        service={activeServiceModal}
        onClose={() => setActiveServiceModal(null)}
        onSelectServiceForInquiry={handleSelectServiceForInquiry}
      />

      <PortfolioModal
        item={activePortfolioModal}
        onClose={() => setActivePortfolioModal(null)}
        onSelectForInquiry={handleSelectServiceForInquiry}
      />

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

