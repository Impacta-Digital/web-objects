import styles from './ColorBox.module.css';
import { makeTransparent } from '../../utils/colorUtils';

export interface ColorBoxProps {
  color: string;
  content: React.ReactNode;
}

export const ColorBox = ({ color, content }: ColorBoxProps) => {
  const background = makeTransparent(color, 90);
  const borderColor = makeTransparent(color, 25);

  return (
    <div className={styles['color-box']} style={{ background, borderColor }}>
      {content}
    </div>
  );
};
