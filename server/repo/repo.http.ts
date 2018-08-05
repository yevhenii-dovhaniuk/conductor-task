import {Request} from 'express-serve-static-core';
import * as express from 'express';
import {authorizationHeader} from '../auth/authentication';
import * as requestPromise from 'request-promise-native';
import {GITHUB_API_URL} from '../config/config';
import {toGraphQlCompatibleModel} from './repo.model';

const router = express.Router();
const httpAuthHeader = authorizationHeader.Authorization === 'bearer ' ? {} : authorizationHeader;
const defaultOptions = {
    headers: {
        'User-Agent': 'Github-accounts-viewer',
        ...httpAuthHeader
    }
};

router.get('/:userName/repo/:repoName/data', async (request: Request, response) => {
    const data = await requestPromise(`${GITHUB_API_URL}/repos/${request.params.userName}/${request.params.repoName}`, defaultOptions).then(JSON.parse);
    const graphQLLikeModel = toGraphQlCompatibleModel(data);
    response.send(graphQLLikeModel);
});

export default router;