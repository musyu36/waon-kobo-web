import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import DisplayChordButtons from "./DisplayChordButtons";
import moment from "moment";

const ProjectDetails = (props) => {
  const { project, auth } = props;
  // ルートガード
  if (!auth.uid) return <Redirect to="/signin" />;
  if (project) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-1">
          <div className="card-content theme-back-white">
            <span className="card-title blue-grey-text text-darken-4 break-word">
              {project.title}
            </span>
            <p className="break-word">{project.content}</p>
            <DisplayChordButtons chords={project.chords} />
          </div>
          <div className="card-action blue-grey-text text-darken-4">
            <div>
              Posted by {project.authorFirstName} {project.authorLastName}
            </div>
            <div>{moment(project.createdAt.toDate()).calendar()}</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Loaging project...</p>
      </div>
    );
  }
};

// 表示したいprojectを特定し、propsとしてProjectDetailsに渡す
const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project: project,
    auth: state.firebase.auth,
  };
};

// Dashboardと同様に２つのHOCをProjectDetailsにに使用するため、composeに使用
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(ProjectDetails);
