import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <h1>Trybe-wallet</h1>
        <label htmlFor="email">
          <input
            data-testid="email-input"
            placeholder="email"
            id="email"
            type="text"
          />
        </label>
        <label htmlFor="senha">
          <input
            data-testid="password-input"
            placeholder="senha"
            id="senha"
            type="text"
          />
        </label>
        <button type="button">Entrar</button>
    </div>);
  }
}

export default Login;
