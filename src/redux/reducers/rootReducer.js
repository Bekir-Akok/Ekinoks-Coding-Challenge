import { combineReducers } from "redux";
import pokemonReducer from "./pokemonReducer";
import favoriteReducer from "./favoriteReducer";

const rootReducer = combineReducers({
    favoriteReducer,
    pokemonReducer
})

export default rootReducer