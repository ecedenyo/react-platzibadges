import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import BadgePicture from './BadgePicture';

import Skeleton from 'react-loading-skeleton';

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
  const { isLoading, badges } = props;

  const SkeletonList = (placeholder) => (
    <li className="shadow-sm p-3 mb-3 bg-body rounded">
      <Skeleton
        circle={true}
        width={80}
        height={80}
        className="float-start me-3"
      />
      <Skeleton width={200} />
      <br />
      <Skeleton width={100} />
      <br />
      <Skeleton width={250} />
      <br />
    </li>
  );

  // const { query, setQuery, filteredBadges } = useSearchBadges(badges);
  const filteredBadges = badges;

  if (!isLoading && filteredBadges.length === 0) {
    return (
      <>
        {/* <div className="form-group">
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
        </div> */}

        <h3>No badges were found</h3>
        <Link className="btn btn-primary" to="/badges/new">
          Create new badge
        </Link>
      </>
    );
  }

  return (
    <>
      {/* <div className="form-group">
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
      </div> */}

      <ul className="list-unstyled">
        {isLoading && !filteredBadges ? (
          <Skeleton wrapper={SkeletonList} count={5} />
        ) : (
          filteredBadges.map((badge) => {
            return (
              <Link
                key={badge.id}
                className="text-reset text-decoration-none"
                to={`/badges/${badge.id}`}
              >
                <li className="shadow-sm p-3 mb-3 bg-body rounded">
                  <BadgePicture
                    className="float-start me-3"
                    email={badge.email}
                  />
                  <span>
                    {badge.firstName} {badge.lastName}
                  </span>
                  <br />
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="text-primary me-1"
                  />
                  {badge.twitter}
                  <br />
                  <span>{badge.jobTitle}</span>
                </li>
              </Link>
            );
          })
        )}
      </ul>
    </>
  );
}

export default BadgesList;
