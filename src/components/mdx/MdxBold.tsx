import React from 'react';
import { Text } from '@chakra-ui/react';

const MdxBold = ({ children }) => (
  <Text as="b" fontWeight="bold">
    {children}
  </Text>
);

export default MdxBold;
