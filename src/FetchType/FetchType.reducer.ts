import {Action} from "redux-actions";
import {FETCH_API_CHANGED} from "./FetchType.actions";

export const fetchType = (state: any = {}, action: Action<boolean>) => {
    switch (action.type) {
        case FETCH_API_CHANGED:
            return {...state, isUsingGraphQLAPI: !state.isUsingGraphQLAPI};
        default:
            return state;
    }
};