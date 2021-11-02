import React from "react";
import background from '@assets/card-back.jpg';
import frontEnd from '@assets/card-front.jpg';

const Card = ({ id, name, flipped, matched, clicked, img }) => {
    return (
        <div
            onClick={() => (flipped ? undefined : clicked(name, id))}
            className={
                "card" + (flipped ? " flipped" : "") + (matched ? " matched" : "")
            }
        >
            <div className="back">
                <img src={background} alt="" />
            </div>
            <div className="front">
                <div
                    style={{ backgroundImage: `url(${frontEnd})` }}
                    className="front-background">
                    <img src={img} alt={name} />
                </div>
            </div>
        </div>
    );
};

export default Card;