import { screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import App from '../../App';
import { renderWithRouterAndRedux } from './renderWith';
// import Wallet from '../../pages/Wallet';

describe('testando pagina de login', () => {
  test('testando elementos da pagina', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const textoH1 = screen.getByRole('heading', { name: 'Trybe-wallet',
    });
    expect(textoH1).toBeInTheDocument();

    const input = screen.getByPlaceholderText('email');
    expect(input.placeholder).toBeDefined();

    const inputPassword = screen.getByPlaceholderText('senha');
    expect(inputPassword.placeholder).toBe('senha');

    const botao = screen.getByRole('button', { name: 'Entrar' });
    expect(botao).toBeInTheDocument();
    expect(botao.disabled).toBe(true);

    userEvent.type(input, 'cauan@gmail.com');
    expect(input.value).toBe('cauan@gmail.com');

    userEvent.type(inputPassword, '123456');
    expect(inputPassword.value).toBe('123456');
    expect(botao.disabled).toBe(false);

    const { location: { pathname } } = history;
    expect(pathname).toBe('/');
    userEvent.click(botao);
  });
});

/* describe('verifica se após clicar no botão "Entar" muda para página "/carteira"', () => {
  test('se após clicar no botão "Entrar" a página muda para "/carteira"', () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const enter = {
      email: 'ezio@ezio.com',
      password: '123456',
    };

    const enterButton = screen.getByRole('button', { name: /entrar/i });
    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');

    expect(enterButton).toBeInTheDocument();

    userEvent.type(emailInput, enter.email);
    userEvent.type(passwordInput, enter.password);
    userEvent.click(enterButton);
    const { pathname } = history.location;

    expect(pathname).toBe('/carteira');
  });
}); */
