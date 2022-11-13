import React, { useState, useEffect } from 'react';
import './App.css';
import Container from './Container';
import CurrencyModal from './CurrencyModal';



function App() {

  /*useEffect(() => {
      fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${toCurrency}&from=${fromCurrency}&amount=${amount}`, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    }, [amount])*/

  /*useEffect(() => {
      fetch("https://api.apilayer.com/exchangerates_data/symbols", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }, [])*/
  
  return <Container />
}

export default App;