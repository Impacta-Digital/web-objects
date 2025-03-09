import styles from './CardHighlight.module.css';
import { IconExclamation } from '../icons/Exclamation';
import { makeTransparent } from '../../../utils/colorUtils';
import colors from '../../../constants/EXC365GDcolors';

export interface CardHighlightProps {
  text?: string;
  customContent?: React.ReactNode;
}

export const CardHighlight = ({ text, customContent }: CardHighlightProps) => {
  const background = makeTransparent(colors.orange, 80);

  return (
    <div className={styles.container}>
      <div className={styles.card} style={{ background }}>
        <div className={styles.icon}>
          <IconExclamation />
        </div>

        <div className={styles.content}>{text ?? customContent}</div>
      </div>
    </div>
  );
};
