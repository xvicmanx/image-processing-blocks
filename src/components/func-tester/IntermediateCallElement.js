import React from 'react';
import PropTypes from 'prop-types';

let styles = null;

const componentForValue = (value) => {
  if (value && value.toString().indexOf('data:image') > -1) {
    return (
      <img
        width="120"
        src={value}
        alt="result"
      />
    );
  }
  return <div>{value}</div>;
};

const IntermediaCallElement = ({ values, name, result }) => {
  const vals = Object.keys(values).map((key) => {
    return (
      <div key={key} style={styles.arg}>
        <div style={styles.argKey}>{key}</div>
        <div style={styles.argValue}>
          {componentForValue(values[key])}
        </div>
      </div>
    );
  });
  return (
    <div style={styles.container}>
      <div style={styles.name}>
        {name}
      </div>
      <div style={styles.args}>
        <div style={styles.argsTitle}>
          Arguments
        </div>
        {vals}
      </div>
      <div style={styles.result}>
        <div style={styles.resultTitle}>
          Result
        </div>
        <div style={styles.resultContent}>
          {componentForValue(result)}
        </div>
      </div>
    </div>
  );
};

IntermediaCallElement.propTypes = {
  name: PropTypes.string.isRequired,
  result: PropTypes.string.isRequired,
  values: PropTypes.instanceOf(Object).isRequired,
};

styles = {
  container: {
    border: '1px solid #6FC3DF',
    borderRadius: '5px',
    padding: '5px',
    marginTop: '5px',
    marginBottom: '20px',
  },
  name: {
    borderBottom: '1px solid #DF740C',
    textTransform: 'uppercase',
    color: '#DF740C',
  },
  args: {
    border: '1px solid #6FC3DF',
    borderRadius: '5px',
    padding: '5px',
    margin: '5px auto',
  },
  argsTitle: {
    color: '#DF740C',
    marginTop: '5px',
    borderBottom: '1px solid #DF740C',
  },
  result: {
    border: '1px solid #6FC3DF',
    borderRadius: '5px',
    padding: '5px',
    margin: '5px auto',
  },
  resultTitle: {
    color: '#DF740C',
    borderBottom: '1px solid #DF740C',
  },
  resultContent: {
    padding: '10px',
    margin: 'auto',
    textAlign: 'center',
  },
  arg: {
    padding: '10px 5px',
  },
  argKey: {
    display: 'inline-block',
    paddingRight: '5px',
  },
  argValue: {
    display: 'inline-block',
    verticalAlign: 'middle',
  },
};

export default IntermediaCallElement;
