import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addCurrencies, addExpenses, fetchExpenses } from '../redux/actions';

class WalletForm extends Component {
  constructor() {
    // const melao = 'Alimentação';
    super();

    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',

    };
  }

  async componentDidMount() {
    const { dispatch } = this.props;
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const json = await response.json();
    const moedas = delete json.USDT && Object.keys(json);
    dispatch(addCurrencies(moedas));
    return json;
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    console.log(target);
    this.setState({ [name]: value });
  };

  funcButton = async () => {
    const { dispatch } = this.props;
    const { id, value, description, currency, method, tag } = this.state;
    const exchangeRates = await dispatch(fetchExpenses());
    const expenses = {
      id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates,
    };
    dispatch(addExpenses(expenses));
    this.setState({
      id: (id + 1),
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: '',
    });
  };

  render() {
    const { description, value, currency, method, tag } = this.state;
    const { currencies } = this.props;
    const metodo = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const categoria = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (

      <form>
        <p>valor: </p>
        <label htmlFor="valor">
          <input
            placeholder="valor"
            onChange={ this.handleChange }
            name="value"
            value={ value }
            data-testid="value-input"
            id="valor"
            type="text"
          />
        </label>
        <p>descricao:</p>
        <label htmlFor="descricao-despesas">
          <input
            placeholder="descricao"
            onChange={ this.handleChange }
            name="description"
            value={ description }
            data-testid="description-input"
            id="descricao-despesas"
            type="text"
          />

        </label>

        <p>moeda:</p>
        <select
          value={ currency }
          name="currency"
          onChange={ this.handleChange }
          data-testid="currency-input"
        >

          {
            currencies.map((info) => (
              <option
                value={ info }
                key={ info }
                name=""
                data-testid="text-currency"

              >
                { info }
              </option>
            ))
          }
        </select>
        <p>metodo de pagamento:</p>
        <select
          data-testid="method-input"
          onChange={ this.handleChange }
          name="method"
          value={ method }
        >
          { metodo.map((sal) => (
            <option data-testid="method-input" key={ sal } value={ sal }>
              { sal }
            </option>
          ))}
        </select>
        <p>Categoria:</p>
        <select
          onChange={ this.handleChange }
          name="tag"
          value={ tag }
          data-testid="tag-input"
        >
          { categoria.map((category) => (
            <option
              data-testid="tag-input"
              key={ category }
            >
              { category }
            </option>
          )) }
        </select>
        <button onClick={ this.funcButton } type="button">Adicionar despesa</button>

      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

WalletForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }) }.isRequired;

export default connect(mapStateToProps)(WalletForm);
