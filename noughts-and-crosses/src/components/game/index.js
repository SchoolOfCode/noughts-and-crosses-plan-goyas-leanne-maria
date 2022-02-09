import { useState } from "react";
import Board from "../board";

function Game() {
  const [ move, setMove ] = useState([]);
  const [ turn, setTurn ] = useState(false);
  function HandleTurn() {
  	setTurn(!turn);
  // triggered by start button, and when a player has taken their go.
  }

  return (
    <div>
      Hello
      <Board HandleTurn={HandleTurn} move={move}/>
    </div>
  );
}

export default Game;

