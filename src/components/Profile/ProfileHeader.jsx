import {
  Avatar,
  AvatarGroup,
  Button,
  Flex,
  Text,
  VStack,
} from "@chakra-ui/react";

{
  /**
  Profile header will have two columns:
  Left side: Profile Avatar
  Right side: profile related conent

 */
}

const ProfileHeader = () => {
  return (
    <Flex
      gap={{ base: 4, sm: 10 }}
      py={10}
      direction={{ base: "column", sm: "row" }}
    >
      <AvatarGroup
        size={{ base: "xl", md: "2xl" }}
        justifySelf={"center"}
        alignSelf={"flex-start"}
        mx={"auto"}
      >
        <Avatar
          name="Parul Mahajan"
          src="/profilepic.png"
          alt="Parul Mahajan Logo"
        />
      </AvatarGroup>
      {/* flex={1} so that it contains the remaining part after the AvatarGroup */}
      <VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>
        <Flex
          gap={4}
          direction={{ base: "column", sm: "row" }}
          justifyContent={{ base: "center", sm: "flex-start" }}
          alignItems={"center"}
          w={"full"}
        >
          <Text fontSize={{ base: "sm", md: "lg" }}>
            parulmahajan {"username"}
          </Text>

          <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
            <Button
              bg={"white"}
              color={"black"}
              _hover={{ bg: "whiteAlpha.800" }}
              size={{ base: "xs", md: "sm" }}
            >
              Edit Profile
            </Button>
          </Flex>
        </Flex>

        {/* Flex to hold Posts, Followers and Following Account */}
        <Flex alignItems={"center"} gap={{ base: 2, sm: 4 }}>
          <Text fontSize={{base:"xs", md:"sm"}}>
            <Text as="span" fontWeight={"bold"} mr={1}>
              4
            </Text>
            Posts
          </Text>
          <Text fontSize={{base:"xs", md:"sm"}}>
            <Text as="span" fontWeight={"bold"} mr={1}>
              149
            </Text>
            Followers
          </Text>
          <Text fontSize={{base:"xs", md:"sm"}}>
            <Text as="span" fontWeight={"bold"} mr={1}>
              129
            </Text>
            Following
          </Text>
        </Flex>

        {/*  Flex to hold Full Name */}
        <Flex alignItems={"center"} gap={4}>
          <Text fontSize={"sm"} fontWeight={"bold"}>
            Parul Mahajan {"full name"}
          </Text>
        </Flex>
        <Text fontSize={"sm"}>Bio of {"username"}</Text>
      </VStack>
    </Flex>
  );
};

export default ProfileHeader;
