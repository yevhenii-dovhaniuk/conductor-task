import React from "react";
import {UserProps, UserState} from "./User.model";

export class User extends React.Component<UserProps, UserState> {
    public render() {
        return (
            <div>
                {JSON.stringify(this.props.data)}
            </div>);
    }
}
