import React from "react";

import { Section } from "@/components/generic";

export const SluzbeSection = () => {
  return (
    <Section
      title="Службе"
      text="Дом Здравља Велико Градиште се састоји од 4 службе. Више информација о свакој од служби, њиховом радном времену и дежурствима сазнајте кликом на дугме."
      imageSrc="/images/sluzbe.jpg"
      cta="Сазнајте више"
      href="/sluzbe"
    />
  );
};
