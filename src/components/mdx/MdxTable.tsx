import { Table } from '@chakra-ui/react';
import React from 'react';

const MdxCode = (props: any) => {
  const { children } = props;
  return (
    <Table fontFamily="monospace" variant="striped" size="sm" mx="auto">
      {children}
    </Table>
  );
};

export default MdxCode;
