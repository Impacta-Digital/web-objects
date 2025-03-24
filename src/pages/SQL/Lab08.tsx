import { LabTitle } from './components/LabTitle';
import { LabSection } from './components/LabSection';
import { LabConclusion } from './components/LabConclusion';
import { SingleDownloadButton } from '../../components/layout/SingleDownloadButton';

import { pageId as SQLRoutes } from '../../routes/SQL';
import { darkTheme } from '../../constants/colors';
import { classTitles } from './data/courseData';
import lab08Data from './data/lab08Data';
import imageData from './data/imageData';
import { ImageContainer } from '../../components/layout/ImageContainer';
import { makeTransparent } from '../../utils/colorUtils';

export const SQL_Lab08 = () => {
  const pageData = {
    classTitle: classTitles[8],
    image: imageData.lab08,
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

      <div className='wrapper'>
        <p>
          Dentro do pacote zip você encontrará uma imagem com o Modelo Relacional do banco de dados{' '}
          <strong>PEDIDOS</strong> para consulta: <i className='highlight'>modelo_banco_PEDIDOS.jpg</i>
        </p>

        <ImageContainer
          src={pageData.image}
          imgStyle={{ border: `0.5rem solid ${makeTransparent(darkTheme.accents.primary, 75)}` }}
        />
      </div>

      {pageData.labData.map((sections, index) => (
        <LabSection key={`section-${index}`} {...{ sections }} />
      ))}

      <LabConclusion />
    </div>
  );
};
