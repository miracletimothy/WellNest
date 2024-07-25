import React from "react";
import { Box, SimpleGrid, Text, VStack } from "@chakra-ui/react";

const DashboardHW: React.FC = () => {
  return (
    <Box p={8} width="100%" height="100%" mx="auto">
      <SimpleGrid columns={[1, 2, 3]} spacing={8}>
        <Box
          p={6}
          borderWidth={1}
          borderRadius={8}
          boxShadow="lg"
          textAlign="center"
        >
          <VStack>
            <Text fontSize="3xl" fontWeight="bold" mb={4}>
              Appointment Requests
            </Text>
            <Text fontSize="lg">View and manage appointments</Text>
          </VStack>
        </Box>
        <Box
          p={6}
          borderWidth={1}
          borderRadius={8}
          boxShadow="lg"
          textAlign="center"
        >
          <VStack>
            <Text fontSize="3xl" fontWeight="bold" mb={4}>
              Approved Appointments
            </Text>
            <Text fontSize="lg">View and manage appointments</Text>
          </VStack>
        </Box>
        <Box
          p={6}
          borderWidth={1}
          borderRadius={8}
          boxShadow="lg"
          textAlign="center"
        >
          <VStack>
            <Text fontSize="3xl" fontWeight="bold" mb={4}>
              Complete Appointments
            </Text>
            <Text fontSize="lg">View and manage appointments</Text>
          </VStack>
        </Box>
        <Box
          p={6}
          borderWidth={1}
          borderRadius={8}
          boxShadow="lg"
          textAlign="center"
        >
          <VStack>
            <Text fontSize="3xl" fontWeight="bold" mb={4}>
              Missed Appointments
            </Text>
            <Text fontSize="lg">View and manage appointments</Text>
          </VStack>
        </Box>
        <Box
          p={6}
          borderWidth={1}
          borderRadius={8}
          boxShadow="lg"
          textAlign="center"
        >
          <VStack>
            <Text fontSize="3xl" fontWeight="bold" mb={4}>
              Service Types
            </Text>
            <Text fontSize="lg">Check your to-do list</Text>
          </VStack>
        </Box>
        <Box
          p={6}
          borderWidth={1}
          borderRadius={8}
          boxShadow="lg"
          textAlign="center"
        >
          <VStack>
            <Text fontSize="3xl" fontWeight="bold" mb={4}>
              Uploaded Content
            </Text>
            <Text fontSize="lg">Check your to-do list</Text>
          </VStack>
        </Box>
        <Box
          p={6}
          borderWidth={1}
          borderRadius={8}
          boxShadow="lg"
          textAlign="center"
        >
          <VStack>
            <Text fontSize="3xl" fontWeight="bold" mb={4}>
              Active Users
            </Text>
            <Text fontSize="lg">Check your to-do list</Text>
          </VStack>
        </Box>
        <Box
          p={6}
          borderWidth={1}
          borderRadius={8}
          boxShadow="lg"
          textAlign="center"
        >
          <VStack>
            <Text fontSize="3xl" fontWeight="bold" mb={4}>
              Profile
            </Text>
            <Text fontSize="lg">View and edit your profile</Text>
          </VStack>
        </Box>
        <Box
          p={6}
          borderWidth={1}
          borderRadius={8}
          boxShadow="lg"
          textAlign="center"
        >
          <VStack>
            <Text fontSize="3xl" fontWeight="bold" mb={4}>
              Notifications
            </Text>
            <Text fontSize="lg">Check your notifications</Text>
          </VStack>
        </Box>
        {/* Add more sections as needed */}
      </SimpleGrid>
    </Box>
  );
};

export default DashboardHW;
