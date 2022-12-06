const img = new Image();
img.src = 'https://flagcdn.com/us.svg';

export const currencies = [
    { name: 'USD — United States Dollar', 
        symbol: '$', 
        alt: 'US Dollar', 
        plural: null, 
        flag: img 
    },
    { name: 'EUR — Euro', symbol: '', alt: null, plural: null, flag: img }, 
    { name: 'GBP — British Pound Sterling', symbol: '', alt: 'British Pound', plural: null, flag: img },
    { name: 'JPY — Japanese Yen', symbol: '', alt: null, plural: 'Japanese Yen', flag: img },
    { name: 'RUB — Russian Ruble', symbol: '', alt: null, plural: null, flag: img },
    { name: 'CAD — Canadian Dollar', symbol: '$', alt: null, plural: null, flag: img },
    { name: 'AED — United Arab Emirates Dirham ', symbol: '', alt: '', plural: '', flag: img },
    { name: 'AFN — Afghan Afghani', symbol: '', alt: '', plural: '', flag: img },
    { name: 'ALL — Albanian Lek', symbol: '', alt: '', plural: '', flag: img },
    { name: 'AMD — Armenian Dram', symbol: '', alt: '', plural: '', flag: img },
    { name: 'ANG — Netherlands Antillean Guilder', symbol: '', alt: '', plural: '', flag: img },
    { name: 'AOA — Angolan Kwanza', symbol: '', alt: '', plural: '', flag: img },
    { name: 'ARS — Argentine Peso 🇦🇷', symbol: '$', alt: '', plural: '', flag: img },
    { name: 'AUD — Australian Dollar 🇦🇺', symbol: '$', alt: '', plural: '', flag: img },
    { name: 'AWG — Aruban Florin 🇦🇼', symbol: '',alt: '',plural: '',flag: img },
    { name: 'AZN — Azerbaijani Manat 🇦🇿', symbol: '', alt: '', plural: '', flag: img },
    { name: 'BAM — Bosnia-Herzegovina Convertible Mark 🇧🇦', symbol: '', alt: '', plural: '', flag: img },
    { name: 'BBD — Barbadian Dollar 🇧🇧', symbol: '$', alt: '', plural: '', flag: img },
    { name: 'BDT — Bangladeshi Taka 🇧🇩', symbol: '', alt: '', plural: '', flag: img },
    { name: 'BGN — Bulgarian Lev 🇧🇬', symbol: '', alt: '', plural: '', flag: img },
    { name: 'BHD — Bahraini Dinar 🇧🇭', symbol: '', alt: '', plural: '', flag: img },
    { name: 'BIF — Burundian Franc 🇧🇮', symbol: '', alt: '', plural: '', flag: img },
    { name: 'BMD — Bermudian Dollar 🇧🇲', symbol: '$', alt: '', plural: '', flag: img },
    { name: 'BND — Bruneian Dollar 🇧🇳', symbol: '$', alt: '', plural: '', flag: img },
    { name: 'BOB — Bolivian Boliviano 🇧🇴', symbol: '', alt: '', plural: '', flag: img },
    { name: 'BRL — Brazilian Real 🇧🇷', symbol: '', alt: '', plural: '', flag: img },
    { name: 'BSD — Bahamian Dollar 🇧🇸', symbol: '$', alt: '', plural: '', flag: img },
    { name: 'BTC — Bitcoin 🪙', symbol: '', alt: '', plural: '', flag: img },
    { name: 'BTN — Bhutanese Ngultrum 🇧🇹', symbol: '', alt: '', plural: '', flag: img },
    { name: 'BWP — Botswanan Pula🇧🇼', symbol: '', alt: '', plural: '', flag: img },
    { name: 'BYN — (New) Belarusian Ruble 🇧🇾', symbol: '', alt: '', plural: '', flag: img },
    { name: 'BYR — (Old) Belarusian Ruble 🇧🇾', symbol: '', alt: '', plural: '', flag: img },
    { name: 'BZD — Belizean Dollar 🇧🇿', symbol: '', alt: '', plural: '', flag: img },
    { name: 'CDF — Congolese Franc 🇨🇩', symbol: '', alt: '', plural: '', flag: img },
    { name: 'CHF — Swiss Franc 🇨🇭', symbol: '', alt: '', plural: '', flag: img },
    { name: 'CLF — Chilean Unit of Account (UF) 🇨🇱', symbol: '', alt: '', plural: '', flag: img },
    { name: 'CLP — Chilean Peso 🇨🇱', symbol: '$', alt: '', plural: '', flag: img },
    { name: 'CNY — Chinese Yuan Renminbi 🇨🇳', symbol: '', alt: '', plural: '', flag: img },
    { name: 'COP — Colombian Peso 🇨🇴', symbol: '$', alt: '', plural: '', flag: img },
    { name: 'CRC — Costa Rican Col\u00f3n 🇨🇷', symbol: '', alt: '', plural: '', flag: img },
    { name: 'CUC — Cuban Convertible Peso 🇨🇺', symbol: '', alt: '', plural: '', flag: img },
    { name: 'CUP — Cuban Peso 🇨🇺', symbol: '', alt: '', plural: '', flag: img },
    { name: 'CVE — Cape Verdean Escudo 🇨🇻', symbol: '', alt: '', plural: '', flag: img },
    { name: 'CZK — Czech Republic Koruna 🇨🇿', symbol: '', alt: '', plural: '', flag: img },
    { name: 'DJF — Djiboutian Franc 🇩🇯', symbol: '', alt: '', plural: '', flag: img },
    { name: 'DKK — Danish Krone 🇩🇰', symbol: '', alt: '', plural: '', flag: img },
    { name: 'DOP — Dominican Peso 🇩🇴', symbol: '', alt: '', plural: '', flag: img },
    { name: 'DZD — Algerian Dinar 🇩🇿', symbol: '', alt: '', plural: '', flag: img },
    { name: 'EGP — Egyptian Pound 🇪🇬', symbol: '', alt: '', plural: '', flag: img },
    { name: 'ERN — Eritrean Nakfa 🇪🇷', symbol: '', alt: '', plural: '', flag: img },
    { name: 'ETB — Ethiopian Birr 🇪🇹', symbol: '', alt: '', plural: '', flag: img },
    { name: 'FJD — Fijian Dollar 🇫🇯', symbol: '$', alt: '', plural: '', flag: img },
    { name: 'FKP — Falkland Islands Pound 🇫🇰', symbol: '', alt: '', plural: '', flag: img },
    { name: 'GEL — Georgian Lari 🇬🇪', symbol: '', alt: '', plural: '', flag: img },
    { name: 'GGP — Guernsey Pound 🇬🇬', symbol: '', alt: '', plural: '', flag: img },
    { name: 'GHS — Ghanaian Cedi 🇬🇭', symbol: '', alt: '', plural: '', flag: img },
    { name: 'GIP — Gibraltar Pound 🇬🇮', symbol: '', alt: '', plural: '', flag: img },
    { name: 'GMD — Gambian Dalasi 🇬🇲', symbol: '', alt: '', plural: '', flag: img },
    { name: 'GNF — Guinean Franc 🇬🇳', symbol: '', alt: '', plural: '', flag: img },
    { name: 'GTQ — Guatemalan Quetzal 🇬🇹', symbol: '', alt: '', plural: '', flag: img },
    { name: 'GYD — Guyanese Dollar 🇬🇾', symbol: '$', alt: '', plural: '', flag: img },
    { name: 'HKD — Hong Kong Dollar 🇭🇰', symbol: '$', alt: '', plural: '', flag: img },
    { name: 'HNL — Honduran Lempira 🇭🇳', symbol: '', alt: '', plural: '', flag: img },
    { name: 'HRK — Croatian Kuna 🇭🇷', symbol: '', alt: '', plural: '', flag: img },
    { name: 'HTG — Haitian Gourde 🇭🇹', symbol: '', alt: '', plural: '', flag: img },
    { name: 'HUF — Hungarian Forint 🇭🇺', symbol: '', alt: '', plural: '', flag: img },
    { name: 'IDR — Indonesian Rupiah 🇮🇩', symbol: '', alt: '', plural: '', flag: img },
    { name: 'ILS — Israeli New Sheqel 🇮🇱', symbol: '', alt: '', plural: '', flag: img },
    { name: 'IMP — Isle of Man Pound 🇮🇲', symbol: '', alt: '', plural: '', flag: img },
    { name: 'INR — Indian Rupee 🇮🇳', symbol: '', alt: '', plural: '', flag: img },
    { name: 'IQD — Iraqi Dinar 🇮🇶', symbol: '', alt: '', plural: '', flag: img },
    { name: 'IRR — Iranian Rial 🇮🇷', symbol: '', alt: '', plural: '', flag: img },
    { name: 'ISK — Icelandic Kr\u00f3na 🇮🇸', symbol: '', alt: '', plural: '', flag: img },
    { name: 'JEP — Jersey Pound 🇯🇪', symbol: '', alt: '', plural: '', flag: img },
    { name: 'JMD — Jamaican Dollar 🇯🇲', symbol: '', alt: '', plural: '', flag: img },
    { name: 'JOD — Jordanian Dinar 🇯🇴', symbol: '', alt: '', plural: '', flag: img },
    { name: 'KES — Kenyan Shilling 🇰🇪', symbol: '', alt: '', plural: '', flag: img },
    { name: 'KGS — Kyrgystani Som 🇰🇬', symbol: '', alt: '', plural: '', flag: img },
    { name: 'KHR — Cambodian Riel 🇰🇭', symbol: '', alt: '', plural: '', flag: img },
    { name: 'KMF — Comorian Franc 🇰🇲', symbol: '', alt: '', plural: '', flag: img },
    { name: 'KPW — North Korean Won 🇰🇵', symbol: '', alt: '', plural: '', flag: img },
    { name: 'KRW — South Korean Won 🇰🇷', symbol: '', alt: '', plural: '', flag: img },
    { name: 'KWD — Kuwaiti Dinar 🇰🇼', symbol: '', alt: '', plural: '', flag: img },
    { name: 'KYD — Cayman Islands Dollar 🇰🇾', symbol: '$', alt: '', plural: '', flag: img },
    { name: 'KZT — Kazakhstani Tenge 🇰🇿', symbol: '', alt: '', plural: '', flag: img },
    { name: 'LAK — Laotian Kip 🇱🇦', symbol: '', alt: '', plural: '', flag: img },
    { name: 'LBP — Lebanese Pound 🇱🇧', symbol: '', alt: '', plural: '', flag: img },
    { name: 'LKR — Sri Lankan Rupee 🇱🇰', symbol: '', alt: '', plural: '', flag: img },
    { name: 'LRD — Liberian Dollar 🇱🇷', symbol: '$', alt: '', plural: '', flag: img },
    { name: 'LSL — Lesotho Loti 🇱🇸', symbol: '', alt: '', plural: '', flag: img },
    { name: 'LTL — Lithuanian Litas 🇱🇹', symbol: '', alt: '', plural: '', flag: img },
    { name: 'LVL — Latvian Lat 🇱🇻', symbol: '', alt: '', plural: '', flag: img },
    { name: 'LYD — Libyan Dinar 🇱🇾', symbol: '', alt: '', plural: '', flag: img },
    { name: 'MAD — Moroccan Dirham 🇲🇦', symbol: '', alt: '', plural: '', flag: img },
    { name: 'MDL — Moldovan Leu 🇲🇩', symbol: '', alt: '', plural: '', flag: img },
    { name: 'MGA — Malagasy Ariary 🇲🇬', symbol: '', alt: '', plural: '', flag: img },
    { name: 'MKD — Macedonian Denar 🇲🇰', symbol: '', alt: '', plural: '', flag: img },
    { name: 'MMK — Myanmar Kyat 🇲🇲', symbol: '', alt: '', plural: '', flag: img },
    { name: 'MNT — Mongolian Tugrik 🇲🇳', symbol: '', alt: '', plural: '', flag: img },
    { name: 'MOP — Macanese Pataca 🇲🇴', symbol: '', alt: '', plural: '', flag: img },
    { name: 'MRO — Mauritanian Ouguiya 🇲🇷', symbol: '', alt: '', plural: '', flag: img },
    { name: 'MUR — Mauritian Rupee 🇲🇺', symbol: '', alt: '', plural: '', flag: img },
    { name: 'MVR — Maldivian Rufiyaa 🇲🇻', symbol: '', alt: '', plural: '', flag: img },
    { name: 'MWK — Malawian Kwacha 🇲🇼', symbol: '', alt: '', plural: '', flag: img },
    { name: 'MXN — Mexican Peso 🇲🇽', symbol: '$', alt: '', plural: '', flag: img },
    { name: 'MYR — Malaysian Ringgit 🇲🇾', symbol: '', alt: '', plural: '', flag: img },
    { name: 'MZN — Mozambican Metical 🇲🇿', symbol: '', alt: '', plural: '', flag: img },
    { name: 'NAD — Namibian Dollar 🇳🇦', symbol: '$', alt: '', plural: '', flag: img },
    { name: 'NGN — Nigerian Naira 🇳🇬', symbol: '', alt: '', plural: '', flag: img },
    { name: 'NIO — Nicaraguan C\u00f3rdoba 🇳🇮', symbol: '', alt: '', plural: '', flag: img },
    { name: 'NOK — Norwegian Krone 🇳🇴', symbol: '', alt: '', plural: '', flag: img },
    { name: 'NPR — Nepalese Rupee 🇳🇵', symbol: '', alt: '', plural: '', flag: img },
    { name: 'NZD — New Zealand Dollar 🇳🇿', symbol: '$', alt: '', plural: '', flag: img },
    { name: 'OMR — Omani Rial 🇴🇲', symbol: '', alt: '', plural: '', flag: img },
    { name: 'PAB — Panamanian Balboa 🇵🇦', symbol: '', alt: '', plural: '', flag: img },
    { name: 'PEN — Peruvian Nuevo Sol 🇵🇪', symbol: '', alt: '', plural: '', flag: img },
    { name: 'PGK — Papua New Guinean Kina 🇵🇬', symbol: '', alt: '', plural: '', flag: img },
    { name: 'PHP — Philippine Peso 🇵🇭', symbol: '', alt: '', plural: '', flag: img },
    { name: 'PKR — Pakistani Rupee 🇵🇰', symbol: '', alt: '', plural: '', flag: img },
    { name: 'PLN — Polish Zloty 🇵🇱', symbol: '', alt: '', plural: '', flag: img },
    { name: 'PYG — Paraguayan Guarani 🇵🇾', symbol: '', alt: '', plural: '', flag: img },
    { name: 'QAR — Qatari Rial 🇶🇦', symbol: '', alt: '', plural: '', flag: img },
    { name: 'RON — Romanian Leu 🇷🇴', symbol: '', alt: '', plural: '', flag: img },
    { name: 'RSD — Serbian Dinar 🇷🇸', symbol: '', alt: '', plural: '', flag: img },
    { name: 'RWF — Rwandan Franc 🇷🇼', symbol: '', alt: '', plural: '', flag: img },
    { name: 'SAR — Saudi Arabian Riyal 🇸🇦', symbol: '', alt: '', plural: '', flag: img },
    { name: 'SBD — Solomon Islander Dollar 🇸🇧', symbol: '$', alt: '', plural: '', flag: img },
    { name: 'SCR — Seychellois Rupee 🇸🇨', symbol: '', alt: '', plural: '', flag: img },
    { name: 'SDG — Sudanese Pound 🇸🇩', symbol: '', alt: '', plural: '', flag: img },
    { name: 'SEK — Swedish Krona 🇸🇪', symbol: '', alt: '', plural: '', flag: img },
    { name: 'SGD — Singapore Dollar 🇸🇬', symbol: '$', alt: '', plural: '', flag: img },
    { name: 'SHP — Saint Helenian Pound 🇸🇭', symbol: '', alt: '', plural: '', flag: img },
    { name: 'SLL — Sierra Leonean Leone 🇸🇱', symbol: '', alt: '', plural: '', flag: img },
    { name: 'SOS — Somali Shilling 🇸🇴', symbol: '', alt: '', plural: '', flag: img },
    { name: 'SRD — Surinamese Dollar 🇸🇷', symbol: '$', alt: '', plural: '', flag: img },
    { name: 'STN — S\u00e3o Tom\u00e9 and Pr\u00edncipe Dobra 🇸🇹', symbol: '', alt: '', plural: '', flag: img },
    { name: 'SVC — Salvadoran Col\u00f3n 🇸🇻', symbol: '$', alt: '', plural: '', flag: img },
    { name: 'SYP — Syrian Pound 🇸🇾', symbol: '', alt: '', plural: '', flag: img },
    { name: 'SZL — Swazi Lilangeni 🇸🇿', symbol: '', alt: '', plural: '', flag: img },
    { name: 'THB — Thai Baht 🇹🇭', symbol: '', alt: '', plural: '', flag: img },
    { name: 'TJS — Tajikistani Somoni 🇹🇯', symbol: '', alt: '', plural: '', flag: img },
    { name: 'TMT — Turkmenistani Manat 🇹🇲', symbol: '', alt: '', plural: '', flag: img },
    { name: 'TND — Tunisian Dinar 🇹🇳', symbol: '', alt: '', plural: '', flag: img },
    { name: 'TOP — Tongan Pa\u02bbanga 🇹🇴', symbol: '', alt: '', plural: '', flag: img },
    { name: 'TRY — Turkish Lira 🇹🇷', symbol: '', alt: '', plural: '', flag: img },
    { name: 'TTD — Trinidad and Tobago Dollar 🇹🇹', symbol: '', alt: '', plural: '', flag: img },
    { name: 'TWD — New Taiwan Dollar 🇹🇼', symbol: '', alt: '', plural: '', flag: img },
    { name: 'TZS — Tanzanian Shilling 🇹🇿', symbol: '', alt: '', plural: '', flag: img },
    { name: 'UAH — Ukrainian Hryvnia 🇺🇦', symbol: '', alt: '', plural: '', flag: img },
    { name: 'UGX — Ugandan Shilling 🇺🇬', symbol: '', alt: '', plural: '', flag: img },
    { name: 'UYU — Uruguayan Peso 🇺🇾', symbol: '', alt: '', plural: '', flag: img },
    { name: 'UZS — Uzbekistan Som 🇺🇿', symbol: '', alt: '', plural: '', flag: img },
    { name: 'VEF — Venezuelan Bol\u00edvar Fuerte 🇻🇪', symbol: '', alt: '', plural: '', flag: img },
    { name: 'VND — Vietnamese Dong 🇻🇳', symbol: '', alt: '', plural: '', flag: img },
    { name: 'VUV — Ni-Vanuatu Vatu 🇻🇺', symbol: '', alt: '', plural: '', flag: img },
    { name: 'WST — Samoan Tala 🇼🇸', symbol: '', alt: '', plural: '', flag: img },
    { name: 'XAF — CFA Franc BEAC 🌍', symbol: '', alt: '', plural: '', flag: img },
    { name: 'XAG — Silver(troy) ounce 🪙', symbol: '', alt: '', plural: '', flag: img },
    { name: 'XAU — Gold(troy) ounce ⚱️', symbol: '', alt: '', plural: '', flag: img },
    { name: 'XCD — East Caribbean Dollar 🏝', symbol: '$', alt: '', plural: '', flag: img },
    { name: 'XDR — Special Drawing Rights 🇺🇳', symbol: '', alt: '', plural: '', flag: img },
    { name: 'XOF — CFA Franc BCEAO 🌍', symbol: '', alt: '', plural: '', flag: img },
    { name: 'XPF — CFP Franc 🇵🇫', symbol: '', alt: '', plural: '', flag: img },
    { name: 'YER — Yemeni Rial 🇾🇪', symbol: '', alt: '', plural: '', flag: img },
    { name: 'ZAR — South African Rand 🇿🇦', symbol: '', alt: '', plural: '', flag: img },
    { name: 'ZMK — Zambian Kwacha(pre-2013) 🇿🇲', symbol: '', alt: '', plural: '', flag: img },
    { name: 'ZMW — Zambian Kwacha 🇿🇲', symbol: '', alt: '', plural: '', flag: img },
    { name: 'ZWL — Zimbabwean Dollar 🇿🇼', symbol: '', alt: '', plural: '', flag: img }
]

// const old = [
//     "USD — United States Dollar 🇺🇸",
//     "EUR — Euro 🇪🇺",
//     "GBP — British Pound Sterling 🇬🇧", // alt output
//     "JPY — Japanese Yen 🇯🇵", // alt plural
//     "RUB — Russian Ruble 🇷🇺",
//     "CAD — Canadian Dollar 🇨🇦",
//     "AED — United Arab Emirates Dirham 🇦🇪", // alt output
//     "AFN — Afghan Afghani 🇦🇫",
//     "ALL — Albanian Lek 🇦🇱", // alt plural
//     "AMD — Armenian Dram 🇦🇲",
//     "ANG — Netherlands Antillean Guilder 🇳🇱", // alt output // alt plural
//     "AOA — Angolan Kwanza 🇦🇴",
//     "ARS — Argentine Peso 🇦🇷",
//     "AUD — Australian Dollar 🇦🇺",
//     "AWG — Aruban Florin 🇦🇼", // alt output
//     "AZN — Azerbaijani Manat 🇦🇿",
//     "BAM — Bosnia-Herzegovina Convertible Mark 🇧🇦", // alt output
//     "BBD — Barbadian Dollar 🇧🇧", // alt output
//     "BDT — Bangladeshi Taka 🇧🇩",
//     "BGN — Bulgarian Lev 🇧🇬", // alt plural
//     "BHD — Bahraini Dinar 🇧🇭",
//     "BIF — Burundian Franc 🇧🇮",
//     "BMD — Bermudian Dollar 🇧🇲",
//     "BND — Bruneian Dollar 🇧🇳",
//     "BOB — Bolivian Boliviano 🇧🇴",
//     "BRL — Brazilian Real 🇧🇷", // alt plural
//     "BSD — Bahamian Dollar 🇧🇸",
//     "BTC — Bitcoin 🪙",
//     "BTN — Bhutanese Ngultrum 🇧🇹",
//     "BWP — Botswanan Pula 🇧🇼", // alt plural
//     "BYN — (New) Belarusian Ruble 🇧🇾",
//     "BYR — (Old) Belarusian Ruble 🇧🇾",
//     "BZD — Belizean Dollar 🇧🇿",
//     "CDF — Congolese Franc 🇨🇩",
//     "CHF — Swiss Franc 🇨🇭",
//     "CLF — Chilean Unit of Account (UF) 🇨🇱", // ???
//     "CLP — Chilean Peso 🇨🇱",
//     "CNY — Chinese Yuan Renminbi 🇨🇳", // alt plural
//     "COP — Colombian Peso 🇨🇴",
//     "CRC — Costa Rican Col\u00f3n 🇨🇷", // alt plural
//     "CUC — Cuban Convertible Peso 🇨🇺",
//     "CUP — Cuban Peso 🇨🇺",
//     "CVE — Cape Verdean Escudo 🇨🇻",
//     "CZK — Czech Republic Koruna 🇨🇿", // alt plural
//     "DJF — Djiboutian Franc 🇩🇯",
//     "DKK — Danish Krone 🇩🇰", // alt plural
//     "DOP — Dominican Peso 🇩🇴",
//     "DZD — Algerian Dinar 🇩🇿",
//     "EGP — Egyptian Pound 🇪🇬",
//     "ERN — Eritrean Nakfa 🇪🇷",
//     "ETB — Ethiopian Birr 🇪🇹",
//     "FJD — Fijian Dollar 🇫🇯",
//     "FKP — Falkland Islands Pound 🇫🇰",
//     "GEL — Georgian Lari 🇬🇪", // alt plural
//     "GGP — Guernsey Pound 🇬🇬",
//     "GHS — Ghanaian Cedi 🇬🇭",
//     "GIP — Gibraltar Pound 🇬🇮",
//     "GMD — Gambian Dalasi 🇬🇲",
//     "GNF — Guinean Franc 🇬🇳",
//     "GTQ — Guatemalan Quetzal 🇬🇹", // alt plural
//     "GYD — Guyanese Dollar 🇬🇾",
//     "HKD — Hong Kong Dollar 🇭🇰",
//     "HNL — Honduran Lempira 🇭🇳",
//     "HRK — Croatian Kuna 🇭🇷",
//     "HTG — Haitian Gourde 🇭🇹",
//     "HUF — Hungarian Forint 🇭🇺",
//     "IDR — Indonesian Rupiah 🇮🇩",
//     "ILS — Israeli New Sheqel 🇮🇱",
//     "IMP — Isle of Man Pound 🇮🇲", // alt output
//     "INR — Indian Rupee 🇮🇳",
//     "IQD — Iraqi Dinar 🇮🇶",
//     "IRR — Iranian Rial 🇮🇷",
//     "ISK — Icelandic Kr\u00f3na 🇮🇸", // alt plural
//     "JEP — Jersey Pound 🇯🇪",
//     "JMD — Jamaican Dollar 🇯🇲",
//     "JOD — Jordanian Dinar 🇯🇴",
//     "KES — Kenyan Shilling 🇰🇪",
//     "KGS — Kyrgystani Som 🇰🇬",
//     "KHR — Cambodian Riel 🇰🇭",
//     "KMF — Comorian Franc 🇰🇲",
//     "KPW — North Korean Won 🇰🇵", // alt plural
//     "KRW — South Korean Won 🇰🇷", // alt plural
//     "KWD — Kuwaiti Dinar 🇰🇼",
//     "KYD — Cayman Islands Dollar 🇰🇾", // alt output
//     "KZT — Kazakhstani Tenge 🇰🇿", // alt plural
//     "LAK — Laotian Kip 🇱🇦", // alt output
//     "LBP — Lebanese Pound 🇱🇧",
//     "LKR — Sri Lankan Rupee 🇱🇰",
//     "LRD — Liberian Dollar 🇱🇷",
//     "LSL — Lesotho Loti 🇱🇸", // alt output // alt plural
//     "LTL — Lithuanian Litas 🇱🇹", // alt plural
//     "LVL — Latvian Lat 🇱🇻", // alt plural
//     "LYD — Libyan Dinar 🇱🇾",
//     "MAD — Moroccan Dirham 🇲🇦",
//     "MDL — Moldovan Leu 🇲🇩", // alt plural
//     "MGA — Malagasy Ariary 🇲🇬", // alt plural
//     "MKD — Macedonian Denar 🇲🇰",
//     "MMK — Myanmar Kyat 🇲🇲", // alt output
//     "MNT — Mongolian Tugrik 🇲🇳",
//     "MOP — Macanese Pataca 🇲🇴",
//     "MRO — Mauritanian Ouguiya 🇲🇷", // obsolete, now MRU
//     "MUR — Mauritian Rupee 🇲🇺",
//     "MVR — Maldivian Rufiyaa 🇲🇻", // alt plural
//     "MWK — Malawian Kwacha 🇲🇼",
//     "MXN — Mexican Peso 🇲🇽",
//     "MYR — Malaysian Ringgit 🇲🇾",
//     "MZN — Mozambican Metical 🇲🇿", // alt plural
//     "NAD — Namibian Dollar 🇳🇦",
//     "NGN — Nigerian Naira 🇳🇬",
//     "NIO — Nicaraguan C\u00f3rdoba 🇳🇮",
//     "NOK — Norwegian Krone 🇳🇴", // alt plural
//     "NPR — Nepalese Rupee 🇳🇵",
//     "NZD — New Zealand Dollar 🇳🇿",
//     "OMR — Omani Rial 🇴🇲",
//     "PAB — Panamanian Balboa 🇵🇦", // alt plural
//     "PEN — Peruvian Nuevo Sol 🇵🇪", // alt output // alt plural
//     "PGK — Papua New Guinean Kina 🇵🇬",// alt plural
//     "PHP — Philippine Peso 🇵🇭",
//     "PKR — Pakistani Rupee 🇵🇰",
//     "PLN — Polish Zloty 🇵🇱", // alt plural
//     "PYG — Paraguayan Guarani 🇵🇾", // alt plural
//     "QAR — Qatari Rial 🇶🇦", // or Riyal???
//     "RON — Romanian Leu 🇷🇴", // alt plural
//     "RSD — Serbian Dinar 🇷🇸",
//     "RWF — Rwandan Franc 🇷🇼",
//     "SAR — Saudi Arabian Riyal 🇸🇦", // alt output
//     "SBD — Solomon Islander Dollar 🇸🇧",
//     "SCR — Seychellois Rupee 🇸🇨",
//     "SDG — Sudanese Pound 🇸🇩",
//     "SEK — Swedish Krona 🇸🇪", // alt plural
//     "SGD — Singapore Dollar 🇸🇬",
//     "SHP — Saint Helenian Pound 🇸🇭",
//     "SLL — Sierra Leonean Leone 🇸🇱",
//     "SOS — Somali Shilling 🇸🇴",
//     "SRD — Surinamese Dollar 🇸🇷",
//     "STN — S\u00e3o Tom\u00e9 and Pr\u00edncipe Dobra 🇸🇹", // STD obsolete, STN current // alt output
//     "SVC — Salvadoran Col\u00f3n 🇸🇻", // Obsolete
//     "SYP — Syrian Pound 🇸🇾",
//     "SZL — Swazi Lilangeni 🇸🇿", // alt plural
//     "THB — Thai Baht 🇹🇭", // alt plural
//     "TJS — Tajikistani Somoni 🇹🇯", // alt plural
//     "TMT — Turkmenistani Manat 🇹🇲",
//     "TND — Tunisian Dinar 🇹🇳",
//     "TOP — Tongan Pa\u02bbanga 🇹🇴", // alt plural
//     "TRY — Turkish Lira 🇹🇷", // alt plural🇹
//     "TTD — Trinidad and Tobago Dollar 🇹🇹", // alt output
//     "TWD — New Taiwan Dollar 🇹🇼",
//     "TZS — Tanzanian Shilling 🇹🇿",
//     "UAH — Ukrainian Hryvnia 🇺🇦", // alt plural
//     "UGX — Ugandan Shilling 🇺🇬",
//     "UYU — Uruguayan Peso 🇺🇾",
//     "UZS — Uzbekistan Som 🇺🇿", // alt plural
//     "VEF — Venezuelan Bol\u00edvar Fuerte 🇻🇪", // alt output // alt plural
//     "VND — Vietnamese Dong 🇻🇳",
//     "VUV — Ni-Vanuatu Vatu 🇻🇺",
//     "WST — Samoan Tala 🇼🇸", // alt plural
//     "XAF — CFA Franc BEAC 🌍", // alt output
//     "XAG — Silver (troy) ounce 🪙",
//     "XAU — Gold (troy) ounce ⚱️",
//     "XCD — East Caribbean Dollar 🏝",
//     "XDR — Special Drawing Rights 🇺🇳", // alt plural
//     "XOF — CFA Franc BCEAO 🌍", // alt output
//     "XPF — CFP Franc 🇵🇫",
//     "YER — Yemeni Rial 🇾🇪",
//     "ZAR — South African Rand 🇿🇦", // alt plural
//     "ZMK — Zambian Kwacha (pre-2013) 🇿🇲", // alt output // alt plural
//     "ZMW — Zambian Kwacha 🇿🇲", // alt plural
//     "ZWL — Zimbabwean Dollar 🇿🇼"
// ]