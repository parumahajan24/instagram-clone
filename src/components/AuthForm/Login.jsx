import { Button, Input } from "@chakra-ui/react";
import { useState } from "react";

// email and password input fields
const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  return (
    <>
      <Input
        placeholder="Email"
        name="email"
        type="email"
        size={"sm"}
        fontSize={14}
        value={inputs.email}
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
      />
      <Input
        placeholder="Password"
        name="password"
        size={"sm"}
        type="password"
        fontSize={14}
        value={inputs.password}
        onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
      />
      <Button w={"full"} colorScheme="blue" size={"sm"} fontSize={14}>
        Log in
      </Button>
    </>
  );
};

export default Login;
