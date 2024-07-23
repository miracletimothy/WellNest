import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Input,
  Button,
  VStack,
  List,
  ListItem,
  Text,
  Divider,
  HStack,
} from "@chakra-ui/react";
import axiosInstance from "../../utils/axiosInstance"; // Adjust the path as necessary

interface Message {
  text: string;
  time: string;
  role: string;
}

interface ChatProps {
  currentUserRole: string; // 'health_worker' or 'pregnant_woman'
}

const Chat: React.FC<ChatProps> = ({ currentUserRole }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axiosInstance.get<Message[]>("/c/");
        setMessages(response.data);
      } catch (error) {
        console.error("Error fetching messages", error);
      }
    };

    fetchMessages();
  }, []);

  const handleSend = async () => {
    if (message.trim() !== "") {
      const newMessage = {
        text: message,
        role: currentUserRole, // Set role appropriately based on the current user
        time: new Date().toISOString(), // Add the current time
      };
      try {
        const response = await axiosInstance.post<Message>(
          "/c/create",
          newMessage
        );
        setMessages((prevMessages) => [...prevMessages, response.data]);
        setMessage(""); // Clear the input field
      } catch (error) {
        console.error("Error sending message", error);
      }
    }
  };

  return (
    <Flex height="100%" width="100%">
      {/* Sidebar */}
      <Box w="30%" h="100%" p={4} borderRight="1px solid #e0e0e0">
        <Input
          placeholder="Search users"
          mb={4}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <VStack spacing={4} align="stretch" overflowY="auto">
          <List spacing={3}>
            {/* <ListItem>
              <Text fontSize="lg">User 1</Text>
              <Divider />
            </ListItem>
            <ListItem>
              <Text fontSize="lg">User 2</Text>
              <Divider />
            </ListItem> */}
            {/* Add more users here */}
          </List>
        </VStack>
      </Box>

      {/* Chat Area */}
      <Flex w="70%" h="100%" direction="column" overflowY="scroll">
        <Box flex="1" p={4} overflowY="auto">
          <VStack spacing={4} align="stretch">
            {messages.map((msg, index) => (
              <Box
                key={index}
                alignSelf={
                  msg.role === currentUserRole ? "flex-end" : "flex-start"
                }
                bg={msg.role === currentUserRole ? "blue.100" : "gray.100"}
                p={2}
                borderRadius="md"
              >
                <Text>{msg.text}</Text>
                <Text fontSize="xs" color="gray.500">
                  {new Date(msg.time).toLocaleTimeString()}
                </Text>
              </Box>
            ))}
          </VStack>
        </Box>
        <HStack p={4} borderTop="1px solid #e0e0e0">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message"
          />
          <Button onClick={handleSend}>Send</Button>
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Chat;
