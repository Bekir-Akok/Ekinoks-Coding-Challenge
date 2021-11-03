import React, { useRef, useEffect, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { changeColor, checkCatch, checkState } from '@helpers/helper';
import { ThemeContext } from "@context/ThemeContext";
import { removeToFav } from '@redux/actions/action';
import Closer from '@components/Closer';
import FavButton from '@components/FavButton';
import './pokemonCard.scss';

const PokemonCard = ({ pokemon, closer, visible }) => {

    let history = useHistory();
    const types = useRef([]);
    const divBackground = useRef([]);
    const dispatch = useDispatch()
    const [visibles, setVisibles] = useState(visible);
    const { favorites, catchs } = useSelector(state => state.favoriteReducer);
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const comporeList = () => {
        favorites &&
            favorites.forEach(pokemon => {
                catchs.forEach(catches => {
                    catches.name === pokemon.name
                        ? dispatch(removeToFav(pokemon))
                        : console.log();
                })
            })
    }

    useEffect(() => {
        checkCatch(catchs, setVisibles, pokemon);
        checkCatch(favorites, setVisibles, pokemon);
        comporeList();
        checkState(catchs, pokemon, divBackground);
        checkState(favorites, pokemon, divBackground, favorites);
    }, [pokemon, favorites, catchs, visible])

    useEffect(() => {
        changeColor(types);
    }, [pokemon]);

    return (
        <div
            style={{ position: 'relative' }}>
            <Closer
                pokemon={pokemon}
                closer={closer} />
            <FavButton
                pokemon={pokemon}
                visibles={visibles} />
            <div
                ref={divBackground}
                /* ref={(element) => { types.current[i] = element }}  */
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
                                <p
                                    key={i}
                                    ref={(element) => { types.current[i] = element }}>
                                    {type.type.name.toUpperCase()}
                                </p>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default PokemonCard
