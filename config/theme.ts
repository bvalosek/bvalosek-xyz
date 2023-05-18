import { extendTheme, ThemeConfig, ThemeOverride } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
};

const overrides: ThemeOverride = {
  styles: {
    global: {
      body: {
        bg: 'blue',
      },
    },
  },
  components: {
    Link: {
      baseStyle: {
        fontWeight: 'bold',
      },
    },
  },
};

export const theme = extendTheme(overrides, { config });
