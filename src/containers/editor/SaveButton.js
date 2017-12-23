import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SaveButton from '../../components/editor/SaveButton';
import { saveFunction } from '../../actions/EditingFunctionActions';

const mapStateToProps = (state) => {
  return { funcInfo: state.editor.editingFunction };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { saveFunction },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SaveButton);
