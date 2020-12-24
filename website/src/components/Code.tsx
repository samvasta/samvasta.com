import React from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { obsidian as codeStyle } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import plaintext from 'react-syntax-highlighter/dist/esm/languages/hljs/plaintext';
import cpp from 'react-syntax-highlighter/dist/esm/languages/hljs/cpp';

SyntaxHighlighter.registerLanguage('plaintext', plaintext);
SyntaxHighlighter.registerLanguage('cpp', cpp);

export type Language = 'plaintext' | 'cpp';

export interface CodeProps {
  language: Language;
  children: any;
}

const Code = (props: CodeProps): JSX.Element => {
  const { language, children } = props;
  return (
    <SyntaxHighlighter language={language} style={codeStyle}>
      {children}
    </SyntaxHighlighter>
  );
};

export default Code;
