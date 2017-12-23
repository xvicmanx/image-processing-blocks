import TestHelpers from '../../../TestHelpers';
import reducer from '../../../reducers/editor-reducers/EditingFunctionReducer';
import types from '../../../actions/EditingFunctionActions';


describe('EditingFunctionReducer', () => {
  it('should return the initial state', () => {
    // Arrange
    const expectedResult = {
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

    // Act
    const result = reducer(undefined, {});

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('should handle the "SET_FUNCTION_NAME" action', () => {
    // Arrange
    const previousState = { functionName: '' };
    const testName = TestHelpers.randomString();
    const expectedResult = {
      functionName: testName,
    };

    // Act
    const result = reducer(previousState, {
      type: types.SET_FUNCTION_NAME,
      name: testName,
    });

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('should handle the "SET_FUNCTION_ARGUMENTS" action', () => {
    // Arrange
    const previousState = { args: [] };
    const testArgs = TestHelpers.randomArrayOfStrings(10);
    const expectedResult = {
      args: testArgs,
    };

    // Act
    const result = reducer(previousState, {
      type: types.SET_FUNCTION_ARGUMENTS,
      args: testArgs,
    });

    // Assert
    expect(result).toEqual(expectedResult);
  });
});
