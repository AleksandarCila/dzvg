import Head from "next/head";

import { HealthCalendar } from "@/components";

export default function KalendarZdravlja() {
  return (
    <>
      <Head>
        <title>DZVG - Kalendar Zdravlja</title>
        <meta name="description" content="Kalendar Zdravlja po mesecima i danima u godini" />
        <meta name="keywords" content="kalendar zdravlja, dom zdravlja, veliko gradište"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HealthCalendar />
    </>
  );
}
