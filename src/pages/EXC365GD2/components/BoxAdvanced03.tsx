import styles from './BoxAdvanced03.module.css';
import colors from '../../../constants/colors';
import { ColorBox } from '../../../components/content/ColorBox';

export const BoxAdvanced03 = () => {
  return (
    <div className={styles['container']}>
      <ColorBox
        color={colors.cyan}
        content={
          <p>
            <strong>ATENÇÃO</strong>: Os valores de sua planilha são diferentes dos apresentados na imagem anterior
            porque os números em <strong>C7</strong>, <strong>C9</strong> e <strong>C11</strong> foram criados
            aleatoriamente pela função <strong>ALEATÓRIOENTRE</strong>. Qualquer atualização na planilha causará a
            geração de novos valores imprevisíveis. Você pode pressionar F9 para recalcular todas as fórmulas
            manualmente. A função <strong>ALEATÓRIOENTRE</strong> foi usada aqui apenas para testar diferentes valores
            no painel depois de pronto e não deve ser usada em relatórios reais.
          </p>
        }
      />
    </div>
  );
};
