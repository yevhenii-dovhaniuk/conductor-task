import {Action} from "redux-actions";
import {USER_NAME_TYPED} from "./UserNameInput.actions";

const defaultState = {
    value: ''
};

export const userName = (state = defaultState, action: Action<any>) => {
    switch (action.type) {
        case USER_NAME_TYPED:
            return {...state, value: action.payload};
        default:
            return state;
    }
};