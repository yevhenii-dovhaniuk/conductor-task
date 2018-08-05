import {fetchRepoData, REPO_DATA_RECEIVED, REPO_DATA_REQUESTED} from '../Repo.actions';
import {createAction} from 'redux-actions';

describe('Repo actions test', () => {
    test('should dispatch DATA_REQUESTED action', () => {
        const mockDispatch = jest.fn();
        const mockGetState = () => ({
            fetchType: {
                isUsingGraphQLAPI: false
            },
            router: {
                location: {
                    pathName: 'test-path'
                }
            }
        });
        fetchRepoData()(mockDispatch, mockGetState);
        expect(mockDispatch).toHaveBeenCalledWith(createAction(REPO_DATA_REQUESTED)());
    });
});
