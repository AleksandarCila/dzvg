import { PhoneNumberLink } from "@/components/generic";
import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Tag,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactNode } from "react";

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2} color="black.500">
      {children}
    </Text>
  );
};

export const Footer = () => {
  return (
    <footer>
      <Box
        bg={useColorModeValue("red.500", "gray.900")}
        color={useColorModeValue("secondary.50", "gray.200")}
        borderRadius={"25px 25px 0 0"}
      >
        <Container as={Stack} maxW={"6xl"} py={10}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
            <Stack align={"flex-start"}>
              <ListHeader>Дом Здравља Велико Градиште</ListHeader>
              <Text>Војводе Путника 28, 12220 Велико Градиште</Text>
              <Text><PhoneNumberLink number="012/7160-700"/></Text>
              <Text>Ж.Р. 840-473661-98</Text>
              <Text>ПИБ: 101364553</Text>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Корисни линкови</ListHeader>
              <Link href={"https://www.mojdoktor.gov.rs/map"}>Мој Доктор</Link>
              <Link href={"/izabrani_lekar"}>Провера изабраног лекара</Link>
              <Link href={"/elektronsko_zakazivanje"}>
                Електронско заказивање
              </Link>
              <Link href={"/kalendar_zdravlja"}>Календар здравља</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Дом Здравља</ListHeader>
              <Link href={"/radno_vreme"}>Радно време</Link>
              <Link href={"/telefonski_imenik"}>Телефонски именик</Link>
              <Link href={"/sluzbe"}>Службе</Link>
              <Link href={"/informacije"}>Информације</Link>
              <Link href={"/o_nama"}>О нама</Link>
              <Link href={"/dokumenti"}>Документи</Link>
            </Stack>

            <Stack align={"flex-start"}>
              <ListHeader>Социјалне мреже</ListHeader>
              <Link href={"https://www.facebook.com/domzvg/"}>Facebook</Link>
            </Stack>
          </SimpleGrid>
        </Container>
        <Box py={10}>
          <Flex
            align={"center"}
            _before={{
              content: '""',
              borderBottom: "1px solid",
              borderColor: useColorModeValue("black.500", "gray.700"),
              flexGrow: 1,
              mr: 8,
            }}
            _after={{
              content: '""',
              borderBottom: "1px solid",
              borderColor: useColorModeValue("black.500", "gray.700"),
              flexGrow: 1,
              ml: 8,
            }}
          >
            <Text p={6} fontSize={"sm"} textAlign={"center"}>
              {`© ${new Date().getFullYear()} - Дом Здравља Велико Градиште`}
            </Text>
          </Flex>
        </Box>
      </Box>
    </footer>
  );
};
