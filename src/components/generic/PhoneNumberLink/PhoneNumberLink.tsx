import React, { FC } from "react";

interface PhoneNumberLinkProps {
  number: string;
}

export const PhoneNumberLink: FC<PhoneNumberLinkProps> = ({ number }) => {
  const keepOnlyNumbers = (str: string) => {
    return str.replace(/\D/g, "");
  };
  return <a href={`tel:${keepOnlyNumbers(number)}`}>{number}</a>;
};
