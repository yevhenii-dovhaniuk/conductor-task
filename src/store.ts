import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {fetchType} from "./FetchType/FetchType.reducer";
import {userName} from "./UserNameInput/UserNameInput.reducer";
import {suggestions} from "./Suggestions/Suggestions.reducer";
import {logger} from "redux-logger";
import {user} from "./User/User.reducer";
import {createBrowserHistory} from "history";
import {connectRouter, routerMiddleware} from "connected-react-router";
import {repo} from "./Repo/Repo.reducer";

export const history = createBrowserHistory();

const enhancer = compose(
    applyMiddleware(thunk, logger, routerMiddleware(history)),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

const rootReducer = combineReducers({
    fetchType,
    repo,
    suggestions,
    user,
    userName
});

export const store = createStore(
    connectRouter(history)(rootReducer),
    {},
    enhancer
);
