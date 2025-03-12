// - - - - - 📌 STYLE

import dracula from 'react-syntax-highlighter/dist/esm/styles/prism/dracula';

export const mainCodeStyle = dracula;

export const customAlternativeStyle: React.CSSProperties = {
  margin: 0,
  padding: 0,
  paddingInline: '0.5rem',
  paddingBlock: '0.2rem',
  borderRadius: '0.2rem',
};

// - - - - - 📌 LANGUAGE

import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import csharp from 'react-syntax-highlighter/dist/esm/languages/prism/csharp';
import aspnet from 'react-syntax-highlighter/dist/esm/languages/prism/aspnet';
import sql from 'react-syntax-highlighter/dist/esm/languages/prism/sql';

export type CodeLanguage = 'none' | 'jsx' | 'csharp' | 'aspnet' | 'sql';

export const prismLang: Record<CodeLanguage, unknown> = {
  none: undefined,
  jsx,
  csharp,
  aspnet,
  sql,
} as const;
