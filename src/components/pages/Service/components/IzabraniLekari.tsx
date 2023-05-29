import { FC } from "react";

import { Flex, Text, Divider } from "@chakra-ui/react";
import { ServiceType } from "@/data";

type IzabraniLekarProps = {
  lekar: ServiceType["izabraniLekari"][0];
};

const IzabraniLekar: FC<IzabraniLekarProps> = ({ lekar }) => {
  return (
    <Flex
      flexDirection="column"
      p={{base:0.5,md:1}}
      m={1}
      width={{base:"150px",md:"220px"}}
      height={{base:"80px",md:"120px"}}
      borderWidth="1px"
      // borderColor="primary.200"
      borderRadius={{base:10,md:"25"}}
      justifyContent="center"
      alignItems="center"
      boxShadow="0px 0px 5px rgba(227, 127, 125, 0.7)"
    >
      <Text fontSize={{base:"lg",md:"sm"}} textAlign='center'>{lekar.name}</Text>
      <Text fontSize={{base:"xs",md:"md"}} fontStyle="italic" textAlign='center'>
        {lekar.title}
      </Text>
    </Flex>
  );
};

type IzabraniLekariProps = {
  lekari: ServiceType["izabraniLekari"];
};

export const IzabraniLekari: FC<IzabraniLekariProps> = ({ lekari }) => {
  const shouldRender = lekari.length > 0 ? true : false;
  return (
    <Flex
      flexDirection="column"
      alignItems="flex-start"
      justifyContent="flex-start"
    >
      {shouldRender && (
        <>
          <Text fontSize="xl" fontWeight="bold">
            Изабрани лекари
          </Text>
          <Divider
            my={4}
            width="100%"
            borderBottomWidth={2}
            borderColor="primary.200"
          />
        </>
      )}
      <Flex flexWrap="wrap" justifyContent="center" alignItems="center">
        {shouldRender &&
          lekari.map((lekar) => (
            <IzabraniLekar key={lekar.name} lekar={lekar} />
          ))}
      </Flex>
    </Flex>
  );
};
