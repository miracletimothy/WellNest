import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import axiosInstance from "../../../utils/axiosInstance";

interface ServiceType {
  id: string;
  name: string;
}

const CreateAppointmentPW: React.FC = () => {
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [serviceId, setServiceId] = useState("");
  const [services, setServices] = useState<ServiceType[]>([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axiosInstance.get(
          "/pw/appointments/get/service-types"
        );
        setServices(res.data);
      } catch (err) {
        console.error("Failed to fetch services", err);
      }
    };

    fetchServices();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axiosInstance.post("/pw/appointments/create", {
        description,
        date,
        time,
        serviceId,
      });

      setSuccess("Appointment scheduled successfully.");
      setDescription("");
      setDate("");
      setTime("");
      setServiceId("");
    } catch (err) {
      setError("Failed to schedule appointment. Please try again.");
      console.error(err);
    }
  };

  return (
    <Box
      p={8}
      maxWidth="600px"
      borderWidth={1}
      borderRadius={8}
      boxShadow="lg"
      mx="auto"
    >
      <Box textAlign="center">
        <Heading mb={4}>Schedule Appointment</Heading>
      </Box>
      <Box my={4} textAlign="left">
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl isRequired>
              <FormLabel>Service</FormLabel>
              <Select
                placeholder="Select service"
                value={serviceId}
                onChange={(e) => setServiceId(e.target.value)}
              >
                {services.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.name}
                  </option>
                ))}
              </Select>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Appointment Description</FormLabel>
              <Textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Appointment Date</FormLabel>
              <Input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Appointment Time</FormLabel>
              <Input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </FormControl>
            <Button colorScheme="blue" width="full" mt={4} type="submit">
              Schedule Appointment
            </Button>
          </VStack>
        </form>
        {error && (
          <Box color="red.500" mt={4}>
            {error}
          </Box>
        )}
        {success && (
          <Box color="green.500" mt={4}>
            {success}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default CreateAppointmentPW;
