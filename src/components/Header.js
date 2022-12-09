import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { emailLogin } = this.props;
    return (
      <div>
        <h1>{ emailLogin }</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  emailLogin: state.user.email,
});

Header.propTypes = {
  emailLogin: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
