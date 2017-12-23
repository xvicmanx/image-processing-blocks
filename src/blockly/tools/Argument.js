export default (args, type) => {
  const options = args.filter((arg) => {
    return arg.type === type;
  }).map((arg) => {
    return [arg.name, arg.name];
  });
  return {
    name: `${type}_argument`,
    category: 'Func Tools',
    block: {
      init: function () {
        const config = {
          message0: `${type}Arg`,
          output: type,
          colour: 160,
          tooltip: 'Grabs an argument',
        };
        if (options.length) {
          config.message0 = `${type}Arg %1`;
          config.args0 = [
            {
              type: 'field_dropdown',
              name: 'ARGUMENT',
              options,
            },
          ];
        }
        this.jsonInit(config);
      },
    },
    generator: (block) => {
      return [
        block.getFieldValue('ARGUMENT'),
      ];
    },
  };
};
