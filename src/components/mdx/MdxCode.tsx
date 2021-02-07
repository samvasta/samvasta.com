import React from 'react';
import Code from 'components/Code';
import isString from 'lodash/isString';

interface CodeProps {
  className: string;
  children: any;
}

const MdxCode = (props: CodeProps) => {
  const { className, children } = props;

  const language = className?.replace('language-', '') ?? 'plaintext';
  const code = isString(children) ? children.trim() : children;
  return <Code language={language}>{code}</Code>;
};

export default MdxCode;
