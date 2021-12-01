import { useState } from 'react';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
import { GameBox } from "./GameBox";

export function TicTakToe() {
  const { width, height } = useWindowSize();
  const [board, setBoard] = useState([null, null, null, null, null, null, null, null, null]);
  // useState ([0,1,2,3,4,5,6,7,8])
  const [isXTurn, setIsXTurn] = useState(true);
  const decideWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    // if winning condition present in board then we have a winner
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (board[a] != null && board[a] === board[b] && board[b] === board[c]) {
        console.log("Winner is", board[a]);
        return board[a];
      }
    }
    return null;
  };
  const winner = decideWinner(board);
  const handleClick = (index) => {
    // console.log(index)
    // create a copy of the board & then update the clicked box
    // update only untouched box
    // we cal also give => if (board[index]===null)
    if (winner === null && !board[index]) {
      const boardCopy = [...board];
      boardCopy[index] = isXTurn ? "X" : "O";
      setBoard(boardCopy);
      // Toggle X turn 
      setIsXTurn(!isXTurn);
    }
  };
  return (
    <div className="full-game">
      {winner ? <Confetti width={width} height={height} /> : ""}
      <div className="board">
        {board.map((val, index) => (
          <GameBox val={val} onPlayerClick={() => handleClick(index)} />
        ))}
      </div>
      {winner ? <h2>Winner is : {winner}</h2> : ""}
    </div>
  );
}
