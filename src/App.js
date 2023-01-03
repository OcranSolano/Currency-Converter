import React, { useState } from 'react';
import './App.css';

import Amount from './Amount';
import { FromCurrency, ToCurrency } from './Select';
import Convert from './Convert';
import Output from './Output';
import { currencies } from './Currencies';
import Info from './info';

export default function App() {

  let defaults = [
    '1', // amount [0]
    currencies[0].name, // from [1]
    currencies[1].name, // to [2]
    null, // result [3]
    false, // enabled [4]
    null // exchange rate [5]
  ];
  
  const [ data, setData ] = useState(defaults); // dependencies for all components (props)
  
  console.log(`Current data: ${data}`)

  // INPUTS
  // each 'new' function is propped a value via onChange handlers in input components. updateData() is called with value and index as params. In it, the value is saved locally, and then used to update the DATA state indirectly 

  function newAmount(prop) { // prop func to Amount.js
    console.log(`Parent received ${prop} as AMOUNT from child`);
    updateData(prop, 0);
  }

  function newFrom(prop) { // prop func to Select.js
    console.log(`Parent received ${prop} as FROM from child`);
    updateData(prop, 1);
  }

  function newTo(prop) { // prop func to Select.js
    console.log(`Parent received ${prop} as TO from child`);
    updateData(prop, 2);
  }

  function updateData(prop, x) { // passed new value and index for DATA state arr
    let newValue = prop;

    const updatedProps = [...data];
    updatedProps[x] = newValue;

    if(data[1] === data[2] && x === 0) updatedProps[3] = prop; // result [3]
    updatedProps[4] = false; // !enable [4]

    setData(updatedProps);
  }

  // RESULT
  // API fetch not used when from = to. Instead, AMOUNT is used as result for output. As an input ele, AMOUNT is of type STRING and must be converted to a NUMBER prior to updating DATA state and passing to the OUTPUT component

  function result(prop) { // prop func to Convert.js
    console.log(`Parent received ${prop} as RESULT from child`);
    
    let apiResult;
    typeof prop === 'string' ? apiResult = Number(prop) : apiResult = prop.result; // convert to string if from = to

    let exchangeRate;
    typeof prop === 'string' ? exchangeRate = 1 : exchangeRate = prop.info.rate; // amount is a string if from = to

    const nf = Intl.NumberFormat();
    const updatedProps = [...data];
    updatedProps[3] = nf.format(apiResult); // result [3]
    updatedProps[4] = true; // enabled [4]
    updatedProps[5] = exchangeRate;

    setData(updatedProps);
  }

  // SWAP
  // selectedCurrency global arr is populated with current FROM and TO states. This assignment is handled by the getFromState and getToState prop functions which are called in useEffect hooks in the currency components. The hooks send the state values as props upon first render and each time the selection is altered/swapped. Global variables intended so The SWAP function always has access to the currect component states and can update DATA state onClick

  let selectedCurrency = [];
  let getFromState = (prop) => {
    selectedCurrency[0] = prop;
  }

  let getToState = (prop) => {
    selectedCurrency[1] = prop;
  }

  function swap() { // onClick: swap FROM and TO
    let updatedProps = [...data];
    updatedProps[1] = selectedCurrency[1]; // FROM = TO
    updatedProps[2] = selectedCurrency[0]; // TO = FROM
    updatedProps[3] = 1; // reset result [3]. Important when using result as condition in Output.js for TO instead of resultAfterAPI
    updatedProps[4] = false; // !enabled [4]
    setData(updatedProps)
  }   

  // PAGE HEADER

  let acronym1 = data[1].slice(0,3);
  let acronym2 = data[2].slice(0,3);

  return (
    <>
      <div className='heading'>
        <h1>{Intl.NumberFormat().format(data[0])} {acronym1} to {acronym2}</h1>
        <p>Select amount & currencies to convert</p>
      </div>
      <div className="container">
        <Amount data={data} update={newAmount} />
        <div className="material-symbols-outlined swap" onClick={swap}>swap_horiz</div>
        <FromCurrency data={data} update={newFrom} getFromState={getFromState} />
        <ToCurrency data={data} update={newTo} getToState={getToState} />
        <Output data={data} />
        <Convert data={data} result={result} />
        <Info />
      </div>
    </>
  )
}