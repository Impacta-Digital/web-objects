import { ImageContainer } from '../../components/layout/ImageContainer';
import { TitleAndDivider } from '../../components/layout/TitleAndDivider';
import { MultipleDownloadButtons } from '../../components/layout/MultipleDownloadButtons';
import { CodeBox } from '../../components/content/CodeBox';
import { IntroBoxAndImage } from './components/IntroBoxAndImage';

import imageData from './assets/imageData';
import { darkTheme } from '../../constants/colors';
import { courseTitle, classTitles } from '../../data/SQL/courseData';

import type PageData from '../../types/PageData';

export const SQL_IntroPage = () => {
  const pageData: PageData = {
    classTitle: classTitles.intro,
    course: courseTitle,
    images: imageData.IntroPage,
    multipleDownloads: [
      {
        buttonText: 'Microsoft SSMS 2022',
        hyperlink: 'https://www.microsoft.com/pt-br/sql-server/sql-server-downloads',
      },
      { buttonText: 'Banco de Dados "PEDIDOS"', filePath: '/downloads/SQL/PEDIDOS.zip' },
    ],
  };

  const commonListStyles: React.CSSProperties = {
    fontSize: 'large',
    marginBottom: '1rem',
  };

  return (
    <div className='contentContainer'>
      <div className='wrapper'>
        <TitleAndDivider
          title={pageData.course}
          subheading='Como anexar o Banco de Dados'
          borderColor={darkTheme.accents.primary}
        />

        <p>
          Este guia fornece instruções detalhadas para anexar o banco de dados <strong>PEDIDOS</strong> ao SQL Server. O
          processo envolve a descompactação de arquivos, execução de scripts SQL e configuração no Microsoft SQL Server
          Management Studio.
        </p>
        <p>
          Antes de começar, certifique-se de ter o <strong>Microsoft SQL Server Management Studio (SSMS) 2022</strong>{' '}
          instalado. Caso ainda não o tenha, você pode baixá-lo gratuitamente abaixo. Além disso, tenha em mãos o banco
          de dados <strong>PEDIDOS</strong>, disponível também a seguir.
        </p>

        <MultipleDownloadButtons buttons={pageData.multipleDownloads!} textColor={darkTheme.foreground} />
      </div>

      <div className='wrapper'>
        <h2>
          Passo 1 – Descompactar a pasta <strong>PEDIDOS.ZIP</strong>
        </h2>

        <ol className='--paddingLeft' style={{ ...commonListStyles, listStyle: 'upper-alpha inside' }}>
          <li>
            Localize o arquivo <strong>PEDIDOS.ZIP</strong> no seu computador.
          </li>
          <li>
            Descompacte a pasta para a raiz do disco local <strong>C:</strong>.
          </li>
          <li>
            Verifique se a pasta <strong>Dados</strong> foi criada com sucesso no caminho <strong>C:\Dados</strong>.
          </li>
        </ol>

        <ImageContainer src={pageData.images[0]} alt='Imagem 1: Pasta "Dados" no disco local "C:"' />

        <h2>
          Passo 2 – Verificar os arquivos dentro da pasta <strong>Dados</strong>
        </h2>

        <p>
          A pasta <strong>Dados</strong> deve conter os seguintes arquivos:
        </p>

        <ul className='--paddingLeft' style={{ ...commonListStyles, listStyle: 'circle inside' }}>
          <li>anexa_pedidos.sql</li>
          <li>Pedidos.accdb</li>
          <li>PEDIDOS_INDICES.NDF</li>
          <li>PEDIDOS_LOG.LDF</li>
          <li>PEDIDOS_TABELAS.NDF</li>
          <li>PESSOA.xls</li>
          <li>PESSOA.xlsx</li>
        </ul>

        <p>Certifique-se de que todos os arquivos estão presentes antes de prosseguir.</p>

        <ImageContainer src={pageData.images[1]} alt='Imagem 2: Lista de arquivos dentro da pasta "Dados"' />

        <h2>
          Passo 3 – Acessar o <strong>Microsoft SQL Server Management Studio</strong>
        </h2>

        <ol className='--paddingLeft' style={{ ...commonListStyles, listStyle: 'upper-alpha inside' }}>
          <li>No menu Iniciar, pesquise por &quot;management&quot;.</li>
          <li>
            Selecione o <strong>Microsoft SQL Server Management Studio</strong> para abrir a ferramenta.
          </li>
        </ol>

        <ImageContainer src={pageData.images[2]} alt='Imagem 3: Barra de pesquisa' />
        <ImageContainer src={pageData.images[3]} alt='Imagem 4: Menu de pesquisa' />
        <ImageContainer
          src={pageData.images[4]}
          alt='Imagem 5: Tela inicial do Microsoft SQL Server Management Studio'
        />

        <h2>
          Passo 4 – Abrir o arquivo <strong>anexa_pedidos.sql</strong>
        </h2>

        <ol className='--paddingLeft' style={{ ...commonListStyles, listStyle: 'upper-alpha inside' }}>
          <li>
            No SQL Server Management Studio, clique em <strong>File &gt; Open &gt; File...</strong>.
          </li>
          <li>
            Navegue até a pasta <strong>Dados</strong> e selecione o arquivo <strong>anexa_pedidos.sql</strong>.
          </li>
          <li>
            Clique em <strong>Open</strong> para carregar o script.
          </li>
        </ol>

        <ImageContainer
          src={pageData.images[5]}
          alt='Imagem 6: Menu "File" do Microsoft SQL Server Management Studio'
        />
        <ImageContainer src={pageData.images[6]} alt='Imagem 7: Tela de abertura de arquivos' />
        <ImageContainer src={pageData.images[7]} alt='Imagem 8: Arquivo "anexa_pedidos.sql" aberto no Transact Sql' />

        <IntroBoxAndImage imageSrc={pageData.images[8]} />

        {/* - - - - - spacer */}
        <div className='verticalSpacer' />

        <h2>Passo 5 – Executar o script para anexar o banco de dados</h2>

        <ol className='--paddingLeft' style={{ ...commonListStyles, listStyle: 'upper-alpha inside' }}>
          <li>
            Com o script carregado, clique no botão <strong>Execute</strong> ou pressione <strong>F5</strong> no
            teclado.
          </li>
          <li>
            Aguarde a mensagem <em>&quot;Commands completed successfully&quot;</em>, indicando que o banco de dados foi
            anexado com sucesso.
          </li>
        </ol>

        <ImageContainer
          src={pageData.images[10]}
          alt='Imagem 10: Tela de execução do script no SQL Server Management Studio'
        />

        <h2>Passo 6 – Verificar o banco de dados anexado</h2>

        <ol className='--paddingLeft' style={{ ...commonListStyles, listStyle: 'upper-alpha inside' }}>
          <li>
            No <strong>Object Explorer</strong>, clique com o botão direito no servidor e selecione{' '}
            <strong>Refresh</strong>.{' '}
          </li>
          <li>
            Verifique se o banco de dados <strong>PEDIDOS</strong> aparece na lista de bancos de dados.
          </li>
        </ol>

        <ImageContainer src={pageData.images[12]} alt='Imagem 11: Menu de opções do servidor no Object Explorer' />
        <ImageContainer
          src={pageData.images[13]}
          alt='Imagem 12: Tela do Object Explorer com o banco de dados "PEDIDOS" anexado'
        />

        <h2>Passo 7 – Fechar o script e criar uma nova query</h2>

        <ol className='--paddingLeft' style={{ ...commonListStyles, listStyle: 'upper-alpha inside' }}>
          <li>
            Feche a janela do script clicando no <strong>X</strong> no canto superior direito.
          </li>
          <li>
            Crie uma nova query clicando em <strong>New Query</strong>.
          </li>
        </ol>

        <ImageContainer src={pageData.images[14]} alt='Imagem 13: Botão "Close"' />
        <ImageContainer src={pageData.images[16]} alt='Imagem 14: Botão "New Query"' />
        <ImageContainer src={pageData.images[15]} alt='Imagem 15: Nova janela no editor de texto T-SQL' />

        <h2>
          Passo 8 – Colocar o banco de dados <strong>PEDIDOS</strong> em uso
        </h2>

        <ol className='--paddingLeft' style={{ ...commonListStyles, listStyle: 'upper-alpha inside' }}>
          <li>
            Na nova query, digite o seguinte comando:
            <CodeBox lang='sql' codeString='USE PEDIDOS' />
          </li>
          <li>
            Execute o comando clicando em <strong>Execute</strong> ou pressionando <strong>F5</strong>.
          </li>
          <li>
            Observe que o banco de dados em uso agora é o <strong>PEDIDOS</strong>, e não mais o <strong>Master</strong>
            .
          </li>
        </ol>

        <ImageContainer
          src={pageData.images[17]}
          alt='Imagem 16: Tela de execução do comando "USE PEDIDOS" antes da execução (banco de dados "Master")'
        />
        <ImageContainer
          src={pageData.images[18]}
          alt='Imagem 17: Tela de execução do comando "USE PEDIDOS" após a execução (banco de dados "PEDIDOS")'
        />
      </div>

      <div className='wrapper'>
        <h2>Conclusão</h2>

        <p>
          Agora que o banco de dados <strong>PEDIDOS</strong> está anexado e em uso, você está pronto para começar a
          trabalhar com ele.
        </p>

        <h1 style={{ color: darkTheme.accents.secondary, textTransform: 'uppercase', textAlign: 'center' }}>
          Bom curso!
        </h1>

        {/* - - - - - spacer */}
        <div className='verticalSpacer' />
      </div>
    </div>
  );
};
