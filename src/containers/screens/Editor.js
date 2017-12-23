import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Editor from '../../components/screens/Editor';
import { setFunctionBodyCode } from '../../actions/EditingFunctionActions';

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { setFunctionBodyCode },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(Editor);
