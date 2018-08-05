import * as express from 'express';
import {Request} from 'express-serve-static-core';
import {graphQLClient} from '../config/graphql-client';

const router = express.Router();

const query = ``;

router.get('/:typedUserName', async (req: Request, resp) => {
    const variables: any = {};
    resp.send(await graphQLClient.request(query, variables));
});


export default router;
