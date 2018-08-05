import React from "react";
import {RepositoryInfo, UserProps, UserState} from "./User.model";
import "./User.pcss";
import {formatDate} from "../Formatters/DateTimeFormatter";
import {renderHireable} from "../Renderers/HireableRenderer";
import {renderLocation} from "../Renderers/LocationRenderer";
import {get, map, take, partial} from "lodash";
import starIcon from "./star-icon.svg";
import forkIcon from "./fork-icon.svg";

export class User extends React.Component<UserProps, UserState> {
    public componentDidMount() {
        if (!this.props.data) {
            this.props.refetchUserDetails(this.props.match.params.userName);
        }
    }

    private selectRepo = (repoName: string) => {
        this.props.selectRepo(repoName);
    };

    private renderRepositories() {
        const repositories = get(this.props, "data.repositories.nodes", []);
        return <div className="user__repositories-container">{
            map(repositories, (node: RepositoryInfo) => (
                <div className="user__repository" key={node.id} onClick={partial(this.selectRepo, node.name)}>
                    <div className="user__repository-name">{node.name}</div>
                    <div className="user__repository-info">
                        {node.isFork && <img src={forkIcon} title="Fork" alt="forked"/>}
                        <img src={starIcon} alt="star" title="Stars Count"/>
                        {node.stargazers.totalCount}
                    </div>
                </div>
            ))
        }
        </div>;
    }

    private renderStarred() {
        const starred = take(get(this.props, "data.starredRepositories.nodes", []), 10);
        if (!starred.length) {
            return <div className="user__repository--none">No stars yet</div>
        }
        return <div className="user__starred-container">{
            map(starred, (node: RepositoryInfo) => (
                <div key={node.name} className="user__repository">
                    <a href={node.url} target="_blank">
                        {node.name}
                    </a>
                </div>
            ))
        }
        </div>;
    }

    public render() {
        if (!this.props.data) {
            return null;
        }
        const user = this.props.data;
        return (
            <div className="user">
                <div className="tile user__icon">
                    <img src={user.avatarUrl} alt="avatar"/>
                </div>
                <div className="tile user__repositories">
                    <div className="tile__header">
                        Repositories (first {user.repositories.totalCount})
                    </div>
                    <div>
                        {this.renderRepositories()}
                    </div>
                </div>
                <div className="tile user__general-info">
                    <div>Followers: {user.followers.totalCount}</div>
                    <div>Following: {user.following.totalCount}</div>
                    <div>{renderLocation(user.location)}</div>
                    <div>{renderHireable(user.hireable)}</div>
                </div>
                <div className="tile user__name">{user.name}</div>
                <div className="tile user__login">{user.login}</div>
                <div className="tile user__created">Created {formatDate(user.createdAt)}</div>
                <div className="tile user__updated">Updated {formatDate(user.updatedAt)}</div>
                <div className="tile user__stars">
                    <div className="tile__header">
                        Recently Starred repos
                    </div>
                    {this.renderStarred()}
                </div>
            </div>);
    }
}
