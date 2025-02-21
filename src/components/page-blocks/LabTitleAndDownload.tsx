import { TitleAndDivider } from '../layout/TitleAndDivider';
import { DownloadButton } from '../layout/DownloadButton';

export interface LabTitleAndDownloadsProps {
  classTitle: string;
  downloadPath: string;
}

export const LabTitleAndDownloads = (props: LabTitleAndDownloadsProps) => {
  const { classTitle, downloadPath } = props;

  return (
    <>
      {/* - - - - - spacer */}
      <div className='vertical-spacer' />
      <div className='vertical-spacer' />

      <TitleAndDivider title='Mãos à Obra!' subheading='Laboratórios' />
      <p>
        Estes exercícios complementam o aprendizado. Faça-os usando os conceitos aprendidos na aula {classTitle}. Cada
        exercício contém as instruções necessárias para você completar as atividades, bem como menção aos arquivos que
        devem ser abertos, caso necessário. Baixe o material de apoio clicando no botão a seguir:
      </p>

      <DownloadButton filePath={downloadPath} buttonText='Material de Apoio' />

      {/* - - - - - spacer */}
      <div className='vertical-spacer' />
      <div className='vertical-spacer' />
    </>
  );
};
