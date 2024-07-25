import React, { useState, KeyboardEvent } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Tag,
  TagLabel,
  TagCloseButton,
  HStack,
  VStack,
  useToast,
  Text,
} from "@chakra-ui/react";
import axiosInstance from "../../../utils/axiosInstance";

const CreateEducationalContentHW: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const [links, setLinks] = useState<string[]>([]);
  const [file, setFile] = useState<File | null>(null);
  const [fileType, setFileType] = useState<string>("");
  const [userId, setUserId] = useState<string>(""); // Add userId state
  const [type, setType] = useState<string>(""); // Add type state
  const toast = useToast();

  const handleKeyPress = (
    event: KeyboardEvent<HTMLInputElement>,
    fieldType: string
  ) => {
    if (event.key === " ") {
      event.preventDefault();
      const value = (event.target as HTMLInputElement).value.trim();
      if (value) {
        if (fieldType === "tag") {
          setTags([...tags, value]);
        } else if (fieldType === "link") {
          setLinks([...links, value]);
        }
        (event.target as HTMLInputElement).value = "";
      }
    }
  };

  const removeTag = (index: number) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  const removeLink = (index: number) => {
    setLinks(links.filter((_, i) => i !== index));
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setFile(file);
    if (file) {
      setFileType(file.type);
      console.log(fileType);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("tags", JSON.stringify(tags));
    formData.append("links", JSON.stringify(links));
    formData.append("userId", userId); // Include userId
    formData.append("type", type); // Include type
    if (file) {
      formData.append("file", file);
    }

    axiosInstance
      .post("/hw/educational-content/upload-content", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response);
        toast({
          title: "Content uploaded",
          description: "Your content has been successfully uploaded.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      })
      .catch((error) => {
        console.error("There was an error uploading the content!", error);
        toast({
          title: "Upload Failed",
          description: "There was an error uploading the content.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });

    // Reset form
    setTitle("");
    setDescription("");
    setTags([]);
    setLinks([]);
    setFile(null);
    setFileType("");
    setUserId(""); // Reset userId
    setType(""); // Reset type
  };

  return (
    <Box p={8} height="100%" width="100%" mx="auto">
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
          <FormControl id="title" isRequired>
            <FormLabel>Content Title</FormLabel>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </FormControl>

          <FormControl id="description" isRequired>
            <FormLabel>Content Description</FormLabel>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </FormControl>

          <FormControl id="tags">
            <FormLabel>Tags</FormLabel>
            <Input onKeyDown={(event) => handleKeyPress(event, "tag")} />
            <HStack spacing={2} mt={2}>
              {tags.map((tag, index) => (
                <Tag
                  key={index}
                  borderRadius="full"
                  variant="solid"
                  colorScheme="teal"
                >
                  <TagLabel>{tag}</TagLabel>
                  <TagCloseButton onClick={() => removeTag(index)} />
                </Tag>
              ))}
            </HStack>
          </FormControl>

          <FormControl id="links">
            <FormLabel>Links</FormLabel>
            <Input onKeyDown={(event) => handleKeyPress(event, "link")} />
            <HStack spacing={2} mt={2}>
              {links.map((link, index) => (
                <Tag
                  key={index}
                  borderRadius="full"
                  variant="solid"
                  colorScheme="blue"
                >
                  <TagLabel>{link}</TagLabel>
                  <TagCloseButton onClick={() => removeLink(index)} />
                </Tag>
              ))}
            </HStack>
          </FormControl>

          <FormControl id="file">
            <FormLabel>Upload File</FormLabel>
            <Input type="file" onChange={handleFileChange} />
            {file && <Text mt={2}>{file.name}</Text>}
          </FormControl>

          <Button type="submit" colorScheme="blue" size="lg" width="25%">
            Upload Content
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default CreateEducationalContentHW;
