import React, { Component } from "react";
import { createProject } from "../../store/actions/projectActions";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';


class CreateProject extends Component {
  state = {
    title: "",
    content: "",
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createProject(this.state,this.props.history)
  };

  render() {
    const { auth, loading } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 
    return (
      <div className="container my-5">
        <h1>Create new project</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              onChange={this.handleChange}
              value={this.state.email}
              aria-describedby="titleHelp"
              placeholder="Enter title"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="content">Content</label>
            <textarea
              className="form-control"
              id="content"
              onChange={this.handleChange}
              value={this.state.content}
              placeholder="Content"
              required
            />
          </div>
          <button type="submit" className="btn btn-dark" disabled={loading}>
            Create
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.firebase.auth,
  loading: state.project.isLoading
})

export default connect(mapStateToProps, { createProject })(CreateProject);
