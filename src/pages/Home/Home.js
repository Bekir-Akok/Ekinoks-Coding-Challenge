import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PokemonCardList from '../../components/PokemonCardList';
import Layout from '../../layout';
import { getPoke } from '../../redux/actions/action';

const Home = () => {

    const pokemons = useSelector(state => state.pokemonReducer.searchItems);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPoke())
    }, [])

    return (
        <Layout>
            <PokemonCardList pokemons={pokemons} closer={false}/>
        </Layout>
    )
}

export default Home
