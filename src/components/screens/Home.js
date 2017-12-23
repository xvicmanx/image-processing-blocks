import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ImageProcessingAPI from '../../services/ImageProcessingAPI';
import CompilationUtils from '../../utils/CompilationUtils';
import ImageInput from '../general/ImageInput';
import { boxShadow } from '../../helpers/StylingHelpers';

let styles = null;

const compile = (func) => {
  CompilationUtils.compile(
    ImageProcessingAPI,
    func.functionName,
    func.args.map((a) => {
      return a.name;
    }),
    func.code
  );
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenImage: '',
      result: '',
    };
    this.funcsCompiled = false;
  }

  componentWillMount() {
    this.props.readFunctions();
  }

  compileFuncs() {
    if (!this.funcsCompiled) {
      this.props.funcs.forEach(compile);
      this.funcsCompiled = true;
    }
  }

  render() {
    const elements = this.props.funcs.map((f) => {
      return (
        <li
          style={styles.filterItem}
          key={f.name}
        >
          <button
            style={styles.filterItemButton}
            onClick={async () => {
              this.compileFuncs();
              const result = await ImageProcessingAPI[f.functionName](this.state.chosenImage);
              this.setState({ result });
            }}
          >
            {f.functionName}
          </button>
        </li>
      );
    });

    return (
      <div style={styles.container}>
        <h1 style={styles.title}>Apply Filters</h1>
        <div style={styles.filters}>
          <h3>Filters</h3>
          <ul style={styles.filtersList}>{elements}</ul>
          <Link to="/edit">Create a new one</Link>
        </div>
        <div style={styles.source}>
          <div style={styles.sourceTitle}>Input</div>
          <ImageInput
            name="image"
            placeholder="Picture's url"
            onChange={(name, value) => {
              this.setState({ chosenImage: value });
            }}
            previewWidth="100%"
          />
        </div>
        <div style={styles.output}>
          <div style={styles.sourceTitle}>Output</div>
          <img
            width="100%"
            alt="result"
            src={this.state.result}
          />
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  funcs: PropTypes.arrayOf(PropTypes.shape({
    functionName: PropTypes.string,
    args: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    })),
    code: PropTypes.string.isRequired,
    blocklyWorkspace: PropTypes.string.isRequired,
  })).isRequired,
  readFunctions: PropTypes.func.isRequired,
};

styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
  },
  title: {
    paddingBottom: '40px',
  },
  filters: {
    width: '20%',
    display: 'inline-block',
    border: '1px solid #6FC3DF',
    borderRadius: '5px',
    minHeight: '400px',
    ...boxShadow('0px 0px 20px 2px #6FC3DF'),
  },
  filtersList: {
    listStyle: 'none',
    padding: 0,
  },
  source: {
    width: '38%',
    display: 'inline-block',
    verticalAlign: 'top',
    border: '1px solid #6FC3DF',
    borderRadius: '5px',
    minHeight: '400px',
    margin: '0 1%',
    ...boxShadow('0px 0px 20px 2px #6FC3DF'),
    padding: '20px',
  },
  sourceTitle: {
    paddingBottom: '10px',
  },
  output: {
    width: '38%',
    display: 'inline-block',
    verticalAlign: 'top',
    border: '1px solid #6FC3DF',
    borderRadius: '5px',
    minHeight: '400px',
    margin: '0 1%',
    ...boxShadow('0px 0px 20px 2px #6FC3DF'),
    padding: '20px',
  },
  outputTitle: {
    paddingBottom: '10px',
  },
  filterItem: {
    width: '100%',
    backgroundColor: 'transparent',
    borderTop: '1px solid #6FC3DF',
    borderBottom: '1px solid #6FC3DF',
    cursor: 'pointer',
    marginTop: '-1px',
  },
  filterItemButton: {
    width: '100%',
    backgroundColor: 'transparent',
    border: 'none',
    lineHeight: '30px',
    color: '#6FC3DF',
    cursor: 'pointer',
  },
};

export default Home;
