import { Box } from '@chakra-ui/react';
import React from 'react';

export interface SkillBadgeProps {
  onToggle: () => void;
}

const SkillBadge = (props: any) => {
  const { onToggle, children } = props;

  return (
    <Box
      cursor="pointer"
      borderWidth="1px"
      borderRadius="md"
      bg="white"
      color="red.900"
      borderColor="red.400"
      _checked={{
        bg: 'black',
        color: 'white',
        borderWidth: 2,
        boxShadow: 'md',
      }}
      px={2}
      py={1}
      onClick={onToggle}
    >
      {children}
    </Box>
  );
};

export default SkillBadge;
