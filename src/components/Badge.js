import React from 'react';

import './styles/Badge.css';
import confLogo from '../images/badge-header.svg';

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo de la Conferencia" />
        </div>
        <div className="Badge__section-name">
          <img
            className="Badge__avatar"
            src="https://secure.gravatar.com/avatar/dbbc61588e77c587c15c0c2c086848f7"
            alt="Avatar"
          />
          <h1>
            Emerson <br />
            Cedeño
          </h1>
        </div>
        <div className="Badge__section-info">
          <h3>Software Engineer</h3>
          <div>@ecedenyo</div>
        </div>
        <div className="Badge__footer">#platziconf</div>
      </div>
    );
  }
}

export default Badge;
