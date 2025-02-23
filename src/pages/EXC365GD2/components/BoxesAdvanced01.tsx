import styles from './BoxesAdvanced01.module.css';
import colors from '../../../constants/colors';
import { ColorBox } from '../../../components/content/ColorBox';

export const BoxesAdvanced01 = () => {
  const boxColors = [colors.purple, colors.cyan, colors.pink];
  const paragraphs = [
    <p className='--bulleted'>
      Séries de dados que produzem gráficos de colunas verticais ou barras horizontais normalmente partem do valor 0. Se
      você desejar começar de um valor mínimo, será necessário representar uma primeira série contendo apenas o valor
      mínimo e uma segunda série contendo a diferença Máximo – Mínimo. Em seguida, a série Mínimo ficará sem
      preenchimento e sem contorno. A única função dela é dar “suporte” à serie que representa a diferença;
    </p>,
    <p className='--bulleted'>
      O destaque de valores na planilha pode ser feito facilmente com formatação normal ou condicional. Porém, para
      destacar um ou mais pontos de dados em um gráfico, baseando-se em uma condição, será necessário usar alguns
      truques para você atingir o efeito desejado. Normalmente, envolvem o uso de séries que ficarão ocultas ou
      sobreposição de gráficos;
    </p>,
    <p className='--bulleted'>
      Outra técnica interessante é a que permite que você controle quais séries deseja exibir no gráfico, o que pode ser
      feito por meio de caixas de seleção, as quais atuam como “interruptores”. Dessa maneira, você pode comparar
      produtos de dois em dois, ou visualizar uma região por vez. Tudo isso sem precisar criar tabelas dinâmicas,
      aproveitando controles de formulário já construídos no dashboard.
    </p>,
  ];

  return (
    <div className={styles['boxes-grid']}>
      <ColorBox color={boxColors[0]} content={paragraphs[0]} />
      <ColorBox color={boxColors[1]} content={paragraphs[1]} />
      <ColorBox color={boxColors[2]} content={paragraphs[2]} />
    </div>
  );
};
