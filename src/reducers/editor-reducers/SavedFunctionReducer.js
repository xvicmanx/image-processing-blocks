import EditingFunctionActions from '../../actions/EditingFunctionActions';

export default (
  state = [],
  action
) => {
  switch (action.type) {
  case EditingFunctionActions.FUNCTIONS_READ:
    return action.storedFunctions;
  default:
    return state;
  }
};
