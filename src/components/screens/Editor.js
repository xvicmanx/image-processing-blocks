import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FunctionHeader from '../../containers/editor/FunctionHeader';
import FunctionBodyDrawer from '../../containers/editor/FunctionBodyDrawer';
import FuncTester from '../../containers/FuncTester';
import { boxShadow } from '../../helpers/StylingHelpers';
import logo from '../../assets/eye-logo.png';

let styles = null;

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidCatch(error) {
    this.setState({ error });
  }

  handleChange(bodyCode) {
    this.props.setFunctionBodyCode(bodyCode);
  }

  render() {
    return (
      <div style={styles.container}>
        <header style={styles.header}>
          <img
            src={logo}
            alt="logo"
            style={styles.logo}
          />
          <h1 style={styles.title}>
            Editor
          </h1>
        </header>
        <div>{this.state.error}</div>
        <div style={styles.content}>
          <div style={styles.leftContent}>
            <FunctionHeader />
            <br />
            <FunctionBodyDrawer
              onChange={this.handleChange}
            />
            <br />
            {'}'}
            
          </div>
          <div style={styles.rightContent}>
            <FuncTester />
          </div>
        </div>
      </div>
    );
  }
}

Editor.propTypes = {
  setFunctionBodyCode: PropTypes.func.isRequired,
};

styles = {
  container: {
    textAlign: 'left',
    fontSize: '24px',
  },
  content: {
    color: '#E6FFFF',
    padding: '0 40px',
  },
  header: {
    padding: '20px',
  },
  title: {
    fontSize: '1.5em',
    textAlign: 'center',
  },
  logo: {
    margin: 'auto',
    display: 'block',
    width: '80px',
    height: '80px',
  },
  rightContent: {
    width: '28%',
    display: 'inline-block',
    marginLeft: '2%',
    verticalAlign: 'top',
    ...boxShadow('0px 0px 20px 2px #6FC3DF'),
  },
  leftContent: {
    width: '70%',
    display: 'inline-block',
    verticalAlign: 'top',
    border: '1px solid #6FC3DF',
    borderRadius: '5px',
    ...boxShadow('0px 0px 20px 2px #6FC3DF'),
    padding: '20px',
    color: '#6FC3DF',
  },
};

export default Editor;
