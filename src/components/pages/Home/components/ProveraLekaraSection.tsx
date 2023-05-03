import React from "react";

import { Section } from "@/components/generic";

export const ProveraLekaraSection = () => {
  return (
    <Section
      title="Изабрани лекар"
      text="Проверу изабраног лекара можете извршити пратећи упутства која можете добити кликом на дугме испод."
      imageSrc="/images/sluzbe.webp"
      cta="Сазнајте више"
      href="/izabrani_lekar"
      direction="row-reverse"
    />
  );
};
