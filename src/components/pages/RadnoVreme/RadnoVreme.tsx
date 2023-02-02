import React from "react";

import { Box } from "@chakra-ui/react";
import { PageContainer } from "@/components/layout";
import { Title } from "@/components/generic";

import { radno_vreme } from "@/data";
import { RadnoVremeItem } from "./components/RadnoVremeItem";

export const RadnoVreme = () => {
  return (
    <PageContainer>
      <Title title="Радно време служби Дома Здравља Велико Градиште и амбуланти" />
      <Box my={5}>
        {radno_vreme.map((radnoVreme) => (
          <RadnoVremeItem key={radnoVreme.name} radnoVreme={radnoVreme} />
        ))}
      </Box>
    </PageContainer>
  );
};
