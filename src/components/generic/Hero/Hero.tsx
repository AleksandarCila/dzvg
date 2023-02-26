import { Flex, Image, Divider, Heading, Icon, Text } from "@chakra-ui/react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

export const Hero = () => {
  return (
    <Flex
      // height={"500px"}
      width="100%"
      direction={{ base: "column", lg: "row" }}
      alignItems="center"
      bgColor="whitesmoke"
    >
      <Flex
        height="500px"
        width={{ base: "100%", lg: "70%" }}
        justify={"center"}
      >
        <Image
          alt="Дом Здравља Велико Градиште"
          objectFit="cover"
          src={"/images/hero.jpg"}
          width="100%"
          height="100%"
          objectPosition={["top center"]}
        />
      </Flex>
      <Flex p={5} justifyContent="center" flexDirection="column" color="black">
        <Heading as="h1">Дом Здравља Велико Градиште</Heading>
        <Divider borderBottomWidth={2} borderColor="whiteAlpha.500" my={5} />
        <Flex gap={5} justifyContent="flex-start" alignItems="center">
          <Icon  fontSize="xl">
            <BsFillTelephoneFill />
          </Icon>
          <Text fontSize="xl">012/662-591</Text>
          <Text fontSize="xl">012/7160-700</Text>
        </Flex>
        <Flex gap={5} justifyContent="flex-start" alignItems="center" py={5}>
          <Icon  fontSize="xl">
            <HiOutlineMail />
          </Icon>
          <Text fontSize="xl">info@dzvg.rs</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
