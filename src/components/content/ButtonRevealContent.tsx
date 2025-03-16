import styles from './ButtonRevealContent.module.css';

import { useState } from 'react';

import { IconChevronDown } from '../icons/ChevronDown';
import { IconChevronRight } from '../icons/ChevronRight';

export interface ButtonRevealContentProps {
  buttonText: string;
  content: React.ReactNode;
}

export const ButtonRevealContent = ({ buttonText, content }: ButtonRevealContentProps) => {
  const [showContent, setShowContent] = useState<boolean>(false);

  return (
    <div className={styles.outerContainer}>
      <div className='largeButtonContainer'>
        <div className='button largeButton' onClick={() => setShowContent((prev) => !prev)}>
          <div className='largeButtonIcon'>{showContent ? <IconChevronDown /> : <IconChevronRight />}</div>
          {buttonText}
        </div>
      </div>

      <div className={`${styles.contentContainer} ${showContent ? styles.open : ''}`}>{content}</div>
    </div>
  );
};
