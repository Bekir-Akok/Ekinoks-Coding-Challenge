import {
    GET_POKE_SUCCESS,
    GET_POKE_ERROR,
    FILTRED_ITEM,
    GET_ABILITY_SUCCESS,
    GET_ABILITY_ERROR
} from "../actions/action.type";

const initialState = {
    pokemons: [],
    pokemonMessage: null,
    searchItems: [],
    pokemonAbilitys: null,
    abilitysMessage: null
};

const pokemonReducer = (state = initialState, action) => {

    switch (action.type) {

        case GET_POKE_SUCCESS:
            return {
                ...state,
                pokemons: [
                    ...state.pokemons,
                    action.payload,
                ]
            }

        case GET_POKE_ERROR:
            return {
                ...state,
                pokemonMessage: action.payload
            }

        case FILTRED_ITEM:
            return {
                ...state,
                searchItems: action.payload
            }

        case GET_ABILITY_SUCCESS:
            return {
                ...state,
                pokemonAbilitys:
                    action.payload
            }

        case GET_ABILITY_ERROR:
            return {
                ...state,
                abilitysMessage:
                    action.payload
            }

        default:
            return state
    }
};

export default pokemonReducer;