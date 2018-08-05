import {Action} from "redux-actions";
import {ERROR_USER_DOES_NOT_EXIST, USER_NAME_TYPED} from "./UserNameInput.actions";
import {SUGGESTIONS_RECEIVED} from "../Suggestions/Suggestions.actions";
import {USER_DETAILS_RECEIVED, VERIFY_USER_EXISTS} from "../User/User.actions";

const defaultState = {
    blockUserInput: false,
    errorNoUser: false,
    suggestionsLoading: false,
    value: ""
};

export const userName = (state = defaultState, action: Action<any>) => {
    switch (action.type) {
        case USER_NAME_TYPED:
            return {...state, value: action.payload, suggestionsLoading: true, errorNoUser: false};
        case SUGGESTIONS_RECEIVED:
            return {...state, suggestionsLoading: false};
        case VERIFY_USER_EXISTS:
            return {...state, suggestionsLoading: true, blockUserInput: true};
        case USER_DETAILS_RECEIVED:
            return {...state, suggestionsLoading: false, blockUserInput: false};
        case ERROR_USER_DOES_NOT_EXIST:
            return {...state, suggestionsLoading: false, errorNoUser: true, blockUserInput: false};
        default:
            return {...state};
    }
};
