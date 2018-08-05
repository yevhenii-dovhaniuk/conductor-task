import {connect} from 'react-redux';
import {onUserNameTyped, onUserNameSubmit} from './UserNameInput.actions';
import {UserNameInput} from './UserNameInput';

const mapStateToProps = (state: any) => ({
    blockUserInput: state.userName.blockUserInput,
    errorNoUser: state.userName.errorNoUser,
    suggestions: state.userName.suggestions,
    value: state.userName.value
});

export const UserNameInputContainer = connect(
    mapStateToProps,
    {
        onUserNameSubmit,
        onUserNameTyped
    }
)(UserNameInput as any);
