import React from 'react';
import PropTypes from 'prop-types';
import BlocklyTypes from '../../constants/BlocklyTypes';

const TypesSelect = ({ onChange }) => {
  const options = Object.keys(BlocklyTypes).map((k) => {
    return <option key={k} value={BlocklyTypes[k]}>{BlocklyTypes[k]}</option>;
  });
  return (
    <select
      onChange={(event) => {
        onChange(event.target.value);
      }}
    >
      {options}
    </select>
  );
};

TypesSelect.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default TypesSelect;
