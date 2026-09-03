import React from 'react';
import { ContactSection } from '../ContactSection';

interface ContactViewProps {
  initialService?: string;
}

export const ContactView: React.FC<ContactViewProps> = ({ initialService }) => {
  return (
    <div className="animate-fadeIn">
      <ContactSection initialService={initialService} />
    </div>
  );
};
