import courseData from '../../data/EXC365GD/courseData.ts';
import imageData from './assets/imageData.ts';
import downloadData from '../../data/EXC365GD/downloadData.ts';

import { ImageContainer } from '../../components/EXC365GD/layout/ImageContainer.tsx';
import { PageFooter } from '../../components/EXC365GD/layout/PageFooter.tsx';
import { CardHighlight } from '../../components/EXC365GD/content/CardHighlight.tsx';
import { LabTitleAndDownload } from '../../components/EXC365GD/page-blocks/LabTitleAndDownload.tsx';

import { BoxAdvanced03 } from './components/BoxAdvanced03.tsx';

import type PageData from '../../types/EXC365GD/PageData.ts';

function LabAdvanced03() {
  const pageData: PageData = {
    classTitle: 'Gráficos de desempenho',
    course: courseData.EXC365GD2,
    images: imageData.LabAdvanced03,
    download: downloadData.EXC365GD2.LabAdvanced03,
  };

  return (
    <>
      <LabTitleAndDownload classTitle={pageData.classTitle} downloadPath={pageData.download} />

      <h2>Laboratório 1 – Gráfico do Termômetro</h2>

      <CardHighlight
        customContent={
          <>
            Para realizar as atividades práticas desta aula, abra o arquivo{' '}
            <strong>Exercícios de Laboratório - Aula 3.xlsx</strong>.
          </>
        }
      />

      <p>
        Na <strong>Planilha1</strong>, observe a tabela com a relação de meses e vendas:
      </p>

      <ImageContainer src={pageData.images[0]} />

      <p>
        O objetivo é criar um gráfico de termômetro que pode ser acompanhado mensalmente e observar seu valor crescendo
        até seja atingida a meta de R$ 15.000.000 no final do ano.
      </p>
      <p>
        O <strong>Valor</strong> representa a soma das vendas nos 12 meses. À medida que um novo valor entra na tabela,
        essa soma aumenta e, consequentemente, o indicador (<strong>Valor</strong>) é refletido no gráfico do
        termômetro.
      </p>
      <p>No final, o seu gráfico deverá estar parecido com este:</p>

      <ImageContainer src={pageData.images[1]} />

      <h2>Laboratório 2 – Gráfico de Velocímetro</h2>

      <p>
        No mesmo arquivo,<strong>Exercícios de Laboratório - Aula 3.xlsx</strong>, adicione outra planilha e siga as
        orientações adiante:
      </p>

      <p className='--paddingLeft'>
        1. Desenhe um gráfico de velocímetro de 240° com três fatias: Ruim (vermelha), Regular (amarela) e Bom (verde);
      </p>
      <p className='--paddingLeft'>
        2. Depois, crie um gráfico com o ponteiro, de modo que ele varie de 0 até o valor R$1.000.000,00;
      </p>
      <p className='--paddingLeft'>
        3. O gráfico deverá ter uma caixa com texto (odômetro) mostrando o valor atual digitado e um botão em forma de
        círculo no centro do ponteiro;
      </p>
      <p className='--paddingLeft'>
        4. Determine quais devem ser os valores para o gráfico do fundo do velocímetro e o <strong>Limite</strong>;
      </p>
      <p className='--paddingLeft'>5. No final, o valor do ponteiro deverá ficar zerado;</p>
      <p className='--paddingLeft'>6. Aplique um fundo claro à área do gráfico do fundo do velocímetro.</p>
      <p>
        Seu gráfico deverá se parecer com este (os caracteres <strong>???</strong> nas tabelas indicam as informações
        que você terá que descobrir ou calcular):
      </p>

      <ImageContainer src={pageData.images[2]} />

      <h2>Laboratório 3 – Gráfico de Anel</h2>

      <p>
        Na sua pasta de arquivos da aula, abra o arquivo <strong>Indicadores de Desempenho.xlsx</strong>.
      </p>

      <ImageContainer src={pageData.images[3]} />

      <p>
        A planilha <strong>Auxiliar</strong> é reservada para os cálculos necessários à montagem dos gráficos:
      </p>

      <ImageContainer src={pageData.images[4]} />

      <BoxAdvanced03 />

      <p>Siga as orientações adiante para executar este laboratório:</p>

      <p className='--paddingLeft'>
        1. Na planilha <strong>Indicadores</strong>, calcule os complementos (quanto falta até a meta) para cada país;
      </p>
      <p className='--paddingLeft'>
        2. Na mesma planilha, calcule a porcentagem de atingimento do valor de cada país até a meta. Essas células serão
        usadas para rotular o centro do anel;
      </p>
      <p className='--paddingLeft'>
        3. Construa três gráficos de anel, tomando as células de <strong>Valor</strong> e <strong>Complemento</strong>{' '}
        de cada país. Aplique, a cada gráfico, um conjunto diferente de cores;
      </p>
      <p className='--paddingLeft'>
        4. Posicione os três gráficos na planilha <strong>Indicadores</strong>. Faça os ajustes de tamanho e alinhamento
        para que fiquem bem distribuídos;
      </p>
      <p className='--paddingLeft'>
        5. Insira caixas de texto que apontem para os nomes dos países da coluna <strong>B</strong> da planilha{' '}
        <strong>Auxiliar</strong>;
      </p>
      <p className='--paddingLeft'>
        6. Insira caixas de texto com fonte grande que apontem para as porcentagens calculadas na coluna{' '}
        <strong>E</strong> da planilha <strong>Auxiliar</strong>;
      </p>
      <p className='--paddingLeft'>
        7. Oculte as linhas de grade e, se desejar, as guias de planilhas e barras de rolagem horizontal e vertical da
        planilha (<strong>Arquivo</strong> / <strong>Opções</strong> / <strong>Avançado</strong>);
      </p>
      <p className='--paddingLeft'>
        8. Aplique a imagem <strong>Mapa-múndi.png</strong> como plano de fundo da planilha. O arquivo se encontra na
        pasta <strong>Imagens</strong>;
      </p>
      <p className='--paddingLeft'>
        9. Opcionalmente, aplique efeitos adicionais aos gráficos e às caixas de texto, como sombra ou brilho.
      </p>
      <p>Teste o dashboard pressionando F9 para gerar valores diferentes para cada país.</p>
      <p>O painel montado deverá ficar parecido com este:</p>

      <ImageContainer src={pageData.images[5]} />

      <PageFooter title='Mãos à Obra!' course={pageData.course} />
    </>
  );
}

export default LabAdvanced03;
