import React from 'react';
import { Text } from '@chakra-ui/react';

const MdxItalic = (props: any) => {
  const { children } = props;
  return (
    <Text as="i" fontStyle="italic">
      {children}
    </Text>
  );
};

export default MdxItalic;
