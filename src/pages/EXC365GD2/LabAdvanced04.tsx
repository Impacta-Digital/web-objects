import colors from '../../constants/colors.ts';
import courseData from '../../data/EXC365GD/courseData.ts';
import imageData from './assets/imageData.ts';
import downloadData from '../../data/EXC365GD/downloadData.ts';

import { ImageContainer } from '../../components/layout/ImageContainer.tsx';
import { PageFooter } from '../../components/layout/PageFooter.tsx';
import { CardHighlight } from '../../components/content/CardHighlight.tsx';
import { TitleAndDivider } from '../../components/layout/TitleAndDivider';
import { DownloadButton } from '../../components/layout/DownloadButton';

import { BoxAdvanced04 } from './components/BoxAdvanced04.tsx';
import { TableAdvanced04 } from './components/TableAdvanced04.tsx';

import type PageData from '../../types/PageData.ts';

function LabAdvanced04() {
  const pageData: PageData = {
    classTitle: 'Dashboard para Análise de Qualidade de Atendimento',
    course: courseData.EXC365GD2,
    images: imageData.LabAdvanced04,
    download: downloadData.EXC365GD2.LabAdvanced04,
  };

  return (
    <>
      <TitleAndDivider title='Mãos à Obra!' subheading={pageData.classTitle} />

      <p>
        Estas atividades complementam o aprendizado. Faça-as usando os conceitos aprendidos nas aulas anteriores. Baixe
        o material de apoio clicando no botão a seguir:
      </p>

      <DownloadButton filePath={pageData.download} buttonText='Material de Apoio' />

      {/* - - - - - spacer */}
      <div className='vertical-spacer' />
      <div className='vertical-spacer' />

      <h2>
        <span style={{ color: colors.theme, fontWeight: 300 }}>PROJETO:</span> {pageData.classTitle}
      </h2>

      <CardHighlight
        customContent={
          <>
            Para realizar as atividades desta aula, abra o arquivo Exercícios de{' '}
            <strong>Laboratório - Aula 4.xlsx</strong>.
          </>
        }
      />

      <p>
        Este projeto complementar poderá ser feito pela sequência das atividades a seguir, sob forma de tutorial. Para
        facilitar, ele foi dividido em algumas fases.
      </p>
      <p>
        Uma empresa de call center fictícia mantém, há algum tempo, uma base de dados com registros dos chamados
        realizados por clientes. No momento, a pasta de trabalho possui duas planilhas: <strong>Consulta</strong> e{' '}
        <strong>Chamados</strong>.
      </p>

      <h3>Descrição das Planilhas</h3>

      <p>
        A planilha <strong>Consulta</strong> contém uma tela na qual o gestor, o coordenador ou o atendente pode
        consultar as informações de um chamado específico, cujo número é escolhido na célula{' '}
        <strong>Nº do chamado</strong> (há uma validação de dados):
      </p>

      <ImageContainer src={pageData.images[0]} />

      <p>
        O número escolhido trará todas as informações cadastradas a respeito daquele chamado, como{' '}
        <strong>Tipo de Chamado</strong>, <strong>Atendente</strong>, <strong>Código do Cliente</strong>, etc. A célula{' '}
        <strong>Status</strong> mostra a condição do chamado e há uma formatação condicional, conforme o resultado:
        chamados fechados aparecem em verde; chamados críticos, em vermelho; chamados com erro, em amarelo; e chamados
        abertos não possuem formatação.
      </p>
      <p>
        A célula <strong>Total de Chamados</strong> mostra a quantidade de registros no banco de dados. A célula{' '}
        <strong>Nº do Próximo Chamado</strong> indica qual será o próximo número disponível para cadastrar um novo
        chamado (atividades de cadastramento não serão feitas neste projeto).
      </p>
      <p>
        A planilha <strong>Chamados</strong> mostra o banco de dados propriamente dito, dentro de uma tabela nomeada
        como <strong>Chamados</strong>:
      </p>

      <ImageContainer src={pageData.images[1]} />

      <p>Ela possui dados digitados e fórmulas que retornam os resultados apropriados:</p>
      <p className='--padding-left --bulleted'>
        <strong>Nº</strong>: Número sequencial do chamado. Alguns números estão faltando por conta de registros
        excluídos;
      </p>
      <p className='--padding-left --bulleted'>
        <strong>Abertura</strong>: Registro da data e hora de abertura do chamado. Essa coluna está completa porque
        todos os chamados possuem, ao menos, a data de abertura;
      </p>
      <p className='--padding-left --bulleted'>
        <strong>Fechamento</strong>: Registro da data e hora do fechamento e conclusão do chamado. Se a data de
        fechamento estiver faltando, significa que o chamado continua aberto;
      </p>
      <p className='--padding-left --bulleted'>
        <strong>Tempo</strong>: Registra o tempo total de atendimento do chamado. Se, no cadastramento, por erro de
        digitação ou erro de sistema, o momento do fechamento aparece anterior ao momento da abertura, então esse campo
        aparecerá vazio e acarretará um erro no campo seguinte;
      </p>
      <p className='--padding-left --bulleted'>
        <strong>Status</strong>: Esse campo determina o status do chamado: <strong>Aberto</strong> (não há data de
        fechamento), <strong></strong>Fechado (há data de fechamento, posterior à data de abertura),{' '}
        <strong>Erro</strong> (momento do fechamento registrado como sendo anterior ao de abertura) ou{' '}
        <strong>Crítico</strong> (o tempo de resolução passou de 24 horas);
      </p>
      <p className='--padding-left --bulleted'>
        <strong>Atendente</strong>: Nome do(a) atendente responsável pelo chamado;
      </p>
      <p className='--padding-left --bulleted'>
        <strong>Cód. Cliente</strong>: Código do(a) cliente que abriu o chamado;
      </p>
      <p className='--padding-left --bulleted'>
        <strong>Tipo</strong>: Tipo de chamado. Pode assumir um dos valores: <strong>Reclamação</strong>,{' '}
        <strong>Sugestão</strong>, <strong>Suporte</strong> ou <strong>Elogio</strong>;
      </p>
      <p className='--padding-left --bulleted'>
        <strong>Descrição</strong>: Texto descritivo do chamado. Para este exercício, os textos dessa coluna foram
        gerados aleatoriamente, apenas para operação na planilha <strong>Consulta</strong>. Não serão relevantes para os
        cálculos.
      </p>

      <h3>Objetivos</h3>

      <p>
        Ao analisar a base de dados, o gestor responsável ficou preocupado com a quantidade de reclamações no mesmo mês
        e com a quantidade de chamados críticos e com erros.
      </p>
      <p>
        Esse gestor encomendou a você o projeto de um dashboard com alguns indicadores que pudessem medir essas questões
        críticas e que permitissem a ele acompanhar os valores ao longo do tempo.
      </p>
      <p>Após você se reunir com ele, estas foram suas anotações a respeito do projeto:</p>

      <p className='--padding-left --bulleted'>O dashboard deverá mostrar informações separadas por mês e por ano;</p>
      <p className='--padding-left --bulleted'>
        Deve haver uma contagem mensal de elogios, reclamações, sugestões e suportes. Um gráfico de barras horizontais
        (pode ser por formatação condicional) será suficiente para representar os números graficamente. Ao lado, deverá
        haver um gráfico de pizza, mostrando a participação de cada tipo de chamado naquele mês;
      </p>
      <p className='--padding-left --bulleted'>
        Para efeito de comparação, um gráfico anual com a evolução dos quatro tipos será necessário. Como esse gráfico é
        menos importante que a informação anterior, ele poderá ser um minigráfico;
      </p>
      <p className='--padding-left --bulleted'>A real preocupação do gestor é com relação às reclamações;</p>
      <p className='--padding-left --bulleted'>
        Foi estabelecido um máximo de 60 reclamações ao mês. Em função disso, deve haver um gráfico de velocímetro com
        quatro faixas divididas igualmente: <strong>Ótimo</strong> (azul), <strong>Bom</strong> (verde),{' '}
        <strong>Regular</strong> (amarelo) e <strong>Ruim</strong> (vermelho). Ou seja, quanto maior o número, pior é a
        situação.
      </p>

      <BoxAdvanced04 />

      <p>Depois de todo o levantamento de informações, você esboçou o seguinte:</p>

      <ImageContainer src={pageData.images[2]} />

      <p>Para a criação deste dashboard, acompanhe as fases a seguir:</p>

      {/* 📌 FASE 1 */}

      <h3 style={{ borderColor: colors.theme }}>
        <span style={{ color: colors.theme, fontWeight: 300 }}>FASE 1:</span> Preparações
      </h3>

      <p>
        A seguir, você começará a trabalhar nas tarefas de desenvolvimento deste dashboard. Siga os passos adiante para
        iniciar algumas preparações antes da construção do painel propriamente dito.
      </p>

      <p className='--padding-left'>
        1. Na planilha <strong>Consulta</strong>, experimente visualizar o chamado de nº <strong>1458</strong>. Este é
        um chamado que ainda está aberto na base de dados. Nessa planilha, um fechamento sem valor aparece como{' '}
        <strong>0</strong>, ou seja, uma data formatada como <strong>01/01/1900 00:00</strong>;
      </p>
      <p className='--padding-left'>
        2. Clique na célula do <strong>Fechamento</strong> (<strong>D10</strong>) com o botão direito do mouse e escolha{' '}
        <strong>Formatar Células</strong>;
      </p>
      <p className='--padding-left'>
        3. Na caixa <strong>Formatar Células</strong>, guia <strong>Número</strong>, clique na categoria{' '}
        <strong>Personalizado</strong>. Digite, na caixa <strong>Tipo</strong>, o seguinte formato:
      </p>

      <div className='--padding-left'>
        <div className='code-line'>dd/mm/aaaa hh:mm;;;</div>
      </div>

      <p className='--padding-left'>
        4. Clique em <strong>OK</strong> para aplicar o formato na célula. O código aplica a formatação de data e hora
        para números positivos somente. Números negativos, valores nulos ou textos não aparecerão na célula (essas
        seções foram omitidas da formatação);
      </p>
      <p className='--padding-left'>
        5. Vá até a planilha <strong>Chamados</strong> e diminua bastante a coluna <strong>Descrição</strong> (para 8
        caracteres, por exemplo). Não é fundamental que esse texto apareça no banco de dados;
      </p>
      <p className='--padding-left'>
        6. Será necessário adicionar duas novas colunas para facilitar a escolha da data no dashboard. Na célula{' '}
        <strong>J3</strong>, digite <strong>Ano</strong> e, na célula <strong>K3</strong>, digite <strong>Mês</strong>.
        A base de dados se expandirá automaticamente para a direita por conta desses novos cabeçalhos de campo;
      </p>
      <p className='--padding-left'>
        7. Na primeira célula do campo <strong>Ano</strong>, digite a fórmula adiante (na digitação, aponte para a
        célula da <strong>Abertura</strong> do chamado). Aplique autoajuste à coluna;
      </p>

      <div className='--padding-left'>
        <div className='code-line'>=ANO([@Abertura])</div>
      </div>

      <p className='--padding-left'>
        8. Na primeira célula do campo <strong>Mês</strong>, digite a fórmula adiante (na digitação, aponte para a
        célula da <strong>Abertura</strong> do chamado). Aplique autoajuste à coluna;
      </p>

      <div className='--padding-left'>
        <div className='code-line'>=MÊS([@Abertura])</div>
      </div>

      <ImageContainer src={pageData.images[3]} />

      <p className='--padding-left'>
        9. Insira uma nova planilha e mude o nome dela para <strong>Dashboard</strong>;
      </p>
      <p className='--padding-left'>
        10. Escreva o título <strong>INDICADORES DA QUALIDADE</strong> na célula <strong>B1</strong>. Formate-a com
        tamanho 18 pontos, negrito e cor azul;
      </p>
      <p className='--padding-left'>
        11. Formate a coluna <strong>A</strong> com 2 caracteres de largura;
      </p>
      <p className='--padding-left'>12. Salve o arquivo.</p>

      {/* 📌 FASE 2 */}

      <h3 style={{ borderColor: colors.theme }}>
        <span style={{ color: colors.theme, fontWeight: 300 }}>FASE 2:</span> Área de Apoio
      </h3>

      <p className='--padding-left'>
        1. Vá até a coluna <strong></strong>AB da planilha <strong></strong>Dashboard. Essa área será reservada para os
        valores de suporte para as caixas de combinação, fórmulas e montagem do gráfico do velocímetro mais adiante;
      </p>
      <p className='--padding-left'>
        2. Digite e formate as seguintes informações (conteúdo, fonte, alinhamento, borda e preenchimento):
      </p>

      <ImageContainer src={pageData.images[4]} />

      <p className='--padding-left'>
        3. Atribua, à célula <strong></strong>AC3, o nome <strong></strong>Ano. Essa célula conterá o ano escolhido e
        seu nome será usado em muitas fórmulas deste dashboard;
      </p>
      <p className='--padding-left'>
        4. Atribua, à célula <strong></strong>AD3, o nome <strong></strong>Mês. Essa célula conterá o mês numérico,
        obtido diretamente da escolha da caixa de combinação que será desenhada no dashboard. O valor numérico do mês
        será usado nos cálculos, não o nome dele;
      </p>
      <p className='--padding-left'>
        5. Crie um intervalo dinâmico para a lista de anos: pressione CTRL + F3 para abrir o <strong></strong>
        Gerenciador de Nomes. Crie o nome <strong></strong>Anos, usando a seguinte fórmula:
      </p>

      <div className='--padding-left'>
        <div className='code-line'>=DESLOC(Dashboard!$AF$2; 1; 0; CONT.NÚM(Dashboard!$AF:$AF); 1)</div>
      </div>

      <p className='--padding-left'>
        6. Atribua, ao intervalo <strong></strong>AH3:AH14, o nome <strong></strong>Meses. Esse intervalo será usado
        para carregar a caixa de combinação que permitirá a escolha do mês;
      </p>
      <p className='--padding-left'>
        7. Na célula <strong></strong>AC3, digite a fórmula que recupera o valor do ano em função do índice na célula{' '}
        <strong></strong>AC4 (o índice é o nº do item escolhido pela caixa de combinação dos anos):
      </p>

      <div className='--padding-left'>
        <div className='code-line'>=ÍNDICE(Anos; AC4)</div>
      </div>

      <p className='--padding-left'>8. Salve o arquivo.</p>

      {/* 📌 FASE 3 */}

      <h3 style={{ borderColor: colors.theme }}>
        <span style={{ color: colors.theme, fontWeight: 300 }}>FASE 3:</span> Controles Interativos
      </h3>

      <p className='--padding-left'>
        1. De volta ao início da planilha <strong>Dashboard</strong>, insira duas caixas de combinação logo abaixo do
        título e formate suas propriedades, como mostrado adiante:
      </p>

      <ImageContainer src={pageData.images[5]} />

      <TableAdvanced04 />

      <p className='--padding-left'>
        2. Ao lado da segunda caixa de combinação, desenhe uma barra de rolagem horizontal. Ela também será usada como
        forma de alterar os meses rapidamente dentro do ano escolhido. Formate-a da seguinte maneira:
      </p>

      <ImageContainer src={pageData.images[6]} />

      <p className='--padding-left'>3. Para a barra de rolagem, atribua uma altura de 0,6 cm e largura de 5 cm;</p>
      <p className='--padding-left'>
        4. Se necessário, use as opções da guia <strong>Ferramentas de Desenho</strong> para alinhar os controles
        inseridos, os quais deverão ficar assim:
      </p>

      <ImageContainer src={pageData.images[7]} />

      <p className='--padding-left'>5. Teste os controles inseridos;</p>
      <p className='--padding-left'>
        6. Agora, você vai fazer com que os três controles não saiam do lugar quando você alterar as larguras de
        colunas. Selecione os três controles (use a tecla CTRL), clique com o botão direito do mouse e escolha{' '}
        <strong>Tamanho e Propriedades</strong>. No painel <strong>Definir Forma</strong>, abra o item{' '}
        <strong>Propriedades</strong>e selecione a opção <strong>⦿ Não mover ou dimensionar com células</strong>. Para
        que os controles não sejam impressos, desmarque a caixa <strong>◻ Imprimir objeto</strong>:
      </p>

      <ImageContainer src={pageData.images[8]} />

      <p className='--padding-left'>7. Salve o arquivo.</p>

      {/* 📌 FASE 4 */}

      <h3 style={{ borderColor: colors.theme }}>
        <span style={{ color: colors.theme, fontWeight: 300 }}>FASE 4:</span> Tabela Análise da Qualidade do Serviço
      </h3>

      <p className='--padding-left'>
        1. 1. Digite a tabela <strong>Análise da Qualidade do Serviço</strong>, conforme imagem a seguir, logo abaixo
        dos controles de formulário desenhados:
      </p>

      <ImageContainer src={pageData.images[9]} />

      <p className='--padding-left'>
        2. Na célula <strong>H5</strong>, digite o número <strong>1</strong>. Depois, arraste-a para a direita pela alça
        de preenchimento, enquanto segura a tecla CTRL. Solte quando a numeração chegar a <strong>12</strong>;
      </p>
      <p className='--padding-left'>
        3. Formate as bordas do intervalo <strong>C5:S9</strong> com cinza 35%;
      </p>
      <p className='--padding-left'>
        4. Aplique negrito, texto centralizado e sombreamento cinza 15% às células da linha de cabeçalho da tabela;
      </p>
      <p className='--padding-left'>
        5. Aplique a largura de 2 caracteres à coluna <strong>B</strong>, 12 caracteres à coluna <strong>C</strong>, 3
        caracteres à coluna <strong>D</strong> e 7 caracteres à coluna <strong></strong>E;
      </p>
      <p className='--padding-left'>
        6. Aplique a largura de 14 caracteres às colunas <strong>F</strong> e <strong>G</strong>;
      </p>
      <p className='--padding-left'>
        7. Aplique a largura de 3 caracteres às colunas <strong>H</strong> até <strong>S</strong>;
      </p>
      <p className='--padding-left'>8. Compare a primeira tabela com a imagem a seguir:</p>

      <ImageContainer src={pageData.images[10]} />

      <p className='--padding-left'>
        9. Para que você possa conferir os valores com as etapas seguintes, nas caixas de combinação, estabeleça o ano
        como <strong>2022</strong> e o mês como <strong>Janeiro</strong>;
      </p>
      <p className='--padding-left'>
        10. Na célula <strong>F5</strong>, insira a fórmula que exibe a data em função do <strong>Mês</strong> e{' '}
        <strong>Ano</strong> escolhidos:
      </p>

      <div className='--padding-left'>
        <div className='code-line'>=DATA(Ano;Mês;1)</div>
      </div>

      <p className='--padding-left'>
        11. Aplique a <strong>F5</strong> o seguinte formato personalizado: <strong>mmmm/aaaa</strong>;
      </p>
      <p className='--padding-left'>
        12. Em <strong>G5</strong>, escreva as iniciais dos 12 meses do ano em letra maiúscula, separando cada uma com
        um espaço: <strong>J F M A M J J A S O N D</strong>. Em seguida, formate <strong>G5</strong> com fonte{' '}
        <strong>Consolas</strong>, tamanho 10 pontos e alinhamento vertical centralizado. Aplique autoajuste à coluna{' '}
        <strong>G</strong>;
      </p>
      <p className='--padding-left'>
        13. As quatro células da coluna <strong>B</strong> à esquerda dos tipos de chamado (<strong>B6:B9</strong>)
        servirão de legenda para os gráficos. Elas representam as cores do tema em uso pelo Excel quando um gráfico é
        inserido. Então, modifique o preenchimento dessas quatro células usando as quatro cores seguintes, nesta ordem:
        Elogio (azul), Reclamação (vermelho), Sugestão (verde) e Suporte (roxo);
      </p>

      <ImageContainer src={pageData.images[11]} />

      <p className='--padding-left'>
        14. Aplique bordas brancas às células do intervalo <strong>B6:B9</strong>:
      </p>

      <ImageContainer src={pageData.images[12]} />

      <p className='--padding-left'>
        15. Calcule a quantidade de elogios na célula <strong>D6</strong>:
      </p>

      <div className='--padding-left'>
        <div className='code-line'>=CONT.SES(Chamados[Tipo]; C6; Chamados[Mês]; Mês; Chamados[Ano]; Ano)</div>
      </div>

      <p className='--padding-left'>16. Copie para baixo essa fórmula para as três outras categorias;</p>
      <p className='--padding-left'>
        17. Altere a caixa de combinação do ano para <strong>2021</strong>. Os valores apareceram zerados porque não há
        chamados nesse ano e mês. Retorne o ano para 2022;
      </p>
      <p className='--padding-left'>
        18. Em <strong>E6</strong>, calcule a porcentagem sobre o total para a primeira categoria:
      </p>

      <div className='--padding-left'>
        <div className='code-line'>=D6/SOMA($D$6:$D$9)</div>
      </div>

      <p className='--padding-left'>
        19. Quando não houver valores na coluna <strong>D</strong>, existe a chance de essa soma ser zero e, portanto,
        gerar o erro <strong>#DIV/0!</strong>. Para prevenir esse erro, edite a fórmula em <strong>E6</strong> e inclua
        a função <strong>SEERRO</strong>:
      </p>

      <div className='--padding-left'>
        <div className='code-line'>=SEERRO(D6/SOMA($D$6:$D$9); "")</div>
      </div>

      <p className='--padding-left'>20. Copie a fórmula para as demais categorias;</p>
      <p className='--padding-left'>
        21. Formate o intervalo <strong>E6:E9</strong> com porcentagem e uma casa decimal;
      </p>
      <p className='--padding-left'>
        22. Em <strong>F6</strong>, escreva a fórmula que simplesmente copia o valor de <strong>E6</strong>:
      </p>

      <div className='--padding-left'>
        <div className='code-line'>=E6</div>
      </div>

      <p className='--padding-left'>23. Copie a fórmula para baixo;</p>
      <p className='--padding-left'>
        24. Mantenha essas quatro células da coluna <strong>F</strong> selecionadas. Na guia{' '}
        <strong>Página Inicial</strong>, grupo <strong>Estilo</strong>, clique no botão{' '}
        <strong>Formatação Condicional</strong>, escolha <strong>Barra de Dados</strong> e, depois,{' '}
        <strong>Mais Regras</strong>;
      </p>
      <p className='--padding-left'>
        25. Na caixa de diálogo <strong>Nova Regra de Formatação</strong>, marque a opção{' '}
        <strong>Mostrar Barra Somente</strong> e faça com que os valores variem de um <strong>Mínimo</strong> de{' '}
        <strong>0</strong> até um <strong>Máximo</strong> de <strong>1</strong> (ou 100%). Escolha uma cor de
        preenchimento:
      </p>

      <ImageContainer src={pageData.images[13]} />

      <p className='--padding-left'>
        26. Clique em <strong>OK</strong> para concluir a regra de formatação condicional. No momento, essas barras
        representam a quantidade de cada tipo de chamado no total de chamados daquele mês. A largura da célula
        representa 100% dos chamados do mês;
      </p>
      <p className='--padding-left'>
        27. Nas doze colunas numeradas, será feito o cálculo das quantidades de cada uma das quatro categorias, mês a
        mês, para que esses dados gerem um minigráfico. Selecione o intervalo <strong>H6:S9</strong>;
      </p>
      <p className='--padding-left'>
        28. Sem desmarcar a seleção, digite a fórmula adiante (a célula ativa no momento é <strong>H6</strong>), mas não
        tecle ENTER:
      </p>

      <div className='--padding-left'>
        <div className='code-line'>=CONT.SES(Chamados[Tipo]; $C6; Chamados[Ano]; Ano; Chamados[Mês]; H$5)</div>
      </div>

      <p className='--padding-left'>
        29. Agora, para inserir essa fórmula em todas as células selecionadas simultaneamente, tecle CTRL + ENTER.
        Observe que a fórmula usou referência mista para os endereços que apontam para as células da coluna{' '}
        <strong>C</strong> (exemplo <strong>$C6</strong>). Na imagem seguinte, veja como está sua planilha para o ano de
        2022, mês de janeiro:
      </p>

      <ImageContainer src={pageData.images[14]} />

      <p className='--padding-left'>
        30. Mantenha a seleção de células e, na guia <strong>Inserir</strong>, grupo <strong>Minigráficos</strong>,
        escolha <strong>Coluna</strong>. O intervalo de dados já deve aparecer selecionado: <strong>H6:S9</strong>. Para
        o <strong>Intervalo dos locais</strong>, selecione <strong>G6:G9</strong>:
      </p>

      <ImageContainer src={pageData.images[15]} />

      <p className='--padding-left'>
        31. Clique em <strong>OK</strong> para criar os minigráficos. Na guia <strong>Minigráfico</strong>, marque a
        caixa <strong>Ponto Alto</strong> para destacar os pontos de máximo. Os minigráficos mostram as tendências de
        aumento ou diminuição de cada tipo de chamado ao longo dos meses do ano escolhido:
      </p>

      <ImageContainer src={pageData.images[16]} />

      <p className='--padding-left'>
        32. Para evitar que os minigráficos desapareçam quando as colunas <strong>H</strong> e <strong>S</strong>{' '}
        ficarem ocultas: selecione os minigráficos e, na guia <strong>Minigráfico</strong>, botão{' '}
        <strong>Editar Dados</strong>, opção <strong>Células Ocultas e Vazias</strong>, ative a opção{' '}
        <strong>⊡ Mostrar dados em linhas e colunas ocultas</strong> e clique em <strong>OK</strong> para encerrar:
      </p>

      <ImageContainer src={pageData.images[17]} />

      <p className='--padding-left'>33. A primeira tabela está concluída. Salve o arquivo.</p>

      {/* 📌 FASE 5 */}

      <h3 style={{ borderColor: colors.theme }}>
        <span style={{ color: colors.theme, fontWeight: 300 }}>FASE 5:</span> Tabela Análise do Atendimento
      </h3>

      <p className='--padding-left'>
        1. A segunda tabela será muito parecida com a primeira. Selecione o intervalo <strong>B4:S9</strong> e pressione
        CTRL + C para copiar;
      </p>
      <p className='--padding-left'>
        2. Clique na célula <strong>B11</strong> e tecle ENTER. A tabela foi duplicada;
      </p>
      <p className='--padding-left'>
        3. Em <strong>C11</strong>, altere o título da tabela para <strong>Análise do Atendimento</strong>;
      </p>
      <p className='--padding-left'>
        4. Altere o conteúdo de <strong>C12</strong> para <strong>Status</strong>;
      </p>
      <p className='--padding-left'>
        5. Altere o conteúdo das células <strong>C13</strong> a <strong>C16</strong> para: <strong>Fechado</strong>,{' '}
        <strong>Crítico</strong>, <strong>Aberto</strong> e <strong>Erro</strong> (preste bastante atenção na acentuação
        das palavras, pois elas devem ser idênticas às existentes na coluna <strong>Status</strong> da base de dados);
      </p>
      <p className='--padding-left'>
        6. Edite a fórmula da célula <strong>D13</strong> e troque <strong>[Tipo]</strong> por <strong>[Status]</strong>
        :
      </p>

      <div className='--padding-left'>
        <div className='code-line'>=CONT.SES(Chamados[Status]; C13; Chamados[Ano]; Ano; Chamados[Mês]; Mês)</div>
      </div>

      <p className='--padding-left'>7. Copie essa fórmula para baixo;</p>
      <p className='--padding-left'>
        8. Selecione as células <strong>H13:S16</strong>;
      </p>
      <p className='--padding-left'>
        9. Sem desmarcar a seleção, pressione F2 para editar a fórmula da célula ativa (<strong>H13</strong>). Troque
        <strong>[Tipo]</strong> por <strong>[Status]</strong>. Troque <strong>$C6</strong> por <strong>$C13</strong>.
        Não pressione a tecla ENTER;
      </p>

      <div className='--padding-left'>
        <div className='code-line'>=CONT.SES(Chamados[Status]; $C13; Chamados[Ano]; Ano; Chamados[Mês]; H$5)</div>
      </div>

      <p className='--padding-left'>
        10. Agora, para inserir essa fórmula em todas as células selecionadas simultaneamente, tecle CTRL + ENTER. Por
        enquanto, seu dashboard está assim:
      </p>

      <ImageContainer src={pageData.images[18]} />

      <p className='--padding-left'>
        11. Oculte as colunas <strong>H</strong> até <strong>S</strong>;
      </p>
      <p className='--padding-left'>
        12. Teste novamente os controles de <strong>Ano</strong> e <strong>Mês</strong>. Observe as mudanças nas
        tabelas. Depois retorne a ano <strong>2022</strong> e mês <strong>Janeiro</strong>;
      </p>
      <p className='--padding-left'>
        13. Ao lado da tabela <strong>Análise da Qualidade do Serviço</strong>, insira um gráfico de pizza 2D usando o
        intervalo <strong>C5:D9</strong>. Remova o título e a legenda. Deixe a área do gráfico sem preenchimento e sem
        contorno. Reposicione o gráfico entre as colunas <strong>T</strong> e <strong>U</strong> e entre as linhas{' '}
        <strong>4</strong> e <strong>10</strong>. Use a tecla ALT para ajudar no alinhamento com as linhas de grade;
      </p>

      <ImageContainer src={pageData.images[19]} />

      <p className='--padding-left'>
        14. Ao lado da tabela <strong>Análise do Atendimento</strong>, insira um gráfico de pizza 2D usando o intervalo{' '}
        <strong>C12:D16</strong>. Remova o título e a legenda. Deixe a área do gráfico sem preenchimento e sem contorno.
        Reposicione o gráfico entre as colunas <strong>T</strong> e <strong>U</strong> e entre as linhas{' '}
        <strong>11</strong> e <strong>17</strong>. Use a tecla ALT para ajudar no alinhamento com as linhas de grade;
      </p>

      <ImageContainer src={pageData.images[20]} />

      <p className='--padding-left'>
        15. Na célula <strong>C18</strong>, escreva <strong>Maior tempo de atendimento registrado:</strong> (incluindo
        os dois-pontos) e aplique negrito ao texto;
      </p>
      <p className='--padding-left'>
        16. Copie o formato da célula <strong>D16</strong> para a célula <strong>G18</strong> (use o{' '}
        <strong>Pincel de Formatação</strong>
        );
      </p>
      <p className='--padding-left'>
        17. Na célula <strong>G18</strong>, escreva a fórmula que recupera o maior tempo de atendimento para o ano e o
        mês especificados. Aqui, será usada uma função de banco de dados e os critérios estão em{' '}
        <strong>AC2:AD3</strong>;
      </p>

      <div className='--padding-left'>
        <div className='code-line'>=BDMÁX(Chamados[#Tudo];"Tempo";AC2:AD3)</div>
      </div>

      <p className='--padding-left'>
        18. O resultado é um número serial de data e hora. Lembre-se de que números antes da vírgula representam dias, e
        números depois da vírgula parte de um dia (horas). Aplique, à célula <strong>G18</strong>, o formato numérico
        personalizado
        <strong>[hh]:mm</strong> (os colchetes ao redor da posição das horas indicam que as horas podem exceder 24);
      </p>
      <p className='--padding-left'>
        19. Centralize o conteúdo de <strong>G18</strong>;
      </p>
      <p className='--padding-left'>20. Esta fase está concluída. Salve o arquivo.</p>

      <ImageContainer src={pageData.images[21]} />

      {/* 📌 FASE 6 */}

      <h3 style={{ borderColor: colors.theme }}>
        <span style={{ color: colors.theme, fontWeight: 300 }}>FASE 6:</span> Gráfico de Velocímetro
      </h3>

      <p className='--padding-left'>
        1. Na planilha <strong>Dashboard</strong>, a partir da coluna <strong>AJ</strong>, digite e formate as
        informações que serão usadas para montagem do fundo do velocímetro de 240° e do ponteiro, conforme imagem a
        seguir:
      </p>

      <ImageContainer src={pageData.images[22]} />

      <p className='--padding-left'>
        2. Mescle as células <strong>AJ17:AL17</strong>;
      </p>
      <p className='--padding-left'>
        3. Como valor do <strong>Limite</strong> (célula <strong>AK11</strong>), escreva <strong>90</strong>. Lembre-se
        de que foi estabelecido, no início do projeto, o valor máximo de <strong>60</strong> para as reclamações. Esse
        valor corresponde a dois terços do círculo completo. O <strong>Limite</strong> deve sempre representar o círculo
        completo, neste caso 60 + 30 = 90;
      </p>
      <p className='--padding-left'>
        4. A célula do <strong>Valor</strong> (<strong>AK12</strong>) deve simplesmente trazer o conteúdo da célula que
        tem a quantidade de reclamações:
      </p>

      <div className='--padding-left'>
        <div className='code-line'>=D7</div>
      </div>

      <p className='--padding-left'>
        5. A célula do <strong>Ponteiro</strong> (<strong>AK13</strong>) deve conter o valor da fatia do ponteiro.
        Assuma aqui 5% do valor do <strong>Limite</strong> para que a fatia seja facilmente selecionada (posteriormente,
        você vai zerar o valor do <strong>Ponteiro</strong>);
      </p>

      <div className='--padding-left'>
        <div className='code-line'>=5%*AK11</div>
      </div>

      <p className='--padding-left'>
        6. A célula do <strong>Complemento</strong> (<strong>AK14</strong>) deve conter a fórmula que calcula a fatia
        restante para o gráfico (<strong>Limite</strong> –<strong>Valor</strong> – <strong>Ponteiro</strong>):
      </p>

      <div className='--padding-left'>
        <div className='code-line'>=AK11-AK12-AK13</div>
      </div>

      <p className='--padding-left'>
        7. Na célula mesclada <strong>AJ17</strong>, digite a fórmula que monta um texto que será exibido no odômetro.
        Ele deverá informar quantas reclamações existem no período selecionado:
      </p>

      <div className='--padding-left'>
        <div className='code-line'>=AK12 & " reclamações em " & TEXTO(F5;"mmmm/aaaa")</div>
      </div>

      <ImageContainer src={pageData.images[23]} />

      <p className='--padding-left'>8. Clique em uma célula vazia e insira um gráfico de rosca;</p>
      <p className='--padding-left'>
        9. Na guia <strong>Formatar</strong>, especifique 8 cm de <strong>Altura</strong> e 8 cm de{' '}
        <strong>Largura</strong>;
      </p>
      <p className='--padding-left'>
        10. Posicione o gráfico a partir da célula <strong>V4</strong>:
      </p>

      <ImageContainer src={pageData.images[24]} />

      <p className='--padding-left'>
        11. Na guia <strong>Design</strong>, grupo <strong>Dados</strong>, clique no botão{' '}
        <strong>Selecionar Dados</strong>;
      </p>
      <p className='--padding-left'>
        12. Adicione uma série de dados: <strong>$AK$3:$AK$8</strong> (os seis números iguais na lista{' '}
        <strong>Valores</strong>
        );
      </p>
      <p className='--padding-left'>
        13. Estabeleça, como rótulos do eixo, o intervalo de quatro células da coluna <strong>Rótulos</strong>:{' '}
        <strong>$AJ$3:$AJ$6</strong>;
      </p>
      <p className='--padding-left'>
        14. Em <strong>Células Ocultas e Vazias</strong>, ative a opção{' '}
        <strong>⊡ Mostrar dados em linhas e colunas ocultas</strong> e clique em <strong>OK</strong>. Em seguida, feche
        a caixa <strong>Selecionar Fonte de Dados</strong>;
      </p>
      <p className='--padding-left'>15. Exclua o título do gráfico e a legenda;</p>
      <p className='--padding-left'>
        16. Aplique um duplo-clique em uma das fatias para abrir o painel lateral{' '}
        <strong>Formatar Séries de Dados</strong>. Altere os seguintes valores: Ângulo da primeira fatia ={' '}
        <strong>240°</strong>, Tamanho do Orifício da Rosca = <strong>50%</strong>;
      </p>

      <ImageContainer src={pageData.images[25]} />

      <p className='--padding-left'>
        17. Pelo botão <strong>Elementos do Gráfico</strong>, ative os <strong>Rótulos de Dados</strong>. Selecione os
        rótulos de dados. No painel <strong>Formatar Rótulos de Dados</strong>, em <strong>Opções de Rótulo</strong>,
        marque <strong>⊡ Nome da Categoria</strong> e desmarque <strong>◻ Valor</strong>;
      </p>
      <p className='--padding-left'>
        18. Com os rótulos ainda selecionados, vá à guia <strong>Página Inicial</strong> e aumente a fonte para 12
        pontos, negrito e cor branca;
      </p>
      <p className='--padding-left'>
        19. Clique em uma das fatias do gráfico para selecionar a série toda. Na guia <strong>Formatar</strong>, botão{' '}
        <strong>Efeitos de Forma</strong>, aponte para <strong>Sombra</strong> e escolha a sombra{' '}
        <strong>Externa</strong> (primeira opção);
      </p>
      <p className='--padding-left'>
        20. Agora, defina cores para cada fatia: para a fatia <strong>Ótimo</strong>, aplique a cor azul; para a fatia{' '}
        <strong>Bom</strong>, a cor verde; para a fatia <strong>Regular</strong>, a cor laranja; e para a fatia{' '}
        <strong>Ruim</strong>, a cor vermelha;
      </p>
      <p className='--padding-left'>
        21. Selecione os rótulos de dados. Na guia <strong>Formatar</strong>, grupo <strong>Estilos de WordArt</strong>,
        clique no botão <strong>Efeitos de Texto</strong>, depois, aponte para <strong>Sombra</strong> e escolha a
        primeira sombra <strong>Externa: Deslocamento Inferior Direito</strong>. Isso dará mais contraste ao texto,
        melhorando sua leitura;
      </p>
      <p className='--padding-left'>
        22. Deixe a fatia de baixo (maior) sem preenchimento, sem contorno e sem efeito de sombra;
      </p>
      <p className='--padding-left'>
        23. Formate a área do gráfico: aplique um preenchimento sólido ou gradiente ao fundo e escolha cores claras;
      </p>
      <p className='--padding-left'>
        24. Clique no botão <strong>Elementos do Gráfico</strong>, marque <strong>⊡ Título do Gráfico</strong> e{' '}
        <strong>Título Sobreposto Centralizado</strong>:
      </p>

      <ImageContainer src={pageData.images[26]} />

      <p className='--padding-left'>
        25. Escreva, como título do gráfico: <strong>Nível de Reclamações no Período</strong>. Aplique negrito e fonte
        com tamanho de 12 pontos;
      </p>
      <p className='--padding-left'>
        26. Desenhe um retângulo na parte inferior do gráfico do fundo do velocímetro. Formate-o como quiser. Deixe
        altura suficiente para uma linha de texto;
      </p>
      <p className='--padding-left'>
        27. Com o retângulo selecionado, clique na <strong>Barra de fórmulas</strong>, digite o sinal de igual (
        <strong>=</strong>), clique na célula <strong>AJ17</strong> e tecle ENTER. O texto montado já aparece dentro do
        retângulo;
      </p>
      <p className='--padding-left'>
        28. Centralize o texto no retângulo e faça ajustes para que todo ele fique legível:
      </p>

      <ImageContainer src={pageData.images[27]} />

      <p className='--padding-left'>
        29. Selecione o intervalo <strong>AJ12:AK14</strong>, que contém as três fatias do gráfico do ponteiro, e insira
        um gráfico de pizza 2D;
      </p>
      <p className='--padding-left'>
        30. Na guia <strong>Formatar</strong>, ajuste a <strong>Largura</strong> e a <strong>Altura</strong> desse novo
        gráfico para 6 cm;
      </p>
      <p className='--padding-left'>
        31. Na guia <strong>Design</strong>, grupo <strong>Dados</strong>, clique no botão{' '}
        <strong>Selecionar Dados</strong>;
      </p>
      <p className='--padding-left'>
        32. Em <strong>Células Ocultas e Vazias</strong>, ative a opção{' '}
        <strong>⊡ Mostrar dados em linhas e colunas ocultas</strong> e clique em <strong>OK</strong>. Em seguida, feche
        a caixa <strong>Selecionar Fonte de Dados</strong>;
      </p>
      <p className='--padding-left'>33. Exclua a legenda e o título;</p>

      <ImageContainer src={pageData.images[28]} />

      <p className='--padding-left'>
        34. Dê um duplo-clique em uma das fatias. No painel <strong>Formatar Séries de Dados</strong>, rotacione a
        primeira fatia em 240°;
      </p>
      <p className='--padding-left'>
        35. Selecione a fatia do <strong>Ponteiro</strong> (vermelha). Aplique preenchimento preto e contorno preto e
        espessura de 6 pontos;
      </p>

      <ImageContainer src={pageData.images[29]} />

      <p className='--padding-left'>
        36. Para as fatias do <strong>Valor</strong> e do <strong>Complemento</strong>, remova o preenchimento e o
        contorno;
      </p>
      <p className='--padding-left'>37. Formate a área do gráfico para que fique sem preenchimento e sem contorno;</p>
      <p className='--padding-left'>
        38. Digite <strong>0</strong> na célula <strong>AK13</strong> (valor do ponteiro):
      </p>

      <ImageContainer src={pageData.images[30]} />

      <p className='--padding-left'>
        39. Sobreponha o gráfico do ponteiro ao gráfico do fundo do velocímetro. Procure deixar os dois centralizados.
        Se desejar, use os comandos de alinhamento da guia <strong>Formatar</strong>, grupo <strong>Organizar</strong>,
        botão <strong>Alinhar</strong>;
      </p>
      <p className='--padding-left'>
        {/* 🐞⚠️ */}
        40. Clique em uma célula vazia da planilha. Insira uma imagem que se encontra na pasta{''}
        <strong>Imagens</strong>: <strong>Botão.png</strong>. Formate a largura e a altura da imagem para que fique com
        1,5 cm. Em seguida, centralize-a dentro do velocímetro;
      </p>
      <p className='--padding-left'>
        41. Caso algum dos gráficos ou formas geométricas tenha ficado fora de ordem, use o{' '}
        <strong>Painel de Seleção</strong> para facilitar o processo de empilhamento;
      </p>
      <p className='--padding-left'>
        42. Selecione os dois gráficos (fundo e ponteiro), a imagem do botão e o retângulo (odômetro) e faça um
        agrupamento desses objetos;
      </p>
      <p className='--padding-left'>
        43. Selecione a partir da linha <strong>20</strong> até a linha do final da planilha e oculte-as;
      </p>
      <p className='--padding-left'>
        44. Selecione a partir da coluna <strong>AA</strong> até a coluna do final da planilha e oculte-as;
      </p>
      <p className='--padding-left'>45. Desative as linhas de grade e os títulos de linha e coluna;</p>
      <p className='--padding-left'>
        46. Se desejar, altere o zoom da planilha para acomodar melhor o conteúdo na tela;
      </p>
      <p className='--padding-left'>
        47. Faça novos testes, alterando as caixas de combinação de ano e mês para visualizar os resultados;
      </p>
      <p className='--padding-left'>48. Salve o projeto.</p>

      <p>O seu dashboard está concluído:</p>

      <ImageContainer src={pageData.images[31]} />

      <PageFooter title='Mãos à Obra!' course={pageData.course} />
    </>
  );
}

export default LabAdvanced04;
