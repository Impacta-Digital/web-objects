import { ColorBox } from '../../../components/content/ColorBox';
import colors from '../../../constants/colors';
import styles from './BoxBasic02.module.css';

export const BoxBasic02 = () => {
  return (
    <div className={styles['container']}>
      <ColorBox
        color={colors.cyan}
        content={
          <p>
            Para trocar rapidamente o tipo de referência de uma célula enquanto você digita uma fórmula, use a tecla{' '}
            <strong>F4</strong>.
          </p>
        }
      />
    </div>
  );
};
