import TestHelpers from '../../TestHelpers';
import types, * as actions from '../../actions/EditingFunctionActions';

describe('EditingFunctionActions', () => {
  it('should create an action to set the name of the editing function', () => {
    const testName = TestHelpers.randomString();
    const expectedAction = {
      type: types.SET_FUNCTION_NAME,
      name: testName,
    };
    expect(actions.setFunctionName(testName)).toEqual(expectedAction);
  });

  it('should create an action to set the arguments of the editing function', () => {
    const testArgs = TestHelpers.randomArrayOfStrings(10);
    const expectedAction = {
      type: types.SET_FUNCTION_ARGUMENTS,
      args: testArgs,
    };
    expect(actions.setFunctionArguments(testArgs)).toEqual(expectedAction);
  });

  it('should create an action to set the body code of the editing function', () => {
    const testCode = TestHelpers.randomString();
    const expectedAction = {
      type: types.SET_FUNCTION_BODY_CODE,
      code: testCode,
    };
    expect(actions.setFunctionBodyCode(testCode)).toEqual(expectedAction);
  });

  it('should create an action to save the editing function to the localstorage', () => {
    const testFunction = {
      functionName: TestHelpers.randomString(),
    };
    const expectedAction = {
      type: types.FUNCTION_SAVED,
      funcInfo: testFunction,
    };

    const dispatch = jest.fn();
    global.localStorage = {
      setItem: jest.fn(),
    };

    actions.saveFunction(testFunction)(dispatch);

    expect(dispatch.mock.calls.length).toBe(1);
    expect(global.localStorage.setItem.mock.calls.length).toBe(1);
    expect(dispatch.mock.calls[0][0]).toEqual(expectedAction);
    expect(global.localStorage.setItem.mock.calls[0][0]).toBe(testFunction.functionName);
    expect(typeof global.localStorage.setItem.mock.calls[0][1]).toBe('string');
    const savedItem = JSON.parse(global.localStorage.setItem.mock.calls[0][1]);
    expect(typeof savedItem.updatedTime).toBe('number');
    delete savedItem.updatedTime;
    expect(savedItem).toEqual(testFunction);
  });
});
