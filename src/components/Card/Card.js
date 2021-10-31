import React from "react";

const Card = ({ id, name, flipped, matched, clicked, img }) => {
    return (
        <div
            onClick={() => (flipped ? undefined : clicked(name, id))}
            className={
                "card" + (flipped ? " flipped" : "") + (matched ? " matched" : "")
            }
        >
            <div className="back">
                <img src="" alt="" />
            </div>
            <div className="front">
                <img src={img} alt={name} />
            </div>
        </div>
    );
};

export default Card;