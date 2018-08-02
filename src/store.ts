import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';

const enhancer = compose(
    applyMiddleware(thunk),
);

export const store = createStore(combineReducers({
}), {}, enhancer);
