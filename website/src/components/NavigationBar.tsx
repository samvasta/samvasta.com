import { Flex, HStack, Icon, Link, useToken, Wrap, WrapItem } from '@chakra-ui/react';
import React from 'react';
import { NavLink as ReactRouterLink } from 'react-router-dom';
import { GoTo } from 'routes';
import icons from 'theme/icons';

const fontSize = { base: '2xl', md: 'lg', lg: 'md' };

export interface NavigationBarProps {
  bg: string;
  color: string;
  mb: number | string;
  activeStyle: any;
}

const NavigationBar = (props: NavigationBarProps) => {
  const { bg, color, mb, activeStyle } = props;

  return (
    <Flex dir="row" flexWrap="wrap" justifyContent="space-between" bg={bg} mb={mb}>
      <Wrap spacing={4} p={4} fontSize={fontSize}>
        <WrapItem>
          <Link as={ReactRouterLink} to={GoTo.Home} color={color} activeStyle={activeStyle} exact>
            Home
          </Link>
        </WrapItem>
        <WrapItem>
          <Link as={ReactRouterLink} to={GoTo.Home} color={color} activeStyle={activeStyle} exact>
            Software
          </Link>
        </WrapItem>
        <WrapItem>
          <Link
            as={ReactRouterLink}
            to={GoTo.Tinkering.Home}
            color={color}
            activeStyle={activeStyle}
          >
            Tinkering
          </Link>
        </WrapItem>
        <WrapItem>
          <Link as={ReactRouterLink} to={GoTo.Art.Home} color={color} activeStyle={activeStyle}>
            Art
          </Link>
        </WrapItem>
        <WrapItem>
          <Link
            as={ReactRouterLink}
            to={GoTo.Personal.Resume}
            color={color}
            activeStyle={activeStyle}
          >
            Resume
          </Link>
        </WrapItem>
      </Wrap>

      <HStack spacing={4} p={4} display={{ base: 'none', md: 'inherit' }}>
        <Link href="https://github.com/samvasta">
          <Icon as={icons.Github} color={color} w={6} h={6} />
        </Link>
        <Link href="mailto:hello@samvasta.com">
          <Icon as={icons.Email} color={color} w={6} h={6} />
        </Link>
        <Link href="https://linkedin.com/in/sam-vasta-b82470123">
          <Icon as={icons.Linkedin} color={color} w={6} h={6} />
        </Link>
      </HStack>
    </Flex>
  );
};

export default NavigationBar;
