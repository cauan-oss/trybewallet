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

    const renderEmail = await screen.findByText('cauan@gmail.com');
    expect(renderEmail).toBeInTheDocument();

    const textValue = screen.getByText(/valor:/i);
    expect(textValue).toBeInTheDocument();

    const textDescription = screen.getByText(/descricao:/i);
    expect(textDescription).toBeInTheDocument();

    const testCurrency = screen.getAllByTestId('text-currency');

    expect(testCurrency).toHaveLength(15);

    const metodo = screen.getByText(/metodo de pagamento:/i);
    expect(metodo).toBeInTheDocument();

    const pagMethod = screen.getAllByTestId('method-input');
    expect(pagMethod).toHaveLength(4);

    const dispesa = screen.getByText(/categoria:/i);
    expect(dispesa).toBeInTheDocument();

    const botaoAdc = screen.getByRole('button', {
      name: /adicionar despesa/i,
    });
    userEvent.click(botaoAdc);
    expect(botaoAdc).toBeInTheDocument();

    const url = 'https://economia.awesomeapi.com.br/json/all';
    expect(url).toHaveBeenCalledWith('https://economia.awesomeapi.com.br/json/all');
    expect(url).toBeCalled();
    expect(url).toBeCalledTimes();
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
