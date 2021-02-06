import React from 'react';
import { Text } from '@chakra-ui/react';

export default ({ children }) => (
  <Text as="b" fontWeight="bold">
    {children}
  </Text>
);
