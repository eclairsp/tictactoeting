import React from "react";

import "../css/plate.css";

const Plate = ({id, value, turn, refresh}) => {
    return (
        <>
            <section
                onClick={() => turn(id)}
                className={`plate logo center ${refresh && "plate--flipper"}`}
            >
                {value}
            </section>
        </>
    );
};

export default Plate;
