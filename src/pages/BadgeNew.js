import React, { Component } from 'react';

import './styles/BadgeNew.css';
import header from '../images/badge-header.svg';
import NavBar from '../components/NavBar';
import BadgeForm from '../components/BadgeForm';
import Badge from '../components/Badge';

class BadgeNew extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="BadgeNew__hero">
          <img src={header} alt="Logo" className="img-fluid" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName="Emerson"
                lastName="Cedeño"
                jobTitle="Software Engineer"
                twitter="ecedenyo"
                avatarUrl="https://secure.gravatar.com/avatar/dbbc61588e77c587c15c0c2c086848f7"
              />
            </div>

            <div className="col">
              <BadgeForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
