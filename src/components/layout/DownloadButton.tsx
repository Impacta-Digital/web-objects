import { IconFolderDownload } from '../icons/FolderDownload';

export interface DownloadButtonProps {
  filePath: string;
  buttonText: string;
}

export const DownloadButton = ({ filePath, buttonText }: DownloadButtonProps) => {
  return (
    <div className='large-button-container'>
      <a href={filePath} download>
        <div className='button large-button'>
          <div className='large-button-icon'>
            <IconFolderDownload />
          </div>

          {buttonText}
        </div>
      </a>
    </div>
  );
};
