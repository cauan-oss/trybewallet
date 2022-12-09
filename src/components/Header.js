import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { emailLogin } = this.props;
    return (
      <header>
        <p data-testid="email-field">{ emailLogin }</p>
        <p>
          <span data-testid="header-currency-field">BRL</span>
          <span data-testid="total-field">0</span>
        </p>

      </header>

    );
  }
}

const mapStateToProps = (state) => ({
  emailLogin: state.user.email,
});

Header.propTypes = {
  emailLogin: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
