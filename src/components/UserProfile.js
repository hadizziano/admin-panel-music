import React from "react";

const UserProfile = () => {
  // Fetch user information here (e.g., picture, name)
  const user = {
    name: "John Doe",
    picture: "path-to-user-picture.jpg",
  };

  return (
    <div
      style={{ backgroundColor: "#445566", padding: "1rem", color: "white" }}
    >
      <img src={user.picture} alt="User" />
      <h3>{user.name}</h3>
      {/* Add other user profile information */}
      {/* e.g., Email, Age, etc. */}
    </div>
  );
};

export default UserProfile;
