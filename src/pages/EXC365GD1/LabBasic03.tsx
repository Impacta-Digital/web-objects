import courseData from '../../data/EXC365GD/courseData.ts';
import imageData from './assets/imageData.ts';
import videoData from '../../data/EXC365GD/videoData.ts';
import downloadData from '../../data/EXC365GD/downloadData.ts';

import { ImageContainer } from '../../components/ImageContainer.tsx';
import { PageFooter } from '../../components/PageFooter.tsx';

import { MainTitleAndIntro } from '../../components/page-blocks/MainTitleAndIntro.tsx';
import { LabTitleAndDownloads } from '../../components/page-blocks/LabTitleAndDownload.tsx';
import { ViewResponseButton } from '../../components/page-blocks/ViewResponseButton.tsx';

import type PageData from '../../types/PageData.ts';

function LabBasic03() {
  const pageData: PageData = {
    classTitle: 'Ferramentas de Interatividade',
    images: imageData.LabBasic03,
    videos: videoData.EXC365GD1.LabBasic03,
    download: downloadData.EXC365GD1.LabBasic03,
    course: courseData.EXC365GD1,
  };

  return (
    <>
      <MainTitleAndIntro subheading={pageData.classTitle} />

      <h2>{pageData.classTitle}</h2>
      <p className='--bulleted'>
        <span className='--highlight'>
          Validação de dados é uma ferramenta que permite estabelecer uma regra para digitação de valores em uma célula.
        </span>{' '}
        Se o valor digitado fugir à regra, o Excel não aceitará essa digitação. Na montagem de dashboards, em especial,
        a validação de dados por lista é bastante útil porque é fácil de ser aplicada e ainda possibilita a formatação
        da célula. Os valores já podem existir em intervalos na própria planilha ou digitados na própria caixa de
        validação;
      </p>
      <p className='--bulleted'>
        <span className='--highlight'>
          Controles de formulário são objetos que você manipula diariamente em seu computador, por exemplo, caixas de
          diálogo e formulários de cadastramento na Internet.
        </span>{' '}
        Esses controles podem ser desenhados na planilha com a finalidade de acrescentar interatividade às fórmulas,
        permitindo que o usuário mude condições ou escolha itens específicos;
      </p>
      <p>
        Para trabalhar com controles em sua planilha, você deve, inicialmente, habilitar a guia Desenvolvedor pelo
        seguinte caminho: <strong>Arquivo / Opções / Personalizar Faixa de Opções / Desenvolvedor / OK</strong>.
      </p>

      <ImageContainer src={pageData.images[0]} />

      <p>
        Na Faixa de Opções, grupo <strong>Controles</strong>, o único botão usado nesta aula é o{' '}
        <strong>Inserir</strong>, o qual abre um menu com ícones que representam os controles que podem ser inseridos na
        planilha (<strong>Controles de Formulário</strong>):
      </p>

      <ImageContainer src={pageData.images[1]} />

      <div className='grid-container'>
        <p className='--bulleted'>
          <span className='--highlight'>
            Um formulário em planilha com aspecto profissional possui controles bem alinhados e distribuídos
            uniformemente.
          </span>{' '}
          Isso facilita a separação visual das informações;
        </p>
        <p className='--bulleted'>
          <span className='--highlight'>
            É possível usar controles de formulário para ativar ou desativar formatações condicionais.
          </span>{' '}
          Isso é útil porque você poderá até controlar se deseja ver determinados destaques ou não no seu dashboard;
        </p>
        <p className='--bulleted'>
          <span className='--highlight'>
            Você também pode vincular uma lista de itens à outra, por meio de caixas de combinação (listas suspensas) ou
            por validação de dados.
          </span>{' '}
          Dessa forma, quando a primeira lista muda de valor, a segunda é carregada com valores relevantes à primeira;
        </p>
        <p className='--bulleted'>
          <span className='--highlight'>
            A navegação por links em seu dashboard representa uma forma muito intuitiva, bastante semelhante à navegação
            em páginas da Web.
          </span>{' '}
          Ao digitar endereços de Internet, caminhos de servidor na rede ou endereços de e-mail, o Excel já cria esses
          links automaticamente. Você também pode aplicar links em qualquer célula com conteúdo, figuras, fotografias e
          outros elementos. Esses links podem apontar para endereços e documentos externos ou locais internos da mesma
          pasta de trabalho.
        </p>
      </div>

      <LabTitleAndDownloads classTitle={pageData.classTitle} downloadPath={pageData.download} />

      <h2>Laboratório A – Trabalhando com controles de formulário</h2>
      <p>
        O arquivo contém dados históricos de uma empresa ao longo de 12 anos. O objetivo é automatizar algumas planilhas
        em termos de seleção de opções, fórmulas e navegação entre elas. Cada planilha será descrita a seguir.
      </p>
      <p>
        A planilha <strong>Menu</strong> possui uma área sombreada que será usada para o desenho de alguns controles de
        formulário. As colunas <strong>N</strong>, <strong>O</strong> e <strong>P</strong> pertencem a uma área auxiliar
        com listas e células vinculadas e que será oculta no final:
      </p>

      <ImageContainer src={pageData.images[2]} />

      <p>
        A célula <strong>C5</strong> já contém um ano digitado. A célula <strong>I5</strong> (mesclada) contém, no
        momento, o valor 0. A parte inferior da área sombreada será usada para o desenho dos botões de navegação.
      </p>
      <p>
        A planilha <strong>Dados</strong> contém o histórico de vendas, incluindo a data, a filial e o valor das vendas
        no dia. A tabela contém, também, as colunas <strong>Ano</strong> e <strong>Mês</strong>, apenas para facilitar
        no cálculo para a célula I5 da planilha <strong>Menu</strong>. Cada coluna é, também, um intervalo nomeado para
        facilitar a montagem de fórmulas:
      </p>

      <ImageContainer src={pageData.images[3]} />

      <p>
        As cinco planilhas seguintes possuem tabelas dinâmicas, montadas a partir do banco de dados:{' '}
        <strong>Norte, Sul, Leste, Oeste e Centro</strong>. Cada uma das planilhas mostra o histórico de vendas,
        agrupado por ano e mês para a filial correspondente:
      </p>

      <ImageContainer src={pageData.images[4]} />

      <p>Agora, siga os passos adiante para realizar as atividades deste projeto:</p>
      <p>
        1. Vá até a planilha <strong>Menu</strong>;
      </p>
      <p>
        2. Ao lado da célula que contém o ano (<strong>C5</strong>), desenhe um botão de rotação. Nas propriedades do
        controle, vincule-o à própria célula <strong>C5</strong>. Faça com que o valor do ano parta de 2013 e vá até
        2024:
      </p>

      <ImageContainer src={pageData.images[5]} />

      <p>
        3. Abaixo da célula <strong>E4</strong>, desenhe uma caixa de combinação. Nas propriedades, indique como
        intervalo de entrada a lista de 12 meses da coluna <strong>P</strong>. Vincule o controle à célula{' '}
        <strong>P4</strong>. Estabeleça a exibição de 12 linhas suspensas para que todos os meses sejam mostrados de uma
        vez:
      </p>

      <ImageContainer src={pageData.images[6]} />

      <p>
        4. Abaixo da célula <strong>G4</strong>, desenhe uma caixa de listagem. Nas propriedades, indique como intervalo
        de entrada a lista das cinco filiais da coluna <strong>N</strong>. Vincule o controle à célula{' '}
        <strong>N4</strong>:
      </p>

      <ImageContainer src={pageData.images[7]} />

      <p>
        5. A célula <strong>N4</strong> contém o número (índice) da filial escolhida. Na célula <strong>N5</strong>,
        escreva uma fórmula que localize, na lista das cinco regiões da coluna <strong>N</strong>, o nome da filial,
        cuja posição está em
        <strong>N4</strong>;
      </p>
      <p>
        6. A célula <strong></strong>I5 (mesclada) deverá calcular a soma das vendas baseadas em ano, mês e filial
        escolhidos;
      </p>

      <ImageContainer src={pageData.images[8]} />

      <p>7. Faça alguns testes, alterando ano, mês e filial. Observe o total das vendas ser alterado.</p>

      <ViewResponseButton videoId={pageData.videos![0]} />

      <h2>Laboratório B – Criando navegação por hiperlinks</h2>
      <p>
        Nos próximos passos, você criará um mecanismo de navegação entre as planilhas por meio de hiperlinks de texto e
        imagem.
      </p>
      <p>
        1. Na planilha <strong>Dados</strong>, escreva o texto <strong>MENU</strong> na célula <strong>H1</strong>. Em
        seguida, aplique um hiperlink que aponte para a planilha <strong>Menu</strong>, célula <strong>A1</strong>;
      </p>
      <p>
        2. Na planilha <strong>Norte</strong>, escreva o texto <strong>MENU</strong> na célula <strong>D1</strong>. Em
        seguida, aplique um hiperlink que aponte para a planilha <strong>Menu</strong>, célula <strong>A1</strong>;
      </p>
      <p>
        3. Copie essa célula D1 da planilha Norte e cole na célula <strong>D1</strong> da planilha <strong>Sul</strong>;
      </p>
      <p>
        4. Repita a colagem anterior na mesma célula D1 das planilhas <strong>Leste</strong>, <strong>Oeste</strong> e{' '}
        <strong>Centro</strong>;
      </p>
      <p>
        5. Retorne à planilha <strong>Menu</strong>;
      </p>
      <p>
        6. Dentro da área sombreada, desenhe formas geométricas à sua escolha, cada uma contendo os nomes das demais
        planilhas, como mostra a seguinte sugestão. Se desejar, no lugar das formas, use ícones ou ilustrações diversas;
      </p>

      <ImageContainer src={pageData.images[9]} />

      <p>
        7. A cada forma, atribua um hiperlink à planilha correspondente, apontando para a célula <strong>A1</strong>;
      </p>
      <p>8. Teste todos os hiperlinks entre as planilhas;</p>
      <p>
        9. Na planilha <strong>Menu</strong>, oculte as colunas <strong>N</strong>, <strong>O</strong> e{' '}
        <strong>P</strong>;
      </p>
      <p>10. Desative os títulos de linha e coluna;</p>
      <p>11. Nas opções do Excel, desative as guias de planilha;</p>
      <p>12. Salve e feche o arquivo.</p>

      <ViewResponseButton videoId={pageData.videos![1]} />

      <PageFooter title='Mãos à Obra!' course={pageData.course} />
    </>
  );
}

export default LabBasic03;
