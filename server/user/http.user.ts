import {Request} from "express-serve-static-core";
import * as req from "request";
import * as express from "express";
import * as requestPromise from 'request-promise-native';
import {GITHUB_API_URL} from "../config/config";

const router = express.Router();

router.get("/:typedUserName/exists", async (request: Request, response) => {
    try {
        await requestPromise(`${GITHUB_API_URL}/users/${request.params.typedUserName}`, {
            headers: {
                "User-Agent": "Github-accounts-viewer"
            }
        });
        response.send(true);
    } catch (e) {
        response.send(false);
    }
});

router.get("/:typedUserName", (request: Request, response) => {
    req(`${GITHUB_API_URL}/users/${request.params.typedUserName}`, {
        headers: {
            "User-Agent": "Github-accounts-viewer"
        }
    }).pipe(response);
});

export default router;