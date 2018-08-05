import {Action} from 'redux-actions';
import {REPO_DATA_RECEIVED, REPO_DATA_REQUESTED} from './Repo.actions';

const defaultState = {
    data: {},
    loading: false
};

export const repo = (state = defaultState, action: Action<any>) => {
    switch (action.type) {
        case REPO_DATA_REQUESTED:
            return {...state, loading: true};
        case REPO_DATA_RECEIVED:
            return {...state, loading: false, data: action.payload};
        default:
            return state;
    }
};
