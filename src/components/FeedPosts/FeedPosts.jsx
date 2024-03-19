import { Box, Container } from "@chakra-ui/react";
import FeedPost from "./FeedPost";

export const FeedPosts = () => {
  return (
    <Container maxW={"conatiner.sm"} py={10} px={2} border={"1px solid pink"}>
      <FeedPost img="/img3.png" username="monica_geller" avatar="/img3.png" />
      <FeedPost img="/img4.png" username="phoebe_buffay" avatar="/img4.png" />
      <FeedPost img="/img6.png" username="rachael_green" avatar="/img6.png" />
      <FeedPost img="/img2.png" username="chandler_bing" avatar="/img2.png" />
      <FeedPost img="/img1.png" username="joey_tribiani" avatar="/img1.png" />
      <FeedPost img="/img5.png" username="ross_geller" avatar="/img5.png" />
    </Container>
  );
};
