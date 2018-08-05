import {RouteComponentProps} from 'react-router';

export interface User {
    [key: string]: any;
}

export interface UserState {
    data?: User;
}

export interface UserProps extends RouteComponentProps<RoutePathParams> {
    data?: User;
    refetchUserDetails: (userName: string) => void;
    selectRepo: (repoName: string) => void;
}

interface RoutePathParams {
    userName: string;
}

export interface RepositoryInfo {
    name: string;
    isFork?: boolean;
    id: string;
    url: string;
    stargazers: {
        totalCount: number;
    };
}
