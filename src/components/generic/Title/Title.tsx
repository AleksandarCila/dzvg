import { Divider, Heading } from "@chakra-ui/react";
import { FC } from "react";

type TitleProps = {
  title: string;
  size?: "sm" | "lg";
  padding?: number;
};

export const Title: FC<TitleProps> = ({ title, size = "lg", padding = 20 }) => {
  const fontSize = size === "sm" ? "xl" : "3xl";
  return (
    <div style={{ padding: padding }}>
      <Heading as="h1" fontSize={fontSize} style={{ textAlign: "left" }}>
        {title}
      </Heading>
      <Divider width="100px" borderWidth={2} borderColor="primary.200" mt={5} />
    </div>
  );
};
