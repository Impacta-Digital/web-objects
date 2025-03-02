import courseData from '../../data/EXC365GD/courseData.ts';
import imageData from './assets/imageData.ts';
import videoData from '../../data/EXC365GD/videoData.ts';
import downloadData from '../../data/EXC365GD/downloadData.ts';

import { ImageContainer } from '../../components/EXC365GD/layout/ImageContainer.tsx';
import { CardHighlight } from '../../components/EXC365GD/content/CardHighlight.tsx';
import { PageFooter } from '../../components/EXC365GD/layout/PageFooter.tsx';

import { MainTitleAndIntro } from '../../components/EXC365GD/page-blocks/MainTitleAndIntro.tsx';
import { LabTitleAndDownload } from '../../components/EXC365GD/page-blocks/LabTitleAndDownload.tsx';
import { ViewResponseButton } from '../../components/EXC365GD/page-blocks/ViewResponseButton.tsx';

import { BoxesAdvanced01 } from './components/BoxesAdvanced01.tsx';

import type PageData from '../../types/EXC365GD/PageData.ts';

function LabAdvanced01() {
  const pageData: PageData = {
    classTitle: 'Técnicas Avançadas para Gráficos',
    course: courseData.EXC365GD2,
    images: imageData.LabAdvanced01,
    videos: videoData.EXC365GD2.LabAdvanced01,
    download: downloadData.EXC365GD2.LabAdvanced01,
  };

  return (
    <>
      <MainTitleAndIntro subheading={pageData.classTitle} />

      <h2>{pageData.classTitle}</h2>

      <BoxesAdvanced01 />

      <LabTitleAndDownload classTitle={pageData.classTitle} downloadPath={pageData.download} />

      <h2>Laboratório 1 – Destacando o maior valor do ano</h2>

      <CardHighlight
        customContent={
          <>
            Para realizar as atividades práticas desta aula, abra o arquivo{' '}
            <strong>Exercícios de Laboratório - Aula 1.xlsx</strong>.
          </>
        }
      />

      <p>
        No arquivo indicado, vá até a <strong>Planilha1</strong>.
      </p>
      <p>
        Observe uma tabela de valores de vendas em cada mês do ano. Ao lado, há um gráfico de colunas agrupadas,
        representando os valores da tabela:
      </p>

      <ImageContainer src={pageData.images[0]} />

      <p>Nessa planilha, realize as seguintes atividades:</p>

      <p className='--padding-left'>
        1. Use a coluna <strong></strong>D para representar uma série com todas as vendas da coluna <strong>C</strong>,
        com exceção da maior delas;
      </p>
      <p className='--padding-left'>
        2. Use a coluna <strong></strong>E para representar uma série, contendo apenas a maior venda da coluna{' '}
        <strong>C</strong>;
      </p>
      <p className='--padding-left'>
        3. Mude o intervalo do gráfico para incluir apenas as séries das colunas <strong>D</strong> e <strong>E</strong>
        ;
      </p>
      <p className='--padding-left'>
        4. Formate as séries de dados com as cores que desejar e aplique a sobreposição de séries em 100% e a largura do
        espaçamento em 50%;
      </p>
      <p className='--padding-left'>
        5. Impeça que o gráfico desapareça quando as colunas <strong>D</strong> e <strong>E</strong> forem ocultas mais
        adiante;
      </p>
      <p className='--padding-left'>
        6. Habilite o título do gráfico e vincule-o à célula <strong>A1</strong>;
      </p>
      <p className='--padding-left'>
        7. Selecione somente a série correspondente ao valor máximo e habilite os rótulos de dados acima das colunas. Se
        desejar, dê um destaque aos rótulos, aumentando um pouco o tamanho do texto e usando estilo negrito;
      </p>
      <p className='--padding-left'>
        8. Na tabela, nos números das colunas <strong>C</strong>, <strong>D</strong> e <strong>E</strong>, aplique uma
        formatação numérica que oculte os zeros para que isso seja refletido no gráfico;
      </p>
      <p className='--padding-left'>9. Desative as linhas de grade;</p>
      <p className='--padding-left'>
        10. Oculte as colunas <strong>D</strong> e <strong>E</strong>;
      </p>
      <p className='--padding-left'>
        11. Faça um teste: Edite o valor de outro mês, para que ele se torne o maior de todos, e observe a coluna de
        destaque acompanhar a mudança;
      </p>
      <p className='--padding-left'>
        12. Faça mais um teste: Deixe dois meses com o mesmo valor máximo e observe que mais uma coluna ficou destacada
        com a cor e o rótulo.
      </p>

      <p>
        No final, a <strong>Planilha1</strong> deverá estar parecida com a imagem a seguir:
      </p>

      <ImageContainer src={pageData.images[1]} />

      <ViewResponseButton videoId={pageData.videos![0]} />

      <h2>Laboratório 2 – Controlando um gráfico e formatação por meio de uma caixa de seleção</h2>

      <p>
        No mesmo arquivo, <strong>Exercícios de Laboratório - Aula 1.xlsx</strong> , vá até a <strong>Planilha2</strong>
        .
      </p>
      <p>
        A <strong>Planilha2</strong> contém a mesma tabela e o mesmo gráfico que a planilha anterior. O objetivo desta
        atividade é traçar uma linha horizontal de média no gráfico. Em seguida, ela será controlada por uma caixa de
        seleção (liga/desliga). A mesma caixa permitirá o destaque nos números da coluna C que se encontram acima da
        média:
      </p>

      <ImageContainer src={pageData.images[2]} />

      <p>Siga os passos adiante para completar a atividade:</p>

      <p className='--padding-left'>
        1. Usando o pincel de formatação, copie o formato da coluna <strong>C</strong> para as colunas{' '}
        <strong>D</strong>e <strong>E</strong>;
      </p>
      <p className='--padding-left'>
        2. Na célula <strong>D4</strong>, escreva o título <strong>Média</strong> e, na célula <strong>E4</strong>,
        escreva o título <strong>Vazio</strong>;
      </p>
      <p className='--padding-left'>
        3. Na célula <strong>D5</strong>, calcule a média dos 12 valores da coluna <strong>C</strong>. Use intervalo com
        referência absoluta (não é alterada durante a cópia);
      </p>
      <p className='--padding-left'>4. Copie a fórmula para baixo, até o mês de dezembro;</p>
      <p className='--padding-left'>
        5. Edite o gráfico para incluir, como segunda série, os dados da coluna <strong>D</strong> (Média);
      </p>
      <p className='--padding-left'>
        6. Altere o tipo de gráfico somente da segunda série para <strong>Linhas</strong> (gráfico de combinação). Ambas
        as séries continuarão usando apenas o eixo vertical principal;
      </p>
      <p className='--padding-left'>7. Se desejar, mude cor, espessura e estilo da linha da média;</p>
      <p className='--padding-left'>
        8. Acima do gráfico, à direita, insira uma caixa de seleção. Edite o texto para{' '}
        <strong>Destacar a média</strong>;
      </p>
      <p className='--padding-left'>
        9. Formate o controle. Crie o vínculo com a célula <strong>R2</strong> e desative a impressão do objeto. Em
        seguida, teste o controle para checar se os valores VERDADEIRO ou FALSO são exibidos. Se necessário, ajuste a
        largura da coluna
        <strong>R</strong>:
      </p>
      <p className='--padding-left'>10. Salve o arquivo.</p>

      <ImageContainer src={pageData.images[3]} />

      <p className='--padding-left'>
        10. Crie uma fórmula nomeada chamada de <strong>Média</strong> que checa o valor da célula <strong>R2</strong>.
        Se VERDADEIRO, o intervalo de números da coluna <strong>Média</strong> será usado. Se FALSO, o intervalo de
        células em branco da coluna <strong>Vazio</strong> será usado;
      </p>
      <p className='--padding-left'>
        11. Edite o intervalo <strong>Média</strong> do gráfico para que use o nome criado no passo anterior;
      </p>
      <p className='--padding-left'>
        12. Na mesma caixa <strong>Selecionar Fonte de Dados</strong>, configure o gráfico para que não oculte séries
        quando linhas ou colunas forem ocultadas na planilha;
      </p>
      <p className='--padding-left'>13. Teste o controle para verificar se ele liga ou desliga a linha de média;</p>
      <p className='--padding-left'>
        14. Ative o título do gráfico e vincule-o à célula <strong>B1</strong>;
      </p>
      <p className='--padding-left'>15. Ative a legenda do gráfico e posicione-a na parte superior;</p>
      <p className='--padding-left'>
        16. Aos números da coluna <strong>Vendas</strong>, aplique uma formatação condicional personalizada baseada em
        fórmula, que atenda a duas condições: (1) cada venda (coluna <strong>C</strong>) deverá ser maior que a média
        correspondente na coluna <strong>D</strong>; (2) a célula vinculada à caixa de seleção (<strong></strong>)
        deverá conter o valor VERDADEIRO. A formatação deverá ativar apenas o estilo negrito;R2
      </p>
      <p className='--padding-left'>17. Teste a caixa de seleção para ligar ou desligar os destaques da média;</p>
      <p className='--padding-left'>18. Desative as linhas de grade da planilha;</p>
      <p className='--padding-left'>
        19. Oculte as colunas <strong>D</strong>, <strong>E</strong> e <strong>R</strong>;
      </p>
      <p className='--padding-left'>20. Salve o arquivo.</p>

      <p>Após as atividades, a planilha deverá estar da seguinte forma quando a caixa de seleção estiver desativada:</p>

      <ImageContainer src={pageData.images[4]} />

      <p>A planilha deverá estar assim, quando a caixa de seleção estiver ativada:</p>

      <ImageContainer src={pageData.images[5]} />

      <ViewResponseButton videoId={pageData.videos![1]} />

      <PageFooter title='Mãos à Obra!' course={pageData.course} />
    </>
  );
}

export default LabAdvanced01;
