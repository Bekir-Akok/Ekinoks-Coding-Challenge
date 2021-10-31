import React, { useEffect, useState, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { searchItems } from '@redux/actions/action';
import { ThemeContext } from "@context/ThemeContext";
import { RiSearch2Line, RiSearchEyeFill } from 'react-icons/ri';
import './searchBar.scss';

const SearchBar = () => {

    const [search, setSearch] = useState('');
    const dispatch = useDispatch();
    const { pokemons } = useSelector(state => state.pokemonReducer);
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const filteredPokemons =
        pokemons.filter(
            (pokemon) => {
                return pokemon.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
            }
        )

    useEffect(() => {
        dispatch(searchItems(filteredPokemons))
    }, [search , pokemons])

    return (
        <div className="search-container">
            <input
                type="search"
                placeholder="Search Your Pokemon!"
                value={search}
                style={{ border: `${darkMode ? "2px solid #f5f5f5" : " 1px solid #4c4b4e"}` }}
                onChange={(e) => setSearch(e.target.value)} />
            {
                darkMode
                    ? <span>
                        <RiSearchEyeFill />
                    </span>
                    : <span>
                        <RiSearch2Line />
                    </span>
            }
        </div>
    )
}

export default SearchBar
