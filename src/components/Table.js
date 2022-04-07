import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

class Table extends Component {
  render() {
    const { dataExpense } = this.props;
    console.log('state.wallet', dataExpense);
    return (
      <table>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
        {
          dataExpense.length > 0
            ? dataExpense.map((each, i) => (
              <tr key={ i }>
                <td>{each.description}</td>
                <td>{each.tag}</td>
                <td>{each.method}</td>
                <td>{parseFloat(each.value).toFixed(2)}</td>
                <td>{each.exchangeRates[`${each.currency}`].name}</td>
                <td>
                  {parseFloat(each.exchangeRates[`${each.currency}`].ask).toFixed(2)}
                </td>
                <td>
                  {
                    parseFloat(each.value * each.exchangeRates[`${each.currency}`].ask)
                      .toFixed(2)
                  }
                </td>
                <td>Real</td>
                <td>
                  <button
                    type="button"
                    data-testid="delete-btn"
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))
            : <span>Você não possui despesas cadastradas no momento</span>
        }
      </table>
    );
  }
}

Table.propTypes = {
  dataExpense: PropTypes.shape({
    length: PropTypes.number,
    map: PropTypes.func,
  }),
}.isRequired;

const mapStateToProps = (state) => ({
  dataExpense: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);
