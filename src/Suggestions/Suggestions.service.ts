import {Suggestion} from './Suggestions.model';
import {FetchType} from '../FetchType/FetchType.model';

export const fetchSuggestions = (
    typedUserName: string = '',
    fetchTypePrefix: FetchType
): Promise<Suggestion[]> =>
    fetch(`/api/${fetchTypePrefix}/suggestions/${typedUserName}`)
        .then(d => d.json())
        .catch(e => {
            console.error(e);
            return Promise.resolve([]);
        });
