import { Text, Box, Heading, VStack, Flex } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";

export default function About() {
  return (
    <VStack spacing="20px" h={["100vh", "100vh"]}>
      <Head>
        <title>About</title>
      </Head>
      <Heading>About</Heading>
      <Flex>
        <Box>
          You can view the code for this website {" "}
          <Link
            className="md-link"
            href="https://github.com/t-spar/mini-crossword-stats"
          >
            on GitHub.
          </Link>
        </Box>
      </Flex>
      <Flex>
        <Box>
          <Text>
            This site is adapted from {" "}
            <Link
              className="md-link"
              href="https://github.com/sinakhalili/sinakhalili.com"
            >
              Sina Khalili&apos;s personal website
            </Link>
          </Text>
        </Box>
      </Flex>
    </VStack>
  );
}
