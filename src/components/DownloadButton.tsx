import React from 'react';
import { IconFolderDownload } from './icons/FolderDownload';

export interface DownloadButtonProps {
  filePath: string;
  buttonText: string;
}

export const DownloadButton: React.FC<DownloadButtonProps> = ({ filePath, buttonText }) => {
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
