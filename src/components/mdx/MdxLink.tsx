import React from 'react';
import Link from 'components/Link';

const MdxLink = (props: any) => {
  const { href, children } = props;
  return <Link to={href}>{children}</Link>;
};

export default MdxLink;
