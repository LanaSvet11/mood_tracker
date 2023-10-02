import React from "react";
import "./App.css";
import { MoodProvider } from "./context/MoodContext";
import Emojis from "./components/Emojis";
import ComplimentButton from "./components/ComplimentButton";

function App() {
  return (
    <div className="app-container">
      <h1>Mood Tracker</h1>
      <MoodProvider>
        <Emojis />
        <ComplimentButton />
      </MoodProvider>
    </div>
  );
}

export default App;
