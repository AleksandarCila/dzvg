import { FC } from "react";

import { Flex, Text, Divider } from "@chakra-ui/react";

import { ServiceType } from "@/data";
import { Doctor } from "./Doctor";
import { Kontakt } from "./Kontakt";
import { IzabraniLekari } from "./IzabraniLekari";

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
      borderColor="primary.100"
      borderRadius={25}
      width="100%"
      boxShadow="1px 2px 2px #00000060"
    >
      <Text fontSize="xl" fontWeight="bold">
        {odeljenje.name}
      </Text>
      <Divider
        my={4}
        width="100%"
        borderBottomWidth={2}
        borderColor="primary.200"
      />
      <Doctor title="Руководилац одељења: ">
        {odeljenje.rukovodilac?.name}
        {odeljenje.rukovodilac?.title !== "" && (
          <p>({odeljenje.rukovodilac?.title})</p>
        )}
      </Doctor>
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
      >
        {shouldRender &&
          odeljenja.map((odeljenje) => (
            <Odeljenje key={odeljenje.name} odeljenje={odeljenje} />
          ))}
      </Flex>
    </Flex>
  );
};
