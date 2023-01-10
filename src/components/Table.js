import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionDelete } from '../redux/actions';

class Table extends Component {
  funcDelete = (id) => {
    const { dispatch, expenses } = this.props;
    dispatch(actionDelete(id, expenses));
  };

  render() {
    const { expenses } = this.props;
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão </th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          {
            expenses.map((x) => (
              <tbody key={ x.id }>
                <tr>
                  <td>{x.description}</td>
                  <td>{x.tag}</td>
                  <td>{x.method}</td>
                  <td>{(x.value * 1).toFixed(2)}</td>
                  <td>{ x.exchangeRates[x.currency].name}</td>
                  <td>{ (x.exchangeRates[x.currency].ask * 1).toFixed(2) }</td>
                  <td>{ (x.value * x.exchangeRates[x.currency].ask).toFixed(2) }</td>
                  <td>
                    <button
                      type="button"
                      onClick={ () => this.funcDelete(x.id) }
                      data-testid="delete-btn"
                    >
                      Excluir

                    </button>
                  </td>
                </tr>
              </tbody>
            ))
          }
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf(
    PropTypes.objectOf,
  ),
}.isRequired;

const mapStateToProps = (state) => ({
  ...state.wallet,
});
export default connect(mapStateToProps)(Table);
