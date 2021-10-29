import { GET_POKE, FILTRED_ITEM, GET_ABILITY } from "../actions/action.type";

const initialState = {
    pokemons: [],
    searchItems: null,
    pokemonAbilitys: null
};

const pokemonReducer = (state = initialState, action) => {

    switch (action.type) {

        case GET_POKE:
            return {
                ...state,
                pokemons: [
                    ...state.pokemons,
                    action.payload
                ]
            }

        case FILTRED_ITEM:
            return {
                ...state,
                searchItems:
                    action.payload
            }

        case GET_ABILITY:
            return {
                ...state,
                pokemonAbilitys:
                    action.payload
            }

        default:
            return state
    }
};

export default pokemonReducer;