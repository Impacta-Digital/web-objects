import styles from './YouTubePlayer.module.css';

export const YouTubePlayer = ({ videoId }: { videoId: string }) => {
  return (
    <div className={styles.iframeContainer}>
      <iframe
        width='100%'
        height='100%'
        src={`https://www.youtube.com/embed/${videoId}`}
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      />
    </div>
  );
};
