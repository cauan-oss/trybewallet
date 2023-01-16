import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
// import userEvent from '@testing-library/user-event';
import App from '../../App';
import { renderWithRouterAndRedux } from './renderWith';
// import Wallet from '../../redux/reducers/wallet';
// import Header from '../../components/Header';

const mockGlobal = {
  user: {
    email: 'cauan@gmail.com',
  },
  wallet: {
    currencies: ['USD', 'CAD', 'GBP', 'ARS', 'BTC', 'LTC', 'EUR', 'JPY', 'CHF', 'AUD', 'CNY',
      'ILS', 'ETH', 'XRP', 'DOGE',
    ],
    expenses: [],
    editor: false,
  },

};
describe('testando pagina de login', () => {
  test('teste de component wallet', async () => {
    const { history } = renderWithRouterAndRedux(<App />, {
      initialEntries: ['/carteira'],
      initialState: mockGlobal,
    });
    const { pathname } = history.location;
    expect(pathname).toBe('/carteira');
    // TEXTO
    const renderEmail = await screen.findByText('cauan@gmail.com');
    expect(renderEmail).toBeInTheDocument();

    const textValue = screen.getByText(/valor:/i);
    expect(textValue).toBeInTheDocument();

    const textDescription = screen.getByText(/descricao:/i);
    expect(textDescription).toBeInTheDocument();

    const metodo = screen.getByText(/metodo de pagamento:/i);
    expect(metodo).toBeInTheDocument();

    const dispesa = screen.getByText(/categoria:/i);
    expect(dispesa).toBeInTheDocument();
    // pagamento
    const pagValue = screen.getByPlaceholderText('valor');
    expect(pagValue).toBeInTheDocument();
    userEvent.type(pagValue, '20');

    const pagDescription = screen.getByPlaceholderText('descricao');
    expect(pagDescription).toBeInTheDocument();
    userEvent.type(pagDescription, 'descricao');

    const pagCurrency = screen.getByTestId('currency-input');
    expect(pagCurrency).toBeInTheDocument();
    userEvent.selectOptions(pagCurrency, 'BTC');

    const pagMethod = screen.getByTestId('method-input');
    expect(pagMethod).toBeInTheDocument();
    userEvent.selectOptions(pagMethod, 'Cartão de crédito');

    const pagCategory = screen.getByTestId('tag-input');
    expect(pagCategory).toBeInTheDocument();
    userEvent.selectOptions(pagCategory, 'Lazer');

    const botaoAdc = screen.getByRole('button', {
      name: /adicionar despesa/i,
    });
    userEvent.click(botaoAdc);
    expect(botaoAdc).toBeInTheDocument();

    /*   const url = 'https://economia.awesomeapi.com.br/json/all';
    expect(url).toHaveBeenCalledWith('https://economia.awesomeapi.com.br/json/all');
    expect(url).toBeCalled();
    expect(url).toBeCalledTimes(); */

    const deletee = await screen.findByRole('button', {
      name: /excluir/i,
    });
    expect(deletee).toBeInTheDocument();
    userEvent.click(deletee);
    expect(deletee).not.toBeInTheDocument();
  });

  // table
/*  const descriptTable = screen.getByRole('columnheader', {
    name: /descrição/i,
  });
  expect(descriptTable).toBeInTheDocument();

  const methodTable = screen.getByRole('columnheader', {
    name: /método de pagamento/i
  });
  expect(methodTable).toBeInTheDocument(); */
});
// to have length
