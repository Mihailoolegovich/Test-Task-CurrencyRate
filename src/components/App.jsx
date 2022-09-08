import './App.css';
import { useEffect, useState } from 'react';
// import fixerApiData from '../data/fixerApiData.json';
import axios from 'axios';
import { Header } from './Header/Header';
import { Currency } from './Currency/Currency';

export const App = () => {
  const [amountOne, setAmountOne] = useState(1);
  const [amountTwo, setAmountTwo] = useState(1);
  const [currencyOne, setCurrencyOne] = useState('USD');
  const [currencyTwo, setCurrencyTwo] = useState('USD');
  const [rates, setRates] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://api.apilayer.com/fixer/latest?symbols=USD%2CEUR%2CRUB%2CBYN%2CGBP%2CPLN%2CUAH&base=UAH&apikey=gpUpYLM9pOIPka8iVbUCbLNy1utDkk6i'
      )
      .then(response => setRates(response.data.rates));
  }, []);

  function roundNum(n) {
    return Math.round(n * 1000) / 1000;
  }

  function coefficient(valueOne, valueTwo) {
    return rates[valueOne] / rates[valueTwo];
  }

  function changeAmountOne(amountOne) {
    setAmountTwo(roundNum(amountOne * coefficient(currencyTwo, currencyOne)));
    setAmountOne(amountOne);
  }

  function changeAmountTwo(amountTwo) {
    setAmountOne(roundNum(amountTwo * coefficient(currencyOne, currencyTwo)));
    setAmountTwo(amountTwo);
  }

  function changeCurrencyOne(currencyOne) {
    setAmountTwo(roundNum(amountTwo * coefficient(currencyTwo, currencyOne)));
    setCurrencyOne(currencyOne);
  }

  function changeCurrencyTwo(currencyTwo) {
    setAmountTwo(roundNum(amountOne * coefficient(currencyTwo, currencyOne)));

    setCurrencyTwo(currencyTwo);
  }

  return (
    <>
      <Header
        usdCurrency={roundNum(1 / rates['USD'])}
        eurCurrency={roundNum(1 / rates['EUR'])}
      />

      <div className="container_currency">
        <div className="platform_currency">
          <h2 className="platform_currency--title">I have</h2>
          <Currency
            inputValue={amountOne}
            changeInput={changeAmountOne}
            selectValue={currencyOne}
            selectChange={changeCurrencyOne}
            currencyKeys={Object.keys(rates)}
          />
          <span className="platform_currency--about">
            {`1 ${currencyOne}  = ${roundNum(
              coefficient(currencyTwo, currencyOne)
            )} ${currencyTwo}`}
          </span>
        </div>
        <div className="platform_currency">
          <h2 className="platform_currency--title">I will get</h2>
          <Currency
            inputValue={amountTwo}
            changeInput={changeAmountTwo}
            selectValue={currencyTwo}
            selectChange={changeCurrencyTwo}
            currencyKeys={Object.keys(rates)}
          />
          <span className="platform_currency--about">
            {`1 ${currencyTwo}  = ${roundNum(
              coefficient(currencyOne, currencyTwo)
            )} ${currencyOne}`}
          </span>
        </div>
      </div>
    </>
  );
};
