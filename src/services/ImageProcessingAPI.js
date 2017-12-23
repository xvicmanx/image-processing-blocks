import RequestUtils from '../utils/RequestUtils';
import Endpoints from '../constants/Endpoints';
import API_ACTIONS from '../constants/ImageProcessingAPIActions';

const applyCVAction = (base64Image, CVAction) => {
  return RequestUtils.post(
    Endpoints.MAIN,
    {
      data: base64Image,
      actions: [CVAction],
    }
  ).then((res) => {
    return res.text();
  });
};

const applyDerivativeAction = (
  base64Image,
  derivative,
  kernelSize
) => {
  return applyCVAction(
    base64Image,
    {
      name: derivative,
      arguments: { kernel_size: kernelSize },
    }
  );
};

const applyBinaryAction = (
  base64Image,
  action,
  firstThreshold,
  secondThreshold
) => {
  return applyCVAction(
    base64Image,
    {
      name: action,
      arguments: {
        first_threshold: firstThreshold,
        second_threshold: secondThreshold,
      },
    }
  );
};

export default {
  gray: (base64Image) => {
    return applyCVAction(
      base64Image,
      {
        name: API_ACTIONS.GRAY,
        arguments: {},
      }
    );
  },
  derivativeX: (base64Image, kernelSize) => {
    return applyDerivativeAction(
      base64Image,
      API_ACTIONS.DERIVATIVE_X,
      kernelSize
    );
  },
  derivativeY: (base64Image, kernelSize) => {
    return applyDerivativeAction(
      base64Image,
      API_ACTIONS.DERIVATIVE_Y,
      kernelSize
    );
  },
  cannyEdges: (
    base64Image,
    firstThreshold,
    secondThreshold
  ) => {
    return applyBinaryAction(
      base64Image,
      API_ACTIONS.CANNY_EDGES,
      firstThreshold,
      secondThreshold
    );
  },
  binary: (
    base64Image,
    firstThreshold,
    secondThreshold
  ) => {
    return applyBinaryAction(
      base64Image,
      API_ACTIONS.BINARY,
      firstThreshold,
      secondThreshold
    );
  },
  binaryInverted: (
    base64Image,
    firstThreshold,
    secondThreshold
  ) => {
    return applyBinaryAction(
      base64Image,
      API_ACTIONS.BINARY_INVERTED,
      firstThreshold,
      secondThreshold
    );
  },
};
