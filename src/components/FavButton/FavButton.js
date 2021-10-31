import React from 'react';
import { FiHeart } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { addToFav } from '@redux/actions/action';
import { useSelector, useDispatch } from 'react-redux';

const FavButton = ({ pokemon, visible }) => {

    let history = useHistory();
    const { favorites } = useSelector(state => state.favoriteReducer);
    const dispatch = useDispatch();

    const addToFavorites = (pokemon) => {
        favorites.length === 0
            ? dispatch(addToFav(pokemon))
            : checkPokemon(pokemon)
    }

    const checkPokemon = (pokemon) => {
        const isTrue = favorites.some(element => {
            return element.id === pokemon.id
        })
        isTrue
            ? goToFavorite()
            : dispatch(addToFav(pokemon))
    }

    const goToFavorite = () => {
        alert('This pokemon has already been added to your favorites.');
        history.push('/favorites')
    }

    return (
        <>
            {
                visible &&
                <div
                    onClick={() => addToFavorites(pokemon)}
                    className="fav-btn">
                    <FiHeart />
                </div>
            }
        </>
    )
}

export default FavButton
