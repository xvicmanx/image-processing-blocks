import { connect } from 'react-redux';
import FunctionBodyDrawer from '../../components/editor/FunctionBodyDrawer';

const mapStateToProps = (state) => {
  return { args: state.editor.editingFunction.args };
};

export default connect(mapStateToProps)(FunctionBodyDrawer);
