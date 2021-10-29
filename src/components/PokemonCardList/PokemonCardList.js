import React, { useContext } from 'react'
import PokemonCard from '../PokemonCard';
import { ThemeContext } from "../../context/ThemeContext";
import './pokemonCardList.scss'

const PokemonCardList = ({ pokemons, closer }) => {

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className={`card-list-container ${darkMode ? "bg-dark-card-list" : ""}`}>
            {
                pokemons &&
                pokemons.map((pokemon, i) => {
                    return (
                        <PokemonCard pokemon={pokemon} key={i} closer={closer} />
                    )
                })
            }
        </div>
    )
}

export default PokemonCardList
