import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import theme from 'theme';

const Providers: React.FC = (props: any) => {
  const { children } = props;

  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default Providers;
