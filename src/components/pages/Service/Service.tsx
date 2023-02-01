import { FC } from "react";

import { Box, Flex } from "@chakra-ui/react";

import { ServiceType } from "@/data";
import { Carousel, Title } from "@/components/generic";
import { PageContainer } from "@/components/layout";

import { MainDoctor, Kontakt, IzabraniLekari,Odeljenja } from "./components";

type ServiceProps = {
  service: ServiceType;
};

export const Service: FC<ServiceProps> = ({ service }) => {
  return (
    <PageContainer>
      <Title title={service.name} />
      <Flex
        justifyContent="space-between"
        alignItems="flex-start"
        flexDirection={{ base: "column", md: "row" }}
        p={{ base: 0, md: 5 }}
      >
        <Box
          width={{ base: "100%", md: "50%" }}
          height={{ base: "350px", md: "500px" }}
        >
          <Carousel images={service.images} />
        </Box>

        <Box width={{ base: "100%", md: "50%" }} p={5}>
          <MainDoctor title="Начелник службе: ">{service.nacelnik}</MainDoctor>
          <MainDoctor title="Одговорни техничар: ">
            {service.odgovorniTehnicar}
          </MainDoctor>
          <Kontakt phones={service.phones} />
        </Box>
      </Flex>
      <Flex justifyContent="center" alignSelf="center" p={5}>
        <IzabraniLekari lekari={service.izabraniLekari} />
      </Flex>
      <Flex justifyContent="center" alignSelf="center" p={5}>
        <Odeljenja odeljenja={service.odeljenja} />
      </Flex>
    </PageContainer>
  );
};
