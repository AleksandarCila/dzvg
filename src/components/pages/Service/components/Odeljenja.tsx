import { FC } from "react";

import { Flex, Text, Divider, Box } from "@chakra-ui/react";

import { ServiceType } from "@/data";
import { Doctor } from "./Doctor";
import { Kontakt } from "./Kontakt";
import { IzabraniLekari } from "./IzabraniLekari";
import { Carousel, Title } from "@/components/generic";

type OdeljenjeProps = {
  odeljenje: ServiceType["odeljenja"][0];
};

const Odeljenje: FC<OdeljenjeProps> = ({ odeljenje }) => {
  return (
    <Flex
      flexDirection="column"
      p={5}
      my={1}
      borderWidth={1}
      // borderColor="primary.100"
      borderRadius={25}
      width="100%"
      boxShadow="0px 0px 5px rgba(227, 127, 125, 0.7)"
    >
      <Flex
        justifyContent="space-between"
        alignItems="flex-start"
        flexDirection={{ base: "column", md: "row" }}
        gap={5}
      >
        <Flex flexDirection="column" p={{ base: 0, md: 5 }} gap={5} width={{base:"100%", md:"50%"}} flex={1}>
          <Title title={odeljenje.name} padding={0}/>

          <Divider
            my={4}
            width="100%"
            borderBottomWidth={2}
            borderColor="primary.200"
          />
          <Box>
            <Doctor title="Руководилац одељења: ">
              {odeljenje.rukovodilac && (
                <>
                  {odeljenje.rukovodilac?.name !== "" &&
                    odeljenje.rukovodilac?.name}
                  {odeljenje.rukovodilac?.title !== "" && (
                    <p>({odeljenje.rukovodilac?.title})</p>
                  )}
                </>
              )}
            </Doctor>
          </Box>
        </Flex>

        {odeljenje.images.length > 0 && (
          <Box
            width={{ base: "100%", md: "500px" }}
            height="350px"
          >
            <Carousel images={odeljenje.images} />
          </Box>
        )}
      </Flex>

      <Kontakt phones={odeljenje.phones} />
      <IzabraniLekari lekari={odeljenje.lekari} />
    </Flex>
  );
};

type OdeljenjaProps = {
  odeljenja: ServiceType["odeljenja"];
};

export const Odeljenja: FC<OdeljenjaProps> = ({ odeljenja }) => {
  const shouldRender = odeljenja.length > 0 ? true : false;
  return (
    <Flex
      flexDirection="column"
      alignItems="flex-start"
      justifyContent="flex-start"
      width="100%"
    >
      {shouldRender && (
        <>
          <Text fontSize="xl" fontWeight="bold">
            Одељења
          </Text>
          <Divider
            my={4}
            width="100%"
            borderBottomWidth={2}
            borderColor="primary.200"
          />
        </>
      )}
      <Flex
        flexWrap="wrap"
        justifyContent="flex-start"
        alignItems="center"
        py={10}
        width="100%"
      >
        {shouldRender &&
          odeljenja.map((odeljenje) => (
            <Odeljenje key={odeljenje.name} odeljenje={odeljenje} />
          ))}
      </Flex>
    </Flex>
  );
};
