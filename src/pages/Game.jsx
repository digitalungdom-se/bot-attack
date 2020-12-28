import React, { useState } from "react";
import GameDisplay from "../game/frontendDisplay/GameDisplay";
import Scoreboard from "../components/Scoreboard";


const Game = () => {
  const [hallOfFame, setHallOfFame] = useState([]);
  return (
    <main style={{ display: "flex", padding: "80px 20px" }}>
      <div style={{ marginRight: 30 }}>
        <Scoreboard hallOfFame={hallOfFame} />
      </div>
      <div style={{ marginTop: 16 }}>
        <GameDisplay setHallOfFame={setHallOfFame} />
      </div>
    </main>
  );
};

export default Game;
