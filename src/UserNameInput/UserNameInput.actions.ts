import {createAction} from "redux-actions";
import {Dispatch} from "redux";
import {debouncedSuggestionsFetch} from "../Suggestions/Suggestions.actions";

export const USER_NAME_SUBMIT = 'USER_NAME_SUBMIT';
export const USER_NAME_TYPED = 'USER_NAME_TYPED';

export const onUserNameSubmit = createAction<string>(USER_NAME_SUBMIT);

export const onUserNameTyped = (userName: string) => async (dispatch: Dispatch<any>) => {
    dispatch(createAction<string>(USER_NAME_TYPED)(userName));

    debouncedSuggestionsFetch(dispatch, userName);
};