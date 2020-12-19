import React from 'react';
import {Box,Text, TextProps} from '@chakra-ui/react';

export interface QuoteTextProps extends TextProps {

}

const QuoteText = (props: QuoteTextProps) => {
  const {children, ...textProps} = props;

  return (
    <Box borderLeftWidth="4px" borderLeftColor="gray.100" px={4}>
      <Text {...textProps}>{children}</Text>
    </Box>
  )
}

export default QuoteText;