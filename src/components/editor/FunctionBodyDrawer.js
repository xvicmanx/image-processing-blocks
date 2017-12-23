import React from 'react';
import PropTypes from 'prop-types';
import Types from '../../constants/BlocklyTypes';
import APIDefaultActionTools from '../../data/APIDefaultActionTools';
import CaptureResult from '../../blockly/tools/CaptureResult';
import Argument from '../../blockly/tools/Argument';
import BlocklyDrawer from '../blockly/BlocklyDrawer';

const FunctionBodyDrawer = (props) => {
  const argsTools = Object.keys(Types).map((key) => {
    return Argument(props.args, Types[key]);
  });
  return (
    <BlocklyDrawer
      tools={[
        CaptureResult,
        ...APIDefaultActionTools,
        ...argsTools,
      ]}
      onChange={(code) => {
        props.onChange(code);
      }}
    />
  );
};

FunctionBodyDrawer.defaultProps = {
  onChange: () => {},
};

FunctionBodyDrawer.propTypes = {
  args: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  })).isRequired,
  onChange: PropTypes.func,
};

export default FunctionBodyDrawer;
