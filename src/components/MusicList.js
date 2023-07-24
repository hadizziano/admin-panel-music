import React, { useState, useEffect } from "react";
import axios from "axios";

const MusicList = () => {
  const [musicList, setMusicList] = useState([]);

  useEffect(() => {
    // Fetch the list of uploaded music from the backend
    axios
      .get("/api/music")
      .then((response) => {
        setMusicList(response.data);
      })
      .catch((error) => {
        console.error("Error fetching music list:", error);
      });
  }, []);

  return (
    <div
      style={{ backgroundColor: "#223344", padding: "1rem", color: "white" }}
    >
      <h2>Music List</h2>
      <ul>
        {musicList.map((music) => (
          <li key={music.id}>{music.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MusicList;
