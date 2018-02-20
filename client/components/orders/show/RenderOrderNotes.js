import React, { Component } from 'react';
import OrderNote from './OrderNote';

class RenderOrderNotes extends Component {
  render() {
    const { userRoles: { admin, retailer, tailor } } = this.props;
    const orderNotesTitle = 'ORDER NOTES';
    const tailorNotesTitle = 'TAILOR NOTES';

    if (retailer) {
      return (
        <OrderNote
          {...this.props}
          title={orderNotesTitle}
          field="requester_notes"
        />
      );
    } else if (tailor) {
      return (
        <div>
          <OrderNote
            {...this.props}
            title={orderNotesTitle}
            field="requester_notes"
          />

          <OrderNote
            {...this.props}
            title={tailorNotesTitle}
            field="provider_notes"
          />
        </div>
      );
    } else if (admin) {
      return (
        <div>
          <OrderNote
            {...this.props}
            title={tailorNotesTitle}
            field="provider_notes"
          />
          <OrderNote
            {...this.props}
            title={orderNotesTitle}
            field="requester_notes"
          />
        </div>
      );
    }
  }
}

export default RenderOrderNotes;
