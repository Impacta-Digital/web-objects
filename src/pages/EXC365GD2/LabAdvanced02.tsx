import courseData from '../../data/EXC365GD/courseData.ts';
import imageData from './assets/imageData.ts';
import videoData from '../../data/EXC365GD/videoData.ts';
import downloadData from '../../data/EXC365GD/downloadData.ts';

import { ImageContainer } from '../../components/layout/ImageContainer.tsx';
import { PageFooter } from '../../components/layout/PageFooter.tsx';
import { CardHighlight } from '../../components/content/CardHighlight.tsx';

import { MainTitleAndIntro } from '../../components/page-blocks/MainTitleAndIntro.tsx';
import { LabTitleAndDownload } from '../../components/page-blocks/LabTitleAndDownload.tsx';
import { ViewResponseButton } from '../../components/page-blocks/ViewResponseButton.tsx';

import { BoxesAdvanced02 } from './components/BoxesAdvanced02.tsx';

import type PageData from '../../types/EXC365GD/PageData.ts';

function LabAdvanced02() {
  const pageData: PageData = {
    classTitle: 'Trabalhando com Imagens',
    course: courseData.EXC365GD2,
    images: imageData.LabAdvanced02,
    videos: videoData.EXC365GD2.LabAdvanced02,
    download: downloadData.EXC365GD2.LabAdvanced02,
  };

  return (
    <>
      <MainTitleAndIntro subheading={pageData.classTitle} />

      <h2>{pageData.classTitle}</h2>

      <p className='--bulleted'>
        Imagens usadas de forma controlada completam visualmente a informação em um dashboard, mostrando um logotipo, um
        ícone ou uma marca d’água. Algumas ilustrações mais simples podem ser feitas dentro da planilha ou importadas de
        arquivos externos. <strong>Use a guia Inserir e o grupo Ilustrações para isso</strong>;
      </p>

      <ImageContainer src={pageData.images[0]} />

      <p className='--bulleted'>
        Séries de dados com barras ou colunas podem ser preenchidas com uma imagem ou textura, dando um aspecto bastante
        interessante. Outros elementos, como fundo do gráfico, área de plotagem ou fatias de um gráfico de pizza, também
        podem ser preenchidos com imagem ou textura;
      </p>

      <ImageContainer src={pageData.images[1]} />

      <BoxesAdvanced02 />

      <LabTitleAndDownload classTitle={pageData.classTitle} downloadPath={pageData.download} />

      <h2>Laboratório – Usando a técnica das imagens dinâmicas</h2>

      <CardHighlight
        customContent={
          <>
            Para realizar as atividades práticas desta aula, abra o arquivo{' '}
            <strong>Exercícios de Laboratório - Aula 2.xlsx</strong>
          </>
        }
      />

      <p>
        Este laboratório tem o objetivo de elaborar uma área no dashboard em que você escolherá o nome de um produto
        existente em um banco de dados. Uma área reservada mostrará a imagem do produto escolhido.
      </p>
      <p>
        A planilha <strong>Painel</strong> possui um local no qual será escolhido o nome de um produto por meio de uma{' '}
        <strong>Caixa de Seleção</strong> (também poderia ser uma <strong>Caixa de Listagem</strong>) que será desenhada
        sobre a célula <strong>E4</strong>. A área maior dentro da borda desenhada conterá a imagem do produto
        selecionado.
      </p>
      <p>A planilha contém algumas formatações básicas e as larguras de colunas e alturas de linhas estão adequadas:</p>

      <ImageContainer src={pageData.images[2]} />

      <p>Premissas:</p>

      <p className='--paddingLeft --bulleted'>
        A célula <strong>C7</strong> conterá o nome do produto escolhido na caixa de combinação;
      </p>
      <p className='--paddingLeft --bulleted'>
        A célula <strong>C18</strong> trará o preço desse produto, obtido da lista <strong>Preços</strong>;
      </p>
      <p className='--paddingLeft --bulleted'>
        Na célula <strong>C21</strong>, haverá uma fórmula para aplicar um desconto de 12% sobre o preço de{' '}
        <strong>C18</strong>;
      </p>
      <p className='--paddingLeft --bulleted'>
        A célula <strong>E4</strong> está nomeada como <strong>Núm_produto</strong> (ela conterá o número do item
        escolhido na caixa de combinação e será vinculada à caixa);
      </p>
      <p className='--paddingLeft --bulleted'>
        As células <strong>C7</strong>, <strong>C18</strong> e <strong>C21</strong> já estão formatadas.
      </p>
      <p>
        A planilha <strong>Imagens</strong> possui uma tabela com três intervalos nomeados: <strong>Produto</strong>,{' '}
        <strong>Preço</strong> e <strong>Imagem</strong>. São oito produtos com suas respectivas informações:
      </p>

      <ImageContainer src={pageData.images[3]} />

      <p>Para realizar as atividades deste laboratório, siga as etapas adiante:</p>

      <p className='--paddingLeft'>
        1. Na planilha <strong>Imagens</strong>, desative as linhas de grade para que elas não apareçam na imagem
        dinâmica;
      </p>
      <p className='--paddingLeft'>
        2. Na planilha <strong>Painel</strong>, desenhe uma caixa de combinação contornando a célula <strong>E4</strong>
        . Nas propriedades do controle, vincule-o a essa mesma célula (você também pode usar o nome{' '}
        <strong>Núm_produto</strong>). Como intervalo de entrada, aponte para (ou digite) o intervalo{' '}
        <strong>Produtos</strong>. Teste o controle escolhendo um dos itens;
      </p>
      <p className='--paddingLeft'>
        3. Em <strong>C7</strong>, digite uma fórmula que busca, na lista <strong>Produtos</strong>, aquele cujo número
        está na célula nomeada como <strong>Núm_produto</strong>;
      </p>
      <p className='--paddingLeft'>
        4. Em <strong>C18</strong>, digite uma fórmula que busca o preço correspondente ao produto escolhido no
        intervalo <strong>Preços</strong>. A célula está formatada com texto vermelho e efeito tachado;
      </p>
      <p className='--paddingLeft'>
        5. Em <strong>C21</strong>, digite uma fórmula que calcula o preço final do produto, sendo que o desconto
        aplicado é de 12%;
      </p>
      <p className='--paddingLeft'>
        6. Mescle as células <strong>E7:J21</strong>. Este é o local no qual aparecerá a imagem do produto escolhido, e
        o tamanho é suficiente para exibir a imagem completa do produto, sem deformações. Se desejar, aplique uma cor
        bem clara para o fundo dessa célula mesclada;
      </p>
      <p className='--paddingLeft'>
        7. No <strong>Gerenciador de Nomes</strong>, confira os nomes já criados. Crie, agora, uma fórmula nomeada para
        apontar para a célula correspondente à imagem do produto escolhido. Clique no botão <strong>Novo</strong>. Na
        caixa <strong>Nome</strong>, digite <strong>Imagem</strong>. Na caixa <strong>Refere-se a</strong>, escreva uma
        fórmula com a função <strong>DESLOC</strong>. O intervalo deve partir da célula <strong>C3</strong> da planilha
        <strong>Imagens</strong> e descer a quantidade de linhas equivalente ao número do produto escolhido (célula{' '}
        <strong>Núm_produto</strong>);
      </p>
      <p className='--paddingLeft'>
        8. Na planilha <strong>Painel</strong>, selecione a célula mesclada <strong>E7</strong>. Copie-a e cole-a sobre
        ela mesma, porém como imagem vinculada. Na barra de fórmulas, edite a referência<strong> =$E$7</strong> para
        <strong> =Imagem</strong>, a qual representa o nome do intervalo criado no passo anterior e tecle ENTER. A
        imagem do produto já deverá aparecer;
      </p>
      <p className='--paddingLeft'>9. Teste novos produtos;</p>
      <p className='--paddingLeft'>
        10. Oculte a coluna <strong>M</strong> até o final da planilha;
      </p>
      <p className='--paddingLeft'>11. Oculte a linha 24 até o final da planilha;</p>
      <p className='--paddingLeft'>
        12. Oculte as <strong>Linhas de Grade</strong> e os <strong>Títulos</strong> da planilha;
      </p>
      <p className='--paddingLeft'>
        13. Oculte a planilha <strong>Imagens</strong>;
      </p>
      <p className='--paddingLeft'>14. Salve o arquivo.</p>
      <p>Seu painel de consulta de produtos deverá ficar assim:</p>

      <ImageContainer src={pageData.images[4]} />

      <ViewResponseButton videoId={pageData.videos![0]} />

      <PageFooter title='Mãos à Obra!' course={pageData.course} />
    </>
  );
}

export default LabAdvanced02;
