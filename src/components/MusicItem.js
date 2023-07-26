import React from "react";
import { FaMusic } from "react-icons/fa";
import useWaveformLoader from "./useWaveformLoader";

const MusicItem = ({ music }) => {
  const waveformRef = useWaveformLoader(music.audioSrc);

  return (
    <li
      style={{
        marginBottom: "0.5rem",
        borderBottom: "1px solid #445566",
        paddingBottom: "0.5rem",
        display: "flex",
        alignItems: "center",
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
      <div
        ref={waveformRef}
        style={{ flex: 1, marginLeft: "1rem", height: "50px" }} // Adjust height as needed
      />
    </li>
  );
};

export default MusicItem;
