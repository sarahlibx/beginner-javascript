const fromSelect = document.querySelector('[name="from_currency"]');
const toSelect = document.querySelector('[name="to_currency"]');
const endpoint = 'https://api.exchangeratesapi.io/latest';
const ratesByBase = {}; // this will store rates in it

//api key
const myHeaders = new Headers();
myHeaders.append("apikey", "1Cf6EoC40n7hp44yHBGWr9aiiUKvcAOL");
const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};
fetch(`https://api.apilayer.com/exchangerates_data/latest?symbols={symbols}&base={base}`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

const currencies = {
  USD: 'United States Dollar',
  AUD: 'Australian Dollar',
  BGN: 'Bulgarian Lev',
  BRL: 'Brazilian Real',
  CAD: 'Canadian Dollar',
  CHF: 'Swiss Franc',
  CNY: 'Chinese Yuan',
  CZK: 'Czech Republic Koruna',
  DKK: 'Danish Krone',
  GBP: 'British Pound Sterling',
  HKD: 'Hong Kong Dollar',
  HRK: 'Croatian Kuna',
  HUF: 'Hungarian Forint',
  IDR: 'Indonesian Rupiah',
  ILS: 'Israeli New Sheqel',
  INR: 'Indian Rupee',
  JPY: 'Japanese Yen',
  KRW: 'South Korean Won',
  MXN: 'Mexican Peso',
  MYR: 'Malaysian Ringgit',
  NOK: 'Norwegian Krone',
  NZD: 'New Zealand Dollar',
  PHP: 'Philippine Peso',
  PLN: 'Polish Zloty',
  RON: 'Romanian Leu',
  RUB: 'Russian Ruble',
  SEK: 'Swedish Krona',
  SGD: 'Singapore Dollar',
  THB: 'Thai Baht',
  TRY: 'Turkish Lira',
  ZAR: 'South African Rand',
  EUR: 'Euro',
};

function generateOptions(options) {
  return Object.entries(options).map(([currencyCode, currencyName]) => 
   `<option value="${currencyCode}">${currencyCode} - ${currencyName}</option>`
  ).join('');
}

async function fetchRates(base = 'USD') {
  const res = await fetch(`${endpoint}?base=${base}`);
  const rates = await res.json();
}

async function convert(amount, from, to) {
  //first check if we have the rates to convert from
  if(!ratesByBase[from]) {
    console.log(`oh no, we don't have ${from} to convert to ${to}. Let's go get it`);
    const rates = await fetchRates(from);
    console.log(rates);
    //store rates for next time
    ratesByBase[from] = rates;
  }
  //convert amount passed in
  const rate = ratesByBase[from].rates[to];
  const convertedAmount = rate * amount;
  console.log(`${amount} ${from} is ${convertedAmount} in ${to}`);
  return convertedAmount;
}

const optionsHTML = generateOptions(currencies);

// on page load, populate options
fromSelect.innerHTML = optionsHTML;
toSelect.innerHTML = optionsHTML;