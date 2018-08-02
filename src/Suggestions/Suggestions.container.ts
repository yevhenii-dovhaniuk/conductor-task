import {connect} from "react-redux";
import {onSuggestionSelected} from "./Suggestions.actions";
import {Suggestions} from "./Suggestions";

const mapStateToProps = (state: any) => ({
    suggestions: state.suggestions.values,
    total: state.suggestions.total
});

export const SuggestionsContainer = connect(
    mapStateToProps,
    {
        onSuggestionSelected
    }
)(Suggestions);