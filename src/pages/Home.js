import React from "react";
import {useHistory} from "react-router-dom";

import "../css/home.css";

const Home = () => {
    let history = useHistory();

    function toGame() {
        history.push("/game");
    }
    return (
        <>
            <section className="middle center">
                <section className="offline">
                    <svg
                        onClick={toGame}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="play"
                    >
                        <title>Play</title>
                        <path
                            d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
                            fill="none"
                            stroke="currentColor"
                            strokeMiterlimit="10"
                            strokeWidth="32"
                        />
                        <path
                            fill="currentColor"
                            d="M216.32 334.44l114.45-69.14a10.89 10.89 0 000-18.6l-114.45-69.14a10.78 10.78 0 00-16.32 9.31v138.26a10.78 10.78 0 0016.32 9.31z"
                        />
                    </svg>
                </section>
                <hr className="separator" />
                <section className="online">
                    <h2 className="coming-soon">Coming Soon</h2>
                </section>
            </section>
        </>
    );
};

export default Home;
