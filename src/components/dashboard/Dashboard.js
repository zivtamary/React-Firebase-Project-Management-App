import React, { Component } from "react";
import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {
  
  render() {
    const { projects, auth, notifications } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 
    return (
      <div className="dashboard container my-5">
        <div className="row">
          <div className="col-sm-12 col-md-6 project-list">
            <ProjectList projects={projects} />
          </div>
          <div className="col-sm-12 col-md-6">
            <Notifications notifications={notifications} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  projects: state.firestore.ordered.projects,
  auth: state.firebase.auth,
  notifications: state.firestore.ordered.notifications
})

export default compose(connect(mapStateToProps),firestoreConnect([{collection: 'projects', orderBy: ['createdAt', 'desc']},{collection: 'notifications', limit:5, orderBy:['time', 'desc']}]))(Dashboard);
