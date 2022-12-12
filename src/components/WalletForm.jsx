import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addCurrencies } from '../redux/actions';

class WalletForm extends Component {
  state = {
    // infoFetch: '',
  };

  async componentDidMount() {
    const { dispatch } = this.props;
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const json = await response.json();
    const moedas = delete json.USDT && Object.keys(json);
    dispatch(addCurrencies(moedas));
    console.log(json);
    // this.setState({ infoFetch: json });
    return json;
  }

  render() {
    const { currencies } = this.props;
    const metodo = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const categoria = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (

      <form>
        <p>valor: </p>
        <label htmlFor="valor-despesas">
          <input data-testid="value-input" id="valor-despesas" type="text" />
        </label>
        <p>descricao:</p>
        <label htmlFor="descricao-despesas">
          <input data-testid="description-input" id="descricao-despesas" type="text" />

        </label>

        <p>moeda:</p>
        <select>

          {
            currencies.map((info) => (
              <option
                value={ info }
                key={ info }
                data-testid="currency-input"
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
            <option key={ sal } value={ info }>
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
        <button type="button">Adicionar despesa</button>

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
