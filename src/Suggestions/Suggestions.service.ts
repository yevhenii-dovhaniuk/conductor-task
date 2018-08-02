export const fetchSuggestions = (query: string = '') => fetch(`/api/suggestions?q=${query}`)
    .then(d => d.json())