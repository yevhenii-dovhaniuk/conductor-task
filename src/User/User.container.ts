import {connect} from "react-redux";
import {UserState} from "./User.model";
import {User} from "./User";

const mapStateToProps = (state: {user: UserState}) => ({
    data: state.user.data
});

export const UserContainer = connect(
    mapStateToProps,
    {}
)(User);
