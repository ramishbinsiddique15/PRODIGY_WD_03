import React, { useState, useEffect } from "react";
import "./Pvp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserAlt,
  faDesktop,
  faRedo,
} from "@fortawesome/free-solid-svg-icons";

const Pvc = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  let winner = calculateWinner(board);

  const generateCellClassName = (rowIndex, cellIndex) =>
    `cell-${rowIndex}-${cellIndex}`;

  const chunkArray = (arr, size) => {
    const chunkedArray = [];
    for (let i = 0; i < arr.length; i += size) {
      chunkedArray.push(arr.slice(i, i + size));
    }
    return chunkedArray;
  };

  const handleClick = (rowIndex, cellIndex) => {
    if (board[rowIndex * 3 + cellIndex] || winner !== null || !xIsNext) {
      return;
    }
    const newBoard = [...board];
    newBoard[rowIndex * 3 + cellIndex] = "O";
    setBoard(newBoard);
    setXIsNext(false);
  };

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
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a] === "O" ? "Player" : "Computer";
      }
    }
    if (squares.every((square) => square !== null)) {
      return "Tie";
    }
    return null;
  }

  useEffect(() => {
    if (!xIsNext && winner === null) {
      const timeoutId = setTimeout(() => {
        const emptyCells = board
          .map((cell, index) => (cell === null ? index : null))
          .filter((cell) => cell !== null);
        const randomCellIndex =
          emptyCells[Math.floor(Math.random() * emptyCells.length)];
        if (randomCellIndex !== undefined) {
          const [rowIndex, cellIndex] = [
            Math.floor(randomCellIndex / 3),
            randomCellIndex % 3,
          ];
          const newBoard = [...board];
          newBoard[rowIndex * 3 + cellIndex] = "X";
          setBoard(newBoard);
          setXIsNext(true);
        }
      }, 1000);

      return () => clearTimeout(timeoutId);
    }
  }, [xIsNext, board, winner]);

  const chunkedBoard = chunkArray(board, 3);

  const restartGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(false);
    setGameOver(false);
  };
  return (
    <div className="container">
      <div className={`player ${xIsNext ? "active" : ""}`}>
        <FontAwesomeIcon className="usericon" icon={faUserAlt} />
        <div className="box">
          <div className="sign">O</div>
          <div className="name">Player</div>
        </div>
      </div>
      <div className="center">
        <div className="board">
          {chunkedBoard.map((row, rowIndex) => (
            <div key={rowIndex} className="row">
              {row.map((cell, cellIndex) => {
                const cellClassName = generateCellClassName(
                  rowIndex,
                  cellIndex
                );
                return (
                  <div
                    key={cellIndex}
                    className={`cell ${cellClassName}`}
                    onClick={() => handleClick(rowIndex, cellIndex)}
                  >
                    {cell}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
        <div className="game-info">
          {winner && (
            <div className="next-game-btn" onClick={restartGame}>
              <button className="next">
                <FontAwesomeIcon className="restart-icon" icon={faRedo} />
                Next Game
              </button>
            </div>
          )}
          {winner && (
            <div className="winner">
              {winner === "Tie" ? "It's a tie!" : `Winner: ${winner}`}
            </div>
          )}
        </div>
      </div>
      <div className={`player ${!xIsNext ? "active" : ""}`}>
        <FontAwesomeIcon className="usericon" icon={faDesktop} />
        <div className="box">
          <div className="sign">X</div>
          <div className="name">Computer</div>
        </div>
      </div>
    </div>
  );
};

export default Pvc;
