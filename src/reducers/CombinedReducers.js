import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import editor from './EditorReducers';
import functionTestReducer from './FunctionTestReducer';

export default combineReducers({
  editor,
  functionTest: functionTestReducer,
  router: routerReducer,
});
