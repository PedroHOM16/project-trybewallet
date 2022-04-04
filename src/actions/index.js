// Coloque aqui suas actions
export const SAVE_EMAIL = 'SAVE_EMAIL';
export const SAVE_CURRENCIES = 'SAVE_CURRENCIES';

export const saveEmail = (data) => ({ type: 'SAVE_EMAIL', data });
export const currencies = (data) => ({ type: 'SAVE_CURRENCIES', data });

export function getCoin() {
  return async (dispatch) => {
    try {
      const CURRENCIES_API = 'https://economia.awesomeapi.com.br/json/all';
      const response = await fetch(CURRENCIES_API);
      const data = await response.json();
      const selectedData = Object.keys(data).filter((item) => item !== 'USDT');
      dispatch(currencies(selectedData));
    } catch (error) {
      console.log(error);
    }
  };
}
