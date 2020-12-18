import { Box, Heading, HStack, Icon, Link, SimpleGrid, VStack } from '@chakra-ui/react';
import React from 'react';
import LinkButton from './components/LinkButton';
import icons from 'theme/icons';


const Home = () => {

  return <Box bg="black" h="100vh" w="100vw" justifyContent="center">
    <SimpleGrid columns={{base: 1, lg: 2}} columnGap={10} rowGap={0} mx="auto" pt="15vh" pb={48} bg="gray.900">

      <Box bg="blue.400" color="gray.900" p={8} width="full" h="auto" alignSelf="start">
        <Heading textAlign={{base: "left", lg: "right"}} size="3xl">
          hi i'm
        </Heading>
      </Box>

      <VStack spacing={0}>
        <LinkButton to="/fullstack" texts={[
          "a fullstack developer",
          "something else",
          "another thing",
          "even more ideas",
          "ok now go",
          " the last one "
        ]}/>
        <LinkButton to="/tinkering" texts={["a tinkerer"]} />
        <LinkButton to="/resume" texts={["sam vasta"]} />
      </VStack>
    </SimpleGrid>

    <HStack spacing={3} m={3}>
      <Link href="https://github.com/samvasta">
        <Icon as={icons.Github} color="gray.700" w={6} h={6}/>
      </Link>
      <Link href="mailto:hello@samvasta.com">
        <Icon as={icons.Email} color="gray.700" w={6} h={6}/>
      </Link>
      <Link href="https://linkedin.com/in/sam-vasta-b82470123">
        <Icon as={icons.Linkedin} color="gray.700" w={6} h={6}/>
      </Link>
    </HStack>

  </Box>;
}

export default Home;