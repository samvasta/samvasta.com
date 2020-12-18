import { extendTheme } from '@chakra-ui/react';

import colors from './foundations/colors';
import shadows from './foundations/shadows';
import fonts from './foundations/typography';

import Link from './components/Link';

const theme = extendTheme({
  colors,
  fonts,
  shadows,
  components: {
    Link
  }
});

export default theme;
