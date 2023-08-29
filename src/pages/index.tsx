//@ts-nocheck

import Head from "next/head";

import { Home as HomePage } from "@/components";

export default function Home() {

  return (
    <>
      <Head>
        <title>Dom Zdravlja Veliko Gradište</title>
        <meta
          name="description"
          content="Početna stranica Doma Zdravlja Veliko Gradište"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="početna stranica, dom zdravlja, veliko gradište"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </>
  );
}
