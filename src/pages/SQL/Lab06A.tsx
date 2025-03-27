import { LabTitle } from './components/LabTitle';
import { LabSection } from './components/LabSection';
import { LabConclusion } from './components/LabConclusion';
import { SingleDownloadButton } from '../../components/layout/SingleDownloadButton';

import { pageId as SQLRoutes } from '../../routes/SQL';
import { darkTheme } from '../../constants/colors';
import { classTitles } from './data/courseData';
import { lab06A1Data, lab06A2Data, lab06A3Data } from './data/lab06AData';

export const SQL_Lab06A = () => {
  const pageData = {
    classTitle: classTitles[6],
    labData: [lab06A1Data, lab06A2Data, lab06A3Data],
  };

  return (
    <div className='contentContainer'>
      <div className='wrapper'>
        <LabTitle title={pageData.classTitle} />

        <p>
          Utilizando o banco de dados <strong>PEDIDOS</strong> e listando suas tabelas com base em diferentes critérios,
          complete os passos a seguir.
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

      {pageData.labData.map((lab, labIndex) => (
        <>
          <h1
            style={{
              color: darkTheme.accent.primary,
              borderBottom: '2px solid',
            }}
          >
            LABORATÓRIO A{labIndex + 1}
          </h1>

          {lab.map((sections, sectionsIndex) => (
            <LabSection key={`lab${labIndex}-section${sectionsIndex}`} {...{ sections }} />
          ))}
        </>
      ))}

      <LabConclusion />
    </div>
  );
};
