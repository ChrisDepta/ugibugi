import { users } from 'data/users';
import React from 'react';
// import PropTypes from 'prop-types'

const UsersList = () => (
  <div>
    <ul>
      {users.map(({ name, average, attendance }) => (
        <li>
          <div>2.3</div>
          <div>
            <p>{name}</p>
            <p>{attendance}</p>
          </div>
          <button>{average}</button>
        </li>
      ))}
    </ul>
  </div>
);

export default UsersList;
