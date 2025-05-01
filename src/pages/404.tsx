import { Flex, Heading, Image } from "@chakra-ui/react";

const FourOhFour = () => {
  return (
    <Flex flexDirection="column" alignItems="center" justifyContent="center">
      <Heading>Error 404 - wow it doesn&apos;t exist anymore</Heading>
      <Image
        src="https://media.giphy.com/media/3o6Zt481isNVuQI1l6/giphy.gif"
        alt="404 gif"
      />
    </Flex>
  );
};

export default FourOhFour;
