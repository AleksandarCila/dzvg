import React from "react";

import { Box } from "@chakra-ui/react";
import { CardLink, Title } from "@/components/generic";
import { PageContainer } from "@/components/layout";

import { sluzbe } from "@/data";

export const SluzbeHome = () => {
  return (
    <PageContainer>
      <Box p={5}>
        <Title title="Службе" />
        {Object.keys(sluzbe).map((sluzba) => (
          <CardLink
            key={sluzba}
            text={sluzbe[sluzba].name}
            href={`/sluzbe/${sluzbe[sluzba].key}`}
          />
        ))}
      </Box>
    </PageContainer>
  );
};
