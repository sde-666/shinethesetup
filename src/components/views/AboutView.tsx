import React from 'react';
import { NavPage } from '../../types';
import { AboutSection } from '../AboutSection';
import { ProcessSection } from '../ProcessSection';

interface AboutViewProps {
  onNavigate: (page: NavPage) => void;
  onSelectForInquiry: (title: string) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate, onSelectForInquiry }) => {
  return (
    <div className="animate-fadeIn">
      <AboutSection onContactClick={() => onNavigate('contact')} />
      <ProcessSection onStartConsultation={() => onNavigate('contact')} />
    </div>
  );
};
