import { ADD_TO_FAV, REMOVE_TO_FAV } from "../actions/action.type";

const initialState = {
    favorites: []
};

const favoriteReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_TO_FAV:
            return {
                ...state,
                favorites: [
                    ...state.favorites,
                    action.payload
                ]
            }

        case REMOVE_TO_FAV:
            return {
                ...state,
                favorites: state.favorites.filter(pokemon => 
                    pokemon.name !== action.payload.name)
            }

        default:
            return state
    }
};

export default favoriteReducer;