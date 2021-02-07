import { Table } from '@chakra-ui/react';
import React from 'react';

const MdxCode = (props: any) => {
  return (
    <Table fontFamily="monospace" variant="striped" size="sm" mx="auto">
      {props.children}
    </Table>
  );
};

export default MdxCode;
