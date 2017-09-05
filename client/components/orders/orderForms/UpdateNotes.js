import React, { Component } from 'react';

const setNotesType = (role, order) => {
  console.log('setNotesType role order', role, order)
  if (role === 'tailor'){
    console.log('setNotesType tailor', order.provider_notes)
    return order.provider_notes;
  } else if ((role === 'admin' ) || (role === 'retailer')){
    return order.requester_notes || '';
  }
}

class UpdateNotesForm extends Component{
  constructor(props){
    super();
    this.state = {
      displayNotes: true,
      notes: props.notes
    }
  }

  handleSubmit(e, order){
    e.preventDefault();
    const notes = e.target.children.notes.value;
    this.props.submitNotes(notes, order)
  }

  handleChange(value){
    this.setState({notes:value});
  }

  render(){
    const {order, submitNotes, role} = this.props;
    const {displayNotes} = this.state;

    if (displayNotes){
      return (
        <form className='notes-form' onSubmit={(e) => this.handleSubmit(e, order)}>
          <textarea
            name='notes'
            value={setNotesType(role, order)}
            onChange={e => this.handleChange(e.target.value)}
            cols={43} rows={10}>

          </textarea>
          <br />
          <input className='short-button' type="submit" value="Update Notes" />
          <hr />
        </form>
      );
    } else {
      return <div></div>
    }
  }
}

export default UpdateNotesForm;
