import {
  Flex,
  Image,
  Divider,
  Heading,
  Icon,
  Text,
  Box,
} from "@chakra-ui/react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

export const Hero = () => {
  return (
    <Flex
      // height={"500px"}
      width="100%"
      direction={{ base: "column", lg: "row" }}
      alignItems="center"
      bgColor="white"
      borderBottomRightRadius={{ base: 100, md: 250 }}
      borderBottom="2px solid"
      borderColor="secondary.100"
      overflow="hidden"
      sx={{
        boxShadow: "inset -10px -10px 27px -20px rgba(0,0,0,1);",
      }}
    >
      <Flex
        height="500px"
        width={{ base: "100%", lg: "70%" }}
        justify={"center"}
        style={{
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Box
          style={{
            position: "absolute",
            top: 0,
            width: "100%",
            height: "100%",
            boxShadow: "inset 0px -36px 30px -27px rgba(255,246,238)",
            zIndex: 10,
          }}
        ></Box>
        <Image
          alt="Дом Здравља Велико Градиште"
          objectFit="cover"
          src={"/images/hero.webp"}
          width="100%"
          height="100%"
          objectPosition={["top center"]}
          zIndex={0}
        />
      </Flex>
      <Flex p={5} justifyContent="center" flexDirection="column" color="black">
        <Heading as="h1">Дом Здравља Велико Градиште</Heading>
        <Divider
          borderBottomWidth={2}
          borderColor={{ base: "transparent", md: "primary.100" }}
          my={5}
        />
        <Flex gap={5} justifyContent="flex-start" alignItems="center">
          <Icon fontSize="xl">
            <BsFillTelephoneFill />
          </Icon>
          <Text fontSize="xl">012/662-591</Text>
          <Text fontSize="xl">012/7160-700</Text>
        </Flex>
        <Flex gap={5} justifyContent="flex-start" alignItems="center" py={5}>
          <Icon fontSize="xl">
            <HiOutlineMail />
          </Icon>
          <Text fontSize="xl">info@dzvg.rs</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
