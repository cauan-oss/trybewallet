import React, { Component } from 'react';

class WalletForm extends Component {
  state = {
    infoFetch: '',
  };

  async componentDidMount() {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const json = await response.json();
    console.log(json);
    this.setState({ infoFetch: json });
    return json;
  }

  render() {
    const { infoFetch } = this.state;
    const infoArray = Object.keys(infoFetch);
    return (

      <form>
        <label htmlFor="valor-despesas">
          <input data-testid="value-input" id="valor-despesas" type="text" />
        </label>
        <label htmlFor="descricao-despesas">
          <input data-testid="description-input" id="descricao-despesas" type="text" />

        </label>
        <select name="" id="tex">
          {infoArray
            .map((info) => (
              <option
                key={ info }
                data-testid="currency-input"
                name=""
                id="text-currency"
              >
                { info }
              </option>
            ))}
        </select>

      </form>
    );
  }
}

export default WalletForm;
