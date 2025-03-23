import { LabTitle } from './components/LabTitle';
import { LabSection } from './components/LabSection';
import { LabConclusion } from './components/LabConclusion';
import { SingleDownloadButton } from '../../components/layout/SingleDownloadButton';

import { pageId as SQLRoutes } from '../../routes/SQL';
import { darkTheme } from '../../constants/colors';
import { classTitles } from './data/courseData';
import lab10Data from './data/lab10Data';

// A – Utilizando subconsultas, realize as consultas adiante:
// Dentro do pacote zip você encontrará uma imagem com o "Modelo Relacional do banco de dados PEDIDOS" e da Tabela "TB_EMPREGADO" para consulta.

export const SQL_Lab10 = () => {
  const pageData = {
    classTitle: classTitles[10],
    labData: lab10Data,
  };

  return (
    <div className='contentContainer'>
      <div className='wrapper'>
        <LabTitle title={pageData.classTitle} />

        <p>
          No o banco de dados <strong>PEDIDOS</strong>, Utilizando subconsultas, realize as consultas adiante.
        </p>

        <p>
          Caso não tenha feito o download do banco de dados <strong>PEDIDOS</strong>, você pode fazê-lo no botão de
          download abaixo. As instruções de como anexar o banco de dados ao SQL Server podem ser acessadas{' '}
          <a href={SQLRoutes.intro} target='_blank' rel='noreferrer'>
            clicando aqui
          </a>
          .
        </p>

        <SingleDownloadButton
          buttonText='Banco de Dados Pedidos'
          filePath='/downloads/SQL/PEDIDOS.zip'
          textColor={darkTheme.foreground}
        />
      </div>

      <p>
        Dentro do pacote zip você encontrará uma imagem com o &quot;Modelo Relacional do banco de dados PEDIDOS&quot; e
        da Tabela &quot;<strong>TB_EMPREGADO</strong>&quot; para consulta.
      </p>

      {pageData.labData.map((sections, index) => (
        <LabSection key={`section-${index}`} {...{ sections }} />
      ))}

      <LabConclusion />
    </div>
  );
};
