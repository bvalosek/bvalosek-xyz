import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';

export default class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <Helmet>
          <link rel="canonical" href="https://www.bvalosek.xyz" />
          <meta property="og:site_name" content="bvalosek.xyz" />
          <meta property="og:title" content="Brandon Valosek" />
          <meta property="og:url" content="https://www.bvalosek.xyz" />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content="Brandon Valosek's homepage. Metalabel cofounder, software architect, and experimental engineer"
          />
          <meta name="twitter:title" content="Brandon Valosek" />
          <meta name="twitter:url" content="https://www.bvalosek.xyz" />
          <meta name="twitter:card" content="summary" />
          <meta
            name="twitter:description"
            content="Brandon Valosek's homepage. Metalabel cofounder, software architect, and experimental engineer"
          />
          <meta
            name="description"
            content="Brandon Valosek's homepage. Metalabel cofounder, software architect, and experimental engineer"
          />
        </Helmet>

        <body>
          <ColorModeScript initialColorMode="dark" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
