import React from 'react';
import PropTypes from 'prop-types';

const SaveButon = (props) => {
  return (
    <button
      onClick={() => {
        props.saveFunction(props.funcInfo);
      }}
    >
      Save
    </button>
  );
};

SaveButon.propTypes = {
  saveFunction: PropTypes.func.isRequired,
  funcInfo: PropTypes.shape({
    functionName: PropTypes.string,
    args: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    })),
    code: PropTypes.string.isRequired,
    blocklyWorkspace: PropTypes.string.isRequired,
  }).isRequired,
};

export default SaveButon;
