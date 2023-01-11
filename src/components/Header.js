import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { emailLogin, expenses } = this.props;
    const total = expenses.reduce((a, b) => a + b.value
    * b.exchangeRates[b.currency].ask, 0);
    return (
      <header>
        <p data-testid="email-field">{ emailLogin }</p>
        <p>
          <span data-testid="header-currency-field">BRL</span>
          <span data-testid="total-field">{ total.toFixed(2) }</span>
        </p>

      </header>

    );
  }
}

const mapStateToProps = (state) => ({
  emailLogin: state.user.email,
  ...state.wallet,
});

Header.propTypes = {
  emailLogin: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(
    PropTypes.objectOf,
  ).isRequired,
};

export default connect(mapStateToProps)(Header);
