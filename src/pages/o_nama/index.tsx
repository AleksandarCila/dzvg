import Head from "next/head";

import { About } from "@/components";

const ONama = () => {
  return (
    <>
      <Head>
        <title>DZVG - O Nama</title>
        <meta name="description" content="Informacije O Domu Zdravlja Veliko Gradište" />
        <meta name="keywords" content="o nama, dom zdravlja, veliko gradište"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <About />
    </>
  )
}

export default ONama