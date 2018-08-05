import {map} from 'lodash';

export const toGraphQLCompatibleModel = (httpModel: UserHttpModel) => {
    return {
        ...httpModel,
        avatarUrl: httpModel.avatar_url,
        createdAt: httpModel.created_at,
        followers: {
            totalCount: httpModel.followers
        },
        following: {
            totalCount: httpModel.following
        },
        isHireable: httpModel.hireable,
        updatedAt: httpModel.updated_at
    };
};

export const toGraphQlCompatibleRepositories = (httpRepos: any) => {
    return {
        nodes: map(httpRepos, repo => ({
            ...repo,
            isFork: repo.fork,
            stargazers: {
                totalCount: repo.stargazers_count
            }
        })),
        totalCount: httpRepos.length
    }
};

export const toGraphQLCompatibleStars = (httpRepos: any) => {
    return {
        nodes: map(httpRepos, repo => ({name: repo.name, url: repo.html_url})),
        totalCount: httpRepos.length
    }
};

export interface CommonUserModel {
    login: string;
    name: string;
    company?: string;
    location?: string;
    bio?: string;
}

export interface UserHttpModel {
    avatar_url: string;
    hireable: boolean;
    followers: number;
    following: number;
    created_at: string;
    updated_at: string;
    repositories: any;
}


export interface UserGraphQLModel {
    avatarUrl: string;
    isHireable: boolean;
    createdAt: string;
    updatedAt: string;
}