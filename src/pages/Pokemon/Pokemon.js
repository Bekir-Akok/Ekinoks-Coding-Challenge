import React, { useRef, useEffect, useContext, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { MdOutlineCatchingPokemon } from 'react-icons/md';
import { changeColor, statsColor, checkCatch, checkState } from '@helpers/helper';
import { getAbility, getPoke } from '@redux/actions/action';
import { ThemeContext } from "@context/ThemeContext";
import FavButton from '@components/FavButton'
import Layout from '@layout';
import './pokemon.scss';

const Pokemon = () => {

    const types = useRef([]);
    const stats = useRef([]);
    const divBackground = useRef();
    const locations = useLocation();
    let history = useHistory();
    const dispatch = useDispatch();
    const { pokemonAbilitys, searchItems, pokemons } = useSelector(state => state.pokemonReducer);
    const { favorites, catchs } = useSelector(state => state.favoriteReducer);
    const [visible, setVisible] = useState(true);
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    const pokemon = locations.state.pokemon;

    const addToCatch = (pokemon) => {
        const isTrue = catchs.some(element => {
            return element.name === pokemon.name
        })
        isTrue
            ? goToCatch()
            : history.push(`/Game/catch/${pokemon.name}`, pokemon)
    };

    const goToCatch = () => {
        alert('This pokemon has already been added to your catchs.')
        history.push('/favorites/catchs')
    };

    const combineHandler = () => {
        changeColor(types);
        statsColor(stats);
        dispatch(getAbility(pokemon.abilities[0].ability.url));
    };

    useEffect(() => {
        combineHandler();
    }, [])

    useEffect(() => {
        checkCatch(catchs, setVisible, pokemon);
        checkCatch(favorites, setVisible, pokemon);
        checkState(catchs, pokemon, divBackground);
        checkState(favorites, pokemon, divBackground, favorites);
    }, [pokemon, favorites, catchs, visible]);

    /*Re-render pokemons*/
    useEffect(() => {
        pokemons.length !== searchItems.length
            ? dispatch(getPoke())
            : pokemons.length === 0
                ? dispatch(getPoke())
                : console.log();
    }, [])

    return (
        <Layout>
            <div className={`pokemon-container ${darkMode ? "bg-dark-pokemon" : ""}`} >
                <div
                    ref={divBackground}
                    className={`pokemon-wrapper ${darkMode ? "bg-dark-wrapper" : ""}`}>
                    <FavButton
                        pokemon={pokemon}
                        visibles={visible} />
                    <div className="pokemon-img">
                        <img src={pokemon.sprites.front_shiny} alt="" />
                    </div>
                    <div className="pokemon-stats">
                        <div className="pokemon-title">
                            <h1>{pokemon.name}</h1>
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
                        <div className="pokemon-description">
                            {
                                pokemonAbilitys &&
                                pokemonAbilitys.effect_entries.map((entries, i) => {
                                    return (
                                        entries.language.name === "en"
                                            ? (
                                                <p key={i}>{entries.effect}</p>
                                            ) : null
                                    )
                                })
                            }
                        </div>
                        <div
                            className="pokemon-fav">
                            <button
                                onClick={() => addToCatch(pokemon)}>
                                Catch The Pokemon
                                <span>
                                    <MdOutlineCatchingPokemon />
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div className="pokemon-feature">
                        <div className="pokemon-dimension">
                            <div className="pokemon-height">
                                <p>HEIGHT</p>
                                <span>{pokemon.height}</span>
                            </div>
                            <div className="pokemon-weight">
                                <p>WEIGHT</p>
                                <span>{pokemon.weight}</span>
                            </div>
                        </div>
                        <div className="pokemon-exp">
                            <p>BASE EXP</p>
                            <span>{pokemon.base_experience}</span>
                        </div>
                        <div className="pokemon-statistics">
                            <p>STATS</p>
                            <div className="pokemon-stat-flex">
                                {
                                    pokemon.stats &&
                                    pokemon.stats.map((stat, i) => {
                                        return (
                                            <div
                                                className="stats"
                                                key={i}>
                                                <span
                                                    ref={(element) => { stats.current[i] = element }}>
                                                    {stat.stat.name.toUpperCase()}
                                                </span>
                                                <p>{stat.base_stat}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Pokemon
