import {createAction} from "redux-actions";
import {Dispatch} from "redux";
import {debouncedSuggestionsFetch} from "../Suggestions/Suggestions.actions";
import {FetchTypeState} from "../FetchType/FetchType.model";
import {ThunkDispatch} from "redux-thunk";
import {selectUser, VERIFY_USER_EXISTS} from "../User/User.actions";
import {userExists} from "../User/User.service";
import {getFetchTypeFromState} from "../FetchType/FetchType.service";

export const USER_NAME_TYPED = "USER_NAME_TYPED";
export const ERROR_USER_DOES_NOT_EXIST = "ERROR_USER_DOES_NOT_EXIST";

export const onUserNameSubmit = () => async (
    dispatch: ThunkDispatch<any, any, any>,
    getState: () => any
) => {
    dispatch(createAction(VERIFY_USER_EXISTS)());
    const userName = getState().userName.value;
    const doesUserExist = await userExists(userName, getFetchTypeFromState(getState().fetchType));
    if (doesUserExist) {
        dispatch(selectUser(userName));
    } else {
        dispatch(createAction(ERROR_USER_DOES_NOT_EXIST)());
    }
};

export const onUserNameTyped = (userName: string) => async (
    dispatch: Dispatch<any>,
    getState: () => {fetchType: FetchTypeState}
) => {
    dispatch(createAction(USER_NAME_TYPED)(userName));
    debouncedSuggestionsFetch(dispatch, userName, getState().fetchType);
};
