/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import QuoteText from 'components/QuoteText';

const MdxBlockQuote = (props: any): JSX.Element => {
  const { children } = props;
  return <QuoteText fontFamily="mono">{children}</QuoteText>;
};

export default MdxBlockQuote;
