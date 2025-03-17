import { ButtonRevealContent } from '../../../components/content/ButtonRevealContent';
import { CodeBox } from '../../../components/content/CodeBox';

import type { LabSections } from '../types/LabData';

export interface LabSectionProps {
  sections: LabSections;
}

export const LabSection = ({ sections }: LabSectionProps) => {
  return (
    <div className='wrapper'>
      {sections.map(({ sectionType, content }) => {
        if (sectionType === 'title') {
          return <h2 key={content}>{content}</h2>;
        } else if (sectionType === 'paragraph') {
          return <p key={content}>{content}</p>;
        } else if (sectionType === 'list') {
          return (
            <ul key={content[0]}>
              {content.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        } else {
          return (
            <ButtonRevealContent
              key={content}
              buttonText='Visualizar Resposta'
              altButtonText='Ocultar Resposta'
              content={<CodeBox lang='sql' codeString={content} />}
              alignLeft
            />
          );
        }
      })}
    </div>
  );
};
