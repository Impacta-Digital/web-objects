import { IconFolderDownload } from '../icons/FolderDownload';
import type { DownloadButtonProps } from '../types/DownloadButtonProps';

export const SingleDownloadButton = ({ buttonText, filePath, hyperlink }: DownloadButtonProps) => {
  return (
    <div className='largeButtonContainer'>
      <a href={filePath ?? hyperlink} download={!!filePath} target={filePath ? '_self' : '_blank'} rel='noreferrer'>
        <div className='button largeButton'>
          <div className='largeButtonIcon'>
            <IconFolderDownload />
          </div>

          {buttonText}
        </div>
      </a>
    </div>
  );
};
