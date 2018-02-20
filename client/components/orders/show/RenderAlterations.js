import React, { Component } from 'react';
import { isEmpty } from 'lodash';

class RenderAlterations extends Component {
  renderAlt(alt, index) {
    return (
      <p key={index} className="cart-alteration">
        <span>{alt.name}</span>
      </p>
    );
  }

  render() {
    const { alterations } = this.props.garment;
    if (isEmpty(alterations)) {
      return <div />;
    }

    return <div>{alterations.map(this.renderAlt)}</div>;
  }
}

export default RenderAlterations;
