import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Table,
  Tbody,
  Th,
  Thead,
  Tr,
  Td,
  Text,
  Input,
  FormControl,
  FormLabel,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import axiosInstance from "../../../../../utils/axiosInstance"; // Adjust the path as necessary

interface AppointmentRequest {
  _id: string;
  serviceId: string;
  date: string;
}

const AppointmentRequests: React.FC = () => {
  const [requests, setRequests] = useState<AppointmentRequest[]>([]);
  const [selectedRequestId, setSelectedRequestId] = useState<string | null>(
    null
  );
  const [dismissalMessage, setDismissalMessage] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axiosInstance.get(
          "/hw/appointments/manage-appointment-requests/get/appointment-requests"
        );
        if (Array.isArray(response.data)) {
          setRequests(response.data);
        } else {
          throw new Error("Invalid response format");
        }
      } catch (error) {
        console.error("Error fetching appointment requests", error);
        setError("Error fetching appointment requests");
      }
    };

    fetchRequests();
  }, []);

  const handleApprove = async (id: string) => {
    try {
      await axiosInstance.post(
        `/hw/appointments/manage-appointment-requests/approve/appointment-request/${id}/approve`
      );
      setRequests(requests.filter((request) => request._id !== id));
    } catch (error) {
      console.error("Error approving appointment", error);
      setError("Error approving appointment");
    }
  };

  const handleDismiss = (id: string) => {
    setSelectedRequestId(id);
    setIsModalOpen(true);
  };

  const handleDismissSubmit = async () => {
    if (selectedRequestId) {
      try {
        const response = await axiosInstance.post(
          `/hw/appointments/manage-appointment-requests/dismiss/appointment-request/${selectedRequestId}/dismiss`,
          { message: dismissalMessage } // Send the optional message
        );
        console.log("Dismiss response:", response); // Debug log
        setRequests(
          requests.filter((request) => request._id !== selectedRequestId)
        );
        setIsModalOpen(false);
        setDismissalMessage(""); // Clear the message after submission
      } catch (error) {
        console.error("Error dismissing appointment", error);
        setError("Error dismissing appointment");
      }
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setDismissalMessage(""); // Clear the message when closing
  };

  return (
    <Box p={8} width="100%" height="100%">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Service Type</Th>
            <Th>Date</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {requests.map((request) => (
            <Tr key={request._id}>
              <Td>{request.serviceId}</Td>
              <Td>{new Date(request.date).toLocaleString()}</Td>
              <Td>
                <Button
                  colorScheme="green"
                  onClick={() => handleApprove(request._id)}
                >
                  Approve
                </Button>
                <Button
                  colorScheme="red"
                  onClick={() => handleDismiss(request._id)}
                  ml={4}
                >
                  Dismiss
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      {error && (
        <Text color="red.500" mt={4}>
          {error}
        </Text>
      )}

      {/* Dismissal Modal */}
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Dismiss Appointment</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Dismissal Message</FormLabel>
              <Input
                value={dismissalMessage}
                onChange={(e) => setDismissalMessage(e.target.value)}
                placeholder="Enter dismissal message"
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={handleDismissSubmit}>
              Submit
            </Button>
            <Button colorScheme="gray" onClick={handleModalClose} ml={3}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default AppointmentRequests;
