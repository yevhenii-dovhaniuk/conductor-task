import React from 'react';
import {isEmpty, get} from 'lodash';
import './Repo.pcss';
import forkIcon from '../User/fork-icon.svg';
import starIcon from '../User/star-icon.svg';
import created from './created-icon.svg';
import updated from './updated-icon.svg';
import pushed from './pushed-icon.svg';
import user from './user-icon.svg';
import {formatDate} from '../Formatters/DateTimeFormatter';

export class Repo extends React.Component<any> {
    public componentDidMount() {
        this.props.fetchRepoData();
    }

    private renderDescription() {
        const description = get(this.props, 'data.description');
        if (description) {
            return (
                <span>
                    Description:{' '}
                    <span className="repo__description--italic">{this.props.data.description}</span>
                </span>
            );
        }
        return <span>No description provided</span>;
    }

    public render() {
        if (this.props.loading || isEmpty(this.props.data)) {
            return <div>Loading...</div>;
        }
        const repo = this.props.data;
        return (
            <div className="repo">
                <div className="repo__header">{repo.name}</div>
                <div className="repo__fork">
                    {JSON.parse(repo.isFork) ? (
                        <span>
                            <img src={forkIcon} alt="fork" /> Fork{' '}
                        </span>
                    ) : (
                        <span>
                            <img src={forkIcon} alt="fork" /> Plain{' '}
                        </span>
                    )}
                </div>
                <div className="repo__created">
                    <img src={created} />
                    Created {formatDate(repo.createdAt)}
                </div>
                <div className="repo__updated">
                    <img src={updated} />
                    Updated {formatDate(repo.updatedAt)}
                </div>
                <div className="repo__pushed">
                    <img src={pushed} />
                    Pushed {formatDate(repo.pushedAt)}
                </div>
                <div className="repo__description">{this.renderDescription()}</div>
                <div className="tile repo__url">
                    <span>Visit:&nbsp;</span>
                    <a href={repo.url} target="_blank">
                        {repo.url}
                    </a>
                </div>
                <div className="tile repo__ssh">
                    <span>Clone: {repo.sshUrl}</span>
                </div>
                <div className="repo__stars">
                    <span>
                        <img src={starIcon} alt="star" />
                        {repo.stargazers.totalCount}
                    </span>
                </div>
                <div className="repo__language">
                    Primary language:{' '}
                    {repo.primaryLanguage && repo.primaryLanguage.name
                        ? repo.primaryLanguage.name
                        : 'None'}
                </div>
                <div className="repo__owner">
                    <img src={user} /> {repo.owner.login}
                </div>
            </div>
        );
    }
}
