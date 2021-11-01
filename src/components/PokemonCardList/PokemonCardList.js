import React, { useContext } from 'react';
import PokemonCard from '@components/PokemonCard';
import { ThemeContext } from "@context/ThemeContext";
import './pokemonCardList.scss';

const PokemonCardList = ({ pokemons, closer, visible }) => {

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className={`card-list-container ${darkMode ? "bg-dark-card-list" : ""}`}>
            {
                pokemons &&
                pokemons.map((pokemon, i) => {
                    return (
                        <PokemonCard
                            key={i}
                            pokemon={pokemon}
                            closer={closer}
                            visible={visible} />
                    )
                })
            }
        </div>
    )
}

export default PokemonCardList
