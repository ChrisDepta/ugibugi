import React from 'react';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg';
import { DeleteButton } from './DeleteButton.styles';

const Button = (props) => (
  <DeleteButton {...props}>
    <DeleteIcon />
  </DeleteButton>
);

export default Button;
