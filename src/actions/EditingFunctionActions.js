const Types = {
  SET_FUNCTION_NAME: 'SET_FUNCTION_NAME',
  SET_FUNCTION_ARGUMENTS: 'SET_FUNCTION_ARGUMENTS',
  SET_FUNCTION_BODY_CODE: 'SET_FUNCTION_BODY_CODE',
  FUNCTION_SAVED: 'FUNCTION_SAVED',
  FUNCTIONS_READ: 'FUNCTIONS_READ',
};

export const setFunctionName = (name) => {
  return {
    type: Types.SET_FUNCTION_NAME,
    name,
  };
};

export const setFunctionArguments = (args) => {
  return {
    type: Types.SET_FUNCTION_ARGUMENTS,
    args,
  };
};

export const setFunctionBodyCode = (code) => {
  return {
    type: Types.SET_FUNCTION_BODY_CODE,
    code,
  };
};

export const saveFunction = (funcInfo) => {
  return (dispatch) => {
    if (window.localStorage) {
      window.localStorage.setItem(
        funcInfo.functionName,
        JSON.stringify({
          ...funcInfo,
          updatedTime: new Date().getTime(),
        })
      );
      dispatch({
        type: Types.FUNCTION_SAVED,
        funcInfo,
      });
    }
  };
};

export const readFunctions = () => {
  return (dispatch) => {
    if (window.localStorage) {
      const results = [];
      for (let i = 0; i < window.localStorage.length; i += 1) {
        results.push(JSON.parse(window.localStorage.getItem(window.localStorage.key(i))));
      }

      dispatch({
        type: Types.FUNCTIONS_READ,
        storedFunctions: results.sort((a, b) => {
          return a.updatedTime > b.updatedTime;
        }),
      });
    }
  };
};

export default Types;
