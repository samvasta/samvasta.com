import { Box, Heading, HStack, Icon, Link, SimpleGrid, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import LinkButton from './components/LinkButton';
import icons from 'theme/icons';
import { useHistory } from 'react-router';


const Home = () => {
  const [fullstack, setFullstack] = useState(false);
  const [tinkering, setTinkering] = useState(false);
  const [art, setArt] = useState(false);
  const [name, setName] = useState(false);

  useEffect(() => {
    if(!fullstack){
      setTimeout(() => {
        setFullstack(true);
      }, 200);
    }
  });

  return <Box bg="black" h="100vh" w="100vw" justifyContent="center">
    <SimpleGrid columns={{base: 1, lg: 2}} columnGap={10} rowGap={0} mx="auto" pt="15vh" pb={48} bg="gray.900">

      <Box bg="blue.400" color="gray.900" px={8} py={4} width="full" h="auto" alignSelf="start">
        <Heading textAlign={{base: "left", lg: "right"}} size="2xl">
          hi i'm
        </Heading>
      </Box>

      <VStack spacing={0}>
        <LinkButton to="/fullstack"
                    start={fullstack}
                    onFinished={() => setTinkering(true)}
                    hoverBackgroundImg='url("/images/fullstack.png")'
                    texts={[
          "fascinated by UX",
          "a software architect",
          "stuck in vi :q!?",
          "a problem solver",
          "a fullstack developer"
        ]}/>
        <LinkButton to="/tinkering"
                    start={tinkering}
                    onFinished={() => setArt(true)}
                    hoverBackgroundImg='url("/images/tinkering/keyboard2/bms2.jpg")'
                    texts={[
          "doing geometry for fun",
          "building cool stuff",
          "an electronics hobbyist",
          "a tinkerer"
        ]} />
        <LinkButton to="/art"
                    start={art}
                    onFinished={() => setName(true)}
                    hoverBackgroundImg='url("/images/art/all_colors/all_colors_4.png")'
                    texts={[
          "comfortable in museums",
          "passionate about colors",
          "learning to paint",
          "an algorithm artist"
        ]} />
        <LinkButton to="/resume"
                    start={name}
                    texts={["a leader", "self-motivated", "passionate", "sam vasta"]} />
      </VStack>
    </SimpleGrid>

    <HStack spacing={3} m={3}>
      <Link href="https://github.com/samvasta">
        <Icon as={icons.Github} color="yellow.700" w={6} h={6}/>
      </Link>
      <Link href="mailto:hello@samvasta.com">
        <Icon as={icons.Email} color="red.700" w={6} h={6}/>
      </Link>
      <Link href="https://linkedin.com/in/sam-vasta-b82470123">
        <Icon as={icons.Linkedin} color="blue.700" w={6} h={6}/>
      </Link>
    </HStack>

  </Box>;
}

export default Home;