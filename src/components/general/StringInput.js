import React from 'react';
import PropTypes from 'prop-types';

const StringInput = (props) => {
  return (
    <input
      name={props.name}
      type="text"
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

StringInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default StringInput;
