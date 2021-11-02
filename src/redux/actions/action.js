import {
    GET_POKE_SUCCESS,
    GET_POKE_ERROR,
    GET_ABILITY_SUCCESS,
    GET_ABILITY_ERROR,
    FILTRED_ITEM,
    ADD_TO_FAV,
    REMOVE_TO_FAV,
    ADD_TO_CATCH,
    REMOVE_TO_CATCH
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
        .then(data =>
            dispatch({
                type: GET_POKE_SUCCESS,
                payload: data
            }))
        .catch(err =>
            dispatch({
                type: GET_POKE_ERROR,
                payload: err
            }))
}

/*Get pokemon ability */

export const getAbility = (url) => dispatch => {
    fetch(url)
        .then(response => response.json())
        .then(data =>
            dispatch({
                type: GET_ABILITY_SUCCESS,
                payload: data
            }))
        .catch(err =>
            dispatch({
                type: GET_ABILITY_ERROR,
                payload: err
            }))
}

/*Search items */

export const searchItems = (filteredPokemons) => {
    return {
        type: FILTRED_ITEM,
        payload: filteredPokemons
    }
}

/*Favorite action */

export const addToFav = (pokemon) => {
    return {
        type: ADD_TO_FAV,
        payload: pokemon
    }
}

export const removeToFav = (pokemon) => {
    return {
        type: REMOVE_TO_FAV,
        payload: pokemon
    }
}

/*Catch actions */

export const addToCatch = (pokemon) => {
    return {
        type: ADD_TO_CATCH,
        payload: pokemon
    }
}

export const removeToCatch = (pokemon) => {
    return {
        type: REMOVE_TO_CATCH,
        payload: pokemon
    }
}