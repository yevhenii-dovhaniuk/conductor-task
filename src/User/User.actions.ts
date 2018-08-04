import {ThunkDispatch} from "redux-thunk";
import {fetchUserDetails} from "./User.service";
import {getFetchTypeFromState} from "../FetchType/FetchType.service";
import {createAction} from "redux-actions";

export const VERIFY_USER_EXISTS = "VERIFY_USER_EXISTS";
export const USER_DETAILS_REQUESTED = "USER_DETAILS_REQUESTED";
export const USER_DETAILS_RECEIVED = "USER_DETAILS_RECEIVED";

export const selectUser = (userName: string) => async (
    dispatch: ThunkDispatch<any, any, any>,
    getState: () => any
) => {
    dispatch(createAction(USER_DETAILS_REQUESTED)());
    const userDetails = await fetchUserDetails(
        userName,
        getFetchTypeFromState(getState().fetchType)
    );
    dispatch(createAction(USER_DETAILS_RECEIVED)(userDetails));
    dispatch(navigateToUser(userName));
};

export const navigateToUser = (userName: string) => () => {
    // todo replace with history api call
    window.location.href = `/user/${userName}`;
};
