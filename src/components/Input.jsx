import React, { Component } from 'react';

import '../styles/Input.css'

class Input extends Component {

  render() {
    const { type, name, value, handleChange } = this.props;

    return (
      <input 
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        required
      />
    );
  }
}

export default Input;