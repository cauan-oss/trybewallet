import { screen } from '@testing-library/react';
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
  });
});
