import styles from './CardHighlight.module.css';
import { IconExclamation } from './icons/Exclamation';

export const CardHighlight = ({ text, customContent }: CardHighlightProps) => {
  return (
    <div className={styles['container']}>
      <div className={styles['card']}>
        <div className={styles['icon']}>
          <IconExclamation />
        </div>

        <div className={styles['body']}>{text || customContent}</div>
      </div>
    </div>
  );
};

export type CardHighlightProps = {
  text?: string;
  customContent?: React.ReactNode;
};
