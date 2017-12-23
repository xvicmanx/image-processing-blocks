import React from 'react';
import PropTypes from 'prop-types';

let styles = null;

const BlocklyToolbox = (props) => {
  const groupedByCategory = props.tools.reduce(
    (accumulated, item) => {
      const result = accumulated;
      result[item.category] = result[item.category] || [];
      result[item.category].push(item.name);
      return result;
    },
    {}
  );

  const elements = Object.keys(groupedByCategory).map((key) => {
    const blocks = groupedByCategory[key].map((type) => {
      return <block type={type} key={type} />;
    });
    return (
      <category
        key={key}
        name={key}
      >
        {blocks}
      </category>
    );
  });

  return (
    <xml
      style={styles.toolbox}
      ref={props.onRef}
    >
      {elements}
      <category name="Variables" custom="VARIABLE" />
      <category name="Functions" custom="PROCEDURE" />
      <category name="Values">
        <block type="math_number" />
        <block type="text" />
      </category>
      <category name="Lists">
        <block type="lists_create_empty" />
        <block type="lists_create_with" />
        <block type="lists_length" />
        <block type="lists_isEmpty" />
        <block type="lists_indexOf" />
        <block type="lists_getIndex" />
        <block type="lists_setIndex" />
      </category>
    </xml>
  );
};

BlocklyToolbox.defaultProps = {
  onRef: () => {},
};

BlocklyToolbox.propTypes = {
  onRef: PropTypes.func,
  tools: PropTypes.arrayOf(Object).isRequired,
};

styles = {
  toolbox: {
    display: 'none',
  },
};

export default BlocklyToolbox;
