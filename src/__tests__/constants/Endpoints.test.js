import Endpoints from '../../constants/Endpoints';

describe('Endpoints contstants', () => {
  test('the constants have the expected values', () => {
    expect(Endpoints.MAIN).toEqual('http://localhost:3005/');
  });
});
