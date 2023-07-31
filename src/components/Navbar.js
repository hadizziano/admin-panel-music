import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = ({ user }) => {
  return (
    <nav
      style={{ backgroundColor: "#223344", padding: "1rem", color: "white" }}
    >
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          justifyContent: "space-between",
          background: "#1a1a1a",
          padding: "0.5rem",
        }}
      >
        <li>
          <Link to="/" className="linklayers">
            Home
          </Link>
        </li>
        <li>
          <Link to="/upload" style={{ color: "white", textDecoration: "none" }}>
            Upload Music
          </Link>
        </li>
        <li>
          <Link
            to="/music-list"
            style={{ color: "white", textDecoration: "none" }}
          >
            View Music List
          </Link>
        </li>
        <li>
          <Link
            to="/last-uploaded"
            style={{ color: "white", textDecoration: "none" }}
          >
            Last Uploaded
          </Link>
        </li>
        <li>
          <Link
            to="/edit-profile"
            style={{ color: "white", textDecoration: "none" }}
          >
            Edit Profile
          </Link>
        </li>
      </ul>
      {/* Display user information */}
      <div></div>
    </nav>
  );
};

export default Navbar;
