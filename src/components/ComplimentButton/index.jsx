import React from "react";
import { useMood } from "../../context/MoodContext";
import "./index.css";

const ComplimentButton = () => {
  const { compliments, setCompliments, setCurrentMood } = useMood();

  const handleButtonClick = () => {
    setCompliments(compliments + 1);

    if (compliments < 5) {
      setCurrentMood("sad");
    } else if (compliments >= 5 && compliments <= 9) {
      setCurrentMood("fine");
    } else if (compliments >= 10 && compliments <= 15) {
      setCurrentMood("happy");
    }
  };

  return (
    <div className="compliment-container">
      <h2>Compliments: {compliments}</h2>
      <button className="compliment-button" onClick={handleButtonClick}>
        Give a Compliment
      </button>
    </div>
  );
};

export default ComplimentButton;
