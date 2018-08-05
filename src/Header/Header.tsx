import "./Header.pcss";
import React from "react";
import logo from "./github-mark-logo.png";
import {Link} from "react-router-dom";

export class Header extends React.Component<any> {
    public render() {
        return (
            <header className="header">
                <span className="header__additional-info"/>
                <Link to="/">
                    <span className="header__branding">
                        <img src={logo} title="Github Profile Viewer" className="header__logo"/>
                        <span className="header__text">Github public profile viewer</span>
                    </span>
                </Link>
                <span className="header__graphql-selector">
                <label htmlFor="graph-ql-api">Use GraphQL API</label>
                <input
                    type="checkbox"
                    id="graph-ql-api"
                    checked={this.props.isUsingGraphQLAPI}
                    onChange={this.props.onFetchApiChanged}
                />
            </span>
            </header>
        );
    }
}
