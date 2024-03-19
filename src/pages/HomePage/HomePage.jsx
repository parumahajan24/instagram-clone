import { Box, Container, Flex } from "@chakra-ui/react";
import { FeedPosts } from "../../components/FeedPosts/FeedPosts";

{
  /**Left hand-side : we have the Sidebar
     Middle: we have the content, i.e. insta feed
     Right hand-side: we have the suggested user component, your profile, and the logout link
 */
}

const HomePage = () => {
  return (
    <Container maxW={"container.lg"}>
      <Flex gap={20}>
        <Box flex={2} py={10} border={"1px solid blue"}>
          <FeedPosts/>
        </Box>
        <Box
          flex={3}
          mr={20}
          display={{ base: "none", lg: "block" }}
          maxW={"300px"}
          border={"1px solid red"}
        >
          Suggested Users
        </Box>
      </Flex>
    </Container>
  );
};

export default HomePage;
