import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addCurrencies, addExpenses, fetchExpenses } from '../redux/actions';

class WalletForm extends Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USDT',
      method: 'Dinheiro',
      tag: '',

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
      currency: 'USDT',
      method: 'Dinheiro',
      tag: 'Alimentação',
    });
  };

  render() {
    const { description, value, currency } = this.state;
    const { currencies } = this.props;
    const metodo = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const categoria = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (

      <form>
        <p>valor: </p>
        <label htmlFor="valor">
          <input
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
                id="text-currency"
              >
                { info }
              </option>
            ))
          }
        </select>
        <p>metodo de pagamento:</p>
        <select data-testid="method-input" name="" id="">
          { metodo.map((sal) => (
            <option key={ sal } value={ sal }>
              { sal }
            </option>
          ))}
        </select>
        <p>Categoria:</p>
        <select data-testid="tag-input" name="" id="">
          { categoria.map((category) => (
            <option key={ category } value="">
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
