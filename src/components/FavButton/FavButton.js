import React from 'react';
import { FiHeart } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { addToFav } from '@redux/actions/action';
import { useSelector, useDispatch } from 'react-redux';

const FavButton = ({ pokemon, visibles }) => {

    let history = useHistory();
    const dispatch = useDispatch();
    const { favorites } = useSelector(state => state.favoriteReducer);

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
        history.push('/favorites/fav')
    }

    return (
        <div
            className="fav-btn"
            onClick={() => addToFavorites(pokemon)}>
            {
                visibles &&
                <FiHeart />
            }
        </div>
    )
}

export default FavButton
