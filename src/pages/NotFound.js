import React from 'react';

import './styles/Home.css';

function NotFound() {
  return (
    <div className="container-fluid home">
      <div className="container pt-5">
        <div className="d-flex justify-content-center align-items-center content">
          <span>404</span>
          <span>Page Not Found</span>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
