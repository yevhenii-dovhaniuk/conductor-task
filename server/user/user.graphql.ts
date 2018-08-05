import * as express from 'express';
import {Request} from 'express-serve-static-core';
import {graphQLClient} from '../config/graphql-client';

const router = express.Router();

const query = `
    query getUser($typedUserName: String!){
        user(login: $typedUserName){
            login
        }
    }
`;

const userDetailsQuery = `
   query getUserDetails($typedUserName: String!){
    user(login: $typedUserName) {
        login
        id
        avatarUrl
        url
        isSiteAdmin
        name
        company
        location
        email
        isHireable
        bio
        createdAt
        updatedAt
        following {
            totalCount
        }
        followers {
            totalCount
        }
        repositories(first: 30) {
            totalCount
            nodes {
                name
                isFork
                description
                stargazers {
                  totalCount
                }
            }
        }
        starredRepositories(first: 10) {
            totalCount
            nodes {
                name
                url
            }
        }
    }
   }
`;

router.get('/:typedUserName/exists', async (req: Request, resp) => {
    const variables: any = {typedUserName: req.params.typedUserName};
    let doesUserExist = null;
    try {
        const graphQLCallResult: any = await graphQLClient.request(query, variables);
        doesUserExist = graphQLCallResult.user && graphQLCallResult.user.login;
    } catch (e) {
        console.info(e);
    }
    resp.send(Boolean(doesUserExist));
});

router.get('/:typedUserName', async (req: Request, resp) => {
    const variables: any = {typedUserName: req.params.typedUserName};
    let userRequest: any;
    try {
        userRequest = await graphQLClient.request(userDetailsQuery, variables);
    } catch (e) {
        console.info(e);
    }
    resp.send(userRequest.user);
});


export default router;
