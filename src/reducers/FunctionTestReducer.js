import TestingFunctionActions from '../actions/TestingFunctionActions';

const testDefaultState = {
  values: {},
  result: null,
  intermediateCalls: [],
};

export default (
  state = testDefaultState,
  action
) => {
  switch (action.type) {
  case TestingFunctionActions.FUNCTION_WITH_VALUES_CALL_RESULT:
    return {
      ...state,
      result: action.result,
    };
  case TestingFunctionActions.UPDATE_FUNCTION_CALLING_VALUES:
    return {
      ...state,
      values: {
        ...state.values,
        ...action.updateObj,
      },
    };
  case TestingFunctionActions.FUNCTION_WITH_VALUES_INTERMEDIATE_CALL_RESULT:
    return {
      ...state,
      intermediateCalls: [
        ...state.intermediateCalls,
        {
          result: action.result,
          values: action.values,
          name: action.name,
        },
      ],
    };
  case TestingFunctionActions.CLEAR_FUNCTION_WITH_VALUES_INTERMEDIATE_CALL_RESULTS:
    return {
      ...state,
      intermediateCalls: [],
    };
  default:
    return state;
  }
};
