import React, { Component } from 'react';

class BadgeForm extends Component {
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
              onChange={this.props.onChange}
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              placeholder="John"
              value={this.props.formValues.firstName}
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              onChange={this.props.onChange}
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              placeholder="Smith"
              value={this.props.formValues.lastName}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              onChange={this.props.onChange}
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="john.smith@mail.com"
              value={this.props.formValues.email}
            />
          </div>

          <div className="form-group">
            <label htmlFor="jobTitle">Job Title</label>
            <input
              onChange={this.props.onChange}
              type="text"
              className="form-control"
              id="jobTitle"
              name="jobTitle"
              placeholder="Astronaut"
              value={this.props.formValues.jobTitle}
            />
          </div>

          <div className="form-group">
            <label htmlFor="twitter">Twitter</label>
            <input
              onChange={this.props.onChange}
              type="text"
              className="form-control"
              id="twitter"
              name="twitter"
              placeholder="iamjohnsmith"
              value={this.props.formValues.twitter}
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
