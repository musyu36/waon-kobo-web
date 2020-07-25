import React from "react";
import moment from "moment";

const ProjectSummary = ({ project }) => {
  return (
    <div className="card z-depth-1 project-summary">
      <div className="card-content blue-grey-text text-darken-4 theme-back-white">
        <span className="card-title blue-grey-text text-darken-4">{project.title}</span>
        <p>
          Posted by the {project.authorFirstName} {project.authorLastName}
        </p>
        <p className="blue-grey-text text-lighten-3">
          {moment(project.createdAt.toDate()).calendar()}
        </p>
      </div>
    </div>
  );
};

export default ProjectSummary;
