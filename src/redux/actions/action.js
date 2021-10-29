import {
    GET_POKE,
    FILTRED_ITEM,
    GET_ABILITY,
    ADD_TO_FAV,
    REMOVE_TO_FAV
} from './action.type';

/* List all pokemons */
export const getPoke = () => dispatch => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(response => response.json())
        .then((data) => {
            data.results.forEach(pokemon => {
                dispatch(getPokeStat(pokemon))
            });
        })
}

const getPokeStat = (pokemon) => async dispatch => {
    let url = pokemon.url;
    fetch(url)
        .then(response => response.json())
        .then(data => dispatch({ type: GET_POKE, payload: data }))
}

/*Search items */

export const searchItems = (filteredPokemons) => {
    return { type: FILTRED_ITEM, payload: filteredPokemons }
}

/*Pokemon ability */

export const getAbility = (url) => dispatch => {
    fetch(url)
        .then(response => response.json())
        .then(data => dispatch({ type: GET_ABILITY, payload: data }))
}

/*Favorite action */

export const addToFav = (pokemon) => {
    return { type: ADD_TO_FAV, payload: pokemon }
}

export const removeToFav = (pokemon) => {
    return { type: REMOVE_TO_FAV, payload: pokemon }
}