import {React, useState, useEffect} from "react";

import Plate from "./Plate";
import calculateWinner from "../utils/calculateWinner";

import "../css/board.css";

const Board = ({current, turn, xMove, refresh, gameWon}) => {
    const [refreshAnimation, changeRefreshAnimation] = useState(false);

    useEffect(() => {
        const winner = calculateWinner(current);
        console.log(current, winner);
        gameWon(winner);
    }, [current, gameWon]);

    const refreshNow = () => {
        setTimeout(() => {
            changeRefreshAnimation(false);
        }, 500);
        changeRefreshAnimation(true);
        refresh();
    };

    return (
        <>
            <section className="board">
                <section className="board--info">
                    {calculateWinner(current) ? (
                        <div className="board--info--card">
                            <h4 className="board--info--title">Winner</h4>
                        </div>
                    ) : current.filter((c) => c === "X" || c === "O").length ===
                      9 ? (
                        <div className="board--info--card">
                            <h4 className="board--info--title">Tie</h4>
                        </div>
                    ) : (
                        <div className="board--info--card">
                            <h4 className="board--info--title">Turn</h4>
                            <h3 className="board--info--value">
                                {xMove ? "X" : "O"}
                            </h3>
                        </div>
                    )}
                </section>
                <section
                    onClick={() => refreshNow()}
                    className="board--refresh center"
                >
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
                <Plate
                    refresh={refreshAnimation}
                    id={0}
                    value={current[0]}
                    turn={turn}
                />
                <Plate
                    refresh={refreshAnimation}
                    id={1}
                    value={current[1]}
                    turn={turn}
                />
                <Plate
                    refresh={refreshAnimation}
                    id={2}
                    value={current[2]}
                    turn={turn}
                />
                <Plate
                    refresh={refreshAnimation}
                    id={3}
                    value={current[3]}
                    turn={turn}
                />
                <Plate
                    refresh={refreshAnimation}
                    id={4}
                    value={current[4]}
                    turn={turn}
                />
                <Plate
                    refresh={refreshAnimation}
                    id={5}
                    value={current[5]}
                    turn={turn}
                />
                <Plate
                    refresh={refreshAnimation}
                    id={6}
                    value={current[6]}
                    turn={turn}
                />
                <Plate
                    refresh={refreshAnimation}
                    id={7}
                    value={current[7]}
                    turn={turn}
                />
                <Plate
                    refresh={refreshAnimation}
                    id={8}
                    value={current[8]}
                    turn={turn}
                />
            </section>
        </>
    );
};

export default Board;
