import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { mainCodeStyle, prismLang, type CodeLanguage } from '../../libs/react-syntax-highlighter/config';

export interface CodeBoxProps {
  lang: CodeLanguage;
  codeString: string;
  showLineNums?: boolean;
}

export const CodeBox = (props: CodeBoxProps) => {
  const { lang, codeString, showLineNums } = props;

  if (lang !== 'none') {
    SyntaxHighlighter.registerLanguage(lang, prismLang[lang]);
  }

  return (
    <SyntaxHighlighter language={lang} style={mainCodeStyle} showInlineLineNumbers={showLineNums}>
      {codeString}
    </SyntaxHighlighter>
  );
};
