import * as express from 'express';
import {Request} from "express-serve-static-core";
import * as req from "request";
import {GITHUB_API_URL} from "../config/config";

const router = express.Router();

router.get("/:typedUserName", (request: Request, response) => {
    req(`${GITHUB_API_URL}/users/${request.params.typedUserName}`, {
        headers: {
            "User-Agent": "Github-accounts-viewer"
        }
    }).pipe(response);
});


export default router;
