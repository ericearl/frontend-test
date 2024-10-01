import React, { useState } from "react";
import './App.css';


const systems = [
  "Aces & Eights",
  "Blades in the Dark",
  "Cyberpunk 2020",
  "Fate Accelerated",
  "Mothership",
  "Shadowrun"
];


function App() {
  const [selectedSystem, setSelectedSystem] = useState(null);

  const handleSelect = (system) => {
    setSelectedSystem(system);
  };

  return (
    <div className="App">
      <h1>Select game</h1>
      <div className="system-list">
        {systems.map((system, index) => (
          <div 
            key={index} 
            className={`system-item ${selectedSystem === system ? "selected" : ""}`} 
            onClick={() => handleSelect(system)}
          >
            {system}
          </div>
        ))}
      </div>
      {selectedSystem && (
        <div className="selected-message">
          <h2>You selected: {selectedSystem}</h2>
        </div>
      )}
    </div>
  );
}

export default App;
