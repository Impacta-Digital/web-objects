import styles from './ButtonRevealPlayer.module.css';

import { useState } from 'react';

import { IconChevronDown } from '../icons/ChevronDown';
import { IconChevronRight } from '../icons/ChevronRight';

export interface ButtonRevealPlayerProps {
  videoId: string;
  buttonText: string;
}

export const ButtonRevealPlayer = ({ videoId, buttonText }: ButtonRevealPlayerProps) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className={styles.container}>
      <div className='largeButtonContainer'>
        <div className='button largeButton' onClick={() => setShowVideo(!showVideo)}>
          <div className='largeButtonIcon'>{showVideo ? <IconChevronDown /> : <IconChevronRight />}</div>
          {buttonText}
        </div>
      </div>

      {/* - - - - - spacer */}
      <div className='verticalSpacer' />

      <div className={`${styles['video-container']} ${showVideo ? styles.open : ''}`}>
        <div className={styles.iframe}>
          <iframe
            width='100%'
            height='100%'
            src={`https://www.youtube.com/embed/${videoId}`}
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
          />
        </div>

        {/* - - - - - spacer */}
        <div className='verticalSpacer' />
      </div>
    </div>
  );
};
