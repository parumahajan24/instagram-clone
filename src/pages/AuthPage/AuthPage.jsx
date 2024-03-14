import { Box, Container, Flex, Image, VStack } from "@chakra-ui/react";
import AuthForm from "../../components/AuthForm/AuthForm";

const AuthPage = () => {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
      <Container maxW={"container.md"} padding={0}>
        {/* Left hadn-side */}
        <Box display={{ base: "none", md: "block" }}>
          <Image src="/auth.png" h={650} alt="phone img" />
        </Box>

        {/* Right hand-sde */}
        <VStack spacing={4} align={"stretch"}>
          <AuthForm />
          <Box textAlign={"center"}>Get the app</Box>
          <Flex gap={5} justifyContent={"center"}>
<Image></Image>
          </Flex>
        </VStack>
      </Container>
    </Flex>
  );
};

export default AuthPage;
