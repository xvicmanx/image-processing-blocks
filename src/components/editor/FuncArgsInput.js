import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TypesSelect from '../general/TypesSelect';
import Types from '../../constants/BlocklyTypes';

let styles = null;

const getValidArgs = (args) => {
  return Object.keys(args).map((k) => {
    return args[k];
  }).filter((a) => {
    return !!a && a.name && a.type;
  });
};

const defaultArg = (name = '') => {
  return {
    name,
    type: Types.STRING,
  };
};

class FuncArgsInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      args: { 0: defaultArg('image') },
    };
    this.handleArgInput = this.handleArgInput.bind(this);
    this.handleAddArg = this.handleAddArg.bind(this);
    this.updateArgType = this.updateArgType.bind(this);
  }

  componentDidMount() {
    this.props.onChange(getValidArgs(this.state.args));
  }

  updateArgType(argKey, type) {
    const index = parseInt(argKey, 10);
    const args = {
      ...this.state.args,
      [index]: {
        ...this.state.args[index],
        type,
      },
    };
    this.setState({ args });
    this.props.onChange(getValidArgs(args));
  }

  handleAddArg() {
    const keys = Object.keys(this.state.args);
    const index = keys.length > 0 ? Math.max(keys) + 1 : 0;
    this.setState({
      args: {
        ...this.state.args,
        [index]: defaultArg(),
      },
    });
  }

  handleArgInput(event) {
    const index = parseInt(event.target.name, 10);
    const args = {
      ...this.state.args,
      [index]: {
        ...this.state.args[index],
        name: event.target.value,
      },
    };
    this.setState({ args });
    this.props.onChange(getValidArgs(args));
  }

  render() {
    const keys = Object.keys(this.state.args);
    const argsInputs = keys.map((key) => {
      return (
        <span key={key}>
          <TypesSelect
            onChange={(type) => {
              this.updateArgType(key, type);
            }}
          />
          &nbsp;
          <input
            type="text"
            placeholder="Argument"
            name={key}
            value={this.state.args[key].name}
            onChange={this.handleArgInput}
          />
          &nbsp;
          {key < keys.length - 1 ? ', ' : ''}
        </span>
      );
    });

    return (
      <div style={styles.container}>
        {argsInputs}
        <button
          style={styles.addButton}
          onClick={this.handleAddArg}
        >
          +
        </button>
      </div>
    );
  }
}

FuncArgsInput.propTypes = {
  onChange: PropTypes.func.isRequired,
};

styles = {
  container: {
    display: 'inline-block',
  },
  addButton: {
    backgroundColor: 'transparent',
    color: '#DF740C',
    fontWeight: '600',
    border: '1px solid #DF740C',
    borderRadius: '3px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default FuncArgsInput;
