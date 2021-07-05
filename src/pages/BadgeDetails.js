import React from 'react';
import { Link } from 'react-router-dom';

import header from '../images/platziconf-logo.svg';
import Badge from '../components/Badge';
import './styles/BadgeDetails.css';
import DeleteBadgeModal from '../components/DeleteBadgeModal';

function BadgeDetails(props) {
  const badge = props.badge;

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
                {badge.firstName} {badge.lastName}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-6 offset-3">
            <Badge
              firstName={badge.firstName}
              lastName={badge.lastName}
              twitter={badge.twitter}
              jobTitle={badge.jobTitle}
              email={badge.email}
              avatarUrl={badge.avatarUrl}
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-6 offset-3">
            <div className="Badges__buttons">
              <button
                onClick={props.onOpenModal}
                className="btn btn-danger me-2"
              >
                Delete
              </button>
              <DeleteBadgeModal
                isOpen={props.modalIsOpen}
                onClose={props.onCloseModal}
                onDeleteBadge={props.onDeleteBadge}
              />

              <Link to={`/badges/${badge.id}/edit`} className="btn btn-primary">
                Edit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default BadgeDetails;
