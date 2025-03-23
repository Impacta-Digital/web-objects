import { LabTitle } from './components/LabTitle';
import { LabSection } from './components/LabSection';
import { LabConclusion } from './components/LabConclusion';
import { SingleDownloadButton } from '../../components/layout/SingleDownloadButton';

import { pageId as SQLRoutes } from '../../routes/SQL';
import { darkTheme } from '../../constants/colors';
import { classTitles } from './data/courseData';
import { lab12AData, lab12BData } from './data/lab12Data';

export const SQL_Lab12 = () => {
  const pageData = {
    classTitle: classTitles[12],
    labData: [lab12AData, lab12BData],
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

      <h1 style={{ color: darkTheme.accents.primary, borderBottom: '2px solid' }}>
        LABORATÓRIO 1: <strong>UPDATE</strong>
      </h1>

      {pageData.labData[0].map((sections, sectionsIndex) => (
        <LabSection key={`lab1-section${sectionsIndex}`} {...{ sections }} />
      ))}

      <h1 style={{ color: darkTheme.accents.primary, borderBottom: '2px solid' }}>
        LABORATÓRIO 2: <strong>DELETE</strong>
      </h1>

      {pageData.labData[1].map((sections, sectionsIndex) => (
        <LabSection key={`lab2-section${sectionsIndex}`} {...{ sections }} />
      ))}

      <LabConclusion />
    </div>
  );
};
