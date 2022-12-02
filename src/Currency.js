import React, { useState, useEffect } from 'react';

const currencies = [
    "USD — United States Dollar 🇺🇸",
    "EUR — Euro 🇪🇺",
    "GBP — British Pound Sterling 🇬🇧", // alt output
    "JPY — Japanese Yen 🇯🇵", // alt plural
    "RUB — Russian Ruble 🇷🇺",
    "CAD — Canadian Dollar 🇨🇦",
    "AED — United Arab Emirates Dirham 🇦🇪", // alt output
    "AFN — Afghan Afghani 🇦🇫",
    "ALL — Albanian Lek 🇦🇱", // alt plural
    "AMD — Armenian Dram 🇦🇲",
    "ANG — Netherlands Antillean Guilder 🇳🇱", // alt output // alt plural
    "AOA — Angolan Kwanza 🇦🇴",
    "ARS — Argentine Peso 🇦🇷",
    "AUD — Australian Dollar 🇦🇺",
    "AWG — Aruban Florin 🇦🇼", // alt output
    "AZN — Azerbaijani Manat 🇦🇿",
    "BAM — Bosnia-Herzegovina Convertible Mark 🇧🇦", // alt output
    "BBD — Barbadian Dollar 🇧🇧", // alt output
    "BDT — Bangladeshi Taka 🇧🇩",
    "BGN — Bulgarian Lev 🇧🇬", // alt plural
    "BHD — Bahraini Dinar 🇧🇭",
    "BIF — Burundian Franc 🇧🇮",
    "BMD — Bermudian Dollar 🇧🇲",
    "BND — Bruneian Dollar 🇧🇳",
    "BOB — Bolivian Boliviano 🇧🇴",
    "BRL — Brazilian Real 🇧🇷", // alt plural
    "BSD — Bahamian Dollar 🇧🇸",
    "BTC — Bitcoin 🪙",
    "BTN — Bhutanese Ngultrum 🇧🇹",
    "BWP — Botswanan Pula 🇧🇼", // alt plural
    "BYN — (New) Belarusian Ruble 🇧🇾",
    "BYR — (Old) Belarusian Ruble 🇧🇾",
    "BZD — Belizean Dollar 🇧🇿",
    "CDF — Congolese Franc 🇨🇩",
    "CHF — Swiss Franc 🇨🇭",
    "CLF — Chilean Unit of Account (UF) 🇨🇱", // ???
    "CLP — Chilean Peso 🇨🇱",
    "CNY — Chinese Yuan Renminbi 🇨🇳", // alt plural
    "COP — Colombian Peso 🇨🇴",
    "CRC — Costa Rican Col\u00f3n 🇨🇷", // alt plural
    "CUC — Cuban Convertible Peso 🇨🇺",
    "CUP — Cuban Peso 🇨🇺",
    "CVE — Cape Verdean Escudo 🇨🇻",
    "CZK — Czech Republic Koruna 🇨🇿", // alt plural
    "DJF — Djiboutian Franc 🇩🇯",
    "DKK — Danish Krone 🇩🇰", // alt plural
    "DOP — Dominican Peso 🇩🇴",
    "DZD — Algerian Dinar 🇩🇿",
    "EGP — Egyptian Pound 🇪🇬",
    "ERN — Eritrean Nakfa 🇪🇷",
    "ETB — Ethiopian Birr 🇪🇹",
    "FJD — Fijian Dollar 🇫🇯",
    "FKP — Falkland Islands Pound 🇫🇰",
    "GEL — Georgian Lari 🇬🇪", // alt plural
    "GGP — Guernsey Pound 🇬🇬",
    "GHS — Ghanaian Cedi 🇬🇭",
    "GIP — Gibraltar Pound 🇬🇮",
    "GMD — Gambian Dalasi 🇬🇲",
    "GNF — Guinean Franc 🇬🇳",
    "GTQ — Guatemalan Quetzal 🇬🇹", // alt plural
    "GYD — Guyanese Dollar 🇬🇾",
    "HKD — Hong Kong Dollar 🇭🇰",
    "HNL — Honduran Lempira 🇭🇳",
    "HRK — Croatian Kuna 🇭🇷",
    "HTG — Haitian Gourde 🇭🇹",
    "HUF — Hungarian Forint 🇭🇺",
    "IDR — Indonesian Rupiah 🇮🇩",
    "ILS — Israeli New Sheqel 🇮🇱",
    "IMP — Isle of Man Pound 🇮🇲", // alt output
    "INR — Indian Rupee 🇮🇳",
    "IQD — Iraqi Dinar 🇮🇶",
    "IRR — Iranian Rial 🇮🇷",
    "ISK — Icelandic Kr\u00f3na 🇮🇸", // alt plural
    "JEP — Jersey Pound 🇯🇪",
    "JMD — Jamaican Dollar 🇯🇲",
    "JOD — Jordanian Dinar 🇯🇴",
    "KES — Kenyan Shilling 🇰🇪",
    "KGS — Kyrgystani Som 🇰🇬",
    "KHR — Cambodian Riel 🇰🇭",
    "KMF — Comorian Franc 🇰🇲",
    "KPW — North Korean Won 🇰🇵", // alt plural
    "KRW — South Korean Won 🇰🇷", // alt plural
    "KWD — Kuwaiti Dinar 🇰🇼",
    "KYD — Cayman Islands Dollar 🇰🇾", // alt output
    "KZT — Kazakhstani Tenge 🇰🇿", // alt plural
    "LAK — Laotian Kip 🇱🇦", // alt output
    "LBP — Lebanese Pound 🇱🇧",
    "LKR — Sri Lankan Rupee 🇱🇰",
    "LRD — Liberian Dollar 🇱🇷",
    "LSL — Lesotho Loti 🇱🇸", // alt output // alt plural
    "LTL — Lithuanian Litas 🇱🇹", // alt plural
    "LVL — Latvian Lat 🇱🇻", // alt plural
    "LYD — Libyan Dinar 🇱🇾",
    "MAD — Moroccan Dirham 🇲🇦",
    "MDL — Moldovan Leu 🇲🇩", // alt plural
    "MGA — Malagasy Ariary 🇲🇬", // alt plural
    "MKD — Macedonian Denar 🇲🇰",
    "MMK — Myanmar Kyat 🇲🇲", // alt output
    "MNT — Mongolian Tugrik 🇲🇳",
    "MOP — Macanese Pataca 🇲🇴",
    "MRO — Mauritanian Ouguiya 🇲🇷", // obsolete, now MRU
    "MUR — Mauritian Rupee 🇲🇺",
    "MVR — Maldivian Rufiyaa 🇲🇻", // alt plural
    "MWK — Malawian Kwacha 🇲🇼",
    "MXN — Mexican Peso 🇲🇽",
    "MYR — Malaysian Ringgit 🇲🇾",
    "MZN — Mozambican Metical 🇲🇿", // alt plural
    "NAD — Namibian Dollar 🇳🇦",
    "NGN — Nigerian Naira 🇳🇬",
    "NIO — Nicaraguan C\u00f3rdoba 🇳🇮",
    "NOK — Norwegian Krone 🇳🇴", // alt plural
    "NPR — Nepalese Rupee 🇳🇵",
    "NZD — New Zealand Dollar 🇳🇿",
    "OMR — Omani Rial 🇴🇲",
    "PAB — Panamanian Balboa 🇵🇦", // alt plural
    "PEN — Peruvian Nuevo Sol 🇵🇪", // alt output // alt plural
    "PGK — Papua New Guinean Kina 🇵🇬",// alt plural
    "PHP — Philippine Peso 🇵🇭",
    "PKR — Pakistani Rupee 🇵🇰",
    "PLN — Polish Zloty 🇵🇱", // alt plural
    "PYG — Paraguayan Guarani 🇵🇾", // alt plural
    "QAR — Qatari Rial 🇶🇦", // or Riyal???
    "RON — Romanian Leu 🇷🇴", // alt plural
    "RSD — Serbian Dinar 🇷🇸",
    "RWF — Rwandan Franc 🇷🇼",
    "SAR — Saudi Arabian Riyal 🇸🇦", // alt output
    "SBD — Solomon Islander Dollar 🇸🇧",
    "SCR — Seychellois Rupee 🇸🇨",
    "SDG — Sudanese Pound 🇸🇩",
    "SEK — Swedish Krona 🇸🇪", // alt plural
    "SGD — Singapore Dollar 🇸🇬",
    "SHP — Saint Helenian Pound 🇸🇭",
    "SLL — Sierra Leonean Leone 🇸🇱",
    "SOS — Somali Shilling 🇸🇴",
    "SRD — Surinamese Dollar 🇸🇷",
    "STN — S\u00e3o Tom\u00e9 and Pr\u00edncipe Dobra 🇸🇹", // STD obsolete, STN current // alt output
    "SVC — Salvadoran Col\u00f3n 🇸🇻", // Obsolete
    "SYP — Syrian Pound 🇸🇾",
    "SZL — Swazi Lilangeni 🇸🇿", // alt plural
    "THB — Thai Baht 🇹🇭", // alt plural
    "TJS — Tajikistani Somoni 🇹🇯", // alt plural
    "TMT — Turkmenistani Manat 🇹🇲",
    "TND — Tunisian Dinar 🇹🇳",
    "TOP — Tongan Pa\u02bbanga 🇹🇴", // alt plural
    "TRY — Turkish Lira 🇹🇷", // alt plural🇹
    "TTD — Trinidad and Tobago Dollar 🇹🇹", // alt output
    "TWD — New Taiwan Dollar 🇹🇼",
    "TZS — Tanzanian Shilling 🇹🇿",
    "UAH — Ukrainian Hryvnia 🇺🇦", // alt plural
    "UGX — Ugandan Shilling 🇺🇬",
    "UYU — Uruguayan Peso 🇺🇾",
    "UZS — Uzbekistan Som 🇺🇿", // alt plural
    "VEF — Venezuelan Bol\u00edvar Fuerte 🇻🇪", // alt output // alt plural
    "VND — Vietnamese Dong 🇻🇳",
    "VUV — Ni-Vanuatu Vatu 🇻🇺",
    "WST — Samoan Tala 🇼🇸", // alt plural
    "XAF — CFA Franc BEAC 🌍", // alt output
    "XAG — Silver (troy) ounce 🪙",
    "XAU — Gold (troy) ounce ⚱️",
    "XCD — East Caribbean Dollar 🏝",
    "XDR — Special Drawing Rights 🇺🇳", // alt plural
    "XOF — CFA Franc BCEAO 🌍", // alt output
    "XPF — CFP Franc 🇵🇫",
    "YER — Yemeni Rial 🇾🇪",
    "ZAR — South African Rand 🇿🇦", // alt plural
    "ZMK — Zambian Kwacha (pre-2013) 🇿🇲", // alt output // alt plural
    "ZMW — Zambian Kwacha 🇿🇲", // alt plural
    "ZWL — Zimbabwean Dollar 🇿🇼"
]

// for (let name of currencies) { // style currency name here
    // console.log(name);

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
                {currencies.map(currency => (
                <option value={currency} key={currency.toString()}>{currency}</option>
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
                {currencies.map(currency => (
                <option value={currency} key={currency.toString()}>{currency}</option>
                ))}
            </select>
            <label for='endcurrency'>To</label>
        </div>
    )
}