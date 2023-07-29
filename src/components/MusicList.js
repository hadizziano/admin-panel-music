import React from "react";
import MusicItem from "./MusicItem";

const MusicList = () => {
  const musicList = [
    {
      id: 1,
      title: "Song Title 1",
      artist: "Artist 1",
      genre: "Pop",
      audioSrc: "./track.mp3", // Replace with the actual audio file path
    },
    {
      id: 2,
      title: "Song Title 2",
      artist: "Artist 2",
      genre: "Rock",
      audioSrc: "./track.mp3", // Replace with the actual audio file path
    },
    {
      id: 3,
      title: "Song Title 3",
      artist: "Artist 3",
      genre: "Hip Hop",
      audioSrc: "./track.mp3", // Replace with the actual audio file path
    },
    {
      id: 3,
      title: "Song Title 3",
      artist: "Artist 3",
      genre: "Hip Hop",
      audioSrc: "./track.mp3", // Replace with the actual audio file path
    },
    {
      id: 3,
      title: "Song Title 3",
      artist: "Artist 3",
      genre: "Hip Hop",
      audioSrc: "./track.mp3", // Replace with the actual audio file path
    },
    {
      id: 3,
      title: "Song Title 3",
      artist: "Artist 3",
      genre: "Hip Hop",
      audioSrc: "./track.mp3", // Replace with the actual audio file path
    },
    {
      id: 3,
      title: "Song Title 3",
      artist: "Artist 3",
      genre: "Hip Hop",
      audioSrc: "./track.mp3", // Replace with the actual audio file path
    },
    // Add more music objects as needed
  ];

  return (
    <div
      style={{
        // backgroundColor: "#223344",
        background: "linear-gradient(to left, #9D5842 , #223344 ) right",
        padding: "1rem",
        color: "white",
        borderRadius: "8px",
      }}
    >
      <h2 style={{ marginBottom: "1rem" }}>Music List</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {musicList.map((music) => (
          <MusicItem key={music.id} music={music} />
        ))}
      </ul>
    </div>
  );
};

export default MusicList;
