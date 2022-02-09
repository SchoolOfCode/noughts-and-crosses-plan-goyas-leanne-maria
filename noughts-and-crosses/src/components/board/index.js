import { useState } from 'react';
import Square from '../square';
import Game from '../game';

// One state to set the board
// One state to set the player's turn

function Board({ board, move, handleTurn }) {
	return (
		<div>
			<Square move={move} handleTurn={handleTurn} />
		</div>
	);
}

export default Board;

// 3 x 3 board, each square is matched to one of the indices of the moveStatus array in game
// move is set in the array at that index - e.g. X matched with index[4] replaces that object in the array
//
