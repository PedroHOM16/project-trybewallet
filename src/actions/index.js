// Coloque aqui suas actions
export const SAVE_EMAIL = 'SAVE_EMAIL';
export const SAVE_CURRENCIES = 'SAVE_CURRENCIES';
export const SAVE_EXPENSES = 'SAVE_EXPENSES';

export const saveEmail = (data) => ({ type: 'SAVE_EMAIL', data });
export const currencies = (data) => ({ type: 'SAVE_CURRENCIES', data });
export const saveExpenses = (data) => ({ type: 'SAVE_EXPENSES', data });

const API = 'https://economia.awesomeapi.com.br/json/all';

export function getCurrency() {
  return async (dispatch) => {
    try {
      const response = await fetch(API);
      const data = await response.json();
      delete data.USDT;
      // const selectedData = Object.keys(data).filter((item) => item !== 'USDT');
      dispatch(currencies(data));
    } catch (error) {
      console.log(error);
    }
  };
}

export function getExpense(obj) {
  return async (dispatch) => {
    try {
      const response = await fetch(API);
      const data = await response.json();
      // const { ask } = data[`${obj.currency}`];
      // console.log('obj', ask);
      // obj.ask = ask;
      delete data.USDT;
      obj.exchangeRates = data;
      // console.log('test', varData);
      dispatch(saveExpenses(obj));
    } catch (error) {
      console.log(error);
    }
  };
}
