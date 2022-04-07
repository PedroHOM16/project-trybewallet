// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { SAVE_CURRENCIES, SAVE_EXPENSES } from '../actions';

const INICIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INICIAL_STATE, action) {
  switch (action.type) {
  case SAVE_CURRENCIES:
    return { ...state, currencies: Object.keys(action.data) };
  case SAVE_EXPENSES:
    return { ...state, expenses: [...state.expenses, action.data] };
  default:
    return state;
  }
}

export default wallet;
