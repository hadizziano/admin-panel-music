import React, { useState, useEffect } from "react";
import * as Tone from "tone";
import "./piano.css";

const Piano = () => {
  const [currentKey, setCurrentKey] = useState(null);

  const handleMouseDown = (note) => {
    setCurrentKey(note);
    playNote(note);
  };

  const handleMouseUp = () => {
    setCurrentKey(null);
  };

  const handleKeyPress = (event) => {
    if (currentKey !== event.key.toUpperCase()) {
      setCurrentKey(event.key.toUpperCase());
      const keyNote = pianoKeys.find(
        (keyObj) => keyObj.key === event.key.toUpperCase()
      );
      if (keyNote) {
        playNote(keyNote.note);
      }
    }
  };

  const handleKeyRelease = (event) => {
    if (currentKey === event.key.toUpperCase()) {
      setCurrentKey(null);
    }
  };

  const playNote = (note) => {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(note, "0.1"); // Play the note for 0.5 seconds
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    window.addEventListener("keyup", handleKeyRelease);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      window.removeEventListener("keyup", handleKeyRelease);
    };
  }, [currentKey]);

  const pianoKeys = [
    { key: "Q", note: "C4" },
    { key: "2", note: "C#4" },
    { key: "W", note: "D4" },
    { key: "3", note: "D#4" },
    { key: "E", note: "E4" },
    { key: "R", note: "F4" },
    { key: "5", note: "F#4" },
    { key: "T", note: "G4" },
    { key: "6", note: "G#4" },
    { key: "Y", note: "A4" },
    { key: "7", note: "A#4" },
    { key: "U", note: "B4" },
  ];

  const activeKeyStyle = {
    backgroundColor: "#ffb347", // Active key color
  };

  const inactiveKeyStyle = {
    backgroundColor: "#fff", // Inactive key color
  };

  const renderPianoKeys = () => {
    return pianoKeys.map((keyObj) => (
      <div
        key={keyObj.key}
        id={keyObj.note}
        className="piano-key"
        style={currentKey === keyObj.key ? activeKeyStyle : inactiveKeyStyle}
        onMouseDown={() => handleMouseDown(keyObj.note)}
        onMouseUp={handleMouseUp}
      />
    ));
  };

  return (
    <div>
      <h1>Piano Stuff</h1>
      <p>Click the piano keys or use keyboard buttons to play:</p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {renderPianoKeys()}
      </div>
    </div>
  );
};

export default Piano;
