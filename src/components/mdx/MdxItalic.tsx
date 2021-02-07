import React from 'react';
import { Text } from '@chakra-ui/react';

const MdxItalic = ({ children }) => (
  <Text as="i" fontStyle="italic">
    {children}
  </Text>
);

export default MdxItalic;
