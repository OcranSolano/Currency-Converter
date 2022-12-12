import React, { useState } from 'react';
import Amount from './Amount';
import { FromCurrency, ToCurrency } from './Select';
import Convert from './Convert';
import Output from './Output';

export default function Container() {

    let defaults = ['1', 'USD — United States Dollar 🇺🇸', 'EUR — Euro 🇪🇺', 0]; // default values
    const [ data, setData ] = useState(defaults); // dependencies for all components (props)
    
    console.log(`Current data: ${data}`)

    /* each NEW function is passed the new value as a prop from the onChange event handler on their respective component. The prop and corresponding DATA index are passed to the updateData function. In it, the prop is saved to a local var, which is then used to update the DATA state indirectly (state arr is duplicated locally using the spread operator. Value at appropriate index is updated before consolidating with state setter */
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
        setData(updatedProps);
    }

    /* API fetch is not used when FROM === TO. Instead, AMOUNT returned from Convert thru this prop func is used for output. As an input ele, AMOUNT is of type STRING and must be converted to a NUMBER prior to updating DATA state and passing to the OUTPUT component */
    function result(prop) { // prop func to Convert.js
        console.log(`Parent received ${prop} as RESULT from child`);
        
        let apiResult;
        // if FROM === TO covert prop to NUMBER. Else, access proper object key
        typeof prop === 'string' ? apiResult = Number(prop) : apiResult = prop.result;

        const nf = Intl.NumberFormat();
        const updatedProps = [...data];
        updatedProps[3] = nf.format(apiResult);
        setData(updatedProps);
    }

    /* selectedCurrency global arr is populated with the current FROM and TO states. This assignment is handled by the getFromState and getToState prop functions which are called in useEffect hooks in the currency components. The hooks send the state values as props upon first render and each time the selection is altered/swapped. Global variables intended so The SWAP function always has access to the currect component states and can update DATA state onClick */ 
    let selectedCurrency = [];
    let getFromState = (prop) => {
        selectedCurrency[0] = prop;
    }

    let getToState = (prop) => {
        selectedCurrency[1] = prop;
    }

    function swap() { // onClick: swap FROM and TO in DATA, which updates currency components
        let updatedProps = [...data];
        updatedProps[1] = selectedCurrency[1]; // FROM = TO
        updatedProps[2] = selectedCurrency[0]; // TO = FROM
        setData(updatedProps)
    }   

    return (
        <div className="container">
            <h1 className="title">currency converter</h1>
            <Amount data={data} update={newAmount} />
            <div className="material-symbols-outlined swap" onClick={swap}>swap_horiz</div>
            <FromCurrency data={data} update={newFrom} getFromState={getFromState} />
            <ToCurrency data={data} update={newTo} getToState={getToState} />
            <Output data={data} />
            <Convert data={data} result={result} />
        </div>    
    )
}