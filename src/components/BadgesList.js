import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

function BadgesList(props) {
  const badges = props.badges;

  return (
    <div>
      <ul className="list-unstyled">
        {badges.map((badge) => {
          return (
            <li key={badge.id} className="shadow-sm p-3 mb-3 bg-body rounded">
              <img
                src={badge.avatarUrl}
                alt="Avatar"
                className="float-start me-3"
              />
              <span>
                {badge.firstName} {badge.lastName}
              </span>
              <br />
              <FontAwesomeIcon icon={faTwitter} className="text-primary me-1" />
              <a
                href={`https://twitter.com/${badge.twitter}`}
                target="_blank"
                rel="noreferrer"
              >
                {badge.twitter}
              </a>
              <br />
              <span>{badge.jobTitle}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BadgesList;
