import React, { useState, useEffect } from "react";
import ThemeToggler from "../../Theme/ThemeToggler";
import { useHistory } from "react-router-dom";
import "./Header.css";
import { jwtDecode } from "jwt-decode";

interface HeaderProps {
  className: string;
}

interface DecodedUser {
  user: {
    firstName: string;
    profilePic: string;
  };
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const [user, setUser] = useState<DecodedUser["user"] | null>(null);

  const history = useHistory();

  const handleClick = () => {
    history.push("/profile");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded: DecodedUser = jwtDecode(token);
        console.log("This is the user:", decoded.user);
        setUser(decoded.user);
      } catch (error) {
        console.error("Failed to decode token:", error);
        // Handle token decode error (e.g., clear token, redirect to login)
      }
    }
  }, []);

  return (
    <div className={`header ${className}`}>
      <span>CMHMCS</span>
      {user && (
        <div
          className="profile-button"
          onClick={handleClick}
          style={{ cursor: "pointer" }}
        >
          <ThemeToggler />
          <span>{user.firstName}</span>
        </div>
      )}
    </div>
  );
};

export default Header;
