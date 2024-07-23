import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Input,
  Table,
  Tbody,
  Th,
  Thead,
  Tr,
  Td,
  FormControl,
  FormLabel,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import axiosInstance from "../../../../../utils/axiosInstance";

interface ServiceType {
  id: string;
  name: string;
  duration: number; // in minutes
  description: string;
}

const ManageServiceTypes: React.FC = () => {
  const [services, setServices] = useState<ServiceType[]>([]);
  const [newService, setNewService] = useState({
    name: "",
    duration: 0,
    description: "",
  });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axiosInstance.get(
          "/hw/appointments/manage-service-types/get/service-types"
        );
        setServices(response.data);
      } catch (error) {
        console.error("Error fetching services", error);
      }
    };

    fetchServices();
  }, []);

  const handleAddService = async () => {
    try {
      await axiosInstance.post(
        "/hw/appointments/manage-service-types/create/service-types",
        newService
      );
      setNewService({ name: "", duration: 0, description: "" });
      setIsOpen(false);
      // Refetch services
      const response = await axiosInstance.get(
        "/hw/appointments/manage-service-types/get/service-types"
      );
      setServices(response.data);
    } catch (error) {
      console.error("Error adding service", error);
    }
  };

  return (
    <Box p={8} width="100%" height="100%">
      <Button onClick={() => setIsOpen(true)} colorScheme="blue" mb={4}>
        Add New Service
      </Button>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Duration (min)</Th>
            <Th>Description</Th>
          </Tr>
        </Thead>
        <Tbody>
          {services.map((service) => (
            <Tr key={service.id}>
              <Td>{service.name}</Td>
              <Td>{service.duration}</Td>
              <Td>{service.description}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Service</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input
                  value={newService.name}
                  onChange={(e) =>
                    setNewService({ ...newService, name: e.target.value })
                  }
                  placeholder="Enter service name"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Duration (minutes)</FormLabel>
                <Input
                  type="number"
                  value={newService.duration}
                  onChange={(e) =>
                    setNewService({ ...newService, duration: +e.target.value })
                  }
                  placeholder="Enter duration"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Description</FormLabel>
                <Input
                  value={newService.description}
                  onChange={(e) =>
                    setNewService({
                      ...newService,
                      description: e.target.value,
                    })
                  }
                  placeholder="Enter description"
                />
              </FormControl>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleAddService}>
              Add Service
            </Button>
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ManageServiceTypes;
