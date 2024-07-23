import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

// Auth Pages
import { useAuth } from "./context/AuthContext";
import CreateAccount from "./pages/auth/CreateAccount";
import VerifyEmail from "./pages/auth/VerifyEmail";
import SignIn from "./pages/auth/SignIn";
import LoadingAnimation from "./components/Loaders/LoadingAnimation";
import ViewUserProfileU from "./pages/User/ViewUserProfileU";

// Layouts
import AuthLayout from "./layouts/AuthLayout";
import PregnantWomenLayout from "./layouts/PregnantWomenLayout";
import HealthWorkerLayout from "./layouts/HealthWorkerLayout";

// PregnantWomen Pages
import DashboardPW from "./pages/PregnantWomen/AnalyticsAndReporting/DashboardPW";
import CreateAppointmentPW from "./pages/PregnantWomen/Appointments/CreateAppointmentPW";
import ViewAppointmentsPW from "./pages/PregnantWomen/Appointments/ViewAppointmentsPW";
import ChatPW from "./pages/PregnantWomen/Chat/ChatPW";
import ViewEducationalContentsPW from "./pages/PregnantWomen/EducationalContent/ViewEducationalContents";
import ViewEducationalContentPW from "./pages/PregnantWomen/EducationalContent/ViewEducationalContent";
import ViewAntenatalRecordPW from "./pages/PregnantWomen/AntenatalRecords/ViewAntenatalRecordPW";
import ViewAntenatalRecordsPW from "./pages/PregnantWomen/AntenatalRecords/ViewAntenatalRecordsPW";

// HealthWorker Pages
import DashboardHW from "./pages/HealthWorkers/AnalyticsAndReporting/DashboardHW";
import ChatHW from "./pages/HealthWorkers/Chat/ChatHW";
import CreateEducationalContentHW from "./pages/HealthWorkers/EducationalContent/CreateEducationalContentHW";

import CreateAntenatalRecordHW from "./pages/HealthWorkers/AntenatalRecords/CreateAntenatalRecordHW";
import ViewAntenatalRecordHW from "./pages/HealthWorkers/AntenatalRecords/ViewAntenatalRecordHW";
import ViewAntenatalRecordsHW from "./pages/HealthWorkers/AntenatalRecords/ViewAntenatalRecordsHW";
import UpdateAntenatalRecordHW from "./pages/HealthWorkers/AntenatalRecords/UpdateAntenatalRecordHW";

// APPOINTMENTSHW
import ManageServiceTypes from "./pages/HealthWorkers/Appointments/AppointmentScheduling/ManageServiceTypes/ManageServiceTypes";
import ManageProviderSchedule from "./pages/HealthWorkers/Appointments/AppointmentScheduling/ManageProviderSchedules/ManageProviderSchedule";
import ManageAppointments from "./pages/HealthWorkers/Appointments/AppointmentScheduling/ManageAppointments/ManageAppointments";
import AppointmentRequests from "./pages/HealthWorkers/Appointments/AppointmentScheduling/AppointmentRequests/AppointmentRequests";

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { token } = useAuth();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
    setIsLoading(false);
  }, [token]);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setIsAuthenticated(false);
  };

  if (isLoading) {
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LoadingAnimation />
      </div>
    );
  }

  const renderRoutesForRole = (role: string) => {
    switch (role) {
      case "pregnant_woman":
        return (
          <PregnantWomenLayout logout={logout}>
            <Switch>
              <Route path="/" exact component={DashboardPW} />
              <Route path="/profile" exact component={ViewUserProfileU} />
              <Route
                path="/appointments"
                exact
                component={ViewAppointmentsPW}
              />
              <Route
                path="/appointments/create"
                exact
                component={CreateAppointmentPW}
              />

              <Route path="/chat" exact component={ChatPW} />
              <Route
                path="/content/view"
                exact
                component={ViewEducationalContentsPW}
              />
              <Route
                path="/content/view"
                exact
                component={ViewEducationalContentPW}
              />
              <Route path="/records" exact component={ViewAntenatalRecordsPW} />
              <Route
                path="/records/:id"
                exact
                component={ViewAntenatalRecordPW}
              />

              <Redirect to="/" />
            </Switch>
          </PregnantWomenLayout>
        );
      case "health_worker":
        return (
          <HealthWorkerLayout logout={logout}>
            <Switch>
              <Route path="/" exact component={DashboardHW} />
              <Route path="/profile" exact component={ViewUserProfileU} />
              {/* APPOINTMENTS ROUTES */}
              <Route
                path="/appointments/manage-service-types"
                exact
                component={ManageServiceTypes}
              />
              <Route
                path="/appointments/manage-provider-schedules"
                exact
                component={ManageProviderSchedule}
              />
              <Route
                path="/appointments/manage-appointments"
                exact
                component={ManageAppointments}
              />
              <Route
                path="/appointments/appointment-requests"
                exact
                component={AppointmentRequests}
              />
              <Route path="/chat" exact component={ChatHW} />

              <Route
                path="/content/create"
                exact
                component={CreateEducationalContentHW}
              />
              <Route path="/records" exact component={ViewAntenatalRecordsHW} />
              <Route
                path="/records/create"
                exact
                component={CreateAntenatalRecordHW}
              />
              <Route
                path="/records/:id"
                exact
                component={ViewAntenatalRecordHW}
              />
              <Route
                path="/records/:id/update"
                exact
                component={UpdateAntenatalRecordHW}
              />

              <Redirect to="/" />
            </Switch>
          </HealthWorkerLayout>
        );
      default:
        return null;
    }
  };

  const role = localStorage.getItem("role");

  return (
    <Router>
      <Switch>
        <Route path="/signin" exact>
          {!isAuthenticated ? (
            <AuthLayout>
              <SignIn />
            </AuthLayout>
          ) : (
            <Redirect to="/" />
          )}
        </Route>
        <Route path="/create-account" exact>
          {!isAuthenticated ? (
            <AuthLayout>
              <CreateAccount />
            </AuthLayout>
          ) : (
            <Redirect to="/" />
          )}
        </Route>
        <Route path="/verify/:email" exact>
          <AuthLayout>
            <VerifyEmail />
          </AuthLayout>
        </Route>
        {isAuthenticated && role ? (
          renderRoutesForRole(role)
        ) : (
          <Redirect to="/signin" />
        )}
      </Switch>
    </Router>
  );
};

export default App;
