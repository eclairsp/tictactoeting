import {React, useEffect} from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import Home from "./pages/Home";
import Game from "./pages/Game";

import "./css/App.css";

function App() {
    useEffect(() => {
        const root = document.documentElement;
        let random = Math.floor(Math.random() * 360) + 1;
        let randomSat = Math.floor(Math.random() * 100) + 75;

        root.style.setProperty(
            "--base",
            `hsla(${random}, ${randomSat}%, 90%, 1)`
        ); // for light background change the 90% to around 50%.
        root.style.setProperty(
            "--color-1",
            `hsla(${random}, ${randomSat}%, 85%, 1)`
        );
        root.style.setProperty(
            "--color-2",
            `hsla(${random}, ${randomSat}%, 75%, 1)`
        );
        root.style.setProperty(
            "--color-3",
            `hsla(${random}, ${randomSat}%, 65%, 1)`
        );
        root.style.setProperty(
            "--color-4",
            `hsla(${random}, ${randomSat}%, 55%, 1)`
        );
    }, []);
    return (
        <div className="App center">
            <Router>
                <header className="header center">
                    <Link to="/" className="logo">
                        TicTacToeTing
                    </Link>
                </header>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/game">
                        <Game />
                    </Route>
                </Switch>
            </Router>
            <footer className="footer">Made by Prab</footer>
        </div>
    );
}

export default App;
