import React from 'react';
import { Link } from 'react-router-dom';

import confLogo01 from '../images/platziconf-logo.svg';
import confLogo02 from '../images/astronauts.svg';
import './styles/Home.css';

function Home() {
  return (
    <div className="container-fluid home">
      <div className="container pt-5">
        <div className="d-flex justify-content-center align-items-center">
          <div className="content">
            <img src={confLogo01} alt="Platzi Conf Logo" />
            <h3 className="mt-3">Print your Badges</h3>
            <p>The easiest way to manage your conference</p>
            <Link to="/badges" className="btn btn-primary">
              Start now
            </Link>
          </div>

          <img src={confLogo02} alt="Platzi Conf Logo" />
        </div>
      </div>
    </div>
  );
}

export default Home;
