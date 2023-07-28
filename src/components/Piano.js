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
    synth.triggerAttackRelease(note, "0.1"); // Play the note for 0.1 seconds
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
    { key: "A", note: "C3", isBlack: false },
    { key: "W", note: "C#3", isBlack: true },
    { key: "S", note: "D3", isBlack: false },
    { key: "E", note: "D#3", isBlack: true },
    { key: "D", note: "E3", isBlack: false },
    { key: "F", note: "F3", isBlack: false },
    { key: "T", note: "F#3", isBlack: true },
    { key: "G", note: "G3", isBlack: false },
    { key: "Y", note: "G#3", isBlack: true },
    { key: "H", note: "A3", isBlack: false },
    { key: "U", note: "A#3", isBlack: true },
    { key: "J", note: "B3", isBlack: false },
    { key: "K", note: "C4", isBlack: false },
    { key: "O", note: "C#4", isBlack: true },
    { key: "L", note: "D4", isBlack: false },
    { key: "P", note: "D#4", isBlack: true },
    { key: ";", note: "E4", isBlack: false },
    { key: "'", note: "F4", isBlack: false },
    { key: "]", note: "F#4", isBlack: true },
    { key: "\\", note: "G4", isBlack: false },
    { key: "Z", note: "G#4", isBlack: true },
    { key: "X", note: "A4", isBlack: false },
    { key: "D", note: "A#4", isBlack: true },
    { key: "C", note: "B4", isBlack: false },
    { key: "V", note: "C5", isBlack: false },
    { key: "G", note: "C#5", isBlack: true },
    { key: "B", note: "D5", isBlack: false },
    { key: "H", note: "D#5", isBlack: true },
    { key: "N", note: "E5", isBlack: false },
    { key: "M", note: "F5", isBlack: false },
    { key: ",", note: "F#5", isBlack: true },
    { key: ".", note: "G5", isBlack: false },
    { key: "/", note: "G#5", isBlack: true },
    { key: "Q", note: "A5", isBlack: false },
    { key: "2", note: "A#5", isBlack: true },
    { key: "W", note: "B5", isBlack: false },
    { key: "E", note: "C6", isBlack: false },
    { key: "4", note: "C#6", isBlack: true },
    { key: "R", note: "D6", isBlack: false },
    { key: "5", note: "D#6", isBlack: true },
    { key: "T", note: "E6", isBlack: false },
  ];

  const activeKeyStyle = {
    backgroundColor: "#ffb347", // Active key color
    marginTop: "0px",
  };

  const inactiveWhiteKeyStyle = {
    backgroundColor: "#fff", // Inactive white key color
  };

  const inactiveBlackKeyStyle = {
    backgroundColor: "#000", // Inactive black key color
    marginTop: "0px", // Adjust the marginTop value as needed
  };

  const renderPianoKeys = () => {
    return pianoKeys.map((keyObj) => (
      <div
        key={keyObj.key}
        id={keyObj.note}
        className={`piano-key ${keyObj.isBlack ? "black-key" : ""}`}
        style={
          currentKey === keyObj.key
            ? activeKeyStyle
            : keyObj.isBlack
            ? inactiveBlackKeyStyle
            : inactiveWhiteKeyStyle
        }
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
