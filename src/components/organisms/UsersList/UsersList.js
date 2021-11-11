import React, { useState, useEffect } from 'react';
import UsersListItem from 'components/molecules/UserslistItem/UsersListItem';
import { users as usersData } from 'data/users';
import { StyledList, Wrapper } from './UsersList.styles';
import FormField from 'components/molecules/FormField/FormField';

const mockAPI = (success) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (usersData) {
        resolve([...usersData]);
      } else {
        reject({ message: 'error' });
      }
    }, 2000);
  });
};

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoadingState] = useState([]);

  useEffect(() => {
    setLoadingState(true);
    mockAPI()
      .then((data) => {
        setLoadingState(false);
        setUsers(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  return (
    <>
      <Wrapper>
        <FormField label="Name" id="name" name="name" />
      </Wrapper>
      <Wrapper>
        <h1>{isLoading ? 'Loading' : ''}</h1>
        <StyledList>
          {users.map((userData) => (
            <UsersListItem deleteUser={deleteUser} userData={userData} key={userData.name} />
          ))}
        </StyledList>
      </Wrapper>
    </>
  );
};

export default UsersList;
