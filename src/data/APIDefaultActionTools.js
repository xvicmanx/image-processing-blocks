import Dynamic from '../blockly/tools/Dynamic';
import Types from '../constants/BlocklyTypes';

export default [
  Dynamic(
    'derivativeX',
    [
      {
        name: 'base64Image',
        type: Types.IMAGE,
      },
      {
        name: 'kernelSize',
        type: Types.NUMBER,
      },
    ],
    Types.IMAGE
  ),
  Dynamic(
    'derivativeY',
    [
      {
        name: 'base64Image',
        type: Types.IMAGE,
      },
      {
        name: 'kernelSize',
        type: Types.NUMBER,
      },
    ],
    Types.IMAGE
  ),
  Dynamic(
    'binary',
    [
      {
        name: 'base64Image',
        type: Types.IMAGE,
      },
      {
        name: 'firstThreshold',
        type: Types.NUMBER,
      },
      {
        name: 'secondThreshold',
        type: Types.NUMBER,
      },
    ],
    Types.IMAGE
  ),
  Dynamic(
    'binaryInverted',
    [
      {
        name: 'base64Image',
        type: Types.IMAGE,
      },
      {
        name: 'firstThreshold',
        type: Types.NUMBER,
      },
      {
        name: 'secondThreshold',
        type: Types.NUMBER,
      },
    ],
    Types.IMAGE
  ),
  Dynamic(
    'cannyEdges',
    [
      {
        name: 'base64Image',
        type: Types.IMAGE,
      },
      {
        name: 'firstThreshold',
        type: Types.NUMBER,
      },
      {
        name: 'secondThreshold',
        type: Types.NUMBER,
      },
    ],
    Types.IMAGE
  ),
  Dynamic(
    'gray',
    [
      {
        name: 'base64Image',
        type: Types.IMAGE,
      },
    ],
    Types.IMAGE
  ),
];
