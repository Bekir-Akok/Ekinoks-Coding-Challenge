import { combineReducers } from "redux";
import pokemonReducer from "./pokemonReducer";
import favoriteReducer from "./favoriteReducer";

const rootReducer = combineReducers({
    pokemonReducer ,
    favoriteReducer
})

export default rootReducer 