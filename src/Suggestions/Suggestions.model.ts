export interface Suggestion {
    login: string;
    html_url: string;
}

export interface SuggestionsProps {
    suggestions: Suggestion[];
    suggestionsLoading: boolean;
    total: number;

    onSuggestionSelected: (userName: string) => void;
}
