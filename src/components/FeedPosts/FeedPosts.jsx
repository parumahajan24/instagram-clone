import { Box, Container } from "@chakra-ui/react";
import FeedPost from "./FeedPost";

export const FeedPosts = () => {
  return (
    <Container maxW={"conatiner.sm"} py={10} px={2} border={"1px solid pink"}>
      <FeedPost/>
      <FeedPost/>
    </Container>
  );
};
