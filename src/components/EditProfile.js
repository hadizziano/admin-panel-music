import React, { useState } from "react";

const EditProfile = () => {
  const [userName, setUserName] = useState("John Doe");
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
      style={{ backgroundColor: "#223344", padding: "1rem", color: "white" }}
    >
      <h2>Edit Profile</h2>
      <input
        type="text"
        value={userName}
        onChange={handleUserNameChange}
        placeholder="User Name"
      />
      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Email"
      />
      <input
        type="number"
        value={age}
        onChange={handleAgeChange}
        placeholder="Age"
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default EditProfile;
