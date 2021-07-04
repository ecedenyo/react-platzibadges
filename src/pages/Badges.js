import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles/Badges.css';
import BadgesList from '../components/BadgesList';
import confLogo from '../images/badge-header.svg';
// import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';

import api from '../api';

export class Badges extends Component {
  constructor(props) {
    super(props);
    console.log('1. constructor()');

    this.state = {
      loading: true,
      error: null,
      data: [],
    };
  }

  componentDidMount() {
    console.log('3. componentDidMount()');

    this.fetchData();
  }

  fetchData = async () => {
    this.setState({
      loading: true,
      error: null,
    });

    try {
      const data = await api.badges.list();

      this.setState({
        loading: false,
        data: data,
      });
    } catch (e) {
      this.setState({
        loading: false,
        error: e,
      });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    console.log('4. componentDidUpdate()');
    console.log({ prevProps, prevState });
    console.log({ props: this.props, state: this.state });
  }

  componentWillUnmount() {
    console.log('5. componentWillUnmount()');

    clearTimeout(this.timeoutId);
  }

  render() {
    console.count('2. render()');

    // if (this.state.loading === true) {
    //   return <PageLoading />;
    // }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges_conf-logo"
                src={confLogo}
                alt="Conf Logo"
              />
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>

          <div className="Badges__list">
            <div className="Badges__container">
              <BadgesList
                isLoading={this.state.loading}
                badges={this.state.data}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
