import React from "react";
import Header from "../components/Header/Header";
import PregnantWomenSidebar from "../components/Sidebar/PregnantWomenSidebar";

import "./PregnantWomenLayout.css";

interface PregnantWomenLayoutProps {
  children: React.ReactNode;
  logout: () => void;
}

const PregnantWomenLayout: React.FC<PregnantWomenLayoutProps> = ({
  children,
  logout,
}) => {
  return (
    <div className="column">
      <Header className="header" />
      <div className="row">
        <PregnantWomenSidebar logout={logout} className="sidebar" />
        <div className="main-content">{children}</div>
      </div>
    </div>
  );
};

export default PregnantWomenLayout;
