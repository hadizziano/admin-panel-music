import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import UserProfile from "./components/UserProfile";
import MusicUpload from "./components/MusicUpload";
import MusicList from "./components/MusicList";
import LastUploadedMusic from "./components/LastUploadedMusic";
import EditProfile from "./components/EditProfile";
import UserPanel from "./components/UserPanel"; // Add this import
import "./App.css";
import PianoPage from "./components/PianoPage";

const App = () => {
  // State to store user information
  const [user, setUser] = useState({
    name: "Hadi Masoumi",
    picture: "path-to-user-picture.jpg",
  });

  // Fetch user information here (e.g., from an API)
  useEffect(() => {
    // Simulating a fetch request
    // Replace this with actual API call to fetch user data
    // For example, you can use Axios or fetch API
    setTimeout(() => {
      setUser({
        name: "Hadi Masoumi",
        picture: "./profilepic.jpg",
      });
    }, 1000); // Simulating a delay of 1 second
  }, []);

  return (
    <Router>
      <div style={{ display: "flex" }}>
        {/* User Panel */}
        <UserPanel user={user} />

        {/* Main Content */}
        <div style={{ flex: 1, textAlign: "left" }}>
          <Navbar user={user} />
          <Routes>
            <Route path="/" element={<UserProfile user={user} />} />
            <Route path="/upload" element={<MusicUpload user={user} />} />
            <Route path="/music-list" element={<MusicList user={user} />} />
            <Route path="/PianoPage" element={<PianoPage user={user} />} />
            <Route
              path="/last-uploaded"
              element={<LastUploadedMusic user={user} />}
            />
            <Route path="/edit-profile" element={<EditProfile user={user} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
