import * as express from 'express';
import {Request} from 'express-serve-static-core';
import {graphQLClient} from '../config/graphql-client';

const router = express.Router();

const query = `
    query getRepoData($userName: String!, $repoName: String!) { 
      user(login: $userName) {
        repository(name: $repoName) {
          name
          isFork
          primaryLanguage {
            name
          }
          stargazers {
            totalCount
          }
          owner {
            login
          }
          description
          createdAt
          updatedAt
          pushedAt
          url
          sshUrl
        }
      }
    }
`;

router.get('/:userName/repo/:repoName/data', async (req: Request, resp) => {
    const variables: any = {userName: req.params.userName, repoName: req.params.repoName};
    let repoData = null;
    try {
        const graphQLCallResult: any = await graphQLClient.request(query, variables);
        repoData = graphQLCallResult.user.repository;
    } catch (e) {
        console.info(e);
    }
    resp.send(repoData);
});


export default router;
