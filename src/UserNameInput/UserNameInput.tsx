import React, {ChangeEvent} from 'react';
import './UserNameInput.pcss';
import {SuggestionsContainer} from '../Suggestions/Suggestions.container';
import {UserInputProps} from './UserNameInput.model';
import {Error} from '../Error/Error';
import classnames from 'classnames';

export class UserNameInput extends React.Component<UserInputProps> {
    private handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.props.onUserNameTyped(e.target.value);
    };

    private handleUserNameSelect = () => {
        this.props.onUserNameSubmit();
    };

    public render() {
        const inputFieldClasses = classnames({
            'user-name-input__input--disabled': this.props.blockUserInput
        });
        const buttonClasses = classnames({
            'user-name-input__button--disabled': !this.props.value || this.props.blockUserInput
        });
        return (
            <div className="user-name-input">
                <div className="user-name-input__input-fields">
                    <form onSubmit={this.handleUserNameSelect}>
                        <label htmlFor="user-name" className="user-name-input__label">
                            User name
                        </label>
                        <input
                            type="text"
                            id="user-name"
                            name="user-name"
                            placeholder="type here"
                            autoFocus={true}
                            className={inputFieldClasses}
                            value={this.props.value}
                            onChange={this.handleChange}
                            disabled={this.props.blockUserInput}
                        />
                        <button
                            type="submit"
                            onClick={this.handleUserNameSelect}
                            disabled={this.props.blockUserInput || !this.props.value}
                            className={buttonClasses}
                        >
                            Go
                        </button>
                    </form>
                </div>
                <Error errorMessage="User does not exist" display={this.props.errorNoUser} />
                <SuggestionsContainer />
            </div>
        );
    }
}
