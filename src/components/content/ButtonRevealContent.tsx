import styles from './ButtonRevealContent.module.css';

import { useState } from 'react';

import { IconChevronDown } from '../icons/ChevronDown';
import { IconChevronRight } from '../icons/ChevronRight';

export interface ButtonRevealContentProps {
  content: React.ReactNode;
  buttonText: string;
  altButtonText?: string;
  alignLeft?: boolean;
}

export const ButtonRevealContent = ({ content, buttonText, altButtonText, alignLeft }: ButtonRevealContentProps) => {
  const [showContent, setShowContent] = useState<boolean>(false);

  return (
    <div className={styles.outerContainer}>
      <div className='largeButtonContainer' style={{ justifyContent: alignLeft ? 'flex-start' : 'center' }}>
        <div className='button largeButton' onClick={() => setShowContent((prev) => !prev)}>
          <div className='largeButtonIcon'>{showContent ? <IconChevronDown /> : <IconChevronRight />}</div>
          {showContent && altButtonText ? altButtonText : buttonText}
        </div>
      </div>

      <div className={`${styles.contentContainer} ${showContent ? styles.open : ''}`}>{content}</div>
    </div>
  );
};
