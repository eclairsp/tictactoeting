import React, {useState} from "react";

import Board from "../components/Board";
import calculateWinner from "../utils/calculateWinner";

import "../css/game.css";

const X_WINNING = ["\\", null, "/", null, "X", null, "/", null, "\\"];
const O_WINNING = ["_", "_", "_", "|", "O", "|", "_", "_", "_"];

const Game = () => {
    const [current, changeCurrent] = useState(Array(9).fill(null));
    // const [move, changeMove] = useState(0);
    const [xMove, changeXMove] = useState(true);

    const turn = (id) => {
        const squares = current.slice();
        if (
            calculateWinner(squares) ||
            squares[id] ||
            JSON.stringify(squares) === JSON.stringify(X_WINNING) ||
            JSON.stringify(squares) === JSON.stringify(O_WINNING)
        ) {
            return;
        }

        squares[id] = xMove ? "X" : "O";
        changeCurrent(squares);
        changeXMove(!xMove);
    };

    const refresh = () => {
        changeCurrent(Array(9).fill(null));
        changeXMove(true);
    };

    const gameWon = (wonBy) => {
        if (wonBy === "X") {
            changeCurrent(X_WINNING);
        }

        if (wonBy === "O") {
            changeCurrent(O_WINNING);
        }
    };

    return (
        <>
            <section className="middle center game">
                <Board
                    current={current}
                    turn={turn}
                    xMove={xMove}
                    refresh={refresh}
                    gameWon={gameWon}
                />
            </section>
        </>
    );
};

export default Game;

// let degree = deg.slice();
// switch (Math.abs(a - b)) {
//     case 1:
//         changeDeg(
//             degree.map((word, index) => {
//                 if (lines.includes(index)) {
//                     return "90deg";
//                 } else {
//                     return null;
//                 }
//             })
//         );
//         break;
//     case 2:
//         changeDeg(
//             degree.map((word, index) => {
//                 if (lines.includes(index)) {
//                     return "-45deg";
//                 } else {
//                     return null;
//                 }
//             })
//         );
//         break;
//     case 3:
//         changeDeg(
//             degree.map((word, index) => {
//                 if (lines.includes(index)) {
//                     return "0deg";
//                 } else {
//                     return null;
//                 }
//             })
//         );
//         break;
//     case 4:
//         changeDeg(
//             degree.map((word, index) => {
//                 if (lines.includes(index)) {
//                     return "45deg";
//                 } else {
//                     return null;
//                 }
//             })
//         );
//         break;
// }
