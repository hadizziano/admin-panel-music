import React, { useState, useRef } from "react";
import {
  FaMusic,
  FaPlay,
  FaPause,
  FaEdit,
  FaSave,
  FaTimes,
} from "react-icons/fa";
import useWaveformLoader from "./useWaveformLoader";

const MusicItem = ({ music }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(music.title);
  const [editedArtist, setEditedArtist] = useState(music.artist);
  const [editedGenre, setEditedGenre] = useState(music.genre);
  const audioRef = useRef(null);
  const waveformRef = useWaveformLoader(music.audioSrc);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying((prevState) => !prevState);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // Add your logic here to save the edited data.
    setIsEditing(false);
    // You can update the music item data in your state or backend here.
  };

  const handleCancel = () => {
    // Discard the changes and exit edit mode.
    setIsEditing(false);
    // You can reset the edited data here if needed.
    setEditedTitle(music.title);
    setEditedArtist(music.artist);
    setEditedGenre(music.genre);
  };

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
      <div style={{ display: "flex", alignItems: "center", width: "150px" }}>
        <FaMusic size={20} style={{ marginRight: "0.5rem" }} />
        {isEditing ? (
          <input
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
        ) : (
          <strong>{music.title}</strong>
        )}
      </div>
      <p style={{ width: "150px" }}>
        <span style={{ marginRight: "1rem" }}>Artist:</span>
        {isEditing ? (
          <input
            value={editedArtist}
            onChange={(e) => setEditedArtist(e.target.value)}
          />
        ) : (
          music.artist
        )}
      </p>
      <p style={{ width: "150px" }}>
        <span style={{ marginRight: "1rem" }}>Genre:</span>
        {isEditing ? (
          <input
            value={editedGenre}
            onChange={(e) => setEditedGenre(e.target.value)}
          />
        ) : (
          music.genre
        )}
      </p>
      <div
        ref={waveformRef}
        style={{ flex: 1, marginLeft: "1rem", height: "150px" }} // Adjust height as needed
      />
      <div style={{ marginLeft: "1rem" }}>
        {isEditing ? (
          <>
            <button onClick={handleSave} title="Save">
              <FaSave />
            </button>
            <button onClick={handleCancel} title="Cancel">
              <FaTimes />
            </button>
          </>
        ) : (
          <>
            <button
              onClick={handlePlayPause}
              title={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
            <button onClick={handleEdit} title="Edit">
              <FaEdit />
            </button>
          </>
        )}
      </div>
      <audio ref={audioRef} src={music.audioSrc} />
    </li>
  );
};

export default MusicItem;
