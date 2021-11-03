import React, { useContext, useState, useEffect } from 'react';
import PokemonCard from '@components/PokemonCard';
import { ThemeContext } from "@context/ThemeContext";
import Pagination from '@components/Pagination';
import './pokemonCardList.scss';

const PokemonCardList = ({ pokemons, closer, visible }) => {

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    /*Pagination*/
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const [itemsPerPage] = useState(20);

    /*Pagination*/
    useEffect(() => {
        if (pokemons) {
            const endOffset = itemOffset + itemsPerPage;
            setCurrentItems(pokemons.slice(itemOffset, endOffset));
            setPageCount(Math.ceil(pokemons.length / itemsPerPage));
        }
    }, [itemOffset, itemsPerPage, pokemons]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % pokemons.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            <div className={`card-list-container ${darkMode ? "bg-dark-card-list" : ""}`}>
                {
                    currentItems &&
                    currentItems.map((pokemon, i) => {
                        return (
                            <PokemonCard
                                key={pokemon.name}
                                pokemon={pokemon}
                                closer={closer}
                                visible={visible} />
                        )
                    })
                }
            </div>
            <Pagination
                handlePageClick={handlePageClick}
                pageCount={pageCount} />
        </>
    )
}

export default PokemonCardList
