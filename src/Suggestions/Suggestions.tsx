import React from "react";
import {map, take, partial} from "lodash";
import linkIcon from "./suggestions-link-icon.svg";
import loadingIcom from "./suggestions-loading.svg";
import "./Suggestions.pcss";
import {Suggestion, SuggestionsProps} from "./Suggestions.model";

export class Suggestions extends React.PureComponent<SuggestionsProps, any> {
    private renderHeading(length: number) {
        if (this.props.suggestionsLoading) {
            return <img src={loadingIcom} className="suggestions__loading" alt="loading..." />;
        }
        switch (length) {
            case 0:
                return null;
            case 1:
                return <div>User matched:</div>;
            default:
                return <div>First {length} users matched:</div>;
        }
    }

    private renderSuggestion(suggestion: Suggestion) {
        return (
            <div key={suggestion.login} className="suggestion">
                <span
                    className="suggestion__login"
                    title="click for details"
                    onClick={partial(this.onSuggestionSelected, suggestion.login)}
                >
                    {suggestion.login}
                </span>
                <a href={suggestion.html_url} target="_blank" title="click to open public profile">
                    <img src={linkIcon} className="suggestion__icon" alt="suggestion icon" />
                </a>
            </div>
        );
    }

    private onSuggestionSelected = (userLogin: string) => {
        this.props.onSuggestionSelected(userLogin);
    };

    public render() {
        const firstTenEntries = take(this.props.suggestions, 10);
        return (
            <div className="suggestions">
                {this.renderHeading(firstTenEntries.length)}
                {map(firstTenEntries, suggestion => this.renderSuggestion(suggestion))}
            </div>
        );
    }
}
