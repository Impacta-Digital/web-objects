import courseData from '../../data/EXC365GD/courseData.ts';
import imageData from './assets/imageData.ts';
import videoData from '../../data/EXC365GD/videoData.ts';
import downloadData from '../../data/EXC365GD/downloadData.ts';

import { ImageContainer } from '../../components/layout/ImageContainer.tsx';
import { CardHighlight } from '../../components/content/CardHighlight.tsx';
import { MainTitleAndIntro } from '../../components/EXC365GD/page-blocks/MainTitleAndIntro.tsx';
import { LabTitleAndDownload } from '../../components/EXC365GD/page-blocks/LabTitleAndDownload.tsx';
import { ViewResponseButton } from '../../components/EXC365GD/page-blocks/ViewResponseButton.tsx';

import { BoxBasic02 } from './components/BoxBasic02.tsx';

import type PageData from '../../types/EXC365GD/PageData.ts';

function LabBasic02() {
  const pageData: PageData = {
    classTitle: 'Fórmulas e Funções Avançadas',
    course: courseData.EXC365GD1,
    images: imageData.LabBasic02,
    videos: videoData.EXC365GD1.LabBasic02,
    download: downloadData.EXC365GD1.LabBasic02,
  };

  return (
    <>
      <MainTitleAndIntro subheading={pageData.classTitle} />

      <h2>{pageData.classTitle}</h2>

      <p className='--bulleted'>
        A base para a montagem de fórmulas mais sofisticadas é o perfeito conhecimento de como os endereços de células e
        intervalos são referenciados.{' '}
        <span className='--highlight'>
          O Excel trabalha com os seguintes tipos de endereço: absoluto ($A$1), relativo (A1) e misto ($A$1, A$1);
        </span>
      </p>

      <BoxBasic02 />

      <p className='--bulleted'>
        Frequentemente, os bancos de dados do seu dashboard ficarão em planilhas diferentes ou mesmo em arquivos
        diferentes. A montagem das fórmulas pode seguir o mesmo princípio da facilidade: aponte para os endereços
        enquanto digita a fórmula. Isso garante que você selecionará o intervalo correto.{' '}
        <span className='--highlight'>
          No final da digitação, tecle ENTER para que a fórmula seja encerrada e deixada na planilha de origem;
        </span>
      </p>
      <p className='--bulleted'>
        O uso avançado de muitos recursos do Excel fica mais evidente quando as fórmulas ou referências são feitas com
        nomes em vez de intervalos digitados explicitamente. As vantagens do uso de intervalos nomeados são claras:
        facilitam a leitura das fórmulas, podem ser empregados em outras planilhas do mesmo arquivo e são facilmente
        organizados pelo{' '}
        <span className='--highlight'>
          Gerenciador de Nomes (acionado pela guia Fórmulas ou pelo atalho CTRL + F3);
        </span>
      </p>

      <ImageContainer src={pageData.images[0]} />

      <p className='--bulleted'>
        As funções matemáticas e estatísticas mais comuns no Excel e que trabalham com intervalos de células são:{' '}
        <span className='--highlight'>
          SOMA, MÉDIA, MÁXIMO e MÍNIMO para estatísticas básicas; CONT.VALORES, CONT.NÚM e CONTAR.VAZIO
        </span>{' '}
        para realizar contagens diversas. As funções matemáticas e estatísticas que trabalham com condições (critérios)
        são particularmente úteis na montagem de dashboards. Elas podem calcular uma única informação, ou fazer parte de
        uma tabela com fórmulas mais complexas, na qual nem sempre uma tabela dinâmica é a melhor alternativa;
      </p>
      <p className='--bulleted'>
        As funções condicionais estão presentes no dia a dia de quem trabalha com o Excel, desde o nível básico. As
        principais são: <span className='--highlight'>SE, E, OU, XOR, NÃO, SE aninhada, SES, SEERRO e SENÃODISP;</span>
      </p>
      <p className='--bulleted'>
        Uma função que pertence à categoria de procura e referência retorna um valor de uma tabela ou matriz, por meio
        da localização de outro valor ou, então, por sua posição de linha e coluna dentro da matriz.
      </p>

      <LabTitleAndDownload classTitle={pageData.classTitle} downloadPath={pageData.download} />

      <h2>Laboratório – Utilizando fórmulas e funções avançadas</h2>

      <CardHighlight
        customContent={
          <>
            Para realizar as atividades práticas desta aula, abra o arquivo{' '}
            <strong>Exercícios de Laboratório - Aula 2.xlsx</strong>.
          </>
        }
      />

      <p>
        No arquivo indicado, você verá um banco de dados contendo o <strong>Mês</strong>, a <strong>Região</strong> e as{' '}
        <strong>Vendas</strong>:
      </p>

      <ImageContainer src={pageData.images[1]} />

      <p>
        Um dos indicadores de um dashboard diz respeito aos melhores em cada período. Neste exercício, você deverá
        escolher um mês na célula <strong>D4</strong> e, em seguida, a tabela abaixo de <strong>D4</strong> mostrará as
        posições das três melhores vendas para o mês escolhido, bem como as regiões responsáveis por elas:
      </p>

      <ImageContainer src={pageData.images[2]} />

      <p>Para resolver este exercício, siga as orientações adiante:</p>

      <p className='--paddingLeft'>
        1. Use a lista de meses da coluna <strong>N</strong> para aplicar validação de dados por lista à célula{' '}
        <strong>D4</strong>;
      </p>
      <p className='--paddingLeft'>
        2. A tabela nas colunas <strong>G</strong> e <strong>H</strong> possui a relação de todas as regiões que
        aparecem na base de dados:
      </p>

      <ImageContainer src={pageData.images[3]} />

      <p className='--paddingLeft'>
        3. Calcule, na coluna <strong>H</strong>, a soma das vendas usando como critérios o nome da região ao lado
        esquerdo e o mês escolhido em <strong>D4</strong>;
      </p>
      <p className='--paddingLeft'>
        4. Nas células <strong>D7</strong>, <strong>D8</strong> e <strong>D9</strong>, calcule, respectivamente, o 1º
        maior valor de vendas, o 2º maior valor de vendas e o 3º maior valor de vendas. Use como ordem os números da
        coluna <strong>B</strong>;
      </p>
      <p className='--paddingLeft'>
        5. Finalmente, na coluna <strong>C</strong>, localize cada valor de vendas na tabela de vendas mensais e traga a
        região correspondente.
      </p>

      <p>Quando você terminar, a planilha ficará assim:</p>

      <ImageContainer src={pageData.images[4]} />

      <ViewResponseButton videoId={pageData.videos![0]} />
    </>
  );
}

export default LabBasic02;
