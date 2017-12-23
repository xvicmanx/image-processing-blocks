import React from 'react';
import PropTypes from 'prop-types';
import FuncArgsInput from './FuncArgsInput';
import FuncNameInput from './FuncNameInput';
import SaveButton from '../../containers/editor/SaveButton';

const FunctionHeader = (props) => {
  return (
    <div className="app-subtitle">
      function&nbsp;&nbsp;
      <FuncNameInput
        onChange={
          (name) => {
            props.setFunctionName(name);
          }
        }
      />
      &nbsp;(&nbsp;
      <FuncArgsInput
        onChange={
          (args) => {
            props.setFunctionArguments(args);
          }
        }
      />
      &nbsp;
      {') {'}
      <SaveButton />
    </div>
  );
};

FunctionHeader.propTypes = {
  setFunctionArguments: PropTypes.func.isRequired,
  setFunctionName: PropTypes.func.isRequired,
};

export default FunctionHeader;
