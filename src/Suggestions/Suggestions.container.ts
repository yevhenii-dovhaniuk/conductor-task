import {connect} from 'react-redux';
import {onSuggestionSelected} from './Suggestions.actions';
import {Suggestions} from './Suggestions';

const mapStateToProps = (state: any) => ({
    suggestions: state.suggestions.values,
    suggestionsLoading: state.userName.suggestionsLoading,
    total: state.suggestions.total
});

export const SuggestionsContainer = connect(
    mapStateToProps,
    {
        onSuggestionSelected
    }
)(Suggestions as any);
