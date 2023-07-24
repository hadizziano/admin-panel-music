import React from "react";
import { Link } from "react-router-dom";

const UserPanel = ({ user }) => {
  return (
    <div
      style={{
        backgroundColor: "#334455",
        padding: "1rem",
        color: "white",
        width: "200px",
      }}
    >
      <img
        src={user.picture}
        alt="User"
        style={{
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          marginBottom: "1rem",
        }}
      />
      <h3>{user.name}</h3>
      <Link
        to="/edit-profile"
        style={{ color: "white", textDecoration: "none" }}
      >
        Edit Profile
      </Link>
      {/* Add other user profile information */}
      {/* e.g., Email, Age, etc. */}
    </div>
  );
};

export default UserPanel;
