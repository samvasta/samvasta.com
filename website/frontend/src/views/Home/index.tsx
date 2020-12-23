import { Box, Heading, HStack, Icon, Link, SimpleGrid, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import LinkButton from './components/LinkButton';
import icons from 'theme/icons';
import { useHistory } from 'react-router';
import { GoTo } from 'routes';


const Home = () => {
  const [fullstack, setFullstack] = useState(true);
  const [tinkering, setTinkering] = useState(false);
  const [art, setArt] = useState(false);
  const [name, setName] = useState(false);

  return (
    <Box bg="black" h="100vh" w="100vw" justifyContent="center">
      <SimpleGrid columns={{ base: 1, lg: 2 }} columnGap={10} rowGap={0} mx="auto" pt="15vh" pb={48} bg="gray.900">

        <Box bg="blue.400" color="gray.900" px={8} py={4} width="full" h="auto" alignSelf="start">
          <Heading textAlign={{ base: "left", lg: "right" }} size="2xl">
            hi i'm
        </Heading>
        </Box>

        <VStack spacing={0}>
          <LinkButton to="/fullstack"
            start={fullstack}
            onFinished={() => setTinkering(true)}
            hoverBackgroundImg='url("/images/fullstack.png")'
            text="a fullstack developer" />
          <LinkButton to={GoTo.Tinkering.Home}
            start={tinkering}
            onFinished={() => setArt(true)}
            hoverBackgroundImg='url("/images/tinkering/keyboard2/bms2.jpg")'
            text="a tinkerer" />
          <LinkButton to={GoTo.Art.Home}
            start={art}
            onFinished={() => setName(true)}
            hoverBackgroundImg='url("/images/art/all_colors/all_colors_4.png")'
            text="an algorithm artist" />
          <LinkButton to={GoTo.Personal.Resume}
            start={name}
            text="sam vasta" />
        </VStack>
      </SimpleGrid>

      <HStack spacing={3} m={3}>
        <Link href="https://github.com/samvasta">
          <Icon as={icons.Github} color="yellow.700" w={6} h={6} />
        </Link>
        <Link href="mailto:hello@samvasta.com">
          <Icon as={icons.Email} color="red.700" w={6} h={6} />
        </Link>
        <Link href="https://linkedin.com/in/sam-vasta-b82470123">
          <Icon as={icons.Linkedin} color="blue.700" w={6} h={6} />
        </Link>
      </HStack>

    </Box>
  );
}

export default Home;