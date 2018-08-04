import {authToken} from "../config/token/personal-auth-token";

export const authorizationHeader = {
    'Authorization': `bearer ${authToken}`
};