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
    const { emailData, currency } = this.props;
    // console.log('prop', currency);
    return (
      <div>
        <header>
          <span data-testid="email-field">{ emailData }</span>
          <br />
          <span data-testid="total-field">0</span>
          <br />
          <span data-testid="header-currency-field">BRL</span>
        </header>
        <form>
          <label htmlFor="value-input">
            Valor:
            <input type="number" id="value-input" data-testid="value-input" />
          </label>
          <label htmlFor="description-input">
            Descrição:
            <input type="text" data-testid="description-input" id="description-input" />
          </label>
          <label htmlFor="currency-input">
            Moeda:
            <select name="currency-input" id="currency-input">
              {currency.map((item, index) => <option key={ index }>{item}</option>)}
            </select>
          </label>
          <label htmlFor="method-input">
            Método de pagamento:
            <select data-testid="method-input" id="method-input">
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="category-input">
            Categoria:
            <select data-testid="tag-input" id="category-input">
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
        </form>
        TrybeWallet
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  emailData: state.user.email,
  currency: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  saveCurrency: () => dispatch(getCoin()),
});

Wallet.propTypes = {
  emailData: PropTypes.string,
  currency: PropTypes.array,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
