import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useHistory, Link } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";

import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
} from "@chakra-ui/react";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const history = useHistory();
  const toast = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post("/auth/login", { email, password });
      if (
        res.data.user.role !== "health_worker" &&
        res.data.user.role !== "pregnant_woman"
      ) {
        throw new Error("Unauthorized access");
      }
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.user.role);
      console.log("Login successful:", res.data.user);
      console.log("Token exists, redirecting to main page...");
      login(res.data.token, res.data.user);
      history.replace("/");

      toast({
        title: "Login successful.",
        description: "You have successfully logged in.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (err) {
      toast({
        title: "Login failed.",
        description: "Please check your credentials and try again.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      console.error(err);
    }
  };

  return (
    <Flex width="full" align="center" justifyContent="center">
      <Box
        p={8}
        maxWidth="800px"
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
        backgroundColor="white"
      >
        <Box textAlign="center">
          <Heading>Login</Heading>
        </Box>
        <Box my={4} textAlign="left">
          <form onSubmit={handleSubmit}>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="cmhmcs@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>

            <FormControl mt={6} isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="*******"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>

            <Button variant="outline" width="full" mt={4} type="submit">
              Sign In
            </Button>
            <FormControl mt={6}>
              <Link to="/create-account">Create an account?</Link>
            </FormControl>
          </form>
        </Box>
      </Box>
    </Flex>
  );
};

export default SignIn;
