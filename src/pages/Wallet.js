import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { getCurrency } from '../actions';
import ExpenseForm from '../components/ExpenseForm';
import Header from '../components/Header';

class Wallet extends React.Component {
  componentDidMount() {
    const { saveCurrency } = this.props;
    saveCurrency();
  }

  render() {
    return (
      <div>
        <Header />
        <ExpenseForm />
        TrybeWallet
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveCurrency: () => dispatch(getCurrency()),
});

Wallet.propTypes = {
  saveCurrency: PropTypes.shape({
    id: PropTypes.number,
    value: PropTypes.number,
    description: PropTypes.string,
    currency: PropTypes.string,
    method: PropTypes.string,
    tag: PropTypes.string,
  }),
}.isRequired;

export default connect(null, mapDispatchToProps)(Wallet);
