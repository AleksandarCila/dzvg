import Head from "next/head";

import { ElektronskoZakazivanje as ElektronskoZakazivanjeMainComponent } from "@/components";

export default function ElektronskoZakazivanje() {
  return (
    <>
      <Head>
        <title>DZVG - Elektronsko Zakazivanje</title>
        <meta name="description" content="Elektronsko zakazivanje pomocu platforme Moj Doktor i Call Centra" />
        <meta name="keywords" content="Zakazivanje, elektronski, dom zdravlja, veliko gradište, Moj Doktor"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ElektronskoZakazivanjeMainComponent />
    </>
  );
}
