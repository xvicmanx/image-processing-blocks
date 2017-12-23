import React from 'react';
import PropTypes from 'prop-types';
import IntermediaCallElement from './IntermediateCallElement';
import branch from '../high-order/Branch';

let styles = null;

const IntermediaCallElements = ({ intermediateCalls }) => {
  const calls = intermediateCalls.map((entry) => {
    return <IntermediaCallElement {...entry} />;
  });

  return (
    <div style={styles.intermediateCalls}>
      <div style={styles.intermediateCallsTitle}>
        Intermediate Calls
      </div>
      <div>{calls}</div>
    </div>
  );
};

IntermediaCallElements.propTypes = {
  intermediateCalls: PropTypes.arrayOf(Object).isRequired,
};

styles = {
  intermediateCalls: {
    marginTop: '5px',
  },
  intermediateCallsTitle: {
    color: '#DF740C',
    borderBottom: '1px solid #DF740C',
    marginBottom: '10px',
  },
};

export default branch(
  IntermediaCallElements,
  ({ intermediateCalls }) => {
    return intermediateCalls.length;
  },
  null
);
