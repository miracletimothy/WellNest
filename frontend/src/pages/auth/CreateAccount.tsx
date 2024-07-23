import React, { useState } from "react";
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Select,
  HStack,
  VStack,
} from "@chakra-ui/react";

import { useHistory, Link } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";

const CreateAccount: React.FC = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"pregnant_woman" | "health_worker">(
    "health_worker"
  );
  const history = useHistory();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post("/auth/register", {
        email,
        firstName,
        lastName,
        password,
        role,
      });

      if (res.data.msg === "Verification code sent to your email") {
        history.push(`/verify/${email}`);
      } else {
        throw new Error("Registration failed. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("Create account failed. Please try again.");
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
        backgroundColor='white'
      >
        <Box textAlign="center">
          <Heading>Sign Up</Heading>
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

            <HStack mt={6}>
              <FormControl isRequired>
                <FormLabel>First Name</FormLabel>
                <Input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Last Name</FormLabel>
                <Input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Select Role</FormLabel>
                <Select
                  placeholder="Select Role"
                  value={role}
                  onChange={(e) =>
                    setRole(
                      e.target.value as "pregnant_woman" | "health_worker"
                    )
                  }
                >
                  <option value="pregnant_woman">Pregnant Woman</option>
                  <option value="health_worker">Health Worker</option>
                </Select>
              </FormControl>
            </HStack>

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
              Sign Up
            </Button>
            <FormControl mt={6}>
              <Link to="/signin">Have an account?</Link>
            </FormControl>
          </form>
        </Box>
      </Box>
    </Flex>
  );
};

export default CreateAccount;
