import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import FunctionHeader from '../../components/editor/FunctionHeader';
import {
  setFunctionName,
  setFunctionArguments,
} from '../../actions/EditingFunctionActions';

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      setFunctionName,
      setFunctionArguments,
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(FunctionHeader);
