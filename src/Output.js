import React, { useState, useEffect } from 'react';
import { currencies } from './Currencies';

export default function Output(props) {

    const amount = props.data[0];
    const nf = Intl.NumberFormat();
    let formattedAmount = nf.format(amount);

    let from = props.data[1].slice(6); // name w/o acronym
    let to = props.data[2].slice(6); // name w/o acronym
    let result = props.data[3];

    let enabled = props.data[4];
    let resultAfterAPI = result;
    
    let rate = props.data[5];
    let inverse = 1 / rate;

    let changePercent1 = props.data[6];
    let changePercent2 = props.data[7];


    const [ fromSymbol, setFromSymbol ] = useState('$');
    const [ toSymbol, setToSymbol ] = useState('€');

    const [ fromFlag, setFromFlag ] = useState(currencies[0].flag);
    const [ toFlag, setToFlag ] = useState(currencies[1].flag);

    // states are needed for render as useEffect runs afterward, causing full names to display (state setters used in switch logic to render alt outputs)
    const [ output1, setOutput1 ] = useState(from);
    const [ output2, setOutput2 ] = useState(to);
    // stores FROM and TO for useEffect comparison. State setters used to same hook to store new values for future use
    const [ prevFrom, setPrevFrom ] = useState(from);
    const [ prevTo, setPrevTo ] = useState(to);
    
    useEffect(() => { // When from/to selected, conditionals are used to determine which selection was altered: if new selection differs from values saved in PREV states, the filter func is called with a bool to semantically indicate which state to update.

        resultAfterAPI = 1; // reset to avoid new TO plural

        // console.log(`PREV is ${prev}, FROM is ${from}`)
        if (prevFrom !== from) filterOutput(true) // FROM changed
        if (prevTo !== to) filterOutput(false) // TO changed

        // Prevs updated with new selections after outputs have been determined, to work for next selection change
        setPrevFrom(from)
        setPrevTo(to)

    }, [from, to])

    useEffect(() => { // filter output for both to and from
        filterOutput(true)
        resultAfterAPI = 1; // reset to avoid new TO plural
        filterOutput(false)
    }, [amount])

    useEffect(() => {
        resultAfterAPI = result; // new result value stored and used for condition when determining output-2
        filterOutput(false) // necessary if FROM formatting condition (amount) is used. TO formatting condition must be api result

        const resultDiv = document.getElementsByClassName('result')[0];
        const container = document.getElementsByClassName('container')[0];
        const alert = document.getElementsByClassName('alert')[0];

        if(enabled) {
            container.style.height = '333.305px';
            resultDiv.style.opacity = '1';
            resultDiv.style.height = '100%';
            alert.style.opacity = '1';
        }
        
    }, [enabled, result])

    useEffect(() => { // CSS transitions
        const bottom = document.getElementsByClassName('bottom')[0];
        const symbol = document.getElementsByClassName('symbol-result')[0];
        const datetime = document.getElementsByClassName('datetime-2')[0];
        const rates = document.getElementsByClassName('rates')[0];

        if(!enabled) {
            bottom.style.opacity = 0.3;
            symbol.style.display = 'none';
            rates.style.height = '48px';
            rates.style.opacity = .3;
        } else {
            bottom.style.opacity = 1;
            symbol.style.display = 'block';
            rates.style.height = '48px';
            rates.style.opacity = 1;
        }

        if(to === from) { // for same TO and FROM

            datetime.style.color = 'rgb(59, 203, 133)';
            setTimeout(function () {
                datetime.style.color = 'rgb(92, 102, 123)';
            }, 350)

            bottom.style.opacity = 1;
            symbol.style.display = 'block';
            rates.style.height = '0';
            rates.style.opacity = 0;
        }
        
    }, [amount, from, to, enabled])

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
        fromSelected ? condition = Number(amount) : condition = resultAfterAPI; // FIX ex. BRL
        if(to === from) condition = Number(amount);
        // console.log('FROMSELECTED: ' + fromSelected)
        // console.log('CONDITION INTEGET: ' + condition)
        // console.log('RESULT API: ' + resultAfterAPI, result)

        if (condition !== 1) {
            if (regName && !plural) currency = regName + 's'; // alt output, no plural, ex. GBP
            if (plural) currency = plural; // alt plural, ex. BRL or PEN
            if (!regName && !plural) fromSelected ? currency = from + 's': currency = to + 's'; // all other currencies
        } else {
            if (regName && !plural) currency = regName;
            if (plural && !regName) fromSelected ? currency = from : currency = to; // alt plural only, ex. BRL FIX FIX
            if (plural && regName) fromSelected ? currency = regName : currency = regName; // alt output and alt plural, ex. PEN
            if (!regName && !plural) fromSelected ? currency = from : currency = to; // all other currencies
        }

        fromSelected ? setOutput1(currency) : setOutput2(currency);
        fromSelected ? setFromSymbol(symbol) : setToSymbol(symbol);
        fromSelected ? setFromFlag(flag) : setToFlag(flag);

        if(to === from) { // same output for both
            setOutput1(currency)
            setOutput2(currency)
        }

        resultAfterAPI = 1; // reset to avoid new TO plural
    }

    let currentdate = new Date(); 
    let month = currentdate.toLocaleString('default', { month: 'long' });
    let datetime = `${month} 
            ${currentdate.getDate()}, 
            ${currentdate.getFullYear()}, 
            ${currentdate.getHours()}:${currentdate.getMinutes()}:${currentdate.getSeconds()} CST`

    let timeRange = '(1Y)';
    let positive = <span className='positive'>▲ {changePercent2}%</span>
    let negative = <span className='negative'> ▼ {changePercent1}%</span>

    return (
        <>
            <div className='result'>
                <div className='top'>
                    <img className='flag one' src={`https://flagcdn.com/${fromFlag}.svg`} alt=''></img>
                    <h5 className='output-1'><span>{fromSymbol}</span>{`${formattedAmount} ${output1} = `}</h5>
                </div>
                <div className='bottom'>
                    <img className='flag two' src={`https://flagcdn.com/${toFlag}.svg`} alt=''></img>
                    <h3 className='output-2'><span className='symbol-result'><span>{toSymbol}</span><span>{to === from ? formattedAmount : result}&nbsp;</span></span>{output2}</h3>
                </div>
                <div className='rates'>
                    <p>1 {props.data[1].slice(0,3)} = {enabled ? nf.format(rate) : ''} {props.data[2].slice(0,3)} {changePercent1 > 0 ? positive : negative} {timeRange}</p>
                    <p>1 {props.data[2].slice(0,3)} = {enabled ? nf.format(inverse) : ''} {props.data[1].slice(0,3)} {changePercent2 > 0 ? positive : negative} {timeRange}</p>
                </div>
                <div><span className='datetime-1'>As of&nbsp;</span><span className='datetime-2'>{datetime}</span></div>
            </div>
        </>
    )
}

// ADD A LOADING ICON WHILE WAITING FOR API CALL ✅
// CHECK THAT ACCENTS ARE USED CORRECTLY ✅
// Format AMOUNT in output-1 ✅