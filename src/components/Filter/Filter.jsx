import React from 'react';
import { Label } from 'components/App.styled';
import PropTypes from 'prop-types';

export const Filter = ({ filterKey, onChange }) => {
  return (
    <Label>
      Find contacts by name
      <input type="text" value={filterKey} onChange={onChange} />
    </Label>
  );
};

Filter.propTypes = {
  filterKey: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
