import Head from "next/head";

import { PhoneContacts } from "@/components";

export default function Imenik() {
  return (
    <>
      <Head>
        <title>DZVG - Telefonski Imenik</title>
        <meta name="description" content="Telefonski Imenik Doma Zdravlja Veliko Gradište" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PhoneContacts />
    </>
  );
}
