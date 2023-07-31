import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = ({ user }) => {
  const [underlined, setUnderlined] = useState([
    true,
    false,
    false,
    false,
    false,
  ]);
  const handleunderline = (indexed) => {
    const newArray = [...underlined];
    newArray.forEach((item, index) => {
      if (index === indexed) {
        newArray[index] = true;
      } else newArray[index] = false;
      // alert("hi");
    });
    setUnderlined(newArray);
  };
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
        <li onClick={() => handleunderline(0)}>
          <Link to="/" className="linklayers">
            <span
              style={{
                textDecoration: underlined[0] ? "underline" : "none",
                color: underlined[0] ? "#FF9B00" : " white",
              }}
            >
              Home
            </span>
          </Link>
        </li>
        <li onClick={() => handleunderline(1)}>
          <Link
            to="/upload"
            style={{
              textDecoration: underlined[1] ? "underline" : "none",
              color: underlined[1] ? "#FF9B00" : " white",
            }}
          >
            Upload Music
          </Link>
        </li>
        <li onClick={() => handleunderline(2)}>
          <Link
            to="/music-list"
            style={{
              textDecoration: underlined[2] ? "underline" : "none",
              color: underlined[2] ? "#FF9B00" : " white",
            }}
          >
            View Music List
          </Link>
        </li>
        <li onClick={() => handleunderline(3)}>
          <Link
            to="/last-uploaded"
            style={{
              textDecoration: underlined[3] ? "underline" : "none",
              color: underlined[3] ? "#FF9B00" : " white",
            }}
          >
            Last Uploaded
          </Link>
        </li>
        <li onClick={() => handleunderline(4)}>
          <Link
            to="/edit-profile"
            style={{
              textDecoration: underlined[4] ? "underline" : "none",
              color: underlined[4] ? "#FF9B00" : " white",
            }}
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
