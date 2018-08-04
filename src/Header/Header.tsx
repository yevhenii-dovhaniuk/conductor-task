import "./Header.pcss";
import React from "react";
import logo from "./github-mark-logo.png";

export const Header = ({
    isUsingGraphQLAPI = false,
    onFetchApiChanged
}: {
    isUsingGraphQLAPI: boolean;
    onFetchApiChanged: any;
}) => (
    <header className="header">
        <span className="header__additional-info" />
        <span className="header__branding">
            <img src={logo} title="Github Profile Viewer" className="header__logo" />
            <span className="header__text">Github public profile viewer</span>
        </span>

        <span className="header__graphql-selector">
            <label htmlFor="graph-ql-api">Use GraphQL API</label>
            <input
                type="checkbox"
                id="graph-ql-api"
                checked={isUsingGraphQLAPI}
                onChange={onFetchApiChanged}
            />
        </span>
    </header>
);
