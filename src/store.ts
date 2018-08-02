import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import {fetchType} from './FetchType/FetchType.reducer';
import {userName} from "./UserNameInput/UserNameInput.reducer";
import {suggestions} from "./Suggestions/Suggestions.reducer";

const enhancer = compose(
    applyMiddleware(thunk),
);

export const store = createStore(combineReducers({
    fetchType,
    suggestions,
    userName
}), {}, enhancer);
