import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {fetchType} from "./FetchType/FetchType.reducer";
import {userName} from "./UserNameInput/UserNameInput.reducer";
import {suggestions} from "./Suggestions/Suggestions.reducer";
import {logger} from "redux-logger";
import {user} from "./User/User.reducer";

const enhancer = compose(
    applyMiddleware(thunk, logger),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

export const store = createStore(
    combineReducers({
        fetchType,
        suggestions,
        user,
        userName
    }),
    {},
    enhancer
);
