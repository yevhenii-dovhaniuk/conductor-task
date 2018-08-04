import {debounce} from "lodash";
import {createAction} from "redux-actions";
import {fetchSuggestions} from "./Suggestions.service";
import {isEmpty, trim} from "lodash";
import {getFetchTypeFromState} from "../FetchType/FetchType.service";
import {selectUser} from "../User/User.actions";
import {ThunkDispatch} from "redux-thunk";

export const SUGGESTIONS_RECEIVED = "SUGGESTIONS_RECEIVED";

export const onSuggestionSelected = (userName: string) => (
    dispatch: ThunkDispatch<any, any, any>
) => {
    dispatch(selectUser(userName));
};

export const debouncedSuggestionsFetch = debounce(async (dispatch, userName, state) => {
    if (isEmpty(trim(userName))) {
        dispatch(createAction(SUGGESTIONS_RECEIVED)({total_count: 0, items: []}));
    } else {
        dispatch(
            createAction(SUGGESTIONS_RECEIVED)(
                await fetchSuggestions(userName, getFetchTypeFromState(state))
            )
        );
    }
}, 1000);
