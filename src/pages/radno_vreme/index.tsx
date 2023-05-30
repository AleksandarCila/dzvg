import Head from "next/head";

import { RadnoVreme as RadnoVremeMainComponent } from "@/components";

const RadnoVreme = () => {
  return (
    <>
      <Head>
        <title>DZVG - Radno Vreme</title>
        <meta
          name="description"
          content="Radno Vreme Doma Zdravlja Veliko Gradište"
        />
        <meta name="keywords" content="radno vreme, dom zdravlja, veliko gradište"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RadnoVremeMainComponent />
    </>
  );
};

export default RadnoVreme;
