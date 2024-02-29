import { Box, Center, Container, Link, Stack, Text } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';

export default function IndexPage() {
  return (
    <>
      <Helmet>
        <title>Brandon Valosek</title>
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
      <Container mt={4}>
        <Stack>
          <Link href="https://bvalosek.xyz" fontSize="md">
            bvalosek.xyz
          </Link>
          <Text pt={1}>
            <strong>Brandon</strong> is a software architect and platform designer in Austin
          </Text>
          <Text>
            He cofounded{' '}
            <Link isExternal href="https://metalabel.com">
              Metalabel
            </Link>
            , a project that creates resources and tools for collectives that release creative work
            together
          </Text>
          <Link
            color="yellow"
            fontSize="xs"
            isExternal
            href="https://www.metalabel.com/about"
            p={1}
          >
            what is metalabel?
          </Link>{' '}
          <Stack direction="row" gap={3}>
            <Link isExternal href="https://github.com/bvalosek">
              github
            </Link>
            <Link isExternal href="https://staging.bsky.app/profile/bvalosek.xyz">
              bsky
            </Link>
            <Link isExternal href="https://twitter.com/bvalosek">
              twitter
            </Link>
          </Stack>
          <Text pt={4} fontSize="sm">
            PROJECTS
          </Text>
          <Stack fontSize="md">
            <Box>
              <Link isExternal href="https://metalabel.com" fontSize="lg">
                Metalabel Protocol
              </Link>{' '}
              cataloging hyperstructure and record minting protocol
              <br />
              <Box opacity={0.5}>
                <Link
                  fontSize="xs"
                  isExternal
                  href="https://metalabel.notion.site/Metalabel-Protocol-Walkthrough-2080c68cc6f242ebb7813b1a9236cab1"
                >
                  docs
                </Link>{' '}
                <Link
                  fontSize="xs"
                  isExternal
                  href="https://github.com/metalabel/metalabel-contracts-v1"
                >
                  contracts
                </Link>{' '}
                <Link
                  fontSize="xs"
                  isExternal
                  href="https://github.com/metalabel/metalabel-subgraph"
                >
                  subgraph
                </Link>
              </Box>
            </Box>
            <Box>
              <Link isExternal href="https://morphs.wtf/" fontSize="lg">
                Morphs
              </Link>{' '}
              open NFT project set in a science fantasy universe
              <br />
              <Box opacity={0.5}>
                <Link
                  fontSize="xs"
                  isExternal
                  href="https://github.com/R-Group-Devs/morphs-shell-engine"
                >
                  shell.engine
                </Link>{' '}
              </Box>
            </Box>
            <Box>
              <Link isExternal href="https://heyshell.xyz/" fontSize="lg">
                shell
              </Link>{' '}
              operating system for NFT apps implementing open products
              <br />
              <Box opacity={0.5}>
                <Link fontSize="xs" isExternal href="https://heyshell.xyz/launch">
                  app
                </Link>{' '}
                <Link fontSize="xs" isExternal href="https://docs.heyshell.xyz/">
                  docs
                </Link>{' '}
                <Link
                  fontSize="xs"
                  isExternal
                  href="https://github.com/R-Group-Devs/shell-contracts"
                >
                  contracts
                </Link>{' '}
                <Link
                  fontSize="xs"
                  isExternal
                  href="https://github.com/R-Group-Devs/shell-subgraph"
                >
                  subgraph
                </Link>{' '}
                <Link
                  fontSize="xs"
                  isExternal
                  href="https://github.com/R-Group-Devs/shell-frontend"
                >
                  react
                </Link>{' '}
              </Box>
            </Box>

            <Box>
              <Link isExternal href="https://hypervibes.xyz" fontSize="lg">
                HyperVIBES
              </Link>{' '}
              generalized public version of the VIBES protocol
              <br />
              <Box opacity={0.5}>
                <Link fontSize="xs" isExternal href="https://docs.hypervibes.xyz">
                  docs
                </Link>{' '}
                <Link
                  fontSize="xs"
                  isExternal
                  href="https://github.com/r-group-devs/hypervibes-contracts"
                >
                  contracts
                </Link>{' '}
                <Link
                  fontSize="xs"
                  isExternal
                  href="https://github.com/r-group-devs/hypervibes-subgraph"
                >
                  subgraph
                </Link>{' '}
              </Box>
            </Box>

            <Box>
              <Link
                isExternal
                href="https://r-group.notion.site/GROUP-fc0ab00297b348aba76ce8d378386a9e"
                fontSize="lg"
              >
                R-Group
              </Link>{' '}
              open source metalabel building in the bazaar
              <br />
              <Box opacity={0.5}>
                <Link fontSize="xs" isExternal href="https://github.com/R-Group-Devs">
                  github
                </Link>{' '}
              </Box>
            </Box>

            <Box>
              <Link isExternal href="https://sickvibes.xyz" fontSize="lg">
                VIBES
              </Link>{' '}
              decentralized token-based art curation protocol
              <br />
              <Box opacity={0.5}>
                <Link fontSize="xs" isExternal href="https://docs.sickvibes.xyz">
                  docs
                </Link>{' '}
                <Link fontSize="xs" isExternal href="https://twitter.com/sickvibesxyz">
                  twitter
                </Link>{' '}
                <Link fontSize="xs" isExternal href="https://github.com/sickvibes/vibes-contracts">
                  contracts
                </Link>{' '}
                <Link fontSize="xs" isExternal href="https://github.com/sickvibes/vibes-site">
                  react
                </Link>{' '}
              </Box>
            </Box>
            <Box>
              <Link isExternal href="https://developers.boardroom.io/" fontSize="lg">
                Boardroom
              </Link>{' '}
              governance aggregation and interop
              <br />
              <Box opacity={0.5}>
                <Link
                  fontSize="xs"
                  isExternal
                  href="https://docs.boardroom.info/docs/boardroom-api/boardroom-api"
                >
                  public.api
                </Link>{' '}
                <Link
                  fontSize="xs"
                  isExternal
                  href="https://docs.boardroom.info/docs/sdk/governance-sdk"
                >
                  sdk
                </Link>{' '}
              </Box>
            </Box>

            <Box>
              <Link
                isExternal
                href="https://developers.yonomi.com/docs/yonomi-iot-platform/"
                fontSize="lg"
              >
                Yonomi Platform
              </Link>{' '}
              iot developer cloud
              <br />
              <Box opacity={0.5}>
                <Link
                  fontSize="xs"
                  isExternal
                  href="https://developers.yonomi.com/docs/traits-overview/"
                >
                  traits.framework
                </Link>{' '}
              </Box>
            </Box>
            <Box>
              <Link isExternal href="https://outbanders.com" fontSize="lg">
                Outbanders
              </Link>{' '}
              emergent patterns ep
              <br />
              <Box opacity={0.5}>
                <Link fontSize="xs" isExternal href="https://outbanders.bandcamp.com/">
                  bandcamp
                </Link>{' '}
              </Box>
            </Box>
          </Stack>
          <Center>
            <Stack color="yellow">
              <Text fontFamily="mono" fontSize="xs" textAlign="right" mt={8} mb={32}>
                did:mlr:9830okxh3b2bzh2x3kq6fbbe
                <br />
                did:plc:rhq6wagcwtaehl7uddekfcps
              </Text>
            </Stack>
          </Center>
        </Stack>
      </Container>
    </>
  );
}
