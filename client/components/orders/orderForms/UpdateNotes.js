import React, { Component } from 'react';

const setNotesType = (roles, order) => {
  if (roles.tailor) {
    return order.provider_notes;
  } else if (roles.admin || roles.retailer) {
    return order.requester_notes || '';
  }
};

class UpdateNotesForm extends Component {
  constructor(props) {
    super();
    this.state = {
      displayNotes: true,
      notes: props.notes,
    };
  }

  handleSubmit(e, order) {
    e.preventDefault();
    const notes = e.target.children.notes.value;
    this.props.submitNotes(notes, order);
  }

  handleChange(value) {
    this.setState({ notes: value });
  }

  render() {
    const { order, submitNotes, roles } = this.props;
    const { displayNotes } = this.state;

    if (displayNotes) {
      return (
        <form
          className="notes-form"
          onSubmit={e => this.handleSubmit(e, order)}
        >
          <textarea
            name="notes"
            value={setNotesType(roles, order)}
            onChange={e => this.handleChange(e.target.value)}
            cols={43}
            rows={10}
          />
          <br />
          <input className="short-button" type="submit" value="Update Notes" />
          <hr />
        </form>
      );
    } else {
      return <div />;
    }
  }
}

export default UpdateNotesForm;
