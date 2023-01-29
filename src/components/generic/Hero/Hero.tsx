import { Flex, Image } from "@chakra-ui/react";

export const Hero = () => {
  return (
    <Flex height={"500px"} width="100%" direction="column" alignItems="center">
      <Flex height="100%" width="100%" justify={"center"}>
        <Image
          alt="Дом Здравља Велико Градиште"
          objectFit="cover"
          src={"/images/hero.jpg"}
          width="100%"
          height="100%"
          objectPosition={["top center"]}
        />
      </Flex>
    </Flex>
  );
};
