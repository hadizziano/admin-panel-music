import React, { useState, useEffect } from "react";
import axios from "axios";

const LastUploadedMusic = () => {
  const [lastUploaded, setLastUploaded] = useState(null);

  useEffect(() => {
    // Fetch the last uploaded music by other users from the backend
    axios
      .get("/api/last-uploaded")
      .then((response) => {
        setLastUploaded(response.data);
      })
      .catch((error) => {
        console.error("Error fetching last uploaded music:", error);
      });
  }, []);

  return (
    <div
      style={{ backgroundColor: "#334455", padding: "1rem", color: "white" }}
    >
      <h2>Last Uploaded Music</h2>
      {lastUploaded && (
        <div>
          <img src={lastUploaded.picture} alt="Last Uploaded" />
          <h3>{lastUploaded.name}</h3>
        </div>
      )}
    </div>
  );
};

export default LastUploadedMusic;
