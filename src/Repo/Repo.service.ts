export const fetchRepositoryData = (currentPath: string, fetchType: string) => {
    return fetch(`/api/${fetchType}/${currentPath}/data`).then(d => d.json());
};
