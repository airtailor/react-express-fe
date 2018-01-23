import React, { Component } from 'react';

class DynamicImport extends Component {
  constructor() {
    super();
    this.state = {
      component: null,
    };
  }

  componentWillMount() {
    this.props.load().then(mod =>
      this.setState(() => ({
        component: mod.default,
      }))
    );
  }

  render() {
    console.log('DynamicImport', this.state);
    return this.props.children(this.state.component);
  }
}

export default DynamicImport;
