import { Heading, Text, VStack } from "@chakra-ui/react";

export default function About() {
  return (
    <VStack spacing="20px">
      <Heading>Cache</Heading>
      <Text>
        You ever see a post and links out to a non-existent page? A 404 page -
        or worse - a silent redirect to homepage!
      </Text>
      <Text>
        I&apos;m trying to avoid that here.
      </Text>
    </VStack>
  );
}
