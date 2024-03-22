import {
  Box,
  Image,
  VStack,
  Flex,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Login from "./Login";
import SignUp from "./Signup"

const AuthForm = () => {
  /* show 'confirm password' only when trying to login, not on signup */
  const [isLogin, setIsLogin] = useState(true);
  return (
    <>
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <VStack spacing={4}>
          <Image
            src="/logo.png"
            h={24}
            cursor={"pointer"}
            alt="Instagram logo"
          />
          {isLogin ? <Login /> : <SignUp />}

          {/* ----------------- OR --------------- */}
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            my={4}
            gap={1}
            w={"full"}
          >
            <Box flex={2} h={"1px"} bg={"gray.400"} />
            <Text mx={3} color={"gray"}>
              OR
            </Text>
            <Box flex={2} h={"1px"} bg={"gray.400"} />
          </Flex>

          {/* Log in with Google */}
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            cursor={"pointer"}
          >
            <Image src="/google.png" w={5} alt="Google logo" />
            <Text mx={2} color={"blue.500"}>
              Log in with Google.
            </Text>
          </Flex>
        </VStack>
      </Box>

      {/* --------------- swtich between Log in / Sign up --------------------*/}
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Box mx={1} fontSize={14}>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </Box>
          <Box
            onClick={() => setIsLogin(!isLogin)}
            color={"blue.500"}
            cursor={"pointer"}
            fontSize={14}
          >
            {isLogin ? "Sign Up" : "Log in"}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default AuthForm;
