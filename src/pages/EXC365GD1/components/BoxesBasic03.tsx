import { ColorBox } from '../../../components/EXC365GD/content/ColorBox';
import colors from '../../../constants/EXC365GDcolors';
import styles from './BoxesBasic03.module.css';

export const BoxesBasic03 = () => {
  const boxColors = [colors.cyan, colors.purple, colors.pink, colors.keyLime];
  const paragraphs = [
    <p key='paragraph-0'>
      <strong>
        Um formulário em planilha com aspecto profissional possui controles bem alinhados e distribuídos uniformemente.
      </strong>{' '}
      Isso facilita a separação visual das informações;
    </p>,
    <p key='paragraph-1'>
      <strong>É possível usar controles de formulário para ativar ou desativar formatações condicionais.</strong> Isso é
      útil porque você poderá até controlar se deseja ver determinados destaques ou não no seu dashboard;
    </p>,
    <p key='paragraph-2'>
      <strong>
        Você também pode vincular uma lista de itens à outra, por meio de caixas de combinação (listas suspensas) ou por
        validação de dados.
      </strong>{' '}
      Dessa forma, quando a primeira lista muda de valor, a segunda é carregada com valores relevantes à primeira;
    </p>,
    <p key='paragraph-3'>
      <strong>
        A navegação por links em seu dashboard representa uma forma muito intuitiva, bastante semelhante à navegação em
        páginas da Web.
      </strong>{' '}
      Ao digitar endereços de Internet, caminhos de servidor na rede ou endereços de e-mail, o Excel já cria esses links
      automaticamente. Você também pode aplicar links em qualquer célula com conteúdo, figuras, fotografias e outros
      elementos. Esses links podem apontar para endereços e documentos externos ou locais internos da mesma pasta de
      trabalho.
    </p>,
  ];
  return (
    <div className={styles['boxes-grid']}>
      {paragraphs.map((paragraph, index) => (
        <ColorBox color={boxColors[index]} content={paragraph} key={`colorBox-${index}`} />
      ))}
    </div>
  );
};
