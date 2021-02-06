import React from 'react';
import { Text } from '@chakra-ui/react';

export default ({ children }) => (
  <Text
    as="span"
    fontStyle="italic"
    fontFamily="mono"
    bg="gray.50"
    color="gray.700"
    px={1}
    borderRadius="md"
  >
    {children}
  </Text>
);
