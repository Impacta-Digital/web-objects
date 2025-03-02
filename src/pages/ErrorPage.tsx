import styles from '../styles/_page.module.css';
import { useRouteError } from 'react-router-dom';

export const ErrorPage = () => {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div id='error-page' className={styles.container}>
      <h1>Opa!</h1>
      <p>Aconteceu um erro inesperado.</p>
      <p>
        <i>
          {error.status} &nbsp;
          {error.statusText || error.message}
        </i>
      </p>
    </div>
  );
};
