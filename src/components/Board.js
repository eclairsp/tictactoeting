import {React} from "react";

import Plate from "./Plate";
import calculateWinner from "../utils/calculateWinner";

import "../css/board.css";

const Board = ({current, turn, xMove, deg, refresh}) => {
    return (
        <>
            <section className="board">
                <section className="board--info">
                    {!calculateWinner(current) ? (
                        <div className="board--info--card">
                            <h4 className="board--info--title">Turn</h4>
                            <h3 className="board--info--value">
                                {xMove ? "X" : "O"}
                            </h3>
                        </div>
                    ) : (
                        <div className="board--info--card">
                            <h4 className="board--info--title">Winner</h4>
                            <h3 className="board--info--value">
                                {calculateWinner(current)}
                            </h3>
                        </div>
                    )}
                </section>
                <section onClick={refresh} className="board--refresh center">
                    <svg
                        className="board--refresh--icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                    >
                        <title>Refresh</title>
                        <path
                            d="M320 146s24.36-12-64-12a160 160 0 10160 160"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            strokeWidth="32"
                        />
                        <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="32"
                            d="M256 58l80 80-80 80"
                        />
                    </svg>
                </section>
                <Plate id={0} value={current[0]} rotate="" turn={turn} />
                <Plate id={1} value={current[1]} rotate="" turn={turn} />
                <Plate id={2} value={current[2]} rotate="" turn={turn} />
                <Plate id={3} value={current[3]} rotate="" turn={turn} />
                <Plate id={4} value={current[4]} rotate="" turn={turn} />
                <Plate id={5} value={current[5]} rotate="" turn={turn} />
                <Plate id={6} value={current[6]} rotate="" turn={turn} />
                <Plate id={7} value={current[7]} rotate="" turn={turn} />
                <Plate id={8} value={current[8]} rotate="" turn={turn} />
            </section>
        </>
    );
};

export default Board;
