import React from 'react';

export default (
  WrappedComponent,
  conditional,
  defaultValue = null
) => {
  return class PP extends React.Component {
    render() {
      if (conditional(this.props)) {
        return <WrappedComponent {...this.props} />;
      }
      return defaultValue;
    }
  };
};
