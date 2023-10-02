import React, { createContext, useState, useContext } from "react";

const MoodContext = createContext();

export const MoodProvider = ({ children }) => {
  const [currentMood, setCurrentMood] = useState("neutral");
  const [compliments, setCompliments] = useState(0);

  return (
    <MoodContext.Provider
      value={{ currentMood, setCurrentMood, compliments, setCompliments }}
    >
      {children}
    </MoodContext.Provider>
  );
};

export const useMood = () => {
  return useContext(MoodContext);
};
