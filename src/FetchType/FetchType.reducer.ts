import {Action} from "redux-actions";
import {FETCH_API_CHANGED} from "./FetchType.actions";
import {FetchTypeState} from "./FetchType.model";

const defaultFetchTypeState: FetchTypeState = {
    isUsingGraphQLAPI: false
};

export const fetchType = (state = defaultFetchTypeState, action: Action<boolean>) => {
    switch (action.type) {
        case FETCH_API_CHANGED:
            return {...state, isUsingGraphQLAPI: !state.isUsingGraphQLAPI};
        default:
            return state;
    }
};
