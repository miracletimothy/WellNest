import React from "react";
import { Link } from "react-router-dom";

import "./Sidebar.css";

interface HealthWorkerSidebarProps {
  logout: () => void;
  className: string;
}

const HealthWorkerSidebar: React.FC<HealthWorkerSidebarProps> = ({
  logout,
  className,
}) => {
  return (
    <div className={`sidebar ${className}`}>
      <ul>
        <li>
          <Link to="/" className="link">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/appointments/manage-service-types" className="link">
            Manage Service Types
          </Link>
        </li>
        <li>
          <Link to="/appointments/manage-provider-schedules" className="link">
            Manage Provider Schedules
          </Link>
        </li>
        <li>
          <Link to="/appointments/manage-appointments" className="link">
            Manage Appointments
          </Link>
        </li>
        <li>
          <Link to="/appointments/appointment-requests" className="link">
            Appointment Requests
          </Link>
        </li>

        <li>
          <Link to="/content/view" className="link">
            View Content
          </Link>
        </li>
        <li>
          <Link to="/content/create" className="link">
            Create Content
          </Link>
        </li>
        <li>
          <Link to="/records" className="link">
            View Records
          </Link>
        </li>
        <li>
          <Link to="/records/create" className="link">
            New Record
          </Link>
        </li>
        <li>
          <Link to="/chat" className="link">
            Chat
          </Link>
        </li>

        <li onClick={logout}>Logout</li>
      </ul>
    </div>
  );
};

export default HealthWorkerSidebar;
