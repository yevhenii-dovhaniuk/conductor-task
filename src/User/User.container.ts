import {connect} from "react-redux";
import {UserState} from "./User.model";
import {User} from "./User";
import {getUserDetails, selectRepo} from "./User.actions";

const mapStateToProps = (state: {user: UserState}) => ({
    data: state.user.data
});

export const UserContainer = connect(
    mapStateToProps,
    {
        refetchUserDetails: getUserDetails,
        selectRepo
    }
)(User);
