import React, { useState } from "react";

const EditProfile = ({ user }) => {
  const [userName, setUserName] = useState(user.name);
  const [email, setEmail] = useState("johndoe@example.com");
  const [age, setAge] = useState("");

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
      }}
    >
      <h2 style={{ marginBottom: "1rem" }}>Edit Profile</h2>
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}
      >
        <img
          src={user.picture}
          alt="User"
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            marginRight: "1rem",
          }}
        />
        <div>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      </div>
      <form style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <label>
          User Name:
          <input
            type="text"
            value={userName}
            onChange={handleUserNameChange}
            style={inputStyles}
            placeholder="User Name"
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            style={inputStyles}
            placeholder="Email"
          />
        </label>
        <label>
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
};

const buttonStyles = {
  padding: "0.5rem 1rem",
  borderRadius: "4px",
  border: "none",
  backgroundColor: "#5588AA",
  color: "white",
  cursor: "pointer",
};

export default EditProfile;
