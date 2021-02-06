import React from 'react';
import Code from 'components/Code';

interface CodeProps {
  className: string;
  children: any;
}

const MdxCode = (props: CodeProps) => {
  const { className, children } = props;

  const language = className?.substring(className.indexOf('language-')) ?? 'plaintext';
  return <Code language={language}>{children}</Code>;
};

export default MdxCode;
