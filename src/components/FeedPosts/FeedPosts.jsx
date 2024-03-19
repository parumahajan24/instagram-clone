import {
  Box,
  Container,
  Flex,
  Skeleton,
  SkeletonCircle,
  VStack,
} from "@chakra-ui/react";
import FeedPost from "./FeedPost";
import { useEffect, useState } from "react";
import { BiCode } from "react-icons/bi";

export const FeedPosts = () => {
  const [isloading, setIsLoading] = useState(true);
  // when I refresh the page, the loading will be true for 2 seconds then false
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <Container maxW={"conatiner.sm"} py={10} px={2} border={"1px solid pink"}>
      {/** If page is loading, show Skeleton loading state,otherwise just the components */}
      {isloading &&
        [0, 1, 2, 3, 4, 5].map((_, index) => (
          <VStack key={index} gap={4} alignItems={"flex-start"} mb={10}>
            <Flex gap={2}>
              <SkeletonCircle size={10} />
              <VStack gap={2} alignItems={"flex-start"}>
                <Skeleton height={"10px"} w={"200px"} />
                <Skeleton height={"10px"} w={"200px"} />
              </VStack>
            </Flex>
            <Skeleton w={"full"}>
              <Box h={"500px"}>
                wrapp the content- it will not be shown on screens
              </Box>
            </Skeleton>
          </VStack>
        ))}
      {!isloading && (
        <>
          <FeedPost
            img="/img3.png"
            username="monica_geller"
            avatar="/img3.png"
          />
          <FeedPost
            img="/img4.png"
            username="phoebe_buffay"
            avatar="/img4.png"
          />
          <FeedPost
            img="/img6.png"
            username="rachael_green"
            avatar="/img6.png"
          />
          <FeedPost
            img="/img2.png"
            username="chandler_bing"
            avatar="/img2.png"
          />
          <FeedPost
            img="/img1.png"
            username="joey_tribiani"
            avatar="/img1.png"
          />
          <FeedPost img="/img5.png" username="ross_geller" avatar="/img5.png" />
        </>
      )}
    </Container>
  );
};
