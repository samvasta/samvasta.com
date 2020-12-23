import { extendTheme } from '@chakra-ui/react';

import colors from './foundations/colors';
import shadows from './foundations/shadows';
import fonts from './foundations/typography';

import Container from './components/Container';
import Link from './components/Link';
import Table from './components/Table';
import Text from './components/Text';

const theme = extendTheme({
  colors,
  fonts,
  shadows,
  components: {
    Container,
    Link,
    Text,
    Table,
  },
});

export default theme;
