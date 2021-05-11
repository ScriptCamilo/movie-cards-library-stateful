import React, { Component } from 'react';
import Input from './Input';

import '../styles/Form.css'

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      state: '',
      house: '',
    }
  };

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {

    return (
      <form id="main-form">
        <fieldset>
          <legend>Dados pessoais</legend>
        </fieldset>
      </form>
    );
  }
}

export default Form;