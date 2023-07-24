import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{ backgroundColor: "#223344", padding: "1rem", color: "white" }}
    >
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/upload">Upload Music</Link>
        </li>
        <li>
          <Link to="/music-list">View Music List</Link>
        </li>
        <li>
          <Link to="/last-uploaded">Last Uploaded</Link>
        </li>
        <li>
          <Link to="/edit-profile">Edit Profile</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
