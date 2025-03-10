import { IconFolderDownload } from '../icons/FolderDownload';

export interface DownloadButtonProps {
  filePath: string;
  buttonText: string;
}

export const DownloadButton = ({ filePath, buttonText }: DownloadButtonProps) => {
  return (
    <div className='largeButtonContainer'>
      <a href={filePath} download>
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
