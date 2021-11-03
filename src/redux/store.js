import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { loadState, saveState } from './localStorage';
import throttle from 'lodash.throttle';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';


const persistedState = loadState();
const middleware = composeWithDevTools(applyMiddleware(thunk));
const store = createStore(rootReducer, persistedState, middleware);

store.subscribe(throttle(() => {
    saveState({
        favoriteReducer: store.getState().favoriteReducer
    });
}, 1000));

export default store;