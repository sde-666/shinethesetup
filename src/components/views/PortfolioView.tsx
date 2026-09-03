import React from 'react';
import { NavPage, PortfolioItem } from '../../types';
import { PortfolioSection } from '../PortfolioSection';
import { Sparkles, ArrowRight } from 'lucide-react';

interface PortfolioViewProps {
  onNavigate: (page: NavPage) => void;
  onOpenCaseStudy: (item: PortfolioItem) => void;
  onSelectForInquiry: (title: string) => void;
}

export const PortfolioView: React.FC<PortfolioViewProps> = ({
  onNavigate,
  onOpenCaseStudy,
  onSelectForInquiry,
}) => {
  return (
    <div className="animate-fadeIn">
      <PortfolioSection
        onOpenCaseStudy={onOpenCaseStudy}
        onSelectForInquiry={onSelectForInquiry}
      />
    </div>
  );
};
