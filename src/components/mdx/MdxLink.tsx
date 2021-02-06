import React from 'react';
import Link from 'components/Link';

export default (props) => {
  const { href, children } = props;
  return <Link to={href}>{children}</Link>;
};
