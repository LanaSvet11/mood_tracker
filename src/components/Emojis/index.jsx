import React from "react";
import { useMood } from "../../context/MoodContext";
import "./index.css";

const Emojis = () => {
  const { currentMood } = useMood();

  const getEmoji = () => {
    switch (currentMood) {
      case "happy":
        return "😃";
      case "neutral":
        return "😐";
      case "sad":
        return "😞";
      default:
        return "😐"; // Default to neutral if the mood is not recognized
    }
  };

  return (
    <div className="emojis-container">
      <h2>Current Mood:</h2>
      <span className={`emoji ${currentMood}`}>{getEmoji()}</span>
    </div>
  );
};

export default Emojis;
