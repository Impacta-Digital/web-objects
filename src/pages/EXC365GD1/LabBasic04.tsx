import courseData from '../../data/EXC365GD/courseData.ts';
import imageData from './assets/imageData.ts';
import videoData from '../../data/EXC365GD/videoData.ts';
import downloadData from '../../data/EXC365GD/downloadData.ts';

import { ImageContainer } from '../../components/layout/ImageContainer.tsx';
import { CardHighlight } from '../../components/content/CardHighlight.tsx';
import { PageFooter } from '../../components/layout/PageFooter.tsx';

import { MainTitleAndIntro } from '../../components/page-blocks/MainTitleAndIntro.tsx';
import { LabTitleAndDownload } from '../../components/page-blocks/LabTitleAndDownload.tsx';
import { ViewResponseButton } from '../../components/page-blocks/ViewResponseButton.tsx';

import { BoxesBasic04 } from './components/BoxesBasic04.tsx';

import type PageData from '../../types/PageData.ts';

function LabBasic04() {
  const pageData: PageData = {
    classTitle: 'Tipos de Gráficos',
    course: courseData.EXC365GD1,
    images: imageData.LabBasic04,
    videos: videoData.EXC365GD1.LabBasic04,
    download: downloadData.EXC365GD1.LabBasic04,
  };

  return (
    <>
      <MainTitleAndIntro subheading={pageData.classTitle} />

      <h2>{pageData.classTitle}</h2>

      <BoxesBasic04 />

      <p className='--bulleted'>
        Alguns gráficos exibem informações visuais sobre os valores de uma tabela estruturada e classificada. São os{' '}
        <span className='--highlight'>gráficos de hierarquia, como o mapa de árvore e o de explosão solar</span>, os
        quais mostram blocos ou fatias proporcionais aos valores vindos dos intervalos da planilha;
      </p>

      <ImageContainer src={pageData.images[0]} />
      <ImageContainer src={pageData.images[1]} />

      <p className='--bulleted'>
        Há gráficos específicos para distribuição de valores para cálculos estatísticos, pesquisas de mercado ou
        análises de quartis. São eles:{' '}
        <span className='--highlight'>histograma, gráfico de Pareto e gráfico de caixa estreita</span>;
      </p>

      <ImageContainer src={pageData.images[2]} />
      <ImageContainer src={pageData.images[3]} />
      <ImageContainer src={pageData.images[4]} />

      <p className='--bulleted'>
        O <span className='--highlight'>gráfico de funil</span> mostra contagens de valores em etapas de um processo, em
        ordem decrescente;
      </p>

      <ImageContainer src={pageData.images[5]} />

      <p className='--bulleted'>
        É possível usar mapas como gráficos e destacar países, estados e regiões, em função dos valores da planilha. São
        os <span className='--highlight'>mapas coropléticos</span>.
      </p>

      <ImageContainer src={pageData.images[6]} />

      <LabTitleAndDownload classTitle={pageData.classTitle} downloadPath={pageData.download} />

      <h2>Laboratório 1 – Eixo secundário e combinação de dois tipos de gráficos</h2>

      <CardHighlight
        customContent={
          <>
            Para realizar as atividades práticas desta aula, abra o arquivo{' '}
            <strong>Exercícios de Laboratório - Aula 4.xlsx</strong>.
          </>
        }
      />

      <p>
        No arquivo indicado, vá até a planilha <strong>Seguros</strong>:
      </p>

      <ImageContainer src={pageData.images[7]} />

      <p>
        Os dados da tabela representam valores registrados por um corretor de seguros ao longo dos 12 meses do ano,
        considerando o seguinte:
      </p>
      <p className='--bulleted --padding-left'>
        A série <strong>Propostas emitidas</strong> indica quantas propostas o corretor emitiu naquele mês;
      </p>
      <p className='--bulleted --padding-left'>
        A série <strong>Contratos fechados</strong> representa a quantidade de propostas que geraram negócios fechados;
      </p>
      <p className='--bulleted --padding-left'>
        A série <strong>Contratos/Propostas</strong> é um cálculo simples de divisão e indica quanto (em %) o corretor
        conseguiu fechar de negócios naquele mês;
      </p>
      <p className='--bulleted --padding-left'>
        A série <strong>Meta</strong> representa quanto (em %) o corretor precisa fechar de negócios no mês. Ou seja,
        80% das propostas emitidas devem ser convertidas em contratos fechados (porcentagem de atingimento da meta).
      </p>

      <p>Como você pode observar, em alguns meses, o corretor superou a meta. Em outros, ficou abaixo dela.</p>
      <p>
        O objetivo deste exercício é plotar as quatro séries, de modo que as duas primeiras estejam representadas como
        gráfico de colunas agrupadas e as duas últimas na forma de gráfico de linhas com leitura no eixo secundário.
      </p>

      <p>Realize as seguintes tarefas neste exercício:</p>
      <p className='--padding-left'>
        1. Crie um <strong>gráfico de combinação</strong>, em que as duas primeiras séries serão as quantidades e serão
        representadas em gráfico de colunas agrupadas com leitura pelo eixo vertical principal. As duas séries de
        porcentagem serão representadas por gráfico de linhas, com medida pelo eixo secundário;
      </p>
      <p className='--padding-left'>
        2. Posicione o gráfico na parte inferior da tabela, redimensionando-o conforme necessário. Faça o alinhamento
        pelas linhas de grade, de modo que ocupe as mesmas colunas da tabela, e escolha a altura que desejar;
      </p>
      <p className='--padding-left'>3. Mova a legenda para a parte superior e exclua o título do gráfico;</p>
      <p className='--padding-left'>
        4. Limite o valor máximo do eixo secundário em <strong>100%</strong>;
      </p>
      <p className='--padding-left'>
        5. Formate a linha da série <strong>Meta</strong> para que seja vermelha e tracejada;
      </p>
      <p className='--padding-left'>
        6. Exiba rótulos de dados somente para o primeiro ponto da linha <strong>Meta</strong>, posicionando-o na parte
        de baixo dela (ao selecionar, deixe marcado só o ponto do primeiro mês);
      </p>
      <p className='--padding-left'>
        7. Coloque o seguinte título para o eixo vertical principal (esquerdo):{' '}
        <strong>Propostas emitidas e Contratos fechados</strong>;
      </p>
      <p className='--padding-left'>
        8. Coloque o seguinte título para o eixo vertical secundário (direito):{' '}
        <strong>Contratos/Propostas e Meta</strong>;
      </p>
      <p className='--padding-left'>
        9. Se desejar, mude as cores e efeitos das séries <strong>Propostas emitidas e Contratos fechados</strong>;
      </p>
      <p className='--padding-left'>
        10. Mude a orientação da página para <strong>Paisagem</strong> e faça com que todo o conteúdo seja centralizado
        e encaixado em uma página;
      </p>
      <p className='--padding-left'>11. Desative as linhas de grade;</p>
      <p className='--padding-left'>12. Salve o arquivo.</p>

      <p>No final do exercício, seu gráfico se parecerá com este:</p>

      <ImageContainer src={pageData.images[8]} />

      <ViewResponseButton videoId={pageData.videos![0]} />

      <h2>Laboratório 2 – Gráfico de linhas, barras de dados e mapa de calor</h2>

      <p>
        No mesmo arquivo, <strong>Exercícios de Laboratório - Aula 4.xlsx</strong>, vá até a planilha{' '}
        <strong>Temp</strong>:
      </p>

      <ImageContainer src={pageData.images[9]} />

      <p>Faça as seguintes tarefas nesta planilha:</p>
      <p className='--padding-left'>
        1. Aplique, às temperaturas da coluna <strong>C</strong>, uma regra de formatação condicional por{' '}
        <strong>Barras de Dados</strong> com a cor laranja;
      </p>
      <p className='--padding-left'>
        2. Aplique, às porcentagens de umidade da coluna <strong>D</strong>, uma regra de formatação condicional do tipo{' '}
        <strong>Escalas de Cor</strong> com as cores verde e amarela;
      </p>
      <p className='--padding-left'>
        3. Insira um gráfico de linhas, ajuste-o para que tenha a mesma altura da tabela e coloque-o do lado direito
        dela, entre as colunas <strong>F</strong> e <strong>P</strong>. Faça o ajuste sobre as linhas de grade;
      </p>
      <p className='--padding-left'>4. Mova a legenda do gráfico para a parte superior;</p>
      <p className='--padding-left'>
        5. Modifique o tipo de gráfico para <strong>Combinação</strong>, mantendo as duas séries como linhas. A série{' '}
        <strong>Umidade</strong> deverá ter seus valores lidos no eixo vertical secundário;
      </p>
      <p className='--padding-left'>
        6. Formate as duas linhas para que tenham o estilo <strong>Linha Suavizada</strong> (procure nas opções de
        formatação da série);
      </p>
      <p className='--padding-left'>7. Exclua o título do gráfico;</p>
      <p className='--padding-left'>8. Ligue as linhas de grade horizontais secundárias;</p>
      <p className='--padding-left'>9. Ligue as linhas de grade verticais principais;</p>
      <p className='--padding-left'>
        10. Clique fora do gráfico. Em <strong>Configurações de Impressão</strong>, mude a orientação da página para
        <strong>Paisagem</strong> e faça todo o conteúdo ser encaixado em uma única folha, centralizado na horizontal e
        na vertical;
      </p>
      <p className='--padding-left'>11. Desative as linhas de grade da planilha;</p>
      <p className='--padding-left'>12. Salve o arquivo.</p>

      <p>No final, sua planilha deve ficar semelhante a esta:</p>

      <ImageContainer src={pageData.images[10]} />

      <ViewResponseButton videoId={pageData.videos![1]} />

      <PageFooter title='Mãos à Obra!' course={pageData.course} />
    </>
  );
}

export default LabBasic04;
