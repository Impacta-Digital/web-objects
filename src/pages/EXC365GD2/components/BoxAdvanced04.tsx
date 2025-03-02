import styles from './BoxAdvanced04.module.css';
import colors from '../../../constants/EXC365GD/colors';
import { ColorBox } from '../../../components/EXC365GD/content/ColorBox';

export const BoxAdvanced04 = () => {
  return (
    <div className={styles['container']}>
      <ColorBox
        color={colors.cyan}
        content={
          <p>
            <strong>ATENÇÃO</strong>: Este dashboard não tem a intenção de ser algum tipo de sistema de gestão para call
            centers de maneira geral. Este é um exercício muito simplificado, desenvolvido apenas para praticar os
            conceitos vistos neste treinamento.
          </p>
        }
      />
    </div>
  );
};
