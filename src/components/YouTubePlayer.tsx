import React, { useState } from 'react';
import styles from './YouTubePlayer.module.css';

interface YouTubePlayerProps {
  videoId: string;
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ videoId }) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className={styles.container}>
      <button className={styles.toggleButton} onClick={() => setShowVideo(!showVideo)}>
        {showVideo ? 'Hide Video' : 'Show Video'}
      </button>

      <div className={`${styles.videoContainer} ${showVideo ? styles.open : ''}`}>
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
      </div>
    </div>
  );
};

export default YouTubePlayer;
