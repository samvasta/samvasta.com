import React from 'react';
import { useRouter } from 'next/router';
import Meta, { MetaProps } from './Meta';
import NavigationBar, { NavigationBarProps } from './NavigationBar';

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

export interface BasePageProps {
  nav?: NoNav | Partial<NavigationBarProps>;
  meta?: Partial<MetaProps>;
}

function BasePage<T>(
  Component: React.ComponentType<T>,
  pageProps?: BasePageProps,
): React.ComponentType<T> {
  const { nav, meta } = pageProps ?? {
    nav: defaultNavProps,
    meta: defaultMetaProps,
  };
  const finalMetaProps = { ...defaultMetaProps, ...meta };

  const finalNavProps = toNavProps(nav);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (componentProps: T) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();
    return (
      <>
        <Meta
          {...finalMetaProps}
          title={getNiceTitle(finalMetaProps.title)}
          canonical={`https://samvasta.com${router.pathname}`}
        />
        {finalNavProps && <NavigationBar {...finalNavProps} />}
        <Component {...componentProps} />
      </>
    );
  };
}

export default BasePage;
