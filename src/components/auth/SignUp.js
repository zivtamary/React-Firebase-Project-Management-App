import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../store/actions/authActions";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.signUp(this.state);
  };

  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div className="container my-5">
        <div className="signup-header my-5">
          <h1>Sign up</h1>
          <h6>Penta gives you everything you need to stay in sync, hit deadlines, and reach your goals.</h6>
          <small className="text-muted">Registartion is easy and free.</small>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              onChange={this.handleChange}
              value={this.state.email}
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              onChange={this.handleChange}
              value={this.state.password}
              placeholder="Password"
            />
          </div>
          <div className="form-group">
            <label htmlFor="firstName">First name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              onChange={this.handleChange}
              value={this.state.firstName}
              placeholder="First name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              onChange={this.handleChange}
              value={this.state.lastName}
              placeholder="Last name"
            />
          </div>
          {authError ? <div className="text-danger my-2">{authError}</div> : null}
          <button type="submit" className="btn btn-dark">
            sign up
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authError: state.auth.authError,
  auth: state.firebase.auth,
});

export default connect(mapStateToProps, {signUp})(SignUp);
