import * as express from "express";
import {Request} from "express-serve-static-core";
import {graphQLClient} from "../config/graphql-client";

const router = express.Router();

const query = `
    query getUser($typedUserName: String!){
        user(login: $typedUserName){
            login
        }
    }
`;

router.get("/:typedUserName/exists", async (req: Request, resp) => {
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


export default router;
