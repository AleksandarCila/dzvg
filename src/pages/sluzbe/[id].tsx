import { useMemo, useEffect } from "react";

import { useRouter } from "next/router";

import Head from "next/head";
import { Service } from "@/components";

import { sluzbe,SluzbeObject } from "@/data";

const Sluzbe = ({item}:{item:string}) => {
  const router = useRouter();
  // const { id } = router.query;
  const id = item;

  const service = useMemo(() => {
    if (id !== undefined && typeof id === "string") {
      return sluzbe[id];
    } else {
      return sluzbe.opsta_medicina;
    }
  }, [id]);

  return (
    <>
      <Head>
        <title>DZVG - Sluzbe</title>
        <meta name="description" content={`${service.name}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Service service={service} />
    </>
  );
};

export async function getStaticPaths() {
  // Read the JSON file

  // Get the IDs from the data
  const ids = Object.keys(sluzbe)

  // Create an array of paths
  const paths = ids.map(id => ({
    params: { id: id.toString() }
  }))

  // Return the paths
  return { paths, fallback: false }
}

export async function getStaticProps({ params }:{params:any}) {
  // Find the item with the specified ID
  const item = Object.keys(sluzbe).find(item => item === params.id)

  // Return the props for the component
  return { props: { item } }
}

export default Sluzbe;
