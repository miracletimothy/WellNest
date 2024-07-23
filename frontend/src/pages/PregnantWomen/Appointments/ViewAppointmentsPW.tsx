import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
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
  Text,
  Heading,
} from "@chakra-ui/react";
import axiosInstance from "../../../utils/axiosInstance";

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString();
};

interface Appointment {
  _id: string;
  description: string;
  date: string;
  time: string;
}

const ViewAppointmentsPW: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [filteredAppointments, setFilteredAppointments] = useState<
    Appointment[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const history = useHistory();

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await axiosInstance.get("/pw/appointments/view");
        console.log("Fetched appointments:", res.data);
        setAppointments(res.data);
        setFilteredAppointments(res.data);
      } catch (err) {
        setError("Failed to fetch appointments. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      setFilteredAppointments(
        appointments.filter((appointment) =>
          appointment.description
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilteredAppointments(appointments);
    }
  }, [searchQuery, appointments]);

  const handleDelete = async (id: string) => {
    try {
      await axiosInstance.delete(`/pw/appointments/delete/${id}`);
      setAppointments((prev) =>
        prev.filter((appointment) => appointment._id !== id)
      );
      setFilteredAppointments((prev) =>
        prev.filter((appointment) => appointment._id !== id)
      );
    } catch (err) {
      setError("Failed to delete appointment. Please try again.");
    }
  };

  const handleScheduleAppointment = () => {
    history.push("/appointments/create");
  };

  return (
    <Box p={8} width="100%" height="100%">
      <Box textAlign="center">
        <Heading>My Appointments</Heading>
        <Input
          mt={4}
          placeholder="Search appointments..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          width="25%"
          alignSelf="flex-start"
        />
      </Box>
      <Box my={4} textAlign="left">
        {loading ? (
          <Text>Loading...</Text>
        ) : error ? (
          <Text color="red.500">{error}</Text>
        ) : filteredAppointments.length === 0 ? (
          <Text>No appointments found.</Text>
        ) : (
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Description</Th>
                <Th>Date</Th>
                <Th>Time</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {filteredAppointments.map((appointment) => (
                <Tr key={appointment._id}>
                  <Td>{appointment.description}</Td>
                  <Td>{formatDate(appointment.date)}</Td>
                  <Td>{appointment.time}</Td>
                  <Td>
                    <Button
                      size="sm"
                      colorScheme="red"
                      onClick={() => handleDelete(appointment._id)}
                    >
                      Delete
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        )}
        <Button
          mt={4}
          colorScheme="blue"
          width="25%"
          onClick={handleScheduleAppointment}
        >
          Schedule New Appointment
        </Button>
      </Box>
    </Box>
  );
};

export default ViewAppointmentsPW;
