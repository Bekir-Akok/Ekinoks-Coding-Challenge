import {
    ADD_TO_FAV,
    REMOVE_TO_FAV,
    ADD_TO_CATCH,
    REMOVE_TO_CATCH
} from "../actions/action.type";

const initialState = {
    favorites: [],
    catchs: []
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

        case ADD_TO_CATCH:
            return {
                ...state,
                catchs: [
                    ...state.catchs,
                    action.payload
                ]
            }

        case REMOVE_TO_CATCH:
            return {
                ...state,
                catchs: state.catchs.filter(pokemon =>
                    pokemon.name !== action.payload.name)
            }

        default:
            return state
    }
};

export default favoriteReducer;