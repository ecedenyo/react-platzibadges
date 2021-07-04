import React from 'react';
import md5 from 'md5';

function BadgePicture(props) {
  const email = props.email;
  const hash = md5(email);

  return (
    <img
      className={props.className}
      src={`https://secure.gravatar.com/avatar/${hash}`}
      alt="Avatar"
    />
  );
}

export default BadgePicture;
