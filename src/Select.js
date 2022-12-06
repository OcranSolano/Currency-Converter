import React, { useState, useEffect } from 'react';
import { currencies } from './Currencies';

const currencyNames = []
currencies.map((coin) => {currencyNames.push(coin.name)});

export function FromCurrency(props) {
    const [ fromCurrency, setFromCurrency ] = useState(props.data[1]);

    function selectionHandler(e) { // onChange: updates local state after new selection
        console.log('New FROM currency: ' + e.target.value);
        setFromCurrency(e.target.value);
        props.update(e.target.value); // prop func (parent line 15)
    }

    useEffect(() => { // updates local state at each render
        props.getFromState(fromCurrency);
        setFromCurrency(props.data[1]);
        /*console.log(fromCurrency)*/
    }, [props, fromCurrency]) // recommended dependancy arr to prevent infinite loop

    return (
        <div className='form-floating from'>
            <select className='form-select test' 
                value={fromCurrency} 
                onChange={selectionHandler}
                id='startcurrency' 
                aria-label='floating label'>
                <optgroup label='Select Currency'></optgroup>
                {currencyNames.map(name => (
                <option value={name} key={name.toString()}>{name}</option>
                ))}
            </select>
            <label for='startcurrency'>From</label>
        </div>
    )
}

export function ToCurrency(props) {
    const [ toCurrency, setToCurrency ] = useState(props.data[2]);

    function selectionHandler(e) { // onChange: updates local state after new selection
        console.log('New TO currency: ' + e.target.value);
        setToCurrency(e.target.value);
        props.update(e.target.value); // prop func (parent line 15)
    }

    useEffect(() => {
        props.getToState(toCurrency);
        setToCurrency(props.data[2]);
        /*console.log(toCurrency)*/
    }, [props, toCurrency]) // recommended dependancy arr to prevent infinite loop 

    return (
        <div className='form-floating to'>
            <select className='form-select' 
                value={toCurrency}
                onChange={selectionHandler} 
                id='endcurrency' 
                aria-label='floating label'>
                <optgroup label='Select Currency'></optgroup>
                {currencyNames.map(name => (
                <option value={name} key={name.toString()}>{name}</option>
                ))}
            </select>
            <label for='endcurrency'>To</label>
        </div>
    )
}