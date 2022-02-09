import { useState } from "react";
import Board from "../board";

function Game() {
  const [move, setMove] = useState([]);
  const [turn, setTurn] = useState(false);
  function handleTurn() {
    setTurn(!turn);
    // triggered by start button, and when a player has taken their go.
  }

  return (
    <div>
      <Board handleTurn={handleTurn} move={move} />
    </div>
  );
}

export default Game;
