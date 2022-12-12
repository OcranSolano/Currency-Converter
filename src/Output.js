// import { render } from '@testing-library/react';
import { render } from '@testing-library/react';
import React, { useState, useEffect } from 'react';
import { currencies } from './Currencies';

export default function Output(props) {

    const amount = props.data[0];
    let from = props.data[1].slice(6); // name w/o acronym
    let to = props.data[2].slice(6); // name w/o acronym
    let result = props.data[3];
    
    const [ fromSymbol, setFromSymbol ] = useState('$');
    const [ toSymbol, setToSymbol ] = useState('€');

    const [ fromFlag, setFromFlag ] = useState(currencies[0].flag);
    const [ toFlag, setToFlag ] = useState(currencies[1].flag);

    // states are needed for render as useEffect runs afterward, causing full names to display (state setters used in switch logic to render alt outputs)
    const [ output1, setOutput1 ] = useState(from.slice(0,-5));
    const [ output2, setOutput2 ] = useState(to.slice(0,-5));
    // stores FROM and TO for useEffect comparison. State setters used to same hook to store new values for future use
    const [ prevFrom, setPrevFrom ] = useState(from);
    const [ prevTo, setPrevTo ] = useState(to);
    
    useEffect(() => { // when user selects new FROM or TO, conditionals are used to determine which selection was altered: if newly selected FROM or TO differs with the values saved in PREV states, the switch statement is called with the respective FROM or TO acronym and a boolean to semantically indicate which state to update. If no alt output for currency, update the output states by default with the FROM and TO values from props.

        // console.log(`PREV is ${prev}, FROM is ${from}`)
        if (prevFrom !== from) filterOutput(true) // FROM has changed
        if (prevTo !== to) filterOutput(false) // TO has changed

        setPrevFrom(from)
        setPrevTo(to)
        
    }, [from, to])

    useEffect(() => {
        filterOutput(true)
    }, [amount])

    
    const [ renderCount, setRenderCount ] = useState(2); // count instead of bool due to strict mode
    useEffect(() => {
        const z = document.getElementsByClassName('result')[0];
        setRenderCount(prev => prev + 1)
        if (renderCount > 2) z.style.opacity = 1;
        // console.log('count: ' + renderCount)
    }, [result])

    useEffect(() => {
        const z = document.getElementsByClassName('result')[0];
        z.style.opacity = 0.5;

        if(from === to) {
            z.style.opacity = 1;
            result = amount;
        }
    }, [amount, from, to])

    function filterOutput(fromSelected) {

        let selected;

        fromSelected ? selected = props.data[1] : selected = props.data[2];
        
        const selectedCurrency = currencies.find(element => element.name === selected);

        let regName = selectedCurrency.output;
        let plural = selectedCurrency.plural;
        let symbol = selectedCurrency.symbol;
        let flag = selectedCurrency.flag;
        
        let currency;
        let condition;
        fromSelected ? condition = Number(amount) : condition = result;

        if (condition !== 1) {
            // currency = selectedCurrency.plurallize()
            if (regName && !plural) currency = regName + 's'; // alt output, no plural, ex. GBP
            if (plural) currency = plural; // alt plural, ex. BRL or PEN
            if (!regName && !plural) fromSelected ? currency = from.slice(0,-5) + 's': currency = to.slice(0,-5) + 's'; // all other currencies
        } else {
            if (regName && !plural) currency = regName;
            if (plural && !regName) fromSelected ? currency = from : currency = to; // alt plural only, ex. BRL
            if (plural && regName) fromSelected ? currency = regName : currency = regName; // alt output and alt plural, ex. PEN
            if (!regName && !plural) fromSelected ? currency = from.slice(0,-5) : currency = to.slice(0,-5); // all other currencies
        }

        fromSelected ? setOutput1(currency) : setOutput2(currency);
        fromSelected ? setFromSymbol(symbol) : setToSymbol(symbol);
        fromSelected ? setFromFlag(flag) : setToFlag(flag);
        
    }

    return (
        <div className='result'>
            <span className='first'>
                <img className='flag one' src={`https://flagcdn.com/${fromFlag}.svg`} alt=''></img>
                <h6 className='output-1'><span>{fromSymbol}</span>{`${amount} ${output1} = `}</h6>
            </span>
            <br></br>
            <span className='first'>
                <img className='flag two' src={`https://flagcdn.com/${toFlag}.svg`} alt=''></img>
                <h3 className='output-2'><span>{toSymbol}</span>{`${result} ${output2}`}</h3>
            </span>
        </div>
    )
}

// ADD A LOADING ICON WHILE WAITING FOR API CALL
// CHECK THAT ACCENTS ARE USED CORRECTLY