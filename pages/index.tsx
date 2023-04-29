import { Container, Link, Stack, Text } from '@chakra-ui/react';

export default function IndexPage() {
  return (
    <>
      <Container mt={10}>
        <Stack>
          <Text>
            <strong>Brandon Valosek</strong> is a software architect and technologist in Austin.
          </Text>
          <Text>
            He cofounded{' '}
            <Link isExternal href="https://metalabel.xyz">
              Metalabel
            </Link>
            , a project that creates resources and tools for collectives that release creative work
            together.
          </Text>
          <Stack>
            <Link isExternal href="https://twitter.com/bvalosek">
              Twitter
            </Link>
            <Link isExternal href="https://github.com/bvalosek">
              GitHub
            </Link>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
