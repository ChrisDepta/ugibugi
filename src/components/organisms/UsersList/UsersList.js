import UsersListItem from 'components/molecules/UserslistItem/UsersListItem';
import { users } from 'data/users';
import React from 'react';
import { Wrapper } from './UsersList.styles';

const UsersList = () => (
  <Wrapper>
    <ul>
      {users.map((userData, index) => (
        <UsersListItem userData={userData} key={index} />
      ))}
    </ul>
  </Wrapper>
);

export default UsersList;
