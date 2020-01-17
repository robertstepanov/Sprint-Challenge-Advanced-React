import React from "react";
import Navbar from "./Components/Navbar";
import "./App.css";
import PlayerList from "./Components/PlayerList";

function App() {
  return (
    <div className="App">
      <Navbar />
     
        <PlayerList className="App-header" />
      
    </div>
  );
}

export default App;
