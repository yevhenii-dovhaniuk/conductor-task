import {connect} from "react-redux";
import {Header} from "./Header";
import {onFetchApiChanged} from "../FetchType/FetchType.actions";

const mapStateToProps = (state: any) => ({
    isUsingGraphQLAPI: state.fetchType.isUsingGraphQLAPI
});

export const HeaderContainer = connect(
    mapStateToProps,
    {
        onFetchApiChanged
    }
)(Header);
