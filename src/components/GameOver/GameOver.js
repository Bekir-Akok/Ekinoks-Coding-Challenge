import React, { useEffect, useContext } from "react";
import PokemonCard from '@components/PokemonCard';
import { addToCatch } from "@redux/actions/action";
import { useDispatch } from "react-redux";
import { ThemeContext } from "@context/ThemeContext";
import { useHistory } from "react-router-dom";

const GameOver = ({ location, gameOver }) => {

  const pokemon = location.state;
  const dispatch = useDispatch();
  let history = useHistory();
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const goToCatch = () => {
    history.push('/Favorites/catch');
  };

  useEffect(() => {
    gameOver &&
      dispatch(addToCatch(pokemon))
  }, [gameOver])

  return (
    <div className="centered">
      <h1 style={{ color: `${darkMode ? "#fff" : ""}` }}>
        Congratulations on catching the Pokemon!
      </h1>
      <PokemonCard
        pokemon={pokemon}
        closer={false}
        visible={false} />
      <button onClick={goToCatch}>
        See the pokemon you caught
      </button>
    </div>
  );
};

export default GameOver;