import { IconFolderDownload } from '../icons/FolderDownload';
import type { DownloadButtonProps } from '../types/DownloadButtonProps';

export const MultipleDownloadButtons = ({
  buttons,
  textColor,
}: {
  buttons: DownloadButtonProps[];
  textColor: string;
}) => {
  const buttonStyle: React.CSSProperties = {
    ...(textColor ? { color: textColor, fill: textColor } : {}),
    textDecoration: 'none',
  };

  return (
    <div className='largeButtonContainer'>
      {buttons.map(({ buttonText, filePath, hyperlink }, index) => (
        <a
          key={`downloadButton-${index}`}
          href={filePath ?? hyperlink}
          download={!!filePath}
          target={filePath ? '_self' : '_blank'}
          style={buttonStyle}
          rel='noreferrer'
        >
          <div className='button largeButton'>
            <div className='largeButtonIcon'>
              <IconFolderDownload />
            </div>

            {buttonText}
          </div>
        </a>
      ))}
    </div>
  );
};
