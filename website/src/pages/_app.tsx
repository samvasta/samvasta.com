import React from 'react';
import { hot } from 'react-hot-loader/root';

import Providers from 'context';
import { AppProps } from 'next/app';

const App = (props: AppProps) => {
  const { Component, pageProps } = props;
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  );
};

export default hot(App);
