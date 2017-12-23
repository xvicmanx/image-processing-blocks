import BlocklyTypes from '../../constants/BlocklyTypes';

describe('BlocklyTypes constants', () => {
  test('the constants have the expected values', () => {
    expect(BlocklyTypes.STRING).toEqual('String');
    expect(BlocklyTypes.BOOLEAN).toEqual('Boolean');
    expect(BlocklyTypes.NUMBER).toEqual('Number');
    expect(BlocklyTypes.ARRAY).toEqual('Array');
    expect(BlocklyTypes.IMAGE).toEqual('Image');
  });
});
