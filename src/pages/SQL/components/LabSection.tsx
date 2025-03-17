import { ButtonRevealContent } from '../../../components/content/ButtonRevealContent';
import { CodeBox } from '../../../components/content/CodeBox';

import type { LabSections } from '../types/LabData';

export interface LabSectionProps {
  sections: LabSections;
}

export const LabSection = ({ sections }: LabSectionProps) => {
  const listStyles: React.CSSProperties = {
    listStyle: 'circle inside',
    fontSize: 'large',
    marginBottom: '1rem',
  };

  const renderContent = (content: string | string[], sectionType: string, key: string) => {
    if (sectionType === 'title' || sectionType === 'paragraph') {
      const processedContent = (content as string).split(/__(.+?)__/g).map((part, index) => {
        if (index % 2 === 1) {
          return <strong key={`${key}-strong-${index}`}>{part}</strong>;
        }
        return part;
      });

      if (sectionType === 'title') {
        return <h2 key={key}>{processedContent}</h2>;
      } else {
        return <p key={key}>{processedContent}</p>;
      }
    } else if (sectionType === 'list') {
      return (
        <ul key={key} className='--paddingLeft' style={listStyles}>
          {(content as string[]).map((item, itemIndex) => (
            <li key={`${key}-${itemIndex}`}>{item}</li>
          ))}
        </ul>
      );
    } else if (sectionType === 'response') {
      return (
        <ButtonRevealContent
          key={key}
          buttonText='Visualizar Resposta'
          altButtonText='Ocultar Resposta'
          content={<CodeBox lang='sql' codeString={content as string} />}
          alignLeft
        />
      );
    }

    return null;
  };

  return (
    <div className='wrapper'>
      {sections.map(({ sectionType, content }, index) => {
        const key = `${sectionType}-${index}`;
        return renderContent(content, sectionType, key);
      })}
    </div>
  );
};
