import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import UserProfile from "./components/UserProfile";
import MusicUpload from "./components/MusicUpload";
import MusicList from "./components/MusicList";
import LastUploadedMusic from "./components/LastUploadedMusic";
import EditProfile from "./components/EditProfile";

const App = () => {
  return (
    <Router>
      <div style={{ textAlign: "left" }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<UserProfile />} />
          <Route path="/upload" element={<MusicUpload />} />
          <Route path="/music-list" element={<MusicList />} />
          <Route path="/last-uploaded" element={<LastUploadedMusic />} />
          <Route path="/edit-profile" element={<EditProfile />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
