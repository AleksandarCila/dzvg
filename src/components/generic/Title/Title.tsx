import { Divider, Heading } from "@chakra-ui/react";
import { FC } from "react";

type TitleProps = {
  title: string;
};

export const Title: FC<TitleProps> = ({ title }) => {
  return (
    <div style={{padding:20}}>
      <Heading as="h1">{title}</Heading>
      <Divider width="100px" borderWidth={2} borderColor="primary.200" mt={5}/>
    </div>
  );
};
