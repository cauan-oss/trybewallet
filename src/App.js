import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';
import Table from './components/Table';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Login } />
            <Route exact path="/carteira" component={ Wallet } />
            <Route exact path="/table" component={ Table } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
