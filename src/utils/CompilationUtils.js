export default {
  compile: (
    ImageProcessingAPI,
    functionName,
    argNames,
    bodyCode
  ) => {
    const resultingCode = `
      ImageProcessingAPI.${functionName} = async function (${argNames.join(', ')}) {
        ${bodyCode}
      };
    `;
    eval(resultingCode);
  },
};
