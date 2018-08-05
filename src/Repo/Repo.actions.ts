import {ThunkDispatch} from 'redux-thunk';
import {AnyAction} from 'redux';
import {createAction} from 'redux-actions';
import {fetchRepositoryData} from './Repo.service';
import {getFetchTypeFromState} from '../FetchType/FetchType.service';

export const REPO_DATA_REQUESTED = 'REPO_DATA_REQUESTED';
export const REPO_DATA_RECEIVED = 'REPO_DATA_RECEIVED';

export const fetchRepoData = () => async (
    dispatch: ThunkDispatch<any, any, AnyAction>,
    getState: () => any
) => {
    dispatch(createAction(REPO_DATA_REQUESTED)());
    const currentPath = getState().router.location.pathname;
    const fetchType = getFetchTypeFromState(getState().fetchType);
    const repoData = await fetchRepositoryData(currentPath, fetchType);
    dispatch(createAction(REPO_DATA_RECEIVED)(repoData));
};
