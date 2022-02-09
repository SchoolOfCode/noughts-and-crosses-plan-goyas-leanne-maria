import { useState } from 'react';
import Board from '../board';
import { calculateWinner } from '../../helper.js';

function Game() {
	//useStates

	const [ board, setBoard ] = useState(Array(9).fill(null));
	const [ turnX, setTurnX ] = useState(true);
	const winner = calculateWinner(board);
	const currentPlayer = turnX ? 'X' : 'O';

	function handleSquareClick(index) {
		// maybe ask about how this works?
		if (winner === true || board[index] === true) {
			return;
		}
	}

	setBoard([ ...board.slice(0, index), currentPlayer, ...board, slice(index + 1) ]);
	setTurnX(!turnX);

	return (
		<div>
			<Board squares={board} selectSquare={handleSquareClick} />;
			<h3>{winner ? 'Winner: ' + winner : 'Next Player: ' + currentPlayer}</h3>
		</div>
	);
}

export default Game;
