import {repo} from '../Repo.reducer';

describe('Repo reducer test', () => {
    test('should return the same value for multiple calls with the same args', () => {
        const initialState = {
            data: {},
            loading: false
        };
        const firstCall = repo(initialState, {type: 'NONE'});
        const secondCall = repo(initialState, {type: 'NONE'});
        const thirdCall = repo(initialState, {type: 'NONE'});

        expect(initialState).toEqual(firstCall);
        expect(firstCall).toEqual(secondCall);
        expect(secondCall).toEqual(thirdCall);
    });
});
