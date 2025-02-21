import colors from '../../../constants/colors';
import { makeTransparent } from '../../../utils/colorUtils';
import styles from './BoxesBasic04.module.css';

export const BoxesBasic04 = () => {
  const pageColors = [colors.purple, colors.cyan];
  const bgColors = pageColors.map((color) => makeTransparent(color, 90));
  const borderColors = pageColors.map((color) => makeTransparent(color, 25));

  return (
    <div className={styles['container']}>
      <div className={styles['color-box']} style={{ background: bgColors[0], borderColor: borderColors[0] }}>
        <p className='--bulleted'>
          Há situações no dashboard em que um gráfico ocuparia muito espaço. Nesses casos, você poderá criar gráficos
          dentro de células: <strong>minigráficos</strong>,{' '}
          <strong>formatação condicional com barras de dados ou escalas de cores</strong>, e{' '}
          <strong>gráficos usando repetição de caracteres</strong>;
        </p>
      </div>
      <div className={styles['color-box']} style={{ background: bgColors[1], borderColor: borderColors[1] }}>
        <p className='--bulleted'>
          Quando uma série de dados representa valores muito pequenos e outra série valores muito grandes, dificilmente
          os valores pequenos poderão ser vistos no gráfico. Nesse caso, a melhor abordagem é fazer com que essa série
          exiba seus valores em outro eixo vertical, chamado <strong>eixo secundário</strong>. Dessa maneira, é possível
          acompanhar duas ordens de grandeza diferentes sobre o mesmo eixo horizontal. É possível, também, que as duas
          séries sejam representadas com tipos diferentes de gráficos. Esses são os gráficos de combinação e,
          geralmente, misturam gráficos de coluna e linha ou gráficos de coluna e área;
        </p>
      </div>
    </div>
  );
};
