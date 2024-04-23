//@ts-nocheck
import { useGetPostById } from "@/api/hooks";
import { PageContainer, Title } from "@/components";
import { Circle, Image, Progress, Stack, Text } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

const Informacija = () => {
  const router = useRouter();
  const { slug } = router.query;
  const { data: post, isLoading } = useGetPostById(slug);

  const documents = [];
  if (post?.data?.document_1) documents.push(post?.data.document_1);
  if (post?.data?.document_2) documents.push(post?.data.document_2);
  if (post?.data?.document_3) documents.push(post?.data.document_3);

  return (
    <>
      <Head>
        <title>DZVG - Informacije</title>
        <meta
          name="description"
          content="Važni informacije iz Doma Zdravlja Veliko Gradište"
        />
        <meta
          name="keywords"
          content="informacije, obaveštenja, dom zdravlja, veliko gradište"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContainer>
        {!post || isLoading ? (
          <Progress size="xs" isIndeterminate colorScheme="orange" />
        ) : (
          <Stack
            sx={{ gap: 2, p: { base: 3, md: 5 }, pb: 10, textAlign: "justify" }}
          >
            <Title title={post.data.title?.[0].text} padding={10} />
            <Stack sx={{ justifyContent: "center" }}>
              <Image
                src={post.data.image.url}
                alt={post.data.title?.[0].text}
                sx={{ height: 250, objectFit: "contain" }}
              />
            </Stack>
            {post.data.body?.map((paragraph, ind) => {
              const fontWeight =
                paragraph?.spans?.[0]?.type === "strong" ? 700 : "default";

              const isListItem = paragraph.type === "list-item";
              const isImage = paragraph.type === "image";
              const isLink = paragraph?.spans?.[0]?.type === "hyperlink";

              if (isLink) {
                const linkData = paragraph?.spans?.[0]?.data;
                const url = linkData?.url;
                const target = linkData?.target;

                return (
                  <Link key={ind} href={url} target={target}>
                    {paragraph.text}
                  </Link>
                );
              }

              if (isImage) {
                const url = paragraph.url;

                return (
                  <Stack
                    key={ind}
                    sx={{
                      justifyContent: "center",
                      py: 3,
                      alignItems: "center",
                    }}
                  >
                    <Image
                      src={url}
                      alt={paragraph?.alt}
                      sx={{
                        width: "100%",
                        maxWidth: 400,
                        objectFit: "contain",
                      }}
                    />
                  </Stack>
                );
              }
              return (
                <Text
                  as={isListItem ? "li" : "p"}
                  key={ind}
                  sx={{ fontWeight }}
                >
                  {paragraph.text}
                </Text>
              );
            })}
            {documents.length > 0 && (
              <Stack>
                <Text fontWeight={600} fontSize="2xl">
                  Документи:
                </Text>
                {documents
                  ?.filter((doc) => doc.url)
                  ?.map((doc) => (
                    <Link key={doc.id} target="_blank" href={doc.url}>
                      <Text sx={{ textDecor: "underline" }}>
                        {doc?.name ?? "Dokument"}
                      </Text>
                    </Link>
                  ))}
              </Stack>
            )}
          </Stack>
        )}
      </PageContainer>
    </>
  );
};

export default Informacija;
