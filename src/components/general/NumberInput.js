import React from 'react';
import PropTypes from 'prop-types';

const NumberInput = (props) => {
  return (
    <input
      name={props.name}
      type="number"
      placeholder={props.placeholder}
      onChange={(event) => {
        props.onChange(
          event.target.name,
          parseFloat(event.target.value)
        );
      }}
      value={props.value}
    />
  );
};

NumberInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default NumberInput;
