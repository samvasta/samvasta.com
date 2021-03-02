import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import theme from 'theme';

const queryClient = new QueryClient();

const Providers: React.FC = (props: any) => {
  const { children } = props;

  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ChakraProvider>
  );
};

export default Providers;
