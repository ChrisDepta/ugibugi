import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';
import { Wrapper } from './UsersListItem.styles';

const UsersListItem = ({ userData: { name, attendance = '0%', average } }) => {
  return (
    <Wrapper average={average}>
      <div>{average}</div>
      <div>
        <span>{name}</span>
        <span>Attendance: {attendance}</span>
      </div>
      <Button />
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
