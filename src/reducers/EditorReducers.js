import { combineReducers } from 'redux';
import editingFunction from './editor-reducers/EditingFunctionReducer';
import savedFunctions from './editor-reducers/SavedFunctionReducer';

export default combineReducers({
  editingFunction,
  savedFunctions,
});
