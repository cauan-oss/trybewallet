import React from 'react';
import { connect } from 'react-redux';
import Table from '../components/Table';
// import PropTypes from 'prop-types';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';

class Wallet extends React.Component {
  render() {
    // const { emailLogin } = this.props;
    return (
      <div>
        <Header />
        <WalletForm />
        <Table />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  emailLogin: state.user.email,
});

// Wallet.propTypes = {
// emailLogin: PropTypes.string.isRequired,
// };

export default connect(mapStateToProps)(Wallet);
