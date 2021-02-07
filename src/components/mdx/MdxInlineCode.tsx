import React from 'react';
import { Text } from '@chakra-ui/react';

const MdxInlineCode = ({ children }) => (
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

export default MdxInlineCode;
