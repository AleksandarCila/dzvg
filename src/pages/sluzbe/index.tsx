import React from "react";

import Head from "next/head";
import { SluzbeHome } from "@/components";

const SluzbeIndex = () => {
  return (
    <>
      <Head>
        <title>DZVG - Sluzbe</title>
        <meta
          name="description"
          content="Sve sluzbe Doma Zdravlja Veliko Gradiste"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SluzbeHome />
    </>
  );
};

export default SluzbeIndex;
