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
} from "@chakra-ui/react";
import axiosInstance from "../../../../../utils/axiosInstance"; // Adjust the path as necessary

interface Appointment {
  _id: string;
  serviceId: string;
  date: string;
  approvalStatus: "approved" | "not approved" | "canceled";
  completionStatus: "complete" | "awaiting" | "missed";
  message?: string;
}

const ManageAppointments: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [timeLeft, setTimeLeft] = useState<{ [key: string]: string }>({});
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axiosInstance.get(
          "/hw/appointments/manage-appointments/get/approved"
        );
        console.log("API Response:", response.data);

        if (Array.isArray(response.data)) {
          // Filter appointments with approvalStatus "approved" and completionStatus "awaiting"
          const filteredAppointments = response.data.filter(
            (appt: Appointment) =>
              appt.approvalStatus === "approved" &&
              appt.completionStatus === "awaiting"
          );
          // Sort appointments by date and time (latest first)
          const sortedAppointments = filteredAppointments.sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          );
          setAppointments(sortedAppointments);
          console.log("Filtered and Sorted Appointments:", sortedAppointments);

          // Initialize time left state
          const initialTimeLeft: { [key: string]: string } = {};
          sortedAppointments.forEach((appt) => {
            initialTimeLeft[appt._id] = calculateTimeLeft(appt.date);
          });
          setTimeLeft(initialTimeLeft);
        } else {
          throw new Error("Invalid response format");
        }
      } catch (error) {
        console.error("Error fetching appointments", error);
        setError("Error fetching appointments");
      }
    };

    fetchAppointments();

    // Periodically update time left for each appointment
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const updatedTimeLeft: { [key: string]: string } = {};
      appointments.forEach((appt) => {
        if (
          new Date(appt.date).getTime() < now &&
          appt.completionStatus === "awaiting"
        ) {
          handleMarkAsMissed(appt._id);
        } else {
          updatedTimeLeft[appt._id] = calculateTimeLeft(appt.date);
        }
      });
      setTimeLeft(updatedTimeLeft);
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, [appointments]);

  useEffect(() => {
    console.log("Appointments state updated:", appointments);
  }, [appointments]);

  const handleMarkAsServed = async (id: string) => {
    try {
      await axiosInstance.post(
        `/hw/appointments/manage-appointments/serve/${id}/serve`
      );
      setAppointments((prevAppointments) =>
        prevAppointments.filter((appt) => appt._id !== id)
      );
    } catch (error) {
      console.error("Error marking appointment as served", error);
      setError("Error marking appointment as served");
    }
  };

  const handleMarkAsMissed = async (id: string) => {
    try {
      await axiosInstance.post(
        `/hw/appointments/manage-appointments/miss/${id}/miss`
      );
      setAppointments((prevAppointments) =>
        prevAppointments.filter((appt) => appt._id !== id)
      );
    } catch (error) {
      console.error("Error marking appointment as missed", error);
      setError("Error marking appointment as missed");
    }
  };

  const calculateTimeLeft = (date: string) => {
    const now = new Date().getTime();
    const appointmentTime = new Date(date).getTime();
    const diff = appointmentTime - now;

    if (diff <= 0) {
      return "0s";
    }

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return `${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <Box p={8} width="100%" height="100%">
      {error && (
        <Text color="red.500" mb={4}>
          {error}
        </Text>
      )}
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Service ID</Th>
            <Th>Date</Th>
            <Th>Approval Status</Th>
            <Th>Completion Status</Th>
            <Th>Time Left</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {appointments.map((appointment) => (
            <Tr key={appointment._id}>
              <Td>{appointment.serviceId}</Td>
              <Td>{new Date(appointment.date).toLocaleString()}</Td>
              <Td>{appointment.approvalStatus}</Td>
              <Td>{appointment.completionStatus}</Td>
              <Td>{timeLeft[appointment._id]}</Td>
              <Td>
                <Button
                  colorScheme="green"
                  onClick={() => handleMarkAsServed(appointment._id)}
                >
                  Mark as Complete
                </Button>
                {/* <Button
                  colorScheme="red"
                  onClick={() => handleMarkAsMissed(appointment._id)}
                  ml={4}
                >
                  Mark as Missed
                </Button> */}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default ManageAppointments;
