import React, { useState } from "react";
import {
  Box,
  Button,
  Input,
  VStack,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import axios from "axios";

const CreateProfile: React.FC = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [contact, setContact] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await axios.post("/api/pw/create", {
        name,
        age,
        contact,
      });
      alert("Profile created successfully");
    } catch (error) {
      alert("Error creating profile");
    }
  };

  return (
    <Box p={8} maxWidth="500px" mx="auto">
      <VStack spacing={4}>
        <FormControl id="name">
          <FormLabel>Name</FormLabel>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
          />
        </FormControl>
        <FormControl id="age">
          <FormLabel>Age</FormLabel>
          <Input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Enter age"
          />
        </FormControl>
        <FormControl id="contact">
          <FormLabel>Contact</FormLabel>
          <Input
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="Enter contact"
          />
        </FormControl>
        <Button onClick={handleSubmit} colorScheme="blue">
          Create Profile
        </Button>
      </VStack>
    </Box>
  );
};

export default CreateProfile;
