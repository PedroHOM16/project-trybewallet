import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  sumValues = () => {
    const { values } = this.props;
    // console.log(values);
    const all = values.map((x) => (x.value * x.exchangeRates[`${x.currency}`].ask));
    const sumTotal = all.length > 0
      ? all.reduce((item, i) => parseFloat(item) + parseFloat(i, 1)) : 0;
    return sumTotal.toFixed(2);
  }

  render() {
    const { emailData } = this.props;
    return (
      <header>
        <span data-testid="email-field">{ emailData }</span>
        <br />
        <span data-testid="total-field">{ this.sumValues() }</span>
        <br />
        <span data-testid="header-currency-field">BRL</span>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  emailData: state.user.email,
  values: state.wallet.expenses,
});

Header.propTypes = {
  emailData: PropTypes.string,
  values: PropTypes.array,
}.isRequired;

export default connect(mapStateToProps, null)(Header);
