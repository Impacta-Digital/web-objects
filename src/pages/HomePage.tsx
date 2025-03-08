import styles from './Page.module.css';
import { useEffect, useState } from 'react';

export const HomePage = () => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => (prevDots.length < 3 ? prevDots + '.' : ''));
    }, 1000);

    const timer = setTimeout(() => {
      window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    }, 11000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={styles['container']}>
      <h1>Opa!</h1>
      <p>
        <i>Parece</i> que não tem nada aqui{dots}
      </p>
    </div>
  );
};
