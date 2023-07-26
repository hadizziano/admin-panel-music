import React from "react";
import { FaMusic, FaGuitar, FaMicrophone, FaEdit } from "react-icons/fa";
import MusicItem from "./MusicItem";

const UserProfile = () => {
  // Sample data for the user's music collection
  const userMusicCollection = [
    {
      id: 1,
      title: "Song 1",
      artist: "Artist 1",
      genre: "Genre 1",
      audioSrc: "/path/to/audio1.mp3",
    },
    {
      id: 2,
      title: "Song 2",
      artist: "Artist 2",
      genre: "Genre 2",
      audioSrc: "/path/to/audio2.mp3",
    },
    // Add more music data as needed
  ];

  // Sample user information
  const user = {
    name: "Hadi Masoumi",
    bio: "Music lover and enthusiast. Follow me for more great tunes!",
    followers: 1000,
    socialMedia: {
      twitter: "https://twitter.com/johndoe",
      instagram: "https://instagram.com/johndoe",
      facebook: "https://facebook.com/johndoe",
    },
  };

  return (
    <div style={{ display: "flex" }}>
      {/* Render the user's profile picture */}
      {/* <img
        src="./profilepic.jpg"
        alt="Profile"
        style={{ width: "100px", height: "100px", borderRadius: "50%" }}
      /> */}

      <div style={{ marginLeft: "1rem" }}>
        {/* Render user information */}
        <h2>{user.name}</h2>
        <p>{user.bio}</p>
        <p>Followers: {user.followers}</p>

        {/* Render social media links */}
        <div>
          <a
            href={user.socialMedia.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href={user.socialMedia.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href={user.socialMedia.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </div>

        {/* Additional features */}
        <div style={{ marginTop: "1rem" }}>
          <h3>Additional Features</h3>
          <ul>
            <li>
              <FaMusic size={20} style={{ marginRight: "0.5rem" }} />
              Piano stuff
            </li>
            <li>
              <FaGuitar size={20} style={{ marginRight: "0.5rem" }} />
              Guitar stuff
            </li>
            <li>
              <FaMicrophone size={20} style={{ marginRight: "0.5rem" }} />
              Compositing stuff
            </li>
            <li>
              <FaEdit size={20} style={{ marginRight: "0.5rem" }} />
              Editing stuff
            </li>
          </ul>
        </div>
      </div>

      {/* Render the user's music collection */}
      <ul>
        {/* {userMusicCollection.map((music) => (
          <MusicItem key={music.id} music={music} />
        ))} */}
      </ul>
    </div>
  );
};

export default UserProfile;
