import {UserState} from "./User.model";
import {Action} from "redux-actions";
import {USER_DETAILS_RECEIVED} from "./User.actions";

const defaultUserState: UserState = {
    data: undefined
};

export const user = (state = defaultUserState, action: Action<any>) => {
    switch (action.type) {
        case USER_DETAILS_RECEIVED:
            return {...state, data: action.payload};
        default:
            return {...state};
    }
};