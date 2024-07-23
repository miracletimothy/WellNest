import React, { useState } from "react";
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import { useParams, useHistory } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import "../../styles/Theme.css";

const VerifyEmail: React.FC = () => {
  const [error, setError] = useState("");
  const { email } = useParams<{ email: string }>();
  const [code, setCode] = useState("");
  const history = useHistory();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post("/auth/verify", {
        email,
        code,
      });

      if (res.data.msg === "Email verified and user registered successfully") {
        const role = localStorage.getItem("role");
        if (role === "pregnant_woman") {
          history.push("/mobile-app-branding");
        } else {
          history.push("/auth");
        }
      } else {
        throw new Error("Verification failed. Please try again.");
      }
    } catch (err) {
      console.error(err);

      setError("Verification failed. Please try again.");
    }
  };

  return (
    <Flex width="full" align="center" justifyContent="center">
      <Box
        p={8}
        maxWidth="500px"
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
      >
        <Box textAlign="center">
          <Heading>Verify Email</Heading>
        </Box>
        <Box my={4} textAlign="left">
          <form onSubmit={handleSubmit}>
            <FormControl isRequired>
              <FormLabel>Verification Code</FormLabel>
              <Input
                type="text"
                placeholder="Verification Code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
            </FormControl>

            <Button variant="outline" width="full" mt={4} type="submit">
              Verify
            </Button>
            <FormControl mt={6}>
              {/* <Link to="/create-account">Create an account?</Link> */}
            </FormControl>
          </form>
        </Box>
      </Box>
    </Flex>
  );
};

export default VerifyEmail;
