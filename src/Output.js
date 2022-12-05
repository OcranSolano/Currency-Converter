import React, { useState, useEffect } from 'react';

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

        let alt;
        let plural;

        function output() { // called from switch items 

            let currency; 

            if (Number(amount) !== 1) {
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

        switch (acronym) {
            case 'AED':
                alt = 'Emirati Dirham';
                break;
            case 'ALL':
                plural = 'Albanian Leke';
                break;
            case 'ANG':
                alt = 'Dutch Guilder';
                plural = 'fix';
                break;
            case 'AWG':
                alt = 'Aruban or Dutch Florin';
                plural = 'fix';
                break;
            case 'BAM':
                alt = 'Bosnian Covertible Mark';
                break;
            case 'BBD':
                alt = 'Barbadian or Bajan Dollar';
                break;
            case 'BGN':
                plural = 'Bulgarian Leva';
                break;
            case 'BRL':
                plural = 'Brazilian Reais';
                break;
            case 'BWP':
                plural = 'Botswanan Pule';
                break;
            case 'CNY':
                plural = 'Chinese Yuan Renminbi';
                break;
            case 'CRC':
                plural = 'Costa Rican Col\u00f3nes';
                break;
            case 'CZK':
                alt= 'Czech Koruna';
                plural = 'Czech Koruny';
                break;
            case 'DKK':
                plural = 'Danish Kroner';
                break;
            case 'GBP':
                alt = 'British Pound';
                break;
            case 'GEL':
                plural = 'Georgian Lari';
                break;
            case 'GTQ':
                plural = 'Guatemalan Quetzales';
                break;
            case 'IMP':
                alt = 'Isle of Man or Manx Pound';
                break;
            case 'ISK':
                plural = 'Icelandic Kr\u00f3nur';
                break;
            case 'JPY':
                plural = 'Japanese Yen';
                break;
            case 'KYD':
                alt = 'Caymanian Dollar';
                break;
            case 'KPW':
                plural = 'North Korean Won';
                break;
            case 'KRW':
                plural = 'South Korean Won';
                break;
            case 'KZT':
                plural = 'Kazakhstani Tenge';
                break;
            case 'LAK':
                alt = 'Lao Kip';
                break;
            case 'LSL':
                alt = 'Lesotho or Basotho Loti';
                plural = 'Lesotho or Basotho Maloti';
                break;
            case 'LTL':
                plural = 'Lithuanian Litai';
                break;
            case 'LVL':
                plural = 'Latvian Lati';
                break;
            case 'MDL':
                plural = 'Moldovan Lei';
                break;
            case 'MGA':
                plural = 'Malagasy Ariary';
                break;
            case 'MMK':
                alt = 'Myanmar or Burmese Kyat';
                break;
            case 'MVR':
                plural = 'Maldivian Rufiyaa';
                break;
            case 'MZN':
                plural = 'Mozambican Meticais';
                break;
            case 'NOK':
                plural = 'Norwegian Kroner';
                break;
            case 'PAB':
                plural = 'Panamanian Balboa';
                break;
            case 'PEN':
                alt = 'Peruvian Sol';
                plural = alt + 'es';
                break;
            case 'PGK':
                plural = 'Papua New Guinean Kina';
                break;
            case 'PLN':
                plural = 'Polish Zlotych';
                break;
            case 'PYG':
                plural = 'Paraguayan Guarani';
                break;
            case 'RON':
                plural = 'Romanian Lei';
                break;
            case 'SAR':
                alt = 'Saudi Riyal';
                break;
            case 'SEK':
                plural = 'Swedish Kronor';
                break;
            case 'STN':
                alt = 'S\u00e3o Tom\u00e9an Dobra';
                break;
            case 'SVC':
                plural = 'Salvadoran Col\u00f3nes';
                break;
            case 'SZL':
                plural = 'Swazi Emalangeni';
                break;
            case 'THB':
                plural = 'Thai Baht';
                break;
            case 'TJS':
                plural = 'Tajikistani Somoni';
                break;
            case 'TOP':
                plural = 'Tongan Pa\u02bbanga';
                break;
            case 'TRY':
                plural = 'Turkish Lire';
                break;
            case 'TTD':
                alt = 'Trinidadian Dollar';
                break;
            case 'UAH':
                plural = 'Ukrainian Hryvni';
                break;
            case 'USD':
                alt = 'US Dollar';
                break;
            case 'UZS':
                plural = 'Uzbekistani Sums';
                break;
            case 'VEF':
                alt = 'Venezuelan Bol\u00edvar';
                plural = alt + 'es';               
                break;
            case 'VUV':
                plural = 'Ni-Vanuatu Vatu';
                break;
            case 'WST':
                plural = 'Samoan Tala';
                break;
            case 'XAF':
                alt = 'Central African Franc';
                break;
            case 'XDR':
                plural = 'update';
                break;
            case 'XOF':
                alt = 'CFA Franc';
                break;
            case 'ZAR':
                plural = 'South African Rand';
                break;
            case 'ZMK':
                alt = 'Zambian Kwacha';
                plural = alt;               
                break;
            case 'ZMW':
                plural = 'Zambian Kwacha';
                break;
            
            // default: optional
        }
        output();
        setSymbols(acronym, fromSelected)
    }

    const [ fromSymbol, setFromSymbol ] = useState('$');
    const [ toSymbol, setToSymbol ] = useState('€');

    function setSymbols(acronym, fromSelected) {
        let symbol = '';
        const dollars = ['ARS', 'AUD', 'BSD', 'BBD', 'BMD', 'BND', 'CAD', 'KYD', 'CLP', 'COP', 'XCD', 'SVC', 'FJD', 'GYD', 'HKD', 'LRD', 'MXN', 'NAD', 'NZD', 'SGD', 'SBD', 'SRD', 'USD'];
        const pounds = ['EGP', 'FKP', 'GIP', 'GGP', 'IMP', 'JEP', 'LBP', 'SHP', 'SYP', 'GBP'];
        const guilder = ['AWG', 'ANG'];
        const Y = ['CNY', 'JPY'];
        const won = ['KPW', 'KRW'];
        const rial = ['IRR', 'OMR', 'QAR', 'SAR', 'YER'];
        const cyrillic = ['BGN', 'KZT', 'KGS', 'UZS'];
        const peso = ['CUP', 'PHP'];
        const rupee = ['MUR', 'NPR', 'PKR', 'SCR', 'LKR'];
        const nordic = ['DKK', 'ISK', 'NOK', 'SEK'];

        switch (acronym) {
            case 'BZD':
                symbol = 'BZ$';
                break;
            case 'BOB':
                symbol = '$b';
                break;
            case 'BRL':
                symbol = 'R$';
                break;
            case 'DOP':
                symbol = 'RD$';
                break;
            case 'JMD':
                symbol = 'J$';
                break;
            case 'NIO':
                symbol = 'C$';
                break;
            case 'TWD':
                symbol = 'NT$';
                break;
            case 'TTD':
                symbol = 'TT$';
                break;
            case 'UYU':
                symbol = '$U';
                break;
            case 'ZWL':
                symbol = 'Z$';
                break;
            case 'EUR':
                symbol = '€';
                break;
            case 'ALL':
                symbol = 'Lek';
                break;
            case 'AFN':
                symbol = '؋';
                break;
            case 'AZN':
                symbol = '₼';
                break;
            case 'BYN':
                symbol = 'Br';
                break;
            case 'BAM':
                symbol = 'KM';
                break;
            case 'BWP':
                symbol = 'P';
                break;
            case 'KHR':
                symbol = '៛';
                break;
            case 'CRC':
                symbol = '₡';
                break;
            case 'HRK':
                symbol = 'kn';
                break;
            case 'CZK':
                symbol = 'Kč';
                break;
            case 'GHS':
                symbol = '¢';
                break;
            case 'GTQ':
                symbol = 'Q';
                break;
            case 'HNL':
                symbol = 'L';
                break;
            case 'HUF':
                symbol = 'Ft';
                break;
            case 'INR':
                symbol = '₹';
                break;
            case 'IDR':
                symbol = 'Rp';
                break;
            case 'ILS':
                symbol = '₪';
                break;
            case 'LAK':
                symbol = '₭';
                break;
            case 'MKD':
                symbol = 'ден';
                break;
            case 'MYR':
                symbol = 'RM';
                break;
            case 'MNT':
                symbol = '₮';
                break;
            case 'MZN':
                symbol = 'MT';
                break;
            case 'NGN':
                symbol = '₦';
                break;
            case 'PAB':
                symbol = 'B/.';
                break;
            case 'PYG':
                symbol = 'Gs';
                break;
            case 'PEN':
                symbol = 'S/.';
                break;
            case 'PLN':
                symbol = 'zł';
                break;
            case 'RON':
                symbol = 'lei';
                break;
            case 'RUB':
                symbol = '₽';
                break;
            case 'RSD':
                symbol = 'Дин';
                break;
            case 'SOS':
                symbol = 'S';
                break;
            case 'ZAR':
                symbol = 'R';
                break;
            case 'CHF':
                symbol = 'CHF';
                break;
            case 'THB':
                symbol = '฿';
                break;
            case 'TRY':
                symbol = '₺';
                break;
            case 'UAH':
                symbol = '₴';
                break;
            case 'VEF':
                symbol = 'Bs';
                break;
            case 'VND':
                symbol = '₫';
                break;
            case 'AED':
                symbol = `د.إ`;
                break;
        }

        if (dollars.includes(acronym)) symbol = '$'; // 23
        if (pounds.includes(acronym)) symbol = '£'; // 10
        if (guilder.includes(acronym)) symbol = 'ƒ'; // 2
        if (Y.includes(acronym)) symbol = '¥'; // 2
        if (rial.includes(acronym)) symbol = '﷼'; // 5
        if (won.includes(acronym)) symbol = '₩'; // 2
        if (cyrillic.includes(acronym)) symbol = 'лв'; // 4
        if (peso.includes(acronym)) symbol = '₱'; // 2
        if (rupee.includes(acronym)) symbol = '₨'; // 5
        if (nordic.includes(acronym)) symbol = 'kr' // 4
        
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