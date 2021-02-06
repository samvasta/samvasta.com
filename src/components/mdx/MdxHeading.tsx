import React from 'react';
import ArticleHeading from 'components/ArticleHeading';

const anchorFromChildren = (children: any) => {
  if (!children) {
    return undefined;
  }
  const str: string = children.toString();
  return str.replace(/ /g, '-').toLowerCase();
};

export const H1 = ({ children }) => (
  <ArticleHeading level={1} id={anchorFromChildren(children)}>
    {children}
  </ArticleHeading>
);

export const H2 = ({ children }) => {
  return (
    <ArticleHeading level={2} id={anchorFromChildren(children)}>
      {children}
    </ArticleHeading>
  );
};

export const H3 = ({ children }) => (
  <ArticleHeading level={3} id={anchorFromChildren(children)}>
    {children}
  </ArticleHeading>
);

export const H4 = ({ children }) => (
  <ArticleHeading level={4} id={anchorFromChildren(children)}>
    {children}
  </ArticleHeading>
);

export const H5 = ({ children }) => (
  <ArticleHeading level={5} id={anchorFromChildren(children)}>
    {children}
  </ArticleHeading>
);

export const H6 = ({ children }) => (
  <ArticleHeading level={6} id={anchorFromChildren(children)}>
    {children}
  </ArticleHeading>
);

export default { H1, H2, H3, H4, H5, H6 };
