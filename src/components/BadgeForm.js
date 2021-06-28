import React, { Component } from 'react';

class BadgeForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    twitter: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClick = (e) => {
    console.log('Button was clicked');
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form was submitted');
    console.table(this.state);
  };

  render() {
    return (
      <div>
        <h1>New Attendant</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              onChange={this.handleChange}
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              placeholder="John"
              value={this.state.firstName}
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              onChange={this.handleChange}
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              placeholder="Smith"
              value={this.state.lastName}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              onChange={this.handleChange}
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="john.smith@mail.com"
              value={this.state.email}
            />
          </div>

          <div className="form-group">
            <label htmlFor="jobTitle">Job Title</label>
            <input
              onChange={this.handleChange}
              type="text"
              className="form-control"
              id="jobTitle"
              name="jobTitle"
              placeholder="Astronaut"
              value={this.state.jobTitle}
            />
          </div>

          <div className="form-group">
            <label htmlFor="twitter">Twitter</label>
            <input
              onChange={this.handleChange}
              type="text"
              className="form-control"
              id="twitter"
              name="twitter"
              placeholder="iamjohnsmith"
              value={this.state.twitter}
            />
          </div>

          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
