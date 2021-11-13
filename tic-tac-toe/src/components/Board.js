import Square from "./Square";
import React, { useState } from 'react';

const Board = (props) => {
  const [status, setStatus] = useState("X");
  const [squares, setSquares] = useState(Array(9).fill(null));
  const handelOnClick = (id) => {
      const newSquare = [...squares];
      status === 'X' ? setStatus('O') : setStatus('X');
      for (let i=0 ; i < squares.length ; i++ ){
          if(i === id){
            newSquare[i] = status; 
          }
      }
      setSquares(newSquare);
      let winner = calculateWinner(newSquare);
      if (winner) {
        setStatus(winner);
        alert(winner + ' is the Winner of Game.');
        setSquares(Array(9).fill(null));
      }
  }
  function calculateWinner(squares) {
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
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
        }
    }
    return null;
  }
  return (
    <div>
      <div className="status">Next Move : {status}</div>
      <div className="board-row">
        <Square value={squares[0]} onClick={() => handelOnClick(0)}/>
        <Square value={squares[1]} onClick={() => handelOnClick(1)}/>
        <Square value={squares[2]} onClick={() => handelOnClick(2)}/>
      </div>
      <div className="board-row">
        <Square value={squares[3]} onClick={() => handelOnClick(3)}/>
        <Square value={squares[4]} onClick={() => handelOnClick(4)}/>
        <Square value={squares[5]} onClick={() => handelOnClick(5)}/>
      </div>
      <div className="board-row">
        <Square value={squares[6]} onClick={() => handelOnClick(6)}/>
        <Square value={squares[7]} onClick={() => handelOnClick(7)}/>
        <Square value={squares[8]} onClick={() => handelOnClick(8)}/>
      </div>
    </div>
  );
};

export default Board;
