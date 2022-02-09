import Square from '../square';

function Board({ squares, selectSquare }) {
	return (
		<div>
			{squares.map((square, index) => {
				return <Square key={index} value={square} onClick={() => selectSquare(index)} />;
			})}
		</div>
	);
}

export default Board;

//

// 3 x 3 board, each square is matched to one of the indices of the moveStatus array in game
// move is set in the array at that index - e.g. X matched with index[4] replaces that object in the array
//
