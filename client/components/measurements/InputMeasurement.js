import React, {Component} from 'react';

class InputMeasurement extends Component {
  render() {
    const {kind, value, update, disabled} = this.props;
    const editEnabled = disabled;
    const styling = `input-measurement ${kind}`;
    let val;

    if (value) {
      val = editEnabled ? `${value}` : `${value}"`;
    } else {
      val = value;
    }

    return (
      <input
        className={styling}
        value={val}
        disabled={!editEnabled}
        onChange={e => update(kind, e.target.value)}
      />
    );
  }
}

export default InputMeasurement;
