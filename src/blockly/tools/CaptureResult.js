import Blockly from 'node-blockly/browser';

export default {
  name: 'capture_result',
  category: 'Func Tools',
  block: {
    init: function () {
      this.jsonInit({
        message0: 'Capture Result %1',
        args0: [
          {
            type: 'input_value',
            name: 'VALUE',
          },
        ],
        colour: 160,
        tooltip: 'Captures the result',
        previousStatement: 'Action',
      });
    },
  },
  generator: (block) => {
    const text = Blockly.JavaScript.valueToCode(
      block,
      'VALUE',
      Blockly.JavaScript.ORDER_MEMBER
    ) || '\'\'';
    const code = `return ${text}`;
    return [code, Blockly.JavaScript.ORDER_MEMBER];
  },
};
