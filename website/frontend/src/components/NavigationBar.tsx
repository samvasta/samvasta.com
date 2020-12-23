import { Flex, HStack, Icon, Link, Text, Wrap, WrapItem } from '@chakra-ui/react';
import React from 'react';
import { Link as ReactRouterLink} from 'react-router-dom';
import {GoTo} from 'routes';
import icons from 'theme/icons';

const fontSize = {base: "2xl", md: "lg", lg: "md"};

export interface NavigationBarProps {
  bg?: string;
  color?: string;
  mb?: number | string;
}

const NavigationBar = (props: NavigationBarProps) => {
  const { bg = "gray.700", color="gray.100", mb=4 } = props;
  
  return (
    <Flex dir="row" flexWrap="wrap" justifyContent="space-between" bg={bg} mb={mb}>
      <Wrap spacing={4} p={4} fontSize={fontSize}>
        <WrapItem>
          <Link as={ReactRouterLink} to={GoTo.Home} color={color}>Home</Link>
        </WrapItem>
        <WrapItem>
          <Link as={ReactRouterLink} to={GoTo.Home} color={color}>Software</Link>
        </WrapItem>
        <WrapItem>
          <Link as={ReactRouterLink} to={GoTo.Tinkering.Home} color={color}>Tinkering</Link>
        </WrapItem>
        <WrapItem>
          <Link as={ReactRouterLink} to={GoTo.Art.Home} color={color}>Art</Link>
        </WrapItem>
        <WrapItem>
          <Link as={ReactRouterLink} to={GoTo.Personal.Resume} color={color}>Resume</Link>
        </WrapItem>
      </Wrap>
      
    <HStack spacing={4} p={4}>
      <Link href="https://github.com/samvasta">
        <Icon as={icons.Github} color={color} w={6} h={6}/>
      </Link>
      <Link href="mailto:hello@samvasta.com">
        <Icon as={icons.Email} color={color} w={6} h={6}/>
      </Link>
      <Link href="https://linkedin.com/in/sam-vasta-b82470123">
        <Icon as={icons.Linkedin} color={color} w={6} h={6}/>
      </Link>
    </HStack>
    </Flex>
  );
};

export const decorateWithNavBar = (component: React.FC, navProps?: NavigationBarProps) => {
  return (props: any) => (
    <>
      <NavigationBar {...navProps}/>
      {component(props)}
    </>
  );
}

export default NavigationBar;