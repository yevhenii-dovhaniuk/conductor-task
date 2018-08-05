import {connect} from "react-redux";
import {Repo} from "./Repo";
import {fetchRepoData} from "./Repo.actions";

const mapStateToProps = (state: any) => ({
    data: state.repo.data
});

export const RepoContainer = connect(mapStateToProps, {fetchRepoData})(Repo);