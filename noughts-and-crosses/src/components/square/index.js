import { useState } from "react";

import React from "react";

// when we call the Square component, it runs the handleTurnFunction, and also renders the player's move within the square. This only happens when the Square function is called, i.e. when a player moves, therefore the player turn switches.

function Square({ move, handleTurn }) {
  handleTurn();
  return <div>{move}</div>;
}

export default Square;
