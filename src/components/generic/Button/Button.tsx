import { FC } from "react";
import { Button, ButtonProps, useTheme } from "@chakra-ui/react";

export const PrimaryButton: FC<ButtonProps> = (props) => {
  const theme = useTheme();
  return (
    <Button
      {...props}
      colorScheme={props?.colorScheme ?? "primary"}
      borderRadius={0}
    >
      {props.children}
    </Button>
  );
};
