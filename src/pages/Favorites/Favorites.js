import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { CgPokemon } from 'react-icons/cg';
import PokemonCardList from '../../components/PokemonCardList'
import Layout from '../../layout/';
import { ThemeContext } from "../../context/ThemeContext";
import './favorites.scss';

const Favorites = () => {

    const favorite = useSelector(state => state.favoriteReducer.favorites);
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <Layout>
            <div
                style={{ color: `${darkMode ? "#fff" : ""}` }}
                className="title" >
                <h1>
                    FAVORITES
                </h1>
                <span>
                    <CgPokemon />
                </span>
            </div>
            {
                favorite.length >= 1
                    ? <PokemonCardList pokemons={favorite} closer={true} />
                    : <h4
                        style={{ color: `${darkMode ? "#fff" : ""}` }}
                        id="h4">
                        Your Favorites are empty..
                    </h4>
            }
        </Layout>
    )
}

export default Favorites
