import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FuncTester from '../components/FuncTester';
import { callFunctionWithValues, updateValues } from '../actions/TestingFunctionActions';

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      callFunctionWithValues,
      updateValues,
    },
    dispatch
  );
};

const mapStateToProps = (state) => {
  return {
    args: state.editor.editingFunction.args,
    functionName: state.editor.editingFunction.functionName,
    code: state.editor.editingFunction.code,
    result: state.functionTest.result,
    intermediateCalls: state.functionTest.intermediateCalls,
    values: state.functionTest.values,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FuncTester);
