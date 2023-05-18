import { extendTheme, ThemeConfig, ThemeOverride } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
};

const overrides: ThemeOverride = {
  styles: {
    global: {
      body: {
        fontSize: '20px',
        bg: 'black',
        color: 'white',
        fontWeight: '400',
      },
    },
  },
  components: {
    Link: {
      baseStyle: {
        fontWeight: '700',
        color: '#8ff',
      },
    },
  },
};

export const theme = extendTheme(overrides, { config });
