import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PokemonCardList from '@components/PokemonCardList';
import Layout from '@layout';
import { getPoke } from '@redux/actions/action';

const Home = () => {

    const { pokemons, searchItems } = useSelector(state => state.pokemonReducer);
    const dispatch = useDispatch();

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
            <PokemonCardList
                pokemons={searchItems}
                closer={false}
                visible={true} />
        </Layout>
    )
}

export default Home
