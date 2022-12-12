import React, { Component } from 'react';

class WalletForm extends Component {
  async componentDidMount() {
    const response = fetch('https://economia.awesomeapi.com.br/json/all');
    const json = await response.json();
    return json;
  }

  render() {
    return (
      <div>
        <label htmlFor="valor-despesas">
          <input data-testid="value-input" id="valor-despesas" type="text" />
        </label>
        <label htmlFor="descricao-despesas">
          <input data-testid="description-input" id="descricao-despesas" type="text" />

        </label>

      </div>
    );
  }
}

export default WalletForm;
