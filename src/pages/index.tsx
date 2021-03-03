import { Box, Heading, SimpleGrid, VStack } from '@chakra-ui/react';
import React from 'react';
import LinkButton from 'components/Home/LinkButton';
import BasePage from 'components/BasePage';
import SocialLinks from 'components/SocialLinks';

const Home = () => {
  return (
    <Box bg="black" h="100vh" w="100vw" justifyContent="center">
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        columnGap={10}
        rowGap={0}
        mx="auto"
        pt="15vh"
        pb={48}
        bg="gray.900"
      >
        <Box bg="blue.400" color="gray.900" px={8} py={4} width="full" h="auto" alignSelf="start">
          <Heading textAlign={{ base: 'left', lg: 'right' }} size="2xl">
            hi i&apos;m
          </Heading>
        </Box>

        <VStack spacing={0}>
          <LinkButton
            to="/fullstack"
            hoverBackgroundImg='url("/images/fullstack.png")'
            text="a fullstack developer"
          />
          <LinkButton
            to="/tinkering"
            hoverBackgroundImg='url("/images/tinkering/keyboard2/bms2.png")'
            text="a tinkerer"
          />
          <LinkButton
            to="/art"
            hoverBackgroundImg='url("/images/art/all_colors/all_colors_4.png")'
            text="an algorithm artist"
          />
          <LinkButton to="/resume" text="sam vasta" />
        </VStack>
      </SimpleGrid>

      <SocialLinks color="gray.700" />
    </Box>
  );
};

export default BasePage(Home, {
  nav: 'no-nav',
});
