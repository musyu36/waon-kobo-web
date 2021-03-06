import React, { Component } from "react";
import Notification from "./Notification";
import ProjectList from "../projects/ProjectList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import "../../styles/Dashboard.css";

class Dashboard extends Component {
  render() {
    const { projects, auth, notifications } = this.props;
    //   ルートガード
    if (!auth.uid) return <Redirect to="/signin" />;

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notification notifications={notifications} />
          </div>
        </div>
        <Link
          className="theme-back-blue fab-new-project btn-floating btn-large"
          to="/create"
        >
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
}

// rootReducerで定義したfirestoreプロパティを取得
const mapStateToProps = (state) => {
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications,
  };
};

// 2つのHOC(ハイオーダーコンポーネント)をDashboardコンポーネントに繋げるためにcomposeを使用
// firestoreConnectでどのコレクションと同期したいか宣言
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "projects", orderBy: ["createdAt", "desc"] },
    { collection: "notifications", limit: 3, orderBy: ["time", "desc"] },
  ])
)(Dashboard);
