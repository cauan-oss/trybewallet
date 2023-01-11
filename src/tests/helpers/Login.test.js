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
