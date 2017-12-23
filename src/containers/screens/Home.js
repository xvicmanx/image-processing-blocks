import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { readFunctions } from '../../actions/EditingFunctionActions';
import Home from '../../components/screens/Home';

const mapStateToProps = (state) => {
  console.log(state.editor);
  return {
    funcs: state.editor.savedFunctions,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { readFunctions },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
