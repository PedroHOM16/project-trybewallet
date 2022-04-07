import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { getExpense } from '../actions';

class ExpenseForm extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    };
  }

  handleChange = ({ target }) => this.setState({ [target.name]: target.value });

  defaultState = () => {
    this.setState((prev) => ({
      id: prev.id + 1,
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    }));
  }

  handleClick = () => {
    const { saveExpense } = this.props;
    saveExpense(this.state);
    this.defaultState();
  };

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { currencyData } = this.props;
    return (
      <form>
        <label htmlFor="value-input">
          Valor:
          <input
            value={ value }
            name="value"
            type="number"
            id="value-input"
            data-testid="value-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="description-input">
          Descrição:
          <input
            value={ description }
            name="description"
            type="text"
            data-testid="description-input"
            id="description-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="currency-input">
          Moeda:
          <select
            name="currency"
            id="currency-input"
            onChange={ this.handleChange }
            value={ currency }
          >
            {currencyData.map((item, index) => <option key={ index }>{item}</option>)}
          </select>
        </label>
        <label htmlFor="method-input">
          Método de pagamento:
          <select
            name="method"
            data-testid="method-input"
            id="method-input"
            onChange={ this.handleChange }
            value={ method }
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="category-input">
          Categoria:
          <select
            name="tag"
            data-testid="tag-input"
            id="category-input"
            onChange={ this.handleChange }
            value={ tag }
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <button type="button" onClick={ this.handleClick }>Adicionar despesa</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencyData: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  saveExpense: (data) => dispatch(getExpense(data)),
});

ExpenseForm.propTypes = {
  currencyData: PropTypes.array,
  saveExpense: PropTypes.shape({
    id: PropTypes.number,
    value: PropTypes.number,
    description: PropTypes.string,
    currency: PropTypes.string,
    method: PropTypes.string,
    tag: PropTypes.string,
  }),
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
