import * as express from "express";
import {Request} from "express-serve-static-core";
import {graphQLClient} from "../config/graphql-client";

const router = express.Router();

const query = `
    query getUserSuggestions($typedUserName: String!){
        searchResult: search(query: $typedUserName, first: 10 type: USER) {
            total_count: userCount
            items: nodes {
                    ... on User {
                        login
                    }
            }
        }
    }
`;

router.get("/:typedUserName", async (req: Request, resp) => {
    const variables: any = {typedUserName: req.params.typedUserName};
    let searchResult = null;
    try {
        const graphQLCallResult: any = await graphQLClient.request(query, variables);
        searchResult = graphQLCallResult.searchResult;
    } catch (e) {
        console.error(e);
    }
    resp.send(searchResult);
});


export default router;
