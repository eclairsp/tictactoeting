import React, {useState} from "react";

import Board from "../components/Board";
import calculateWinner from "../utils/calculateWinner";

import "../css/game.css";

const Game = () => {
    const [current, changeCurrent] = useState(Array(9).fill(null));
    // const [move, changeMove] = useState(0);
    const [xMove, changeXMove] = useState(true);
    const [deg, changeDeg] = useState(Array(9).fill(null));

    const turn = (id) => {
        const squares = current.slice();
        if (calculateWinner(squares) || squares[id]) {
            return;
        }

        squares[id] = xMove ? "X" : "O";
        changeCurrent(squares);
        changeXMove(!xMove);

        console.log(id);
    };

    const refresh = () => {
        changeCurrent(Array(9).fill(null));
        changeXMove(true);
        changeDeg(Array(9).fill(null));
    };

    return (
        <>
            <section className="middle center game">
                <Board
                    current={current}
                    turn={turn}
                    xMove={xMove}
                    deg={deg}
                    refresh={refresh}
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
