import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    // const { emailLogin } = this.props;
    return (
      <div>
        <Header />
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
