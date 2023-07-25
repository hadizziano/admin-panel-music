import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";

const buttonStyles = {
  padding: "0.5rem 1rem",
  borderRadius: "4px",
  border: "none",
  backgroundColor: "#5588AA",
  color: "white",
  cursor: "pointer",
};

const EditProfile = ({ user }) => {
  const [userName, setUserName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [age, setAge] = useState(user.age);
  const [isHovering, setIsHovering] = useState(false);

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleSave = () => {
    // Implement logic to save edited profile information
    // using 'userName', 'email', and 'age' state values
  };

  return (
    <div
      style={{
        backgroundColor: "#223344",
        padding: "1rem",
        color: "white",
        borderRadius: "8px",
        display: "grid",
        gap: "1rem",
        gridTemplateColumns: "auto 1fr", // Left and right sections
        alignItems: "center", // Center content vertically
      }}
    >
      <div>
        <h2>Edit Profile</h2>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "1rem",
          }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div
            style={{
              position: "relative",
              marginRight: "1rem",
              cursor: "pointer",
            }}
          >
            <img
              src={user.picture}
              alt="User"
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
              }}
            />
            {isHovering && (
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  borderRadius: "50%",
                  padding: "0.3rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FaEdit size={18} color="white" />
              </div>
            )}
          </div>
          <div>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
        </div>
      </div>
      <form
        style={{
          display: "grid",
          gap: "1.5rem",
          alignItems: "center", // Center form items horizontally
          width: "60%", // Adjust width of the form
          margin: "0 auto", // Center the form within its container
        }}
      >
        <label style={{ display: "grid" }}>
          User Name:
          <input
            type="text"
            value={userName}
            onChange={handleUserNameChange}
            style={inputStyles}
            placeholder="User Name"
          />
        </label>
        <label style={{ display: "grid" }}>
          Email:
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            style={inputStyles}
            placeholder="Email"
          />
        </label>
        <label style={{ display: "grid" }}>
          Age:
          <input
            type="number"
            value={age}
            onChange={handleAgeChange}
            style={inputStyles}
            placeholder="Age"
          />
        </label>
        <button onClick={handleSave} style={buttonStyles}>
          Save
        </button>
      </form>
    </div>
  );
};

const inputStyles = {
  padding: "0.5rem",
  borderRadius: "4px",
  border: "1px solid #ccc",
  width: "100%",
};

export default EditProfile;
