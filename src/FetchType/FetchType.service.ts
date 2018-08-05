import {FetchType, FetchTypeState} from './FetchType.model';

export const getFetchTypeFromState = (state: FetchTypeState): FetchType => {
    const isGraphQl = state.isUsingGraphQLAPI;
    return isGraphQl ? 'graphql' : 'http';
};
