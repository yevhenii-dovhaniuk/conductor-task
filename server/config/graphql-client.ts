import {GraphQLClient} from 'graphql-request';
import {GITHUB_GRAPHQL_API_URL} from './config';
import {authorizationHeader} from '../auth/authentication';

export const graphQLClient = new GraphQLClient(GITHUB_GRAPHQL_API_URL, {
    cache: 'no-cache',
    credentials: 'include',
    headers: {
        'User-Agent': 'Github-accounts-viewer',
        ...authorizationHeader
    }
});