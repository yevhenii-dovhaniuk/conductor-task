import {FetchType} from '../FetchType/FetchType.model';
import {User} from './User.model';

export const userExists = (userName: string, fetchTypePrefix: FetchType): Promise<any> => {
    return fetch(`/api/${fetchTypePrefix}/user/${userName}/exists`).then(r => r.json());
};

export const fetchUserDetails = (userName: string, fetchTypePrefix: FetchType): Promise<User> => {
    return fetch(`/api/${fetchTypePrefix}/user/${userName}`).then(r => r.json());
};
