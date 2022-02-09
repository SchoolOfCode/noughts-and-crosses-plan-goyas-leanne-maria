import "./square.css";
import React from "react";

// when we call the Square component, it runs the handleTurnFunction, and also renders the player's move within the square. This only happens when the Square function is called, i.e. when a player moves, therefore the player turn switches.

function Square({ move, HandleTurn }) {
  //HandleTurn();
  return (
    <div className="square">
      <input />{" "}
    </div>
  );
}

export default Square;
