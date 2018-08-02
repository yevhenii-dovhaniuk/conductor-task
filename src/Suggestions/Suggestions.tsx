import React from 'react';
import {map, take} from 'lodash';
import linkIcon from './suggestions-link-icon.svg';
import './Suggestions.pcss';

export interface SuggestionsProps {
    suggestions: Array<{ login: string; html_url: string }>;
    total: number;
}

export class Suggestions extends React.PureComponent<SuggestionsProps> {
    private renderHeading(length: number) {
        if (length === 1) {
            return <div>User matched:</div>
        } else {
            return <div>First {length} users of total {this.props.total}</div>;
        }
    }
    public render() {
        if (!this.props.suggestions || !this.props.suggestions.length) {
            return null;
        }
        const firstTenEntries = take(this.props.suggestions, 10);
        return (<div className="suggestions">
            {this.renderHeading(firstTenEntries.length)}
            {
                map(firstTenEntries, suggestion => (
                    <div key={suggestion.login} className="suggestion">
                        <span className="suggestion__login" title="click for details">{suggestion.login}</span>
                        <a href={suggestion.html_url} target="_blank" title="click to open public profile">
                            <img src={linkIcon} className="suggestion__icon" alt="suggestion icon"/>
                        </a>
                    </div>
                ))
            }
        </div>)
    }
}