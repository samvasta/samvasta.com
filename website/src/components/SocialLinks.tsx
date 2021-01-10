import React from 'react';
import { HStack, Icon, Link, StackProps } from '@chakra-ui/react';

import icons from 'theme/icons';

const SocialLinks = (props: StackProps) => {
  return (
    <HStack spacing={3} m={3} {...props}>
      <Link href="https://github.com/samvasta" color="inherit">
        <Icon as={icons.Github} w={6} h={6} />
      </Link>
      <Link href="mailto:hello@samvasta.com" color="inherit">
        <Icon as={icons.Email} w={6} h={6} />
      </Link>
      <Link href="https://linkedin.com/in/sam-vasta-b82470123" color="inherit">
        <Icon as={icons.Linkedin} w={6} h={6} />
      </Link>
    </HStack>
  );
};

export default SocialLinks;
