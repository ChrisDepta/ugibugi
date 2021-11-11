import React from 'react';
import PropTypes from 'prop-types';
import { Label } from '../../atoms/Label/Label';
import { Input } from 'components/atoms/Input/Input';

const FormField = ({ label, name, id, type = 'text', ...props }) => {
  return (
    <>
      <Label htmlFor={id}>{label}</Label>
      <Input name={name} id={id} type={type} />
    </>
  );
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string
};

export default FormField;
