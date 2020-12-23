import { Flex, Icon, Text } from '@chakra-ui/react';
import React from 'react';

export interface HobbyItemProps {
  icon: any;
  text: string;
  reverseForMobile?: boolean;
}

const HobbyItem = (props: HobbyItemProps) => {
  const { icon, text, reverseForMobile = false } = props;

  const mobileFlexDir = reverseForMobile ? 'row-reverse' : 'row';

  return (
    <Flex flexDir={{ base: mobileFlexDir, md: 'column' }}>
      <Icon as={icon} w={32} h={32} alignSelf="center" justifySelf="center" />
      <Text>{text}</Text>
    </Flex>
  );
};

export default HobbyItem;
