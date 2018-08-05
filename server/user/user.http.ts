import {Request} from 'express-serve-static-core';
import * as express from 'express';
import * as requestPromise from 'request-promise-native';
import {GITHUB_API_URL} from '../config/config';
import {toGraphQLCompatibleModel, toGraphQlCompatibleRepositories, toGraphQLCompatibleStars} from './user.model';
import {authorizationHeader} from '../auth/authentication';

const router = express.Router();
const httpAuthHeader = authorizationHeader.Authorization === 'bearer ' ? {} : authorizationHeader;
const defaultOptions = {
    headers: {
        'User-Agent': 'Github-accounts-viewer',
        ...httpAuthHeader
    }
};

router.get('/:typedUserName/exists', async (request: Request, response) => {
    try {
        await requestPromise(`${GITHUB_API_URL}/users/${request.params.typedUserName}`, defaultOptions);
        response.send(true);
    } catch (e) {
        response.send(false);
    }
});

router.get('/:typedUserName', async (request: Request, response) => {
    const [user, repositories, stars] = await Promise.all([
            requestPromise(`${GITHUB_API_URL}/users/${request.params.typedUserName}`, defaultOptions).then(JSON.parse),
            requestPromise(`${GITHUB_API_URL}/users/${request.params.typedUserName}/repos`, defaultOptions).then(JSON.parse),
            requestPromise(`${GITHUB_API_URL}/users/${request.params.typedUserName}/starred`, defaultOptions).then(JSON.parse)
        ]
    );
    const userInfo = {
        ...user,
        repositories: toGraphQlCompatibleRepositories(repositories),
        starredRepositories: toGraphQLCompatibleStars(stars)
    };
    const graphQLCompatible = toGraphQLCompatibleModel(userInfo);
    response.send(graphQLCompatible);
});

export default router;