import React, { useContext} from 'react';
import { useSelector } from 'react-redux';
import { CgPokemon } from 'react-icons/cg';
import PokemonCardList from '@components/PokemonCardList'
import Layout from '@layout';
import { ThemeContext } from "@context/ThemeContext";
import { useParams } from 'react-router-dom';
import './favorites.scss';

const Favorites = () => {

    const params = useParams();
    const { favorites, catchs } = useSelector(state => state.favoriteReducer);
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <Layout>
            {
                params &&
                    params.name === "fav"
                    ? <>
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
                            favorites.length >= 1
                                ? <PokemonCardList
                                    pokemons={favorites}
                                    closer={true}
                                    visible={false} />
                                : <h4
                                    style={{ color: `${darkMode ? "#fff" : ""}` }}
                                    id="h4">
                                    Your Favorites are empty..
                                </h4>
                        }
                    </>
                    : <>
                        <div
                            style={{ color: `${darkMode ? "#fff" : ""}` }}
                            className="title" >
                            <h1>
                                CATCHS
                            </h1>
                            <span>
                                <CgPokemon />
                            </span>
                        </div>
                        {
                            catchs.length >= 1
                                ? <PokemonCardList
                                    pokemons={catchs}
                                    closer={true}
                                    visible={false} />
                                : <h4
                                    style={{ color: `${darkMode ? "#fff" : ""}` }}
                                    id="h4">
                                    Your Catchs are empty..
                                </h4>
                        }
                    </>
            }
        </Layout>
    )
}

export default Favorites
