import React from 'react';
import { useRouter } from 'next/router';
import matter from 'gray-matter';

import {
  Container,
  ListItem,
  OrderedList,
  propNames,
  Table,
  Tbody,
  Td,
  Text,
  Thead,
  Tr,
  UnorderedList,
} from '@chakra-ui/react';
import { MDXProvider } from '@mdx-js/react';
import Image from 'components/Image';
import MdxCode from 'components/mdx/MdxCode';
import MdxItalic from 'components/mdx/MdxItalic';
import MdxBold from 'components/mdx/MdxBold';
import MdxHeading from 'components/mdx/MdxHeading';
import MdxParagraph from 'components/mdx/MdxParagraph';
import MdxHorizontalRule from 'components/mdx/MdxHorizontalRule';
import MdxBlockQuote from 'components/mdx/MdxBlockQuote';
import MdxInlineCode from 'components/mdx/MdxInlineCode';
import MdxLink from 'components/mdx/MdxLink';
import Meta, { MetaProps } from 'components/Meta';
import NavigationBar, { NavigationBarProps } from 'components/NavigationBar';

export const components = {
  p: MdxParagraph,
  h1: MdxHeading.H1,
  h2: MdxHeading.H2,
  h3: MdxHeading.H3,
  h4: MdxHeading.H4,
  h5: MdxHeading.H5,
  h6: MdxHeading.H6,
  blockquote: MdxBlockQuote,
  ul: UnorderedList,
  ol: OrderedList,
  li: ListItem,
  table: Table,
  thead: Thead,
  tbody: Tbody,
  tr: Tr,
  td: Td,
  code: MdxCode,
  inlineCode: MdxInlineCode,
  // pre: Code,
  em: MdxItalic,
  strong: MdxBold,
  // del: ,
  hr: MdxHorizontalRule,
  a: MdxLink,
  img: Image,
};

// export default function Layout({ children }) {
//   return BasePage(() => (
//     <MDXProvider components={components}>
//       <Container variant="article">{children}</Container>
//     </MDXProvider>
//   ));
// }

const defaultMetaProps: MetaProps = {
  title: 'Sam Vasta',
  description: 'Personal website and portfolio for fullstack developer Sam Vasta.',
  abstract: 'Personal website and portfolio for fullstack developer Sam Vasta.',
  keywords: 'fullstack, software, developer, engineer, personal, portfolio, resume',
  otherElements: undefined,
};

const getNiceTitle = (title: string): string => {
  if (title.endsWith(defaultMetaProps.title)) {
    return title.trim();
  }
  return `${title.trim()} - ${defaultMetaProps.title}`;
};

const defaultNavProps = {
  bg: 'yellow.600',
  color: 'black',
  mb: 4,
  activeStyle: { fontWeight: 'bold' },
};

export type NoNav = 'no-nav';

const toNavProps = (
  data: NoNav | Partial<NavigationBarProps> | undefined,
): NavigationBarProps | undefined => {
  if (!data) {
    return defaultNavProps;
  }

  if (data === 'no-nav') {
    return undefined;
  }

  return { ...defaultNavProps, ...data };
};

export interface ArticleProps {
  nav?: NoNav | Partial<NavigationBarProps>;
  meta?: Partial<MetaProps>;
  children: any;
}

export default function BasePage<T>(props: ArticleProps) {
  const { children, meta, nav } = props;
  const finalMetaProps = { ...defaultMetaProps, ...meta };

  const finalNavProps = toNavProps(nav);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  return (
    <MDXProvider components={components}>
      <>
        <Meta
          {...finalMetaProps}
          title={getNiceTitle(finalMetaProps.title)}
          canonical={`https://samvasta.com${router.pathname}`}
        />
        {finalNavProps && <NavigationBar {...finalNavProps} />}
        <Container variant="article">{children}</Container>
      </>
    </MDXProvider>
  );
}
