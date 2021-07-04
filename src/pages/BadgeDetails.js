import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles/BadgeDetails.css';
import header from '../images/platziconf-logo.svg';
import Badge from '../components/Badge';
import api from '../api';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';

class BadgeDetails extends Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
  };

  componentDidMount() {
    this.fetchData();
  }
  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.read(this.props.match.params.badgeId);

      this.setState({ loading: false, data: data });
    } catch (e) {
      this.setState({ loading: false, error: e });
    }
  };

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    return (
      <React.Fragment>
        <div className="BadgeEdit__hero">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <img
                  src={header}
                  alt="Logo"
                  className="BadgeEdit__hero-image img-fluid"
                />
              </div>
              <div className="col-6 BadgeDetails__hero-attendant-name">
                <h1>
                  {this.state.data.firstName} {this.state.data.lastName}
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6 offset-3">
              <Badge
                firstName={this.state.data.firstName}
                lastName={this.state.data.lastName}
                twitter={this.state.data.twitter}
                jobTitle={this.state.data.jobTitle}
                email={this.state.data.email}
                avatarUrl={this.state.data.avatarUrl}
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-6 offset-3">
              <div className="Badges__buttons">
                <button className="btn btn-danger me-2">Delete</button>
                <Link
                  to={`/badges/${this.state.data.id}/edit`}
                  className="btn btn-primary"
                >
                  Edit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeDetails;
