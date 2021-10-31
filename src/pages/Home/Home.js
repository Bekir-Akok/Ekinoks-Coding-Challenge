import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PokemonCardList from '@components/PokemonCardList';
import Layout from '@layout';
import { getPoke } from '@redux/actions/action';
import Pagination from '@components/Pagination';

const Home = () => {

    const { pokemons, searchItems } = useSelector(state => state.pokemonReducer);
    const dispatch = useDispatch();
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const [itemsPerPage] = useState(20);

    useEffect(() => {
        if (pokemons.length !== searchItems.length
            || pokemons.length === 0) {
            dispatch(getPoke())
        }
    }, [])

    useEffect(() => {
        if (searchItems) {
            const endOffset = itemOffset + itemsPerPage;
            setCurrentItems(searchItems.slice(itemOffset, endOffset));
            setPageCount(Math.ceil(searchItems.length / itemsPerPage));
        }
    }, [itemOffset, itemsPerPage, searchItems]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % searchItems.length;
        setItemOffset(newOffset);
    };

    return (
        <Layout>
            <PokemonCardList
                pokemons={currentItems}
                closer={false}
                visible={true} />
            <Pagination
                handlePageClick={handlePageClick}
                pageCount={pageCount} />
        </Layout>
    )
}

export default Home
