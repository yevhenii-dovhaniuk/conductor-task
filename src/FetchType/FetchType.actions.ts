import {createAction} from 'redux-actions';

export const FETCH_API_CHANGED = 'FETCH_API_CHANGED';
export const onFetchApiChanged = createAction(FETCH_API_CHANGED);
