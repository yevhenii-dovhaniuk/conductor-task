import {debounce} from "lodash";
import {createAction} from "redux-actions";
import {fetchSuggestions} from "./Suggestions.service";
import {Dispatch} from "redux";
import {isEmpty, trim} from 'lodash';

export const SUGGESTIONS_RECEIVED = 'SUGGESTIONS_RECEIVED';
export const SUGGESTION_SELECTED = 'SUGGESTION_SELECTED';

export const onSuggestionSelected = (userName: string) => (dispatch: Dispatch) => {
    dispatch(createAction(SUGGESTION_SELECTED)(userName));
};

export const debouncedSuggestionsFetch = debounce(async (dispatch, userName) => {
    if (isEmpty(trim(userName))) {
        dispatch(createAction(SUGGESTIONS_RECEIVED)({total_count: 0, items: []}));
    } else {
        dispatch(createAction(SUGGESTIONS_RECEIVED)(await fetchSuggestions(userName)));
    }
}, 1000);