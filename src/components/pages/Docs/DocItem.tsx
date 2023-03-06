import { DocType } from "@/data/dokumenti/types";
import { FC } from "react";

import { Link, Flex,Icon } from "@chakra-ui/react";

type DocItemProps = {
  doc: DocType;
};

export const DocItem: FC<DocItemProps> = ({ doc }) => {
  return (
    <Link href={doc.url}>
      <Flex flexDirection='row' justifyContent='flex-start' alignItems='center'>
        <Icon fontSize={24}>{doc.icon}</Icon>
        <span>{doc.name}</span>
      </Flex>
    </Link>
  );
};
