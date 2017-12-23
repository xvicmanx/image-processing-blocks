import Blockly from 'node-blockly/browser';
import Types from '../../constants/BlocklyTypes';

export default (
  name,
  args = [],
  output = Types.STRING
) => {
  const argsDefinition = args.reduce((
    accumulated,
    arg,
    index
  ) => {
    const argKey = `args${index}`;
    const messageKey = `message${index}`;
    const result = accumulated;
    result[argKey] = [];

    if (index === 0) {
      result[argKey] = [
        name,
        { type: 'input_dummy' },
      ];
    }

    result[argKey].push({
      type: 'input_value',
      name: arg.name,
      check: arg.type,
    });

    result[messageKey] = index ?
      `with ${arg.name} %1` :
      `%1 %2 with ${arg.name} %3`;

    return result;
  }, {});

  return {
    name,
    category: 'Library',
    block: {
      init: function () {
        this.jsonInit({
          ...argsDefinition,
          output,
          nextStatement: 'Action',
          previousStatement: 'Action',
          colour: 200,
          tooltip: `Executes ${name}`,
        });
      },
    },
    generator: (block) => {
      const values = args.map((arg) => {
        return Blockly.JavaScript.valueToCode(
          block,
          arg.name,
          Blockly.JavaScript.ORDER_MEMBER
        ) || '';
      });
      const joinedValues = values.toString().replace('[', '').replace(']', '');
      const code = `await ImageProcessingAPI.${name}(${joinedValues})`;
      return [code, Blockly.JavaScript.ORDER_MEMBER];
    },
  };
};
