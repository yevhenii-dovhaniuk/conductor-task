import {ThunkDispatch} from "redux-thunk";
import {fetchUserDetails} from "./User.service";
import {getFetchTypeFromState} from "../FetchType/FetchType.service";
import {createAction} from "redux-actions";
import {push, RouterState} from "connected-react-router";
import {UserState} from "./User.model";
import {AnyAction} from "redux";

export const VERIFY_USER_EXISTS = "VERIFY_USER_EXISTS";
export const USER_DETAILS_REQUESTED = "USER_DETAILS_REQUESTED";
export const USER_DETAILS_RECEIVED = "USER_DETAILS_RECEIVED";

export const selectUser = (userName: string) => async (
    dispatch: ThunkDispatch<any, any, any>
) => {
    await dispatch(getUserDetails(userName));
    dispatch(push(`/user/${userName}`));
};

export const getUserDetails = (userName: string) => async (dispatch: ThunkDispatch<any, any, any>, getState: () => any) => {
    dispatch(createAction(USER_DETAILS_REQUESTED)());
    const userDetails = await fetchUserDetails(
        userName,
        getFetchTypeFromState(getState().fetchType)
    );
    dispatch(createAction(USER_DETAILS_RECEIVED)(userDetails));
};

export const selectRepo = (repoName: string) => (dispatch: ThunkDispatch<UserState, never, AnyAction>, getState: () => {router: RouterState}) => {
    const currentPath = getState().router.location.pathname;
    dispatch(push(`${currentPath}/repo/${repoName}`));
};
