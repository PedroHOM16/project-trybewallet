export default async function getCoin() {
  try {
    const CURRENCIES_API = 'https://economia.awesomeapi.com.br/json/all';
    const response = await fetch(CURRENCIES_API);
    const data = await response.json();
    const selectedData = Object.keys(data).filter((item) => item !== 'USDT');
    console.log(selectedData);
    return selectedData;
  } catch (error) {
    console.log(error);
  }
}
