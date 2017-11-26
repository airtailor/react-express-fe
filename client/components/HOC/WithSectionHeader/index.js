import React, {Component} from 'react';
import SectionHeader from '../../SectionHeader';
import {getSectionHeaderText} from './helper';

function WithSectionHeader(WrappedComponent) {
  return class WithSectionHeader extends Component {
    constructor() {
      super();
      this.state = {
        text: '',
      };
    }

    componentDidMount() {
      const text = getSectionHeaderText(this.props);
      this.setState({text});
    }

    render() {
      return (
        <div>
          <SectionHeader text={this.state.text} />
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  };
}

export default WithSectionHeader;
