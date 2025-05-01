import Meta from "@/components/Meta";
import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  chakra,
  Image,
} from "@chakra-ui/react";
import { PrinterPrint } from "@/components/Printer";
import Link from "next/link";

interface HomeProps {
  posts: any[];
}

export default function Home() {
  PrinterPrint();

  return (
    <Box>
      <Meta title="Mini Crossword Stats" />
      <Box my={5}>
        <Heading my={2}>Hello.</Heading>
        <Flex direction={{ base: "column", md: "row" }}>
          <VStack align="left">
            <Text>
              Check out the {" "}
              <Link className="md-link" href="/crossword">
                crossword leaderboard.
              </Link>
            </Text>
          </VStack>
        </Flex>
      </Box>
    </Box>
  );
}
