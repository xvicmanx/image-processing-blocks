import Blockly from 'node-blockly/browser';

export default {
  name: 'execute',
  category: 'Library',
  block: {
    init: function () {
      this.jsonInit({
        message0: 'Execute %1',
        message1: 'With %1',
        args0: [
          {
            type: 'field_input',
            name: 'ACTION',
            check: 'String',
          },
        ],
        args1: [
          {
            type: 'input_value',
            name: 'VALUES',
            check: 'Array',
          },
        ],
        output: 'String',
        nextStatement: 'Action',
        previousStatement: 'Action',
        colour: 160,
        tooltip: 'Executes something',
      });
    },
  },
  generator: (block) => {
    const action = `'${block.getFieldValue('ACTION')}'` || '\'\'';
    const values = Blockly.JavaScript.valueToCode(
      block,
      'VALUES',
      Blockly.JavaScript.ORDER_MEMBER
    ) || [];
    const code = `ImageProcessor.execute(${action}, ${values.toString()})`;
    return [code, Blockly.JavaScript.ORDER_MEMBER];
  },
};
