import { Text, Flex, VStack, Box, Link } from "@chakra-ui/react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";

export const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader/>
      <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
        <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
          Suggested for you
        </Text>
        <Text
          fontSize={12}
          fontWeight={"bold"}
          _hover={{ color: "gray.400" }}
          cursor={"pointer"}
        >
          See All
        </Text>
      </Flex>

      {/* Suggested Users seed data - as props*/}
      <SuggestedUser name="Mike Hannigan"  followers={1298} avatar='https://th.bing.com/th/id/OIP._578XQ65pH2a9bhJRW-QTwHaEL?w=289&h=180&c=7&r=0&o=5&pid=1.7' /> 
      <SuggestedUser name="Pete Becker" followers={12409} avatar='https://static0.thethingsimages.com/wordpress/wp-content/uploads/2020/09/Jon-Favreau-Friends-Cast.jpg'/>
      <SuggestedUser name="Richard Burke" followers={2000} avatar='https://i.pinimg.com/736x/1e/1f/c0/1e1fc01ca578b16de818cb33493ce68f.jpg'/>

      <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
        © 2024 Built By{" "}
        <Link
          href="https://github.com/parumahajan24"
          target="_blank"
          color={"blue.500"}
          fontSize={14}
          style={{ textDecoration: "none" }}
        >
          Parul Mahajan
        </Link>
      </Box>
    </VStack>
  );
};
