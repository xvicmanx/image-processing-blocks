import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageInput from './general/ImageInput';
import StringInput from './general/StringInput';
import NumberInput from './general/NumberInput';
import Types from '../constants/BlocklyTypes';
import IntermediaCallElements from './func-tester/IntermediaCallElements';

let styles = null;

const inputsForTypes = {
  [Types.IMAGE]: ImageInput,
  [Types.STRING]: StringInput,
  [Types.NUMBER]: NumberInput,
};

class FuncTester extends Component {
  constructor(props) {
    super(props);
    this.handleRunPressed = this.handleRunPressed.bind(this);
  }

  handleRunPressed() {
    const {
      args,
      functionName,
      code,
      values,
    } = this.props;
    if (functionName) {
      this.props.callFunctionWithValues(
        {
          name: functionName,
          args,
          code,
        },
        args.map((arg) => { return values[arg.name]; })
      );
    }
  }

  render() {
    const inputs = this.props.args.map((arg) => {
      const Input = inputsForTypes[arg.type];
      return (
        <div key={arg.name}>
          {arg.name}:
          &nbsp;
          <Input
            name={arg.name}
            placeholder={`${arg.name}'s value`}
            onChange={(name, value) => {
              this.props.updateValues({
                [name]: value,
              });
            }}
            value={this.props.values[arg.name]}
          />
        </div>
      );
    });

    return (
      <div style={styles.container}>
        <h3>
          Run&nbsp;
          <span style={styles.functionName}>
            {this.props.functionName}
          </span>
          <br /> with
        </h3>
        {inputs}
        <button
          style={styles.runButton}
          onClick={this.handleRunPressed}
        >
          Run!!!
        </button>
        <IntermediaCallElements {...this.props} />
        <div style={styles.resultTitle}>
          Result
        </div>
        <img
          alt="Result"
          src={this.props.result}
          width="100%"
        />
      </div>
    );
  }
}

FuncTester.propTypes = {
  functionName: PropTypes.string.isRequired,
  args: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  })).isRequired,
  code: PropTypes.string.isRequired,
  callFunctionWithValues: PropTypes.func.isRequired,
  result: PropTypes.string.isRequired,
  values: PropTypes.instanceOf(Object).isRequired,
  intermediateCalls: PropTypes.arrayOf(Object).isRequired,
  updateValues: PropTypes.func.isRequired,
};

styles = {
  container: {
    backgroundColor: 'transparent',
    border: '1px solid #6fc3df',
    padding: '20px',
    fontSize: '16px',
    borderRadius: '5px',
    color: '#6fc3df',
  },
  functionName: {
    color: 'orange',
  },
  runButton: {
    backgroundColor: 'transparent',
    color: '#DF740C',
    border: '1px solid #DF740C',
    padding: '5px',
    width: '50%',
    margin: '20px auto',
    display: 'block',
    borderRadius: '5px',
    lineHeight: '35px',
    fontSize: '16px',
    fontWeight: 600,
    cursor: 'pointer',
  },
  resultTitle: {
    color: '#DF740C',
    borderBottom: '1px solid #DF740C',
    marginBottom: '10px',
  },
};

export default FuncTester;
