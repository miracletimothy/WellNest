import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
interface PregnantWomenSidebarProps {
  logout: () => void;
  className: string;
}

const PregnantWomenSidebar: React.FC<PregnantWomenSidebarProps> = ({
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
          <Link to="/appointments" className="link">
            View Appointments
          </Link>
        </li>
        <li>
          <Link to="/appointments/create" className="link">
            Create Appointment
          </Link>
        </li>

        <li>
          <Link to="/content/view" className="link">
            View Content
          </Link>
        </li>
        <li>
          <Link to="/records" className="link">
            View Records
          </Link>
        </li>
        <li>
          <Link to="/chat" className="link">
            Chat
          </Link>
        </li>

        <li onClick={logout}>
          <a href="0">Logout</a>
        </li>
      </ul>
    </div>
  );
};

export default PregnantWomenSidebar;
