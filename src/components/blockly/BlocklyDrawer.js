import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Blockly from 'node-blockly/browser';
import BlocklyToolbox from './BlocklyToolbox';

let styles = null;

const initTools = (tools) => {
  tools.forEach((tool) => {
    Blockly.Blocks[tool.name] = tool.block;
    Blockly.JavaScript[tool.name] = tool.generator;
  });
};

class BlocklyDrawer extends Component {
  constructor(props) {
    super(props);
    this.onResize = this.onResize.bind(this);
    this.wrapper = null;
    this.content = null;
  }

  componentWillMount() {
    initTools(this.props.tools);
  }

  componentDidMount() {
    window.addEventListener(
      'resize',
      this.onResize,
      false
    );
    this.onResize();

    const workspacePlayground = Blockly.inject(
      this.content,
      { toolbox: this.toolbox }
    );

    Blockly.svgResize(workspacePlayground);

    workspacePlayground.addChangeListener(() => {
      const code = Blockly.JavaScript.workspaceToCode(workspacePlayground);
      const xml = Blockly.Xml.workspaceToDom(workspacePlayground);
      const xmlText = Blockly.Xml.domToText(xml);
      this.props.onChange(code, xmlText);
    });
  }

  componentWillReceiveProps(nextProps) {
    initTools(nextProps.tools);
  }

  componentWillUnmount() {
    window.removeEventListener(
      'resize',
      this.onResize
    );
  }

  onResize() {
    let x = 0;
    let y = 0;
    let element = this.wrapper;
    do {
      x += element.offsetLeft;
      y += element.offsetTop;
      element = element.offsetParent;
    } while (element);

    this.content.style.left = `${x}px`;
    this.content.style.top = `${y}px`;
    this.content.style.width = `${this.wrapper.offsetWidth}px`;
    this.content.style.height = `${this.wrapper.offsetHeight}px`;
  }

  render() {
    return (
      <div
        style={styles.wrapper}
        ref={(wrapper) => {
          this.wrapper = wrapper;
        }}
      >
        <div
          style={styles.content}
          ref={(content) => {
            this.content = content;
          }}
        />
        <BlocklyToolbox
          onRef={(toolbox) => {
            this.toolbox = toolbox;
          }}
          tools={this.props.tools}
        />
      </div>
    );
  }
}

BlocklyDrawer.defaultProps = {
  onChange: () => {},
};

BlocklyDrawer.propTypes = {
  tools: PropTypes.arrayOf(Object).isRequired,
  onChange: PropTypes.func,
};

styles = {
  wrapper: {
    minHeight: '400px',
  },
  content: {
    position: 'absolute',
  },
};

export default BlocklyDrawer;
