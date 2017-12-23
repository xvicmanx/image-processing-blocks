import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FuncNameInput extends Component {
  constructor(props) {
    super(props);
    this.state = { functionName: '' };
    this.handleFuncNameInput = this.handleFuncNameInput.bind(this);
  }

  handleFuncNameInput(event) {
    this.setState({ functionName: event.target.value });
    this.props.onChange(event.target.value);
  }

  render() {
    return (
      <input
        type="text"
        onInput={this.handleFuncNameInput}
        placeholder="funcName"
        value={this.state.functionName}
      />
    );
  }
}

FuncNameInput.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default FuncNameInput;
