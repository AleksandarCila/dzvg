import Head from "next/head";

import { Docs } from "@/components";

const Dokumenti = () => {
  return (
    <>
      <Head>
        <title>DZVG - Dokumenti</title>
        <meta name="description" content="Važni Dokumenti Doma Zdravlja Veliko Gradište" />
        <meta name="keywords" content="Dokumenti, informacije, dom zdravlja, veliko gradište"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Docs />
    </>
  )
}

export default Dokumenti