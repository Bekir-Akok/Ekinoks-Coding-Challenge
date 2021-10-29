import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineCatchingPokemon } from 'react-icons/md';
import { useSelector } from 'react-redux';
import SearchBar from '../SearchBar/SearchBar';
import { ThemeContext } from "../../context/ThemeContext";
import ToggleButton from '../ToggleButton';
import pokemon from '../../assets/logo.png'
import './header.scss';

const Header = () => {

    const favorite = useSelector(state => state.favoriteReducer.favorites);
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
                        to="/favorites"
                        className={darkMode ? "bg-dark-p" : ""}>
                        <span>
                            <MdOutlineCatchingPokemon />
                        </span>
                        {favorite.length}
                    </Link>
                    <ToggleButton />
                </li>
            </ul>
        </div>
    )
}

export default Header
