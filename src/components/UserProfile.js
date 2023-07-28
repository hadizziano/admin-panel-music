import React from "react";
import { FaMusic, FaGuitar, FaMicrophone, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
const UserProfile = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#282c34",
      }}
    >
      <div
        style={{ textAlign: "center", padding: "2rem", borderRadius: "8px" }}
      >
        <h1 style={{ color: "#ffffff", marginBottom: "1rem" }}>
          Welcome to Your Profile
        </h1>
        <h3 style={{ color: "#ffffff", marginBottom: "2rem" }}>
          Explore Your Music Journey
        </h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ marginBottom: "1rem" }}>
            <Link to="pianoPage">
              <FaMusic size={40} color="#ff5722" />
              <p style={{ color: "#ffffff" }}>Piano Stuff</p>
            </Link>
          </li>
          <li style={{ marginBottom: "1rem" }}>
            <FaGuitar size={40} color="#03a9f4" />
            <p style={{ color: "#ffffff" }}>Guitar Stuff</p>
          </li>
          <li style={{ marginBottom: "1rem" }}>
            <FaMicrophone size={40} color="#4caf50" />
            <p style={{ color: "#ffffff" }}>Compositing Stuff</p>
          </li>
          <li style={{ marginBottom: "1rem" }}>
            <FaEdit size={40} color="#9c27b0" />
            <p style={{ color: "#ffffff" }}>Editing Stuff</p>
          </li>
          {/* Add more features as needed */}
        </ul>
      </div>
    </div>
  );
};

export default UserProfile;
