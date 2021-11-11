import React from 'react';
import PropTypes from 'prop-types';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { Wrapper } from './UsersListItem.styles';

const UsersListItem = ({ deleteUser, userData: { name, attendance = '0%', average } }) => {
  return (
    <Wrapper average={average}>
      <div>{average}</div>
      <div>
        <span>{name}</span>
        <span>Attendance: {attendance}</span>
      </div>
      <DeleteButton onClick={() => deleteUser(name)} />
    </Wrapper>
  );
};

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired, //to znaczy że ten props jest wymagany
    name: PropTypes.string,
    attendance: PropTypes.string
  })
};

export default UsersListItem;
