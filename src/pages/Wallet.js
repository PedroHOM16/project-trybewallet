import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { getCoin } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { saveCurrency } = this.props;
    saveCurrency();
  }

  render() {
    const { emailData } = this.props;
    return (
      <div>
        <header>
          <span data-testid="email-field">{ emailData }</span>
          <br />
          <span data-testid="total-field">0</span>
          <br />
          <span data-testid="header-currency-field">BRL</span>
        </header>
        TrybeWallet
      </div>);
  }
}

const mapStateToProps = (state) => ({
  emailData: state.user.email });

const mapDispatchToProps = (dispatch) => ({
  saveCurrency: () => dispatch(getCoin()),
});

Wallet.propTypes = {
  emailData: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
