import React from "react";
import moment from "moment";

const ProjectSummary = ({ project }) => {
  // Convert timestamp to HH:MM
  var date = new Date(project.createdAt.seconds * 1000);
  // Hours part from the timestamp
  var hours = date.getHours();
  // Minutes part from the timestamp
  var minutes = "0" + date.getMinutes();
  // Seconds part from the timestamp
  var seconds = "0" + date.getSeconds();
  // Will display time in 10:30:23 format
  var formattedTime =
    hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);

  return (
    <div className="project-summary card rounded text-light bg-warning mb-2">
      <div className="card-body">
        <h5 className="card-title">{project.title}</h5>
        <p className="card-text">{project.content}</p>
        <p>Posted by {project.authorFirstName}</p>
        <p className="text-muted">
          {moment(project.createdAt.toDate()).calendar()}
        </p>
      </div>
    </div>
  );
};

export default ProjectSummary;
