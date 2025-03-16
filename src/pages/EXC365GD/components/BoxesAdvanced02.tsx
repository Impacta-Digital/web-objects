import styles from './BoxesAdvanced02.module.css';
import colors from '../../../constants/EXC365GDcolors';
import { ColorBox } from '../../../components/content/ColorBox';

export const BoxesAdvanced02 = () => {
  const boxColors = [colors.cyan, colors.purple, colors.pink];
  const paragraphs = [
    <p key='paragraph-0'>
      É possível criar uma lista com imagens na planilha, as quais podem ser recuperadas por fórmulas e levadas para uma
      área designada. Quando uma condição muda, a imagem pode mudar também. Essa técnica é conhecida como imagens
      dinâmicas. Em um dashboard, isso é útil para você recuperar imagens de produtos, logotipos, fotos, ícones, etc. Em
      resumo, para trabalhar com imagens dinâmicas, você necessita dos seguintes itens:
    </p>,
    <>
      <p>
        1. Insira todas as imagens usadas, em uma lista vertical, uma sobre cada célula. As células devem ter dimensão
        suficiente para acomodar cada imagem, sem cortá-la. De preferência, trabalhe com todas as imagens de mesma
        dimensão para não ocorrer deformações;
      </p>
      <p>
        2. Na planilha das imagens, mantenha as linhas de grade desligadas para que elas não sejam levadas junto com a
        imagem;
      </p>
    </>,
    <>
      <p>
        3. Usando o gerenciador de nomes, crie uma fórmula nomeada que aponte para um endereço de célula que contenha a
        imagem desejada. Geralmente, DESLOC ou ÍNDICE + CORRESP ajudam nessas fórmulas;
      </p>
      <p>
        4. No local que exibirá a imagem, crie um bitmap. Essa imagem pode ser inserida ou colada e deve ter as mesmas
        dimensões de cada célula com imagem;
      </p>
      <p>
        5. Finalmente, para essa imagem inserida e selecionada, associe a fórmula nomeada no passo 3, pela barra de
        fórmulas.
      </p>
    </>,
  ];

  return (
    <div className={styles['boxes-grid']}>
      {paragraphs.map((paragraph, index) => (
        <ColorBox color={boxColors[index]} content={paragraph} key={`colorBox-${index}`} />
      ))}
    </div>
  );
};
