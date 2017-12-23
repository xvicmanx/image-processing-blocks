import randomstring from 'randomstring';

const TestHelpers = {
  randomString: () => {
    return randomstring.generate();
  },
  randomInt: (min, max) => {
    return Math.floor((Math.random() * ((max - min) + 1)) + min);
  },
  randomArrayOfStrings: (maxSize) => {
    const N = TestHelpers.randomInt(2, maxSize);
    const result = [];
    for (let i = 0; i < N; i += 1) {
      result.push(randomstring.generate());
    }
    return result;
  },
};

export default TestHelpers;
