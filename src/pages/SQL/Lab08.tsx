import { LabTitle } from './components/LabTitle';
import { LabSection } from './components/LabSection';
import { LabConclusion } from './components/LabConclusion';
import { SingleDownloadButton } from '../../components/layout/SingleDownloadButton';

import { pageId as SQLRoutes } from '../../routes/SQL';
import { darkTheme } from '../../constants/colors';
import { classTitles } from './data/courseData';
import lab08Data from './data/lab08Data';

export const SQL_Lab08 = () => {
  const pageData = {
    classTitle: classTitles[8],
    labData: lab08Data,
  };

  return (
    <div className='contentContainer'>
      <div className='wrapper'>
        <LabTitle title={pageData.classTitle} />

        <p>
          Utilizando o banco de dados <strong>PEDIDOS</strong>, complete os passos a seguir.
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
        Dentro do pacote zip você encontrará uma imagem com o &quot;Modelo Relacional do banco de dados PEDIDOS&quot;
        para consulta.
      </p>

      {pageData.labData.map((sections, index) => (
        <LabSection key={`section-${index}`} {...{ sections }} />
      ))}

      <LabConclusion />
    </div>
  );
};
