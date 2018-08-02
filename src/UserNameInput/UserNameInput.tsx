import React, {ChangeEvent} from 'react';
import {map} from 'lodash';
import './UserNameInput.pcss';
import {Suggestions} from "../Suggestions/Suggestions";
import {SuggestionsContainer} from "../Suggestions/Suggestions.container";

export interface UserInputProps {
    value: string;
    suggestions: string[];
    onUserNameTyped: (value: string) => void;
    onUserNameSubmit: (userName: string) => void;
}

export class UserNameInput extends React.PureComponent<UserInputProps> {
    private handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.props.onUserNameTyped(e.target.value);
    };

    private handleUserNameSelect = () => {
        this.props.onUserNameSubmit(this.props.value);
    };

    private renderSuggestions() {
        return map(this.props.suggestions, suggestion => <p>{(suggestion as any).login}</p>)
    }

    public render() {
        return (
            <div className="user-name-input">
                <div className="user-name-input__input-fields">
                    <label htmlFor="user-name" className="user-name-input__label">User name</label>
                    <input
                        type="text"
                        id="user-name"
                        name="user-name"
                        placeholder="type here"
                        autoFocus={true}
                        value={this.props.value}
                        onChange={this.handleChange}/>
                    <button type="submit" onClick={this.handleUserNameSelect}>
                        Go
                    </button>
                </div>
                <SuggestionsContainer/>
            </div>
        );
    }
}
