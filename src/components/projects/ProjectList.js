import React from "react";
import ProjectSummary from "./ProjectSummary";
import { Link } from 'react-router-dom';


const ProjectList = ({ projects }) => {
  return (
    <div className="project-list">
      {projects &&
        projects.map(project => {
          return <Link to={'/project/' + project.id} key={project.id} className="text-dark project-link"><ProjectSummary project={project}/></Link>;
        })}
    </div>
  );
};

export default ProjectList;
