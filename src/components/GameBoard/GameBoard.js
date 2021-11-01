import React, { useState, useContext } from "react";
import { useSelector } from "react-redux";
import Card from "@components/Card";
import GameOver from "@components/GameOver";
import { ThemeContext } from "@context/ThemeContext";

const GameBoard = ({ location }) => {

    const [flippedCards, setFlippedCards] = useState([]);
    const [gameOver, setGameOver] = useState(false);
    const { searchItems } = useSelector(state => state.pokemonReducer);
    const pokeArr = searchItems.slice(6, 12);
    const cloneArr = [...pokeArr];
    const mixArr = pokeArr.concat(cloneArr);
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode; 

    const shuffle = array => {
        let currentIndex = array.length,
            temporaryValue,
            randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    };


    const [cardList, setCardList] = useState(
        shuffle(mixArr).map((pokemon, index) => {
            return {
                id: index,
                name: pokemon.name,
                img: pokemon.sprites.front_shiny,
                flipped: false,
                matched: false,
            };
        })
    );

    const handleClick = (name, index) => {

        let currentCard = {
            name,
            index
        };

        let updateCards = cardList.map(card => {

            if (card.id === index) {
                card.flipped = true;
            }
            return card;
        });

        let updateFlipped = flippedCards;
        updateFlipped.push(currentCard);
        setFlippedCards(updateFlipped);
        setCardList(updateCards);


        if (flippedCards.length === 2) {
            setTimeout(() => {
                check();
            }, 750);
        }
    };

    const check = () => {
        let updateCards = cardList;
        if (
            flippedCards[0].name === flippedCards[1].name &&
            flippedCards[0].index !== flippedCards[1].index
        ) {
            updateCards[flippedCards[0].index].matched = true;
            updateCards[flippedCards[1].index].matched = true;
            isGameOver();
        } else {
            updateCards[flippedCards[0].index].flipped = false;
            updateCards[flippedCards[1].index].flipped = false;
        }
        setCardList(updateCards);
        setFlippedCards([]);
    };

    const isGameOver = () => {
        let done = true;
        cardList.forEach(card => {
            if (!card.matched) done = false;
        });
        setGameOver(done);
    };

    return (
        <>
            {
                !gameOver &&
                <div
                    style={{ color: `${darkMode ? "#fff" : ""}` }}
                    className="game-board-title">
                    <h2>Pokemon Card Game</h2>
                    <h3>
                        You must successfully finish the card game to catch the pokemon.
                    </h3>
                </div>
            }
            <div className="game-board">
                {!gameOver &&
                    cardList.map((card, index) => (
                        <Card
                            key={index}
                            id={index}
                            name={card.name}
                            img={card.img}
                            flipped={card.flipped}
                            matched={card.matched}
                            clicked={flippedCards.length === 2 ? () => { } : handleClick}
                        />
                    ))}
                {gameOver &&
                    <GameOver
                        location={location}
                        gameOver={gameOver} />}
            </div>
        </>
    );
};

export default GameBoard;