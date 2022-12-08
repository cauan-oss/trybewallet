import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addEmail } from '../redux/actions';

class Login extends React.Component {
  state = {
    email: '',
    senha: '',
    isValidButton: true,
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, this.validate);
  };

  validate = () => {
    const { email, senha } = this.state;
    const numberSix = 6;
    const validatePassword = senha.length >= numberSix;
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/gi;
    if (emailRegex.test(email) && validatePassword) {
      this.setState({
        isValidButton: false,
      });
    }
  };

  handle = async (event) => {
    const { email } = this.state;
    const { history } = this.props;
    event.preventDefault();
    const { dispatch } = this.props;
    dispatch(addEmail(email));
    history.push('/carteira');
  };

  render() {
    const { email, senha, isValidButton } = this.state;
    return (
      <div>
        <h1>Trybe-wallet</h1>
        <label htmlFor="email">
          <input
            data-testid="email-input"
            placeholder="email"
            id="email"
            type="text"
            value={ email }
            name="email"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="senha">
          <input
            data-testid="password-input"
            placeholder="senha"
            id="senha"
            type="text"
            value={ senha }
            name="senha"
            onChange={ this.handleChange }
          />
        </label>
        <button
          disabled={ isValidButton }
          onClick={ this.handle }
          type="button"
        >
          Entrar

        </button>
    </div>);
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect()(Login);
