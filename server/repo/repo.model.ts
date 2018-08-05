export const toGraphQlCompatibleModel = (httpModel: any) => {
    return {
        ...httpModel,
        createdAt: httpModel.created_at,
        isFork: httpModel.fork,
        primaryLanguage: {
            name: httpModel.language
        },
        pushedAt: httpModel.pushed_at,
        sshUrl: httpModel.ssh_url,
        stargazers: {
            totalCount: httpModel.stargazers_count
        },
        updatedAt: httpModel.updated_at,
        url: httpModel.html_url,
    }
};