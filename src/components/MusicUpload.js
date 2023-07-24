import React, { useState } from "react";

const MusicUpload = () => {
  const [musicName, setMusicName] = useState("");
  const [file, setFile] = useState(null);

  const handleMusicNameChange = (event) => {
    setMusicName(event.target.value);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    // Implement logic to upload music to the backend
    // using 'musicName' and 'file' state values
  };

  return (
    <div
      style={{ backgroundColor: "#334455", padding: "1rem", color: "white" }}
    >
      <h2>Upload Music</h2>
      <input
        type="text"
        value={musicName}
        onChange={handleMusicNameChange}
        placeholder="Music Name"
      />
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default MusicUpload;
