import Head from "next/head";

import { IzabraniLekar as IzabraniLekarMainComponent } from "@/components";

export default function IzabraniLekar() {
  return (
    <>
      <Head>
        <title>DZVG - Izabrani lekar</title>
        <meta
          name="description"
          content="Uputstvo za proveru izabranog lekara"
        />
        <meta name="keywords" content="provera izabranog lekara, dom zdravlja, veliko gradište"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <IzabraniLekarMainComponent />
    </>
  );
}
