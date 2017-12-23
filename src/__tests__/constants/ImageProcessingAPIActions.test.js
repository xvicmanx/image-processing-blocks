import ImageProcessingAPIActions from '../../constants/ImageProcessingAPIActions';

describe('ImageProcessingAPIActions constants', () => {
  test('the constants have the expected values', () => {
    expect(ImageProcessingAPIActions.GRAY).toEqual('gray');
    expect(ImageProcessingAPIActions.DERIVATIVE_X).toEqual('dx');
    expect(ImageProcessingAPIActions.DERIVATIVE_Y).toEqual('dy');
    expect(ImageProcessingAPIActions.CANNY_EDGES).toEqual('canny_edges');
    expect(ImageProcessingAPIActions.BINARY).toEqual('binary');
    expect(ImageProcessingAPIActions.BINARY_INVERTED).toEqual('binary_inverted');
  });
});
