import React, { useRef, useEffect, useContext } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeColor, statsColor } from '@helpers/helper';
import { getAbility, addToFav } from '@redux/actions/action';
import { MdOutlineFavoriteBorder, MdOutlineCatchingPokemon } from 'react-icons/md';
import { ThemeContext } from "@context/ThemeContext";
import Layout from '@layout';
import './pokemon.scss';

const Pokemon = () => {

    const types = useRef([]);
    const stats = useRef([]);
    const location = useLocation();
    let history = useHistory();
    const dispatch = useDispatch();
    const { pokemonAbility } = useSelector(state => state.pokemonReducer);
    const pokemon = location.state.pokemon;
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    useEffect(() => {
        changeColor(types);
        statsColor(stats)
        dispatch(getAbility(pokemon.abilities[0].ability.url))
    }, [])

    return (
        <Layout>
            <div className={`pokemon-container ${darkMode ? "bg-dark-pokemon" : ""}`} >
                <div className={`pokemon-wrapper ${darkMode ? "bg-dark-wrapper" : ""}`}>
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
                                pokemonAbility &&
                                pokemonAbility.effect_entries.map((entries, i) => {
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
                                onClick={() => history.push(`/Game/catch/${pokemon.name}`, pokemon)}>
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
