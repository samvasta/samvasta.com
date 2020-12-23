import { Box, Circle, Flex, Heading, Icon, Image, Link, SimpleGrid, Text, useRadioGroup, VStack, Wrap, WrapItem } from '@chakra-ui/react';
import {find} from 'lodash';

import icons from 'theme/icons';
import { decorateWithNavBar } from 'components/NavigationBar';
import React, { useRef, useState } from 'react';
import ResumeSection from './components/ResumeSection';
import Timeline from './components/Timeline/Timeline';
import SkillBadge from './components/Skills/SkillBadge';
import HobbyItem from './components/HobbyItem';

import {timelineItems} from './data/timeline';
import {skillList, Skill, flatSkills} from './data/skills';
import SkillDetail from './components/Skills/SkillDetail';

const Resume = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill|undefined>(undefined);

  const toggleSkill = (skill: Skill) => {
    if(selectedSkill === skill){
      setSelectedSkill(undefined);
    }
    else{
      setSelectedSkill(skill);
    }
  }

  const deselectSkill = () => setSelectedSkill(undefined);

  return (
    <>
      <ResumeSection bg="black">
        <Flex flexDir="row" justifyContent="space-between" alignItems="center">
          <Box>
            <Heading color="white">Sam Vasta</Heading>
            <Text color="gray.400">problem-solver, leader, passionate fullstack developer.</Text>
            <Text color="gray.400" verticalAlign="text-top">
              <Icon as={icons.Home} w={4} h={4} verticalAlign="inherit"/>{' '}
              Dallas, TX
            </Text>
            <Text color="gray.400">
              <Link color="inherit" href="mailto:hello@samvasta.com" verticalAlign="text-top">
                <Icon as={icons.Email} w={4} h={4} verticalAlign="inherit"/>{' '}
                hello@samvasta.com
                </Link>
            </Text>
          </Box>
          <Image src="/images/headshot.jpg" rounded="full" h={40}/>
        </Flex>
      </ResumeSection>
      <ResumeSection bg="blue.700" color="white">
        <Heading >Career &amp; Education</Heading>
        <Timeline items={timelineItems} contentColor="gray.900" lineColor="white" lineMargin={8} />
      </ResumeSection>
      <ResumeSection bg="red.700" color="white">
        <Heading>Skills</Heading>
        <Text opacity={0.67} mb={4}>Select a skill to see how I've mastered it</Text>
        <VStack alignItems="flex-start">
          {skillList && skillList.map((group) => 
            <>
            <Heading size="md" my={4}>{group.name}</Heading>
            <Wrap spacing={4} mb={8}>
            {group.skills.map((skill) => {
              return (
              <WrapItem key={skill.name}>
                <SkillBadge onToggle={() => toggleSkill(skill)}>{skill.name}</SkillBadge>
              </WrapItem>
              );
            })}
            </Wrap>
            {selectedSkill && find(group.skills, selectedSkill) && !!selectedSkill.description &&
              <SkillDetail skill={selectedSkill} onClose={deselectSkill}/>
            }
            </>
          )}
        </VStack>
      </ResumeSection>
      <ResumeSection bg="yellow.700" color="black">
        <Heading>Hobbies</Heading>
        <SimpleGrid columns={{base: 1, md: 3}} alignItems="flex-start" my={4} columnGap={8} rowGap={4}>
          <HobbyItem icon={icons.CircuitBoard} text="I love mechanical keyboards so much that I started making them myself.
              From scratch I design, engineer, manufacture and program one-of-a-kind keyboards." />

          <HobbyItem icon={icons.Art} reverseForMobile text="I enjoy art in the broadest sense of the word but especially appreciate
              visual art. I even attempt it myself sometimes." />

          <HobbyItem icon={icons.Meal} text="Cooking is the perfect creative outlet because you can eat your mistakes." />
        </SimpleGrid>
      </ResumeSection>

      <ResumeSection bg="black" color="gray.300" minH="xs">
      </ResumeSection>
    </>
  )
}

export default decorateWithNavBar(Resume, { bg: "black", color: "gray.100", mb: 0 });