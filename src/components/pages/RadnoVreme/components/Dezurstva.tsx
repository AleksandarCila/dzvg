import { FC } from "react";

import { Box, Text } from "@chakra-ui/react";
import { WorkingHours } from "./RadnoVremeItem";

type DezurstvaProps = {
  dezurstva: {
    name: string;
    time: string;
  }[];
};

export const Dezurstva: FC<DezurstvaProps> = ({ dezurstva }) => {
  return (
    <Box py={2} my={2}>
      <Text fontWeight='extrabold' my={2}>Дежурства:</Text>
      {dezurstva.map((item, index) => (
        <WorkingHours key={index} name={item.name} time={item.time} />
      ))}
    </Box>
  );
};
