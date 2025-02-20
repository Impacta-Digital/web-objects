import React, { useState } from 'react';
import styles from './PlayerAndRevealButton.module.css';
import { IconChevronDown } from './icons/ChevronDown';
import { IconChevronRight } from './icons/ChevronRight';

export const PlayerAndRevealButton: React.FC<PlayerAndRevealButtonProps> = ({ videoId, buttonText }) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className={styles['container']}>
      <div className='large-button-container'>
        <div className='button large-button' onClick={() => setShowVideo(!showVideo)}>
          <div className='large-button-icon'>{showVideo ? <IconChevronDown /> : <IconChevronRight />}</div>
          {buttonText}
        </div>
      </div>

      {/* - - - - - spacer */}
      <div className='vertical-spacer' />

      <div className={`${styles['video-container']} ${showVideo ? styles['open'] : ''}`}>
        <div className={styles['iframe']}>
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
        <div className='vertical-spacer' />
        <div className='vertical-spacer' />
      </div>
    </div>
  );
};

interface PlayerAndRevealButtonProps {
  videoId: string;
  buttonText: string;
}
