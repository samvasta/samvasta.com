import React from 'react';
import ArticleHeading from 'components/ArticleHeading';

const anchorFromChildren = (children: any) => {
  if (!children) {
    return undefined;
  }
  const str: string = children.toString();
  return str.replace(/ /g, '-').toLowerCase();
};

export const H1 = (props: any) => {
  const { children } = props;
  return (
    <ArticleHeading level={1} id={anchorFromChildren(children)}>
      {children}
    </ArticleHeading>
  );
};

export const H2 = (props: any) => {
  const { children } = props;
  return (
    <ArticleHeading level={2} id={anchorFromChildren(children)}>
      {children}
    </ArticleHeading>
  );
};

export const H3 = (props: any) => {
  const { children } = props;
  return (
    <ArticleHeading level={3} id={anchorFromChildren(children)}>
      {children}
    </ArticleHeading>
  );
};

export const H4 = (props: any) => {
  const { children } = props;
  return (
    <ArticleHeading level={4} id={anchorFromChildren(children)}>
      {children}
    </ArticleHeading>
  );
};

export const H5 = (props: any) => {
  const { children } = props;
  return (
    <ArticleHeading level={5} id={anchorFromChildren(children)}>
      {children}
    </ArticleHeading>
  );
};

export const H6 = (props: any) => {
  const { children } = props;
  return (
    <ArticleHeading level={6} id={anchorFromChildren(children)}>
      {children}
    </ArticleHeading>
  );
};

export default { H1, H2, H3, H4, H5, H6 };
