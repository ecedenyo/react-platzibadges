import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

function useSearchBadges(badges) {
  const [query, setQuery] = React.useState('');
  const [filteredBadges, setFilteredBadges] = React.useState(badges);

  React.useMemo(() => {
    const result = badges.filter((badge) => {
      return `${badge.firstName.toLowerCase()} ${badge.lastName.toLowerCase()}`.includes(
        query.toLowerCase(),
      );
    });

    setFilteredBadges(result);
  }, [badges, query]);

  return { query, setQuery, filteredBadges };
}

function BadgesList(props) {
  const badges = props.badges;

  const { query, setQuery, filteredBadges } = useSearchBadges(badges);

  if (filteredBadges.length === 0) {
    return (
      <>
        <div className="form-group">
          <label>Filter Badges</label>
          <input
            type="text"
            className="form-control"
            value={query}
            onChange={(e) => {
              // console.log(e.target.value);
              setQuery(e.target.value);
            }}
          />
        </div>

        <h3>No badges were found</h3>
        <Link className="btn btn-primary" to="/badges/new">
          Create new badge
        </Link>
      </>
    );
  }

  return (
    <div>
      <div className="form-group">
        <label>Filter Badges</label>
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={(e) => {
            // console.log(e.target.value);
            setQuery(e.target.value);
          }}
        />
      </div>

      <ul className="list-unstyled">
        {filteredBadges.map((badge) => {
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
