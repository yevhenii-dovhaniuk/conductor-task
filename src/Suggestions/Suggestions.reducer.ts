import {Action} from "redux-actions";
import {SUGGESTIONS_RECEIVED} from "./Suggestions.actions";

const defaultSuggestionsState = {
    total: 0,
    values: []
};

export const suggestions = (state = defaultSuggestionsState, action: Action<any>) => {
    switch (action.type) {
        case SUGGESTIONS_RECEIVED:
            return {...state, values: action.payload.items, total: action.payload.total_count};
        default:
            return {...state};
    }
};