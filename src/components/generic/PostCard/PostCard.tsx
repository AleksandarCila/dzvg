import { background, Button, Card, Image, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import React, { FC } from "react";

interface PostCardProps {
  id: string;
  title: string;
  image: string;
  body: string;
}

export const PostCard: FC<PostCardProps> = ({ id, title, image, body }) => {
  return (
    <Card
      sx={{
        width: { base: "100%", md: 320 },
        maxWidth: { base: "100%", md: 320 },
        height: 400,
        maxHeight: 400,
      }}
    >
      <Stack
        sx={{ height: "100%", bgcolor: "#fefefe", borderRadius: 25 }}
        justifyContent="space-between"
      >
        <Image
          src={image}
          alt="image"
          sx={{
            height: 150,
            objectFit: "contain",
            boxShadow: "0 2px 2px rgba(0,0,0,0.12)",
          }}
        />
        <Stack sx={{ gap: 1, py: 4, px: 4, flex: 1 }}>
          <Text as="h2" fontSize={24}>
            {title}
          </Text>
          <Text>{`${body.slice(0, 100)}...`}</Text>
        </Stack>
        <Link href={`/informacije/${id}`}>
          <Button sx={{width:"100%"}}>Прочитај више</Button>
        </Link>
      </Stack>
    </Card>
  );
};
