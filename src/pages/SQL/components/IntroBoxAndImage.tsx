import styles from './IntroBoxAndImage.module.css';

import { ColorBox } from '../../../components/content/ColorBox';
import { ImageContainer } from '../../../components/layout/ImageContainer';
import { IconExclamation } from '../../../components/icons/Exclamation';

import { darkTheme } from '../../../constants/colors';

export const IntroBoxAndImage = ({ imageSrc }: { imageSrc: string }) => {
  const colorBoxContent = (
    <div className={styles.colorBoxContent}>
      <div className={styles.alert}>
        <div className={styles.boxIcon}>
          <IconExclamation />
        </div>
        <p>
          O banco de dados <strong>PEDIDOS</strong> ainda não foi criado!
        </p>
      </div>
      <ImageContainer src={imageSrc} alt='Imagem 9: Object Explorer mostrando a ausência do banco de dados Pedidos' />
    </div>
  );

  return (
    <div className={styles.container}>
      <div className={styles.colorBox}>
        <ColorBox color={darkTheme.alerts.warning} content={colorBoxContent} />
      </div>
    </div>
  );
};
