import { Box, CloseButton, Heading, ScaleFade, Text } from '@chakra-ui/react';
import React from 'react';
import { Skill } from 'views/Personal/data/skills';

export interface SkillDetailProps {
  skill: Skill;
  onClose: () => void;
}

const SkillDetail = (props: SkillDetailProps) => {
  const { skill, onClose } = props;

  return (
    <Box w="full" mb={4}>
      <ScaleFade in>
        <Box bg="white" color="black" rounded="lg" p={4} boxShadow="lg">
          <CloseButton position="relative" float="right" size="md" onClick={onClose} />
          <Heading size="md">{skill.name}</Heading>
          <Text>{skill.description}</Text>
        </Box>
      </ScaleFade>
    </Box>
  );
};

export default SkillDetail;
