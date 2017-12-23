import ImageProcessingAPI from '../services/ImageProcessingAPI';
import CompileUtils from '../utils/CompilationUtils';
import { wrapForLogging } from '../helpers/MainHelpers';

const Types = {
  FUNCTION_WITH_VALUES_CALLED: 'FUNCTION_WITH_VALUES_CALLED',
  UPDATE_FUNCTION_CALLING_VALUES: 'UPDATE_FUNCTION_CALLING_VALUES',
  FUNCTION_WITH_VALUES_CALL_RESULT: 'FUNCTION_WITH_VALUES_CALL_RESULT',
  FUNCTION_WITH_VALUES_INTERMEDIATE_CALL_RESULT: 'FUNCTION_WITH_VALUES_INTERMEDIATE_CALL_RESULT',
  CLEAR_FUNCTION_WITH_VALUES_INTERMEDIATE_CALL_RESULTS: 'CLEAR_FUNCTION_WITH_VALUES_INTERMEDIATE_CALL_RESULTS',
};

export const updateValues = (updateObj) => {
  return {
    type: Types.UPDATE_FUNCTION_CALLING_VALUES,
    updateObj,
  };
};

export const callFunctionWithValues = (funcInfo, values) => {
  return (dispatch) => {
    dispatch({
      type: Types.FUNCTION_WITH_VALUES_CALLED,
      name: funcInfo.name,
      values,
    });

    (async () => {
      const wrapped = wrapForLogging(ImageProcessingAPI, (name, vals, result) => {
        dispatch({
          type: Types.FUNCTION_WITH_VALUES_INTERMEDIATE_CALL_RESULT,
          name,
          values: vals,
          result,
        });
      });

      dispatch({
        type: Types.CLEAR_FUNCTION_WITH_VALUES_INTERMEDIATE_CALL_RESULTS,
      });

      CompileUtils.compile(
        wrapped,
        funcInfo.name,
        Array.from(funcInfo.args.map((a) => { return a.name; })),
        funcInfo.code
      );

      dispatch({
        type: Types.FUNCTION_WITH_VALUES_CALL_RESULT,
        name: funcInfo.name,
        values,
        result: await wrapped[funcInfo.name](...values),
      });
    })();
  };
};

export default Types;
