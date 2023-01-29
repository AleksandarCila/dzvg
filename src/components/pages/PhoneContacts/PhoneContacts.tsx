import React from "react";

import { Title } from "@/components/generic";
import { PageContainer } from "@/components/layout";
import { ContactsGroup } from "./components";

import { brojevi } from "./data/brojevi";

export const PhoneContacts = () => {
  return (
    <PageContainer>
      <Title title="Телефонски именик" />
      {brojevi.map((group, index) => (
        <ContactsGroup key={`${group.title}${index}`} contactsGroup={group} />
      ))}
    </PageContainer>
  );
};
