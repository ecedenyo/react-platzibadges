import React, { Component } from 'react';

import api from '../api';
import BadgeDetails from './BadgeDetails';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';

class BadgeDetailsContainer extends Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
    modalIsOpen: false,
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

  handleOpenModal = (e) => {
    this.setState({
      modalIsOpen: true,
    });
  };
  handleCloseModal = (e) => {
    this.setState({
      modalIsOpen: false,
    });
  };

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    return (
      <BadgeDetails
        badge={this.state.data}
        modalIsOpen={this.state.modalIsOpen}
        onOpenModal={this.handleOpenModal}
        onCloseModal={this.handleCloseModal}
      />
    );
  }
}

export default BadgeDetailsContainer;
