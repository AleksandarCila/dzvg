//@ts-nocheck
import { useGetAllBoardCategories } from "@/api/hooks/useGetAllBoardCategories";
import { PageContainer, Title } from "@/components";
import { BoardCategoryList } from "@/components/generic/BoardCategoryCard/BoardCategoryList";
import Head from "next/head";

const OglasnaTabla = () => {
  const { data: categories, isLoading } = useGetAllBoardCategories();
  return (
    <>
      <Head>
        <title>DZVG - Oglasna Tabla</title>
        <meta
          name="description"
          content="Važni informacije iz Doma Zdravlja Veliko Gradište"
        />
        <meta
          name="keywords"
          content="informacije, obaveštenja, dom zdravlja, veliko gradište, oglasna tabla"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContainer>
        <Title title="Огласна табла" />
        <BoardCategoryList loading={isLoading} categories={categories} />
      </PageContainer>
    </>
  );
};

export default OglasnaTabla;
