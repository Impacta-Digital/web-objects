import { TitleAndDivider } from '../layout/TitleAndDivider';
import { SingleDownloadButton } from '../../layout/SingleDownloadButton';

export interface LabTitleAndDownloadProps {
  classTitle: string;
  downloadPath: string;
}

export const LabTitleAndDownload = (props: LabTitleAndDownloadProps) => {
  const { classTitle, downloadPath } = props;

  return (
    <>
      {/* - - - - - spacer */}
      <div className='verticalSpacer' />
      <div className='verticalSpacer' />

      <TitleAndDivider title='Mãos à Obra!' subheading={`Laboratório – ${classTitle}`} />
      <p>
        Estes exercícios complementam o aprendizado. Faça-os usando os conceitos aprendidos na aula{' '}
        <strong>{classTitle}</strong>. Cada exercício contém as instruções necessárias para você completar as
        atividades, bem como menção aos arquivos que devem ser abertos, caso necessário. Baixe o material de apoio
        clicando no botão a seguir:
      </p>

      <SingleDownloadButton filePath={downloadPath} buttonText='Material de Apoio' />

      {/* - - - - - spacer */}
      <div className='verticalSpacer' />
      <div className='verticalSpacer' />
    </>
  );
};
