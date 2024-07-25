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

interface ScheduleItem {
  id: string;
  date: string; // Format: YYYY-MM-DD
  startTime: string; // Format: HH:MM
  endTime: string; // Format: HH:MM
  activity: string;
}

const ManageProviderSchedule: React.FC = () => {
  const [schedules, setSchedules] = useState<ScheduleItem[]>([]);
  const [newSchedule, setNewSchedule] = useState({
    date: "",
    startTime: "",
    endTime: "",
    activity: "",
  });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        const response = await axiosInstance.get(
          "/hw/appointments/manage-provider-schedules/get/provider-schedules"
        );
        setSchedules(response.data);
      } catch (error) {
        console.error("Error fetching schedules", error);
      }
    };

    fetchSchedules();
  }, []);

  const handleAddSchedule = async () => {
    try {
      await axiosInstance.post(
        "/hw/appointments/manage-provider-schedules/create/provider-schedules",
        newSchedule
      );
      setNewSchedule({ date: "", startTime: "", endTime: "", activity: "" });
      setIsOpen(false);
      // Refetch schedules
      const response = await axiosInstance.get(
        "/hw/appointments/manage-provider-schedules/get/provider-schedules"
      );
      setSchedules(response.data);
    } catch (error) {
      console.error("Error adding schedule", error);
    }
  };

  return (
    <Box p={8} width="100%" height="100%">
      <Button onClick={() => setIsOpen(true)} colorScheme="blue" mb={4}>
        Add New Schedule
      </Button>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Date</Th>
            <Th>Start Time</Th>
            <Th>End Time</Th>
            <Th>Activity</Th>
          </Tr>
        </Thead>
        <Tbody>
          {schedules.map((schedule) => (
            <Tr key={schedule.id}>
              <Td>{schedule.date}</Td>
              <Td>{schedule.startTime}</Td>
              <Td>{schedule.endTime}</Td>
              <Td>{schedule.activity}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Schedule</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4}>
              <FormControl>
                <FormLabel>Date</FormLabel>
                <Input
                  type="date"
                  value={newSchedule.date}
                  onChange={(e) =>
                    setNewSchedule({ ...newSchedule, date: e.target.value })
                  }
                />
              </FormControl>
              <FormControl>
                <FormLabel>Start Time</FormLabel>
                <Input
                  type="time"
                  value={newSchedule.startTime}
                  onChange={(e) =>
                    setNewSchedule({
                      ...newSchedule,
                      startTime: e.target.value,
                    })
                  }
                />
              </FormControl>
              <FormControl>
                <FormLabel>End Time</FormLabel>
                <Input
                  type="time"
                  value={newSchedule.endTime}
                  onChange={(e) =>
                    setNewSchedule({ ...newSchedule, endTime: e.target.value })
                  }
                />
              </FormControl>
              <FormControl>
                <FormLabel>Activity</FormLabel>
                <Input
                  value={newSchedule.activity}
                  onChange={(e) =>
                    setNewSchedule({ ...newSchedule, activity: e.target.value })
                  }
                  placeholder="Enter activity description"
                />
              </FormControl>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleAddSchedule}>
              Add Schedule
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

export default ManageProviderSchedule;
