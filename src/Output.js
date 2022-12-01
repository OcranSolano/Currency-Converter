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

    useEffect(() => {
        let acronym1 = props.data[1].slice(0,3);
        runSwitch(acronym1, true)
    }, [amount])

    function runSwitch(acronym, fromSelected) {

        let alt;
        let plural;

        function output() { // called from switch items 

            if (Number(amount) !== 1 && !plural) { // alt outputs, AMOUNT > 1
                alt += 's';
            }

            if (Number(amount) !== 1 && alt === plural) { // alt same as plural, AMOUNT > 1
                alt = from;
            }

            if (plural) { // alt plurals
                if (Number(amount) !== 1) {
                    alt = plural;
                } else {
                    alt = acronym;
                }
                
            }


            /*if (fromSelected) {
                if (!alt) alt = from;
            } else {
                if (!alt) alt = to;
            }*/
            

            fromSelected ? setOutput1(alt) : setOutput2(alt); 
        };

        switch (acronym) {
            case 'AED':
                alt = 'Emirati Dirham';
                output();
                break;
            case 'ALL':
                plural = 'Albanian Leke';
                output();
                break;
            case 'ANG':
                alt = 'Dutch Guilder';
                plural = 'fix';
                output();
                break;
            case 'AWG':
                alt = 'Aruban or Dutch Florin';
                plural = 'fix';
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
            case 'BGN':
                plural = 'Bulgarian Leva';
                output();
                break;
            case 'BRL':
                plural = 'Brazilian Reais';
                output();
                break;
            case 'BWP':
                plural = 'Botswanan Pule';
                output();
                break;
            case 'CNY':
                alt = plural = from;
                output();
                break;
            case 'CRC':
                plural = 'Costa Rican Col\u00f3nes';
                output();
                break;
            case 'CZK':
                plural = 'Czech Koruny';
                output();
                break;
            case 'DKK':
                plural = 'Danish Kroner';
                output();
                break;
            case 'GBP':
                alt = 'British Pound';
                output();
                break;
            case 'GEL':
                plural = 'Georgian Lari';
                output();
                break;
            case 'GTQ':
                plural = 'Guatemalan Quetzales';
                output();
                break;
            case 'IMP':
                alt = 'Isle of Man or Manx Pound';
                output();
                break;
            case 'ISK':
                plural = 'Icelandic Kr\u00f3nur';
                output();
                break;
            case 'JPY':
                alt = plural = from;
                output();
                break;
            case 'KYD':
                alt = 'Caymanian Dollar';
                output();
                break;
            case 'KPW':
                alt = plural = from;
                output();
                break;
            case 'KRW':
                alt = plural = from;
                output();
                break;
            case 'KZT':
                alt = plural = from;
                output();
                break;
            case 'LAK':
                alt = 'Lao Kip';
                output();
                break;
            case 'LSL':
                alt = 'Lesotho or Basotho Loti';
                plural = 'Lesotho or Basotho Maloti'; 
                output();
                break;
            case 'LTL':
                plural = 'Lithuanian Litai';
                output();
                break;
            case 'LVL':
                plural = 'Latvian Lati';
                output();
                break;
            case 'MDL':
                plural = 'Moldovan Lei';
                output();
                break;
            case 'MGA':
                alt = plural = from;
                output();
                break;
            case 'MMK':
                alt = 'Myanmar or Burmese Kyat';
                output();
                break;
            case 'MVR':
                alt = plural = from;
                output();
                break;
            case 'MZN':
                plural = 'Mozambican Meticais';
                output();
                break;
            case 'NOK':
                plural = 'Norwegian Kroner';
                output();
                break;
            case 'PAB':
                alt = plural = from;
                output();
                break;
            case 'PEN':
                alt = 'Peruvian Sol';
                plural = alt + 'es';
                output();
                break;
            case 'PGK':
                alt = plural = from;
                output();
                break;
            case 'PLN':
                plural = 'Polish Zlotych';
                output();
                break;
            case 'PYG':
                alt = plural = from;
                output();
                break;
            case 'RON':
                plural = 'Romanian Lei';
                output();
                break;
            case 'SAR':
                alt = 'Saudi Riyal';
                output();
                break;
            case 'SEK':
                plural = 'Swedish Kronor';
                output();
                break;
            case 'STN':
                alt = 'S\u00e3o Tom\u00e9an Dobra';
                output();
                break;
            case 'SVC':
                plural = 'Salvadoran Col\u00f3nes';
                output();
                break;
            case 'SZL':
                plural = 'Swazi Emalangeni';
                output();
                break;
            case 'THB':
                alt = plural = from;
                output();
                break;
            case 'TJS':
                alt = plural = from;
                output();
                break;
            case 'TOP':
                alt = plural = from;
                output();
                break;
            case 'TRY':
                plural = 'Turkish Lire';
                output();
                break;
            case 'TTD':
                alt = 'Trinidadian Dollar';
                output();
                break;
            case 'UAH':
                plural = 'Ukrainian Hryvni';
                output();
                break;
            case 'USD':
                alt = 'US Dollar';
                output();
                break;
            case 'UZS':
                plural = 'Uzbekistani Sums';
                output();
                break;
            case 'VEF':
                alt = 'Venezuelan Bol\u00edvar';
                plural = alt + 'es';
                output();
                break;
            case 'VUV':
                alt = plural = from;
                output();
                break;
            case 'WST':
                alt = plural = from;
                output();
                break;
            case 'XAF':
                alt = 'Central African Franc';
                output();
                break;
            case 'XDR':
                plural = 'update';
                output();
                break;
            case 'XOF':
                alt = 'CFA Franc';
                output();
                break;
            case 'ZAR':
                alt = plural = from;
                output();
                break;
            case 'ZMK':
                alt = 'Zambian Kwacha';
                plural = alt;
                output();
                break;
            case 'ZMW':
                alt = plural = from;
                output();
                break;
             
            default: // for all other currencies 
                if (Number(amount) !== 1) {
                from += 's';
                }
                fromSelected ? setOutput1(from) : setOutput2(to);
        }
        
    }

    return (
        <div className='result'>
            <h5 className='output-1'>{`${amount} ${output1} = `}</h5>
            <br></br>
            <h3 className='output-2'>{`${result} ${output2}`}</h3>
        </div>
    )
}

// ADD A LOADING ICON WHILE WAITING FOR API CALL
// CHECK THAT ACCENTS ARE USED CORRECTLY