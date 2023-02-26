import { FC } from "react";

import { RadnoVreme } from "@/data";
import { Box, Text, Flex } from "@chakra-ui/react";
import { Title } from "@/components/generic";
import { Dezurstva } from "./Dezurstva";

type WorkingHoursProps = {
  name: string;
  time: string;
};

export const WorkingHours: FC<WorkingHoursProps> = ({ name, time }) => {
  return (
    <Flex
      width="100%"
      justifyContent={{ base: "space-between", md: "flex-start" }}
      alignItems="center"
    >
      <Text width={{ base: "150px", md: "250px" }}>{name}</Text>
      <Text fontWeight="bold" ml={5}>
        {time}
      </Text>
    </Flex>
  );
};

type RadnoVremeItemProps = {
  radnoVreme: RadnoVreme;
};

export const RadnoVremeItem: FC<RadnoVremeItemProps> = ({ radnoVreme }) => {
  return (
    <>
      <Title title={radnoVreme.name} size="sm" />
      <Box px={5} py={2}>
        {radnoVreme.hours.map((item, index) => (
          <WorkingHours key={index} name={item.name} time={item.time} />
        ))}
        {radnoVreme.dezurstvo && <Dezurstva dezurstva={radnoVreme.dezurstvo} />}
      </Box>
    </>
  );
};
