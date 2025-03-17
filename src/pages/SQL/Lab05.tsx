import { LabTitle } from './components/LabTitle';
import { LabSection } from './components/LabSection';
import { LabConclusion } from './components/LabConclusion';

import { classTitles } from './data/courseData';
import lab05Data from './data/lab05Data';

// 🐞 TODO:/FIXME:
// import type PageData from '../../types/PageData';

export const SQL_Lab05 = () => {
  const pageData = {
    classTitle: classTitles[5],
    labData: lab05Data,
  };

  return (
    <div className='contentContainer'>
      <div className='wrapper'>
        <LabTitle title={pageData.classTitle} />

        <p>
          Utilizando o banco de dados <strong>SISTEMA_ACADEMICO</strong>, criado no laboratório da aula{' '}
          <em>{classTitles[2]}</em>, complete os passos a seguir:
        </p>
      </div>

      {pageData.labData.map((sections, index) => (
        <LabSection key={`section-${index}`} {...{ sections }} />
      ))}

      <LabConclusion />
    </div>
  );
};
