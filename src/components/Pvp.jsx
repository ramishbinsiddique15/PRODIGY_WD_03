import React, { useState } from 'react';
import './Pvp.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt, faDesktop } from '@fortawesome/free-solid-svg-icons';

const Pvp = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(false);

    const generateCellClassName = (rowIndex, cellIndex) => `cell-${rowIndex}-${cellIndex}`;

    const chunkArray = (arr, size) => {
        const chunkedArray = [];
        for (let i = 0; i < arr.length; i += size) {
            chunkedArray.push(arr.slice(i, i + size));
        }
        return chunkedArray;
    };

    const handleClick = (rowIndex, cellIndex) => {
        if (board[rowIndex * 3 + cellIndex] || calculateWinner(board)) {
            return;
        }
        const newBoard = [...board];
        newBoard[rowIndex * 3 + cellIndex] = xIsNext ? 'X' : 'O';
        setBoard(newBoard);
        setXIsNext(!xIsNext);
    };

    const calculateWinner = (squares) => {
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
                return squares[a] === 'X' ? 'Player 2' : 'Player 1';
            }
        }
        return null;
    };

    const winner = calculateWinner(board);

    const chunkedBoard = chunkArray(board, 3);

    return (
        <div className="container">
            <div className={`player ${!xIsNext ? 'active' : ''}`}>
                <FontAwesomeIcon className="usericon" icon={faUserAlt} />
                <div className="box">
                    <div className="sign">O</div>
                    <div className="name">Player1</div>
                </div>
            </div>
            <div className="center">
                <div className="board">
                    {chunkedBoard.map((row, rowIndex) => (
                        <div key={rowIndex} className="row">
                            {row.map((cell, cellIndex) => {
                                const cellClassName = generateCellClassName(rowIndex, cellIndex);
                                return (
                                    <div key={cellIndex} className={`cell ${cellClassName}`} onClick={() => handleClick(rowIndex, cellIndex)}>
                                        {cell}
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
                {winner && <div className="winner">{`Winner: ${winner}`}</div>}
            </div>
            <div className={`player ${xIsNext ? 'active' : ''}`}>
                <FontAwesomeIcon className="usericon" icon={faUserAlt} />
                <div className="box">
                    <div className="sign">X</div>
                    <div className="name">Player2</div>
                </div>
            </div>
        </div>
    );
};

export default Pvp;
