import React from 'react';
import { Text } from '@chakra-ui/react';

const MdxParagraph = (props: any) => {
  const { children } = props;
  return <Text variant="para">{children}</Text>;
};

export default MdxParagraph;
