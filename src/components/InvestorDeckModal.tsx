import React from 'react';
import { InvestorApplicationModal } from './InvestorApplicationModal';
import { Language } from '../translations';

export interface InvestorDeckModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const InvestorDeckModal: React.FC<InvestorDeckModalProps> = ({
  isOpen,
  onClose,
  lang,
}) => {
  return (
    <InvestorApplicationModal
      isOpen={isOpen}
      onClose={onClose}
      lang={lang}
    />
  );
};

export default InvestorDeckModal;


