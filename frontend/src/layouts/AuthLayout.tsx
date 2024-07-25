import React from "react";
import "./AuthLayout.css";
import logo from "../assets/logo/icon.png";
import { Heading, HStack } from "@chakra-ui/react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="AuthLayout">
      {/* <ThemeToggler /> */}
      <div className="MainContent">
        <div className="left">
          <HStack>
            <img id="logo" src={logo} />
            <Heading fontSize="50px" color="white">
              CMHMCS
            </Heading>
          </HStack>
        </div>
        <div className="right">{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
