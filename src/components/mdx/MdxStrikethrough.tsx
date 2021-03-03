import React from 'react';
import { Text } from '@chakra-ui/react';

const MdxStrikethrough = (props: any) => {
  const { children } = props;
  return <Text as="s">{children}</Text>;
};

export default MdxStrikethrough;
