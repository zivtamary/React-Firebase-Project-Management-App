import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { firestoreConnect } from "react-redux-firebase";
import moment from "moment";

const ProjectDetails = props => {
  const { project, auth } = props;
  if (!auth.uid) return <Redirect to="/signin" />;
  if (project) {
    return (
      <div className="container project-details">
        <div className="card my-5 ">
          <div className="card-body text-dark">
            <h1 className="typography-display-1">{project.title}</h1>
            <p className="typography-subheading mt-4">{project.content}</p>
          </div>
          <div className="card-footer bg-transparent border-muted">
            <p>
              Posted by {project.authorFirstName} {project.authorLastName}
            </p>
            <p>{moment(project.createdAt.toDate()).calendar()}</p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container text-center">
        <p>Loading project...</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project,
    auth: state.firebase.auth,
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(ProjectDetails);
