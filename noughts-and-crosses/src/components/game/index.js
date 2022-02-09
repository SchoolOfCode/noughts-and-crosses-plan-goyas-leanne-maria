import { useState } from 'react';
import Board from '../board';

function Game() {
	//useStates

	const [ board, setBoard ] = useState(Array(9).fill(null));
	const [ turnX, setTurnX ] = useState(true);
	const winner = calculateWinner(board);
	const currentPlayer = turnX ? 'X' : 'O';

	function handleSquareClick(index){ // maybe ask about how this works? 
      if (winner || board[index]){
		  return;
	  }
	}
     
	...board.slice(0,index),
	currentPlayer,
	...board,slice(index,)


	return <Board />;
}

export default Game;
