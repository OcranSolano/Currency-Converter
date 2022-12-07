import React, { useState, useEffect } from 'react';
import { currencies } from './Currencies';

export default function Output(props) {

    const amount = props.data[0];
    let from = props.data[1].slice(6); // name w/o acronym
    let to = props.data[2].slice(6); // name w/o acronym
    const result = props.data[3];
    
    // states are needed for render as useEffect runs afterward, causing full names to display (state setters used in switch logic to render alt outputs)
    const [ output1, setOutput1 ] = useState(from);
    const [ output2, setOutput2 ] = useState(to);
    // stores FROM and TO for useEffect comparison. State setters used to same hook to store new values for future use
    const [ prevFrom, setPrevFrom ] = useState(from);
    const [ prevTo, setPrevTo ] = useState(to);
    
    useEffect(() => { // when user selects new FROM or TO, conditionals are used to determine which selection was altered: if newly selected FROM or TO differs with the values saved in PREV states, the switch statement is called with the respective FROM or TO acronym and a boolean to semantically indicate which state to update. If no alt output for currency, update the output states by default with the FROM and TO values from props.

        // console.log(`PREV is ${prev}, FROM is ${from}`)
        let acronym1 = props.data[1].slice(0,3);
        let acronym2 = props.data[2].slice(0,3);
        if (prevFrom !== from) filterOutput(acronym1, true) // FROM has changed
        if (prevTo !== to) filterOutput(acronym2, false) // TO has changed

        setPrevFrom(from)
        setPrevTo(to)
        
    }, [from, to])

    useEffect(() => {
        let acronym1 = props.data[1].slice(0,3);
        filterOutput(acronym1, true)
    }, [amount])

    function filterOutput(acronym, fromSelected) {
        
        const selectedCurrency = currencies.find(element => element.name === props.data[1]);
        //console.log(selectedCurrency);

        let alt = selectedCurrency.alt;
        let plural = selectedCurrency.plural;
        let symbol = selectedCurrency.symbol;

        console.log(alt, plural, symbol)

        // selectedCurrency.plurallize()
        

        function output() { // called from switch items 

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
        };

        // switch (acronym) {
        //     case 'AED':
        //         alt = 'Emirati Dirham';
        //         break;
        //     case 'ALL':
        //         plural = 'Albanian Leke';
        //         break;
        //     case 'ANG':
        //         alt = 'Dutch Guilder';
        //         plural = 'fix';
        //         break;
        //     case 'AWG':
        //         alt = 'Aruban or Dutch Florin';
        //         plural = 'fix';
        //         break;
        //     case 'BAM':
        //         alt = 'Bosnian Covertible Mark';
        //         break;
        //     case 'BBD':
        //         alt = 'Barbadian or Bajan Dollar';
        //         break;
        //     case 'BGN':
        //         plural = 'Bulgarian Leva';
        //         break;
        //     case 'BRL':
        //         plural = 'Brazilian Reais';
        //         break;
        //     case 'BWP':
        //         plural = 'Botswanan Pule';
        //         break;
        //     case 'CNY':
        //         plural = 'Chinese Yuan Renminbi';
        //         break;
        //     case 'CRC':
        //         plural = 'Costa Rican Col\u00f3nes';
        //         break;
        //     case 'CZK':
        //         alt= 'Czech Koruna';
        //         plural = 'Czech Koruny';
        //         break;
        //     case 'DKK':
        //         plural = 'Danish Kroner';
        //         break;
        //     // case 'GBP':
        //     //     alt = 'British Pound';
        //     //     break;
        //     case 'GEL':
        //         plural = 'Georgian Lari';
        //         break;
        //     case 'GTQ':
        //         plural = 'Guatemalan Quetzales';
        //         break;
        //     case 'IMP':
        //         alt = 'Isle of Man or Manx Pound';
        //         break;
        //     case 'ISK':
        //         plural = 'Icelandic Kr\u00f3nur';
        //         break;
        //     case 'JPY':
        //         plural = 'Japanese Yen';
        //         break;
        //     case 'KYD':
        //         alt = 'Caymanian Dollar';
        //         break;
        //     case 'KPW':
        //         plural = 'North Korean Won';
        //         break;
        //     case 'KRW':
        //         plural = 'South Korean Won';
        //         break;
        //     case 'KZT':
        //         plural = 'Kazakhstani Tenge';
        //         break;
        //     case 'LAK':
        //         alt = 'Lao Kip';
        //         break;
        //     case 'LSL':
        //         alt = 'Lesotho or Basotho Loti';
        //         plural = 'Lesotho or Basotho Maloti';
        //         break;
        //     case 'LTL':
        //         plural = 'Lithuanian Litai';
        //         break;
        //     case 'LVL':
        //         plural = 'Latvian Lati';
        //         break;
        //     case 'MDL':
        //         plural = 'Moldovan Lei';
        //         break;
        //     case 'MGA':
        //         plural = 'Malagasy Ariary';
        //         break;
        //     case 'MMK':
        //         alt = 'Myanmar or Burmese Kyat';
        //         break;
        //     case 'MVR':
        //         plural = 'Maldivian Rufiyaa';
        //         break;
        //     case 'MZN':
        //         plural = 'Mozambican Meticais';
        //         break;
        //     case 'NOK':
        //         plural = 'Norwegian Kroner';
        //         break;
        //     case 'PAB':
        //         plural = 'Panamanian Balboa';
        //         break;
        //     case 'PEN':
        //         alt = 'Peruvian Sol';
        //         plural = alt + 'es';
        //         break;
        //     case 'PGK':
        //         plural = 'Papua New Guinean Kina';
        //         break;
        //     case 'PLN':
        //         plural = 'Polish Zlotych';
        //         break;
        //     case 'PYG':
        //         plural = 'Paraguayan Guarani';
        //         break;
        //     case 'RON':
        //         plural = 'Romanian Lei';
        //         break;
        //     case 'SAR':
        //         alt = 'Saudi Riyal';
        //         break;
        //     case 'SEK':
        //         plural = 'Swedish Kronor';
        //         break;
        //     case 'STN':
        //         alt = 'S\u00e3o Tom\u00e9an Dobra';
        //         break;
        //     case 'SVC':
        //         plural = 'Salvadoran Col\u00f3nes';
        //         break;
        //     case 'SZL':
        //         plural = 'Swazi Emalangeni';
        //         break;
        //     case 'THB':
        //         plural = 'Thai Baht';
        //         break;
        //     case 'TJS':
        //         plural = 'Tajikistani Somoni';
        //         break;
        //     case 'TOP':
        //         plural = 'Tongan Pa\u02bbanga';
        //         break;
        //     case 'TRY':
        //         plural = 'Turkish Lire';
        //         break;
        //     case 'TTD':
        //         alt = 'Trinidadian Dollar';
        //         break;
        //     case 'UAH':
        //         plural = 'Ukrainian Hryvni';
        //         break;
        //     // case 'USD':
        //     //     alt = 'US Dollar';
        //     //     break;
        //     case 'UZS':
        //         plural = 'Uzbekistani Sums';
        //         break;
        //     case 'VEF':
        //         alt = 'Venezuelan Bol\u00edvar';
        //         plural = alt + 'es';               
        //         break;
        //     case 'VUV':
        //         plural = 'Ni-Vanuatu Vatu';
        //         break;
        //     case 'WST':
        //         plural = 'Samoan Tala';
        //         break;
        //     case 'XAF':
        //         alt = 'Central African Franc';
        //         break;
        //     case 'XDR':
        //         plural = 'update';
        //         break;
        //     case 'XOF':
        //         alt = 'CFA Franc';
        //         break;
        //     case 'ZAR':
        //         plural = 'South African Rand';
        //         break;
        //     case 'ZMK':
        //         alt = 'Zambian Kwacha';
        //         plural = alt;               
        //         break;
        //     case 'ZMW':
        //         plural = 'Zambian Kwacha';
        //         break;
            
            // default: optional
        //}
        output();
        setSymbols(fromSelected, symbol)
    }

    const [ fromSymbol, setFromSymbol ] = useState('$');
    const [ toSymbol, setToSymbol ] = useState('€');

    function setSymbols(fromSelected, symbol) {
        
        fromSelected ? setFromSymbol(symbol) : setToSymbol(symbol);
    }

    return (
        <div className='result'>
            <h6 className='output-1'>{`${fromSymbol}${amount} ${output1} = `}</h6>
            <br></br>
            <h2 className='output-2'>{`${toSymbol}${result} ${output2}`}</h2>
        </div>
    )
}

// ADD A LOADING ICON WHILE WAITING FOR API CALL
// CHECK THAT ACCENTS ARE USED CORRECTLY