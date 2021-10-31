import React, { useRef, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { changeColor } from '@helpers/helper';
import { ThemeContext } from "@context/ThemeContext";
import Closer from '../Closer';
import './pokemonCard.scss';
import FavButton from '../FavButton/FavButton';

const PokemonCard = ({ pokemon, closer, visible }) => {

    let history = useHistory();
    const types = useRef([]);
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    useEffect(() => {
        changeColor(types)
    }, [pokemon])

    return (
        <div style={{ position: 'relative' }}>
            <Closer
                pokemon={pokemon}
                closer={closer} />
            <FavButton
                pokemon={pokemon}
                visible={visible} />
            <div
                className={`card-container ${darkMode ? "bg-dark-card" : ""}`}
                onClick={() => history.push({
                    pathname: `/pokemon/${pokemon.name}`,
                    state: { pokemon }
                })}>
                <div className="card-img">
                    <img
                        src={pokemon.sprites.front_shiny}
                        alt="" />
                </div>
                <h4>{pokemon.name.toUpperCase()}</h4>
                <div className="cart-types">
                    {
                        pokemon.types.map((type, i) => {
                            return (
                                <p key={i} ref={(element) => { types.current[i] = element }}>{type.type.name.toUpperCase()}</p>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default PokemonCard
