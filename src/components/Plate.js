import React from "react";

import "../css/plate.css";

const Plate = ({id, value, turn, rotate}) => {
    return (
        <>
            <section onClick={() => turn(id)} className="plate logo center">
                {value}
                <hr
                    style={{
                        transform: `rotate(${rotate})`,
                        display: rotate ? "block" : "none",
                    }}
                    className="strike"
                ></hr>
            </section>
        </>
    );
};

export default Plate;
