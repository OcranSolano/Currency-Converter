import React, { useState, useEffect } from 'react';
import { currencies } from './Currencies';
import createRoot from 'react-dom';

export default function Output(props) {

    const amount = props.data[0];
    let from = props.data[1].slice(6); // name w/o acronym
    let to = props.data[2].slice(6); // name w/o acronym
    const result = props.data[3];
    
    const [ fromSymbol, setFromSymbol ] = useState('$');
    const [ toSymbol, setToSymbol ] = useState('€');

    // states are needed for render as useEffect runs afterward, causing full names to display (state setters used in switch logic to render alt outputs)
    const [ output1, setOutput1 ] = useState(from);
    const [ output2, setOutput2 ] = useState(to);
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

    function filterOutput(fromSelected) {
        
        const selectedCurrency = currencies.find(element => element.name === props.data[1]);
        //console.log(selectedCurrency);

        let alt = selectedCurrency.alt;
        let plural = selectedCurrency.plural;
        let symbol = selectedCurrency.symbol;

        // console.log(alt, plural, symbol)

        // selectedCurrency.plurallize()
        
        let currency; 

        if (Number(amount) !== 1) {
            // currency = selectedCurrency.plurallize()
            if (alt && !plural) currency = alt + 's'; // alt output, no plural, ex. GBP
            if (plural) currency = plural; // alt plural, ex. BRL or PEN
            if (!alt && !plural) fromSelected ? currency = from + 's': currency = to = 's'; // all other currencies
        } else {
            if (alt && !plural) currency = alt;
            if (plural && !alt) fromSelected ? currency = from : currency = to; // alt plural only, ex. BRL
            if (plural && alt) fromSelected ? currency = alt : currency = alt; // alt output and alt plural, ex. PEN
            if (!alt && !plural) fromSelected ? currency = from : currency = to; // all other currencies
        }

        fromSelected ? setOutput1(currency) : setOutput2(currency);
        fromSelected ? setFromSymbol(symbol) : setToSymbol(symbol);
    }

    return (
        <div className='result'>
            <span className='first'>
                <img className='flag' src='https://flagcdn.com/us.svg' height='15' alt=''></img>
                <h6 className='output-1'><span>{fromSymbol}</span>{`${amount} ${output1} = `}</h6>
            </span>
            <br></br>
            <span className='first'>
                <img className='flag' src='https://flagcdn.com/eu.svg' height='30' alt=''></img>
                <h2 className='output-2'>{`${toSymbol}${result} ${output2}`}</h2>
            </span>
        </div>
    )
}

// ADD A LOADING ICON WHILE WAITING FOR API CALL
// CHECK THAT ACCENTS ARE USED CORRECTLY