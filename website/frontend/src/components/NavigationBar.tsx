import { Flex, HStack, Icon, Link, Text } from '@chakra-ui/react';
import React from 'react';
import { Link as ReactRouterLink} from 'react-router-dom';
import {GoTo} from 'routes';
import icons from 'theme/icons';

const fontSize = {base: "2xl", md: "lg", lg: "md"};

const NavigationBar = () => {
  return (
    <Flex dir="row" justifyContent="space-between" bg="gray.700" mb={4}>
      <HStack spacing={4} p={4} fontSize={fontSize}>
        <Link as={ReactRouterLink} to={GoTo.Home} color="gray.100">Home</Link>
        <Link as={ReactRouterLink} to={GoTo.Home} color="gray.100">Software</Link>
        <Link as={ReactRouterLink} to={GoTo.Tinkering.Home} color="gray.100">Tinkering</Link>
        <Link as={ReactRouterLink} to={GoTo.Art.Home} color="gray.100">Art</Link>
        <Link as={ReactRouterLink} to={GoTo.Home} color="gray.100">Resume</Link>
      </HStack>
      
    <HStack spacing={4} p={4}>
      <Link href="https://github.com/samvasta">
        <Icon as={icons.Github} color="gray.100" w={6} h={6}/>
      </Link>
      <Link href="mailto:hello@samvasta.com">
        <Icon as={icons.Email} color="gray.100" w={6} h={6}/>
      </Link>
      <Link href="https://linkedin.com/in/sam-vasta-b82470123">
        <Icon as={icons.Linkedin} color="gray.100" w={6} h={6}/>
      </Link>
    </HStack>
    </Flex>
  );
};

export const decorateWithNavBar = (component: React.FC) => {
  return (props: any) => (
    <>
      <NavigationBar/>
      {component(props)}
    </>
  );
}

export default NavigationBar;