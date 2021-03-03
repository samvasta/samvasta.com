import React from 'react';
import { Text } from '@chakra-ui/react';

const MdxBold = (props: any) => {
  const { children } = props;
  return (
    <Text as="b" fontWeight="bold">
      {children}
    </Text>
  );
};

export default MdxBold;
