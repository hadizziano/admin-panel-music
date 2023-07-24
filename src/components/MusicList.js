import React from "react";
import { FaMusic } from "react-icons/fa";

const MusicList = () => {
  const musicList = [
    {
      id: 1,
      title: "Song Title 1",
      artist: "Artist 1",
      genre: "Pop",
    },
    {
      id: 2,
      title: "Song Title 2",
      artist: "Artist 2",
      genre: "Rock",
    },
    {
      id: 3,
      title: "Song Title 3",
      artist: "Artist 3",
      genre: "Hip Hop",
    },
    // Add more music objects as needed
  ];

  return (
    <div
      style={{
        backgroundColor: "#223344",
        padding: "1rem",
        color: "white",
        borderRadius: "8px",
      }}
    >
      <h2 style={{ marginBottom: "1rem" }}>Music List</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {musicList.map((music) => (
          <li
            key={music.id}
            style={{
              marginBottom: "0.5rem",
              borderBottom: "1px solid #445566",
              paddingBottom: "0.5rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <FaMusic size={20} style={{ marginRight: "0.5rem" }} />
              <strong>{music.title}</strong>
            </div>
            <p>
              <span style={{ marginRight: "1rem" }}>Artist:</span>
              {music.artist}
            </p>
            <p>
              <span style={{ marginRight: "1rem" }}>Genre:</span>
              {music.genre}
            </p>
            {/* Add more details about the music */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MusicList;
