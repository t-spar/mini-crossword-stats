import { Image } from "@chakra-ui/react";
import party from "party-js";
import { useRef } from "react";

export const Logo = () => {
  const ref = useRef<HTMLImageElement>(null);

  const handleClick = () => {
    if (ref.current) {
      party.confetti(ref.current);
    }
  };

  return (
    <Image
      src="/crosswordog.png"
      alt="logo"
      p={3}
      h="170px"
      transition="all 0.3s"
      _hover={{
        transform: "scale(1.05)",
      }}
      _active={{
        transform: "scale(0.9)",
      }}
      ref={ref}
      onClick={handleClick}
    />
  );
};
