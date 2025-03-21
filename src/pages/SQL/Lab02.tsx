import { ImageContainer } from '../../components/layout/ImageContainer';
import { LabTitle } from './components/LabTitle';
import { LabSection } from './components/LabSection';
import { LabConclusion } from './components/LabConclusion';

import { classTitles } from './data/courseData';
import imageData from './data/imageData';
import lab02Data from './data/lab02Data';

export const SQL_Lab02 = () => {
  const pageData = {
    classTitle: classTitles[2],
    images: imageData.Class02,
    labData: lab02Data,
  };

  return (
    <div className='contentContainer'>
      <div className='wrapper'>
        <LabTitle title={pageData.classTitle} />

        <p>
          De acordo com o <strong>Modelo Entidade-Relacionamento</strong>, complete os passos a seguir:
        </p>

        <ImageContainer
          src={pageData.images[0]}
          alt='Imagem 1: Modelo Entidade-Relacionamento (MER) para um banco de dados de Aluno-Disciplina, ilustrando os relacionamentos entre as tabelas ALUNO, DISCIPLINA e CARGO.'
        />
      </div>

      {pageData.labData.map((sections, index) => (
        <LabSection key={`section-${index}`} {...{ sections }} />
      ))}

      <LabConclusion />
    </div>
  );
};
