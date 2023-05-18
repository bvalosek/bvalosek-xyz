import { Box, Center, Container, Link, Stack, Text } from '@chakra-ui/react';

export default function IndexPage() {
  return (
    <>
      <Container mt={10}>
        <Stack>
          <Link href="https://bvalosek.xyz" fontSize="sm">
            bvalosek.xyz
          </Link>
          <Text>
            <strong>Brandon</strong> is a software architect and technologist in Austin
          </Text>
          <Text>
            He cofounded{' '}
            <Link isExternal href="https://metalabel.xyz">
              Metalabel
            </Link>
            , a project that creates resources and tools for collectives that release creative work
            together
          </Text>
          <Stack direction="row" gap={3}>
            <Link isExternal href="https://staging.bsky.app/profile/bvalosek.xyz">
              bsky
            </Link>
            <Link isExternal href="https://github.com/bvalosek">
              github
            </Link>
            <Link isExternal href="https://twitter.com/bvalosek">
              twitter
            </Link>
          </Stack>
          <Text>RECENT WORK</Text>
          <Stack fontSize="sm">
            <Box>
              <Link isExternal href="https://metalabel.xyz" fontSize="md">
                metalabel protocol
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
              <Link isExternal href="https://morphs.wtf/" fontSize="md">
                morphs
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
              <Link isExternal href="https://heyshell.xyz/" fontSize="md">
                heyshell
              </Link>{' '}
              operating system for NFTs apps implementing open products
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
              <Link isExternal href="https://hypervibes.xyz" fontSize="md">
                hypervibes
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
                fontSize="md"
              >
                r group
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
              <Link isExternal href="https://sickvibes.xyz" fontSize="md">
                vibes
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
              <Link isExternal href="https://morphs.wtf/" fontSize="md">
                boardroom
              </Link>{' '}
              - governance aggregation and interop
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
              <Link isExternal href="https://outbanders.com" fontSize="md">
                outbanders
              </Link>{' '}
              emergent patterns ep
              <br />
              <Box opacity={0.5}>
                <Link fontSize="xs" isExternal href="https://outbanders.bandcamp.com/">
                  bandcamp
                </Link>{' '}
              </Box>
            </Box>
            <Box>
              <Link
                isExternal
                href="https://developers.yonomi.com/docs/yonomi-iot-platform/"
                fontSize="md"
              >
                yonomi iot platform
              </Link>{' '}
              - smart home developer cloud
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
          </Stack>
          <Stack>
            <Text fontFamily="mono" fontSize="xs" textAlign="right" mt={20} mb={20}>
              did:mld:k3kw76syyfivtxedl34fw3ja
              <br />
              did:plc:rhq6wagcwtaehl7uddekfcps
            </Text>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
