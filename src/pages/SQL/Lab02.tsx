import { ImageContainer } from '../../components/layout/ImageContainer';
import { TitleAndDivider } from '../../components/layout/TitleAndDivider';
import { LabSection } from './components/LabSection';

import imageData from './assets/imageData';
import lab02Data from './data/lab02Data';
import { classTitles } from '../../data/SQL/courseData';
import { darkTheme } from '../../constants/colors';

import type PageData from '../../types/PageData';

export const SQL_Lab02 = () => {
  const pageData: Partial<PageData> = {
    classTitle: classTitles[2],
    images: imageData.Class02,
  };

  return (
    <div className='contentContainer'>
      <div className='wrapper'>
        <TitleAndDivider
          title={pageData.classTitle!}
          subheading='Exercício de Laboratório'
          borderColor={darkTheme.accents.primary}
        />

        <p>
          De acordo com o <strong>Modelo Entidade-Relacionamento</strong>, complete os passos a seguir:
        </p>

        <ImageContainer
          src={pageData.images![0]}
          alt='Imagem 1: Modelo Entidade-Relacionamento (MER) para um banco de dados de Aluno-Disciplina, ilustrando os relacionamentos entre as tabelas ALUNO, DISCIPLINA e CARGO.'
        />
      </div>

      {lab02Data.map((sections, index) => (
        <LabSection key={`section-${index}`} {...{ sections }} />
      ))}
    </div>
  );
};
