import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineCatchingPokemon } from 'react-icons/md';
import { FiHeart } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import SearchBar from '@components/SearchBar';
import { ThemeContext } from "@context/ThemeContext";
import ToggleButton from '@components/ToggleButton';
import pokemon from '@assets/logo.png';
import './header.scss';

const Header = () => {

    const {favorites , catchs} = useSelector(state => state.favoriteReducer);
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className={`header-container ${darkMode ? "bg-dark-header" : ""}`}>
            <ul>
                <li>
                    <Link to="/" id="pokemon">
                        <img src={pokemon} alt="" />
                    </Link>
                </li>
                <SearchBar />
                <li >
                    <Link
                        to="/favorites/catchs"
                        className={darkMode ? "bg-dark-p" : ""}>
                        <span>
                            <MdOutlineCatchingPokemon />
                        </span>
                        {catchs.length}
                    </Link>
                    <Link
                        to="/favorites/fav"
                        className={darkMode ? "bg-dark-p" : ""}>
                        <span>
                            <FiHeart />
                        </span>
                        {favorites.length}
                    </Link>
                    <ToggleButton />
                </li>
            </ul>
        </div>
    )
}

export default Header
