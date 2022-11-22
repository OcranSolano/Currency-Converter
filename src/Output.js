import React, { useState, useEffect } from 'react';

export default function Output(props) {

    const amount = props.data[0];
    let from = props.data[1].slice(6); // name w/o acronym
    let to = props.data[2].slice(6); // name w/o acronym
    const result = props.data[3];
    
    // states are needed for render as useEffect runs afterward, causing full names to display (state setters used in switch logic to render alt outputs)
    const [ output1, setOutput1 ] = useState(from) 
    const [ output2, setOutput2 ] = useState(to)
    // stores FROM and TO for useEffect comparison. State setters used to same hook to store new values for future use
    const [ prevFrom, setPrevFrom ] = useState(from)
    const [ prevTo, setPrevTo ] = useState(to)
    
    useEffect(() => { // when user selects new FROM or TO, conditionals are used to determine which selection was altered: if newly selected FROM or TO differs with the values saved in PREV states, the switch statement is called with the respective FROM or TO acronym and a boolean to semantically indicate which state to update. If no alt output for currency, update the output states by default with the FROM and TO values from props.

        // console.log(`PREV is ${prev}, FROM is ${from}`)
        let acronym1 = props.data[1].slice(0,3);
        let acronym2 = props.data[2].slice(0,3);
        if (prevFrom !== from) runSwitch(acronym1, true) // FROM has changed
        if (prevTo !== to) runSwitch(acronym2, false) // TO has changed
        
        setPrevFrom(from)
        setPrevTo(to)
        
    }, [from, to])

    /*useEffect(() => {
        let acronym1 = props.data[1].slice(0,3);
        runSwitch(acronym1, true)
    }, [amount])*/

    function runSwitch(acronym, fromSelected) {

        let alt;
        let alt2;

        function output() { 
            if(Number(amount) !== 1) alt = alt2; 
            fromSelected ? setOutput1(alt) : setOutput2(alt); 
        };

        switch (acronym) {
            case 'GBP':
                alt = 'British Pound';
                output();
                break;
            case 'AED':
                alt = 'Emirati Dirham';
                output();
                break;
            case 'ANG':
                alt = 'Dutch Guilder';
                output();
                break;
            case 'AWG':
                alt = 'Aruban or Dutch Florin';
                output();
                break;
            case 'BAM':
                alt = 'Bosnian Covertible Mark';
                output();
                break;
            case 'BBD':
                alt = 'Barbadian or Bajan Dollar';
                output();
                break;
            case 'IMP':
                alt = 'Isle of Man or Manx Pound';
                output();
                break;
            case 'JPY':
                alt = 'Japanese Yen';
                alt2 = 'Japanese Yen';
            case 'KYD':
                alt = 'Caymanian Dollar';
                output();
                break;
            case 'LAK':
                alt = 'Lao Kip';
                output();
                break;
            case 'LSL':
                alt = 'Lesotho or Basotho Loti';
                alt2 = 'Lesotho or Basotho Maloti'; 
                output();
                break;
            case 'MMK':
                alt = 'Myanmar or Burmese Kyat';
                output();
                break;
            case 'PEN':
                alt = 'Peruvian Sol';
                output();
                break;
            case 'SAR':
                alt = 'Saudi Riyal';
                output();
                break;
            case 'STN':
                alt = 'S\u00e3o Tom\u00e9an Dobra';
                output();
                break;
            case 'TTD':
                alt = 'Trinidadian Dollar';
                output();
                break;
            case 'VEF':
                alt = 'Venezuelan Bol\u00edvar';
                output();
                break;
            case 'XAF':
                alt = 'Central African Franc';
                output();
                break;
            case 'XOF':
                alt = 'CFA Franc';
                output();
                break;
            case 'ZMK':
                alt = 'Zambian Kwacha';
                output();
                break;
            default:
                fromSelected ? setOutput1(from) : setOutput2(to);
        }
    }
    
    if (amount > 1 || amount < 1) from += 's'; // Some currencies don't apply (JPY, ALL, ANG, AWG, BGN, BRL, BWP, CNY, CRC, CZK, DKK, GEL, GTQ, ISK, KPW, KRW, KZT, LSL, LTL, LVL, MDL, MGA, MVR, MZN, NOK, PAB, PEN, PGK, PLN, PYG, RON, SEK, SVC, SZL, THB, TJS, TOP, TRY, UAH, UZS, VEF, VUV, WST, XDR, ZAR, ZMK, ZMW), also make singular if > 1 decimal
    if (result !== '1' && result !== 1) to += 's';

    return (
        <div className='result'>
            <h5 className='output-1'>{`${amount} ${output1} = `}</h5>
            <br></br>
            <h3 className='output-2'>{`${result} ${output2}`}</h3>
        </div>
    )
}

// ADD A LOADING ICON WHILE WAITING FOR API CALL