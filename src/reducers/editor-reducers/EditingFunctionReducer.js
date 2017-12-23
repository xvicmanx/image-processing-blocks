import EditingFunctionActions from '../../actions/EditingFunctionActions';

const editingFunctionDefaultState = {
  functionName: '',
  args: [
    {
      name: 'none',
      type: 'String',
    },
  ],
  code: '',
  blocklyWorkspace: '',
};

export default (
  state = editingFunctionDefaultState,
  action
) => {
  switch (action.type) {
  case EditingFunctionActions.SET_FUNCTION_NAME:
    return {
      ...state,
      functionName: action.name,
    };
  case EditingFunctionActions.SET_FUNCTION_ARGUMENTS:
    return {
      ...state,
      args: action.args,
    };
  case EditingFunctionActions.SET_FUNCTION_BODY_CODE:
    return {
      ...state,
      code: action.code,
    };
  default:
    return state;
  }
};
