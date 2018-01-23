import React, { Component } from 'react';
import DynamicImport from '../../DynamicImport';

function WithDynamicImport(importCallback) {
  return class WithDynamicImport extends Component {
    render() {
      return (
        <DynamicImport load={importCallback}>
          {Component =>
            Component === null ? <div /> : <Component {...this.props} />}
        </DynamicImport>
      );
    }
  };
}

export default WithDynamicImport;
