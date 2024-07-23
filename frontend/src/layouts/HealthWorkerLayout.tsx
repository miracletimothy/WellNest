import React from "react";
import Header from "../components/Header/Header";

import "./HealthWorkerLayout.css";

import HealthWorkerSidebar from "../components/Sidebar/HealthWorkerSidebar";

interface HealthWorkerLayoutProps {
  children: React.ReactNode;
  logout: () => void;
}

const HealthWorkerLayout: React.FC<HealthWorkerLayoutProps> = ({
  children,
  logout,
}) => {
  return (
    <div className="column">
      <Header className="header" />
      <div className="row">
        <HealthWorkerSidebar logout={logout} className="sidebar" />
        <div className="main-content">{children}</div>
      </div>
    </div>
  );
};

export default HealthWorkerLayout;
