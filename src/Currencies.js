const img = new Image()
img.src = 'https://flagcdn.com/us.svg'

export const currencies = [
  { name: 'USD — United States Dollar 🇺🇸',
    symbol: '',
    alt: 'US Dollar',
    pluralize() {
      return this.alt + 's'
    },
    flag: img,
  },
  { name: 'EUR — Euro 🇪🇺',
    symbol: '',
    /*pluralize() { return this.name + 's' },*/
    flag: null,
  },
  { name: 'GBP — British Pound Sterling 🇬🇧',
    symbol: '',
    alt: 'British Pound',
    /*pluralize() { return this.alt + 's' },*/
    flag: null,
  },
  { name: 'JPY — Japanese Yen 🇯🇵',
    symbol: '',
    plural: 'Japanese Yen', // same
    flag: null,
  },
  { name: 'RUB — Russian Ruble 🇷🇺',
    symbol: '',
    flag: img,
  },
  { name: 'CAD — Canadian Dollar 🇨🇦',
    symbol: '',
    flag: img,
  },
  { name: 'AED — United Arab Emirates Dirham 🇦🇪',
    symbol: '',
    alt: 'Emirati Dirham',
    flag: img,
  },
  { name: 'AFN — Afghan Afghani 🇦🇫',
    symbol: '',
    flag: img,
  },
  { name: 'ALL — Albanian Lek 🇦🇱',
    symbol: '',
    plural: 'Albanian Leke',
    flag: img,
  },
  { name: 'AMD — Armenian Dram 🇦🇲',
    symbol: '',
    flag: img,
  },
  { name: 'ANG — Netherlands Antillean Guilder 🇳🇱',
    symbol: '',
    alt: 'Dutch Guilder',
    plural: 'fix',
    flag: img,
  },
  { name: 'AOA — Angolan Kwanza 🇦🇴',
    symbol: '',
    flag: img,
  },
  { name: 'ARS — Argentine Peso 🇦🇷',
    symbol: '',
    flag: img,
  },
  { name: 'AUD — Australian Dollar 🇦🇺',
    symbol: '',
    flag: img,
  },
  { name: 'AWG — Aruban Florin 🇦🇼',
    symbol: '',
    alt: 'Aruban or Dutch Florin',
    plural: 'fix',
    flag: img,
  },
  { name: 'AZN — Azerbaijani Manat 🇦🇿',
    symbol: '',
    flag: img,
  },
  { name: 'BAM — Bosnia-Herzegovina Convertible Mark 🇧🇦',
    symbol: '',
    alt: 'Bosnian Covertible Mark',
    flag: img,
  },
  { name: 'BBD — Barbadian Dollar 🇧🇧',
    symbol: '',
    alt: 'Barbadian or Bajan Dollar',
    flag: img,
  },
  { name: 'BDT — Bangladeshi Taka 🇧🇩',
    symbol: '',
    flag: img,
  },
  { name: 'BGN — Bulgarian Lev 🇧🇬',
    symbol: '',
    plural: 'Bulgarian Leva',
    flag: img,
  },
  { name: 'BHD — Bahraini Dinar 🇧🇭',
    symbol: '',
    flag: img,
  },
  { name: 'BIF — Burundian Franc 🇧🇮',
    symbol: '',
    flag: img,
  },
  { name: 'BMD — Bermudian Dollar 🇧🇲',
    symbol: '',
    flag: img,
  },
  { name: 'BND — Bruneian Dollar 🇧🇳',
    symbol: '',
    flag: img,
  },
  { name: 'BOB — Bolivian Boliviano 🇧🇴',
    symbol: '',
    flag: img,
  },
  { name: 'BRL — Brazilian Real 🇧🇷',
    symbol: 'R$',
    plural: 'Brazilian Reais',
    flag: img,
  },
  { name: 'BSD — Bahamian Dollar 🇧🇸',
    symbol: '',
    flag: img,
  },
  { name: 'BTC — Bitcoin 🪙',
    symbol: '',
    flag: img,
  },
  { name: 'BTN — Bhutanese Ngultrum 🇧🇹',
    symbol: '',
    flag: img,
  },
  { name: 'BWP — Botswanan Pula🇧🇼',
    symbol: '',
    plural: 'Botswanan Pule',
    flag: img,
  },
  { name: 'BYN — (New) Belarusian Ruble 🇧🇾',
    symbol: '',
    flag: img,
  },
  { name: 'BYR — (Old) Belarusian Ruble 🇧🇾',
    symbol: '',
    flag: img,
  },
  { name: 'BZD — Belizean Dollar 🇧🇿',
    symbol: '',
    
    flag: img,
  },
  { name: 'CDF — Congolese Franc 🇨🇩',
    symbol: '',
    flag: img,
  },
  { name: 'CHF — Swiss Franc 🇨🇭',
    symbol: '',
    flag: img,
  },
  { name: 'CLF — Chilean Unit of Account (UF) 🇨🇱',
    symbol: '',
    flag: img,
  },
  { name: 'CLP — Chilean Peso 🇨🇱',
    symbol: '',
    flag: img,
  },
  { name: 'CNY — Chinese Yuan Renminbi 🇨🇳',
    symbol: '',
    plural: 'Chinese Yuan Renminbi', // same
    flag: img,
  },
  { name: 'COP — Colombian Peso 🇨🇴',
    symbol: '',
    flag: img,
  },
  { name: 'CRC — Costa Rican Col\u00f3n 🇨🇷',
    symbol: '',
    plural: 'Costa Rican Col\u00f3nes',
    flag: img,
  },
  { name: 'CUC — Cuban Convertible Peso 🇨🇺',
    symbol: '',
    flag: img,
  },
  { name: 'CUP — Cuban Peso 🇨🇺',
    symbol: '',
    flag: img,
  },
  { name: 'CVE — Cape Verdean Escudo 🇨🇻',
    symbol: '',
    flag: img,
  },
  { name: 'CZK — Czech Republic Koruna 🇨🇿',
    symbol: '',
    alt: 'Czech Koruna',
    plural: 'Czech Koruny',
    flag: img,
  },
  { name: 'DJF — Djiboutian Franc 🇩🇯',
    symbol: '',
    flag: img,
  },
  { name: 'DKK — Danish Krone 🇩🇰',
    symbol: '',
    plural: 'Danish Kroner',
    flag: img,
  },
  { name: 'DOP — Dominican Peso 🇩🇴',
    symbol: '',
    flag: img,
  },
  { name: 'DZD — Algerian Dinar 🇩🇿',
    symbol: '',
    flag: img,
  },
  { name: 'EGP — Egyptian Pound 🇪🇬',
    symbol: '',
    flag: img,
  },
  { name: 'ERN — Eritrean Nakfa 🇪🇷',
    symbol: '',
    flag: img,
  },
  { name: 'ETB — Ethiopian Birr 🇪🇹',
    symbol: '',
    flag: img,
  },
  { name: 'FJD — Fijian Dollar 🇫🇯',
    symbol: '',
    flag: img,
  },
  { name: 'FKP — Falkland Islands Pound 🇫🇰',
    symbol: '',
    flag: img,
  },
  { name: 'GEL — Georgian Lari 🇬🇪',
    symbol: '',
    plural: 'Georgian Lari',
    flag: img,
  },
  { name: 'GGP — Guernsey Pound 🇬🇬',
    symbol: '',
    flag: img,
  },
  { name: 'GHS — Ghanaian Cedi 🇬🇭',
    symbol: '',
    flag: img,
  },
  { name: 'GIP — Gibraltar Pound 🇬🇮',
    symbol: '',
    flag: img,
  },
  { name: 'GMD — Gambian Dalasi 🇬🇲',
    symbol: '',
    flag: img,
  },
  { name: 'GNF — Guinean Franc 🇬🇳',
    symbol: '',
    flag: img,
  },
  { name: 'GTQ — Guatemalan Quetzal 🇬🇹',
    symbol: '',
    plural: 'Guatemalan Quetzales',
    flag: img,
  },
  { name: 'GYD — Guyanese Dollar 🇬🇾',
    symbol: '',
    flag: img,
  },
  { name: 'HKD — Hong Kong Dollar 🇭🇰',
    symbol: '',
    flag: img,
  },
  { name: 'HNL — Honduran Lempira 🇭🇳',
    symbol: '',
    flag: img,
  },
  { name: 'HRK — Croatian Kuna 🇭🇷',
    symbol: '',
    flag: img,
  },
  { name: 'HTG — Haitian Gourde 🇭🇹',
    symbol: '',
    flag: img,
  },
  { name: 'HUF — Hungarian Forint 🇭🇺',
    symbol: '',
    flag: img,
  },
  { name: 'IDR — Indonesian Rupiah 🇮🇩',
    symbol: '',
    flag: img,
  },
  { name: 'ILS — Israeli New Sheqel 🇮🇱',
    symbol: '',
    flag: img,
  },
  { name: 'IMP — Isle of Man Pound 🇮🇲',
    symbol: '',
    alt: 'Isle of Man or Manx Pound',
    flag: img,
  },
  { name: 'INR — Indian Rupee 🇮🇳',
    symbol: '',
    flag: img,
  },
  { name: 'IQD — Iraqi Dinar 🇮🇶',
    symbol: '',
    flag: img,
  },
  { name: 'IRR — Iranian Rial 🇮🇷',
    symbol: '',
    flag: img,
  },
  { name: 'ISK — Icelandic Kr\u00f3na 🇮🇸',
    symbol: '',
    plural: 'Icelandic Kr\u00f3nur',
    flag: img,
  },
  { name: 'JEP — Jersey Pound 🇯🇪',
    symbol: '',
    flag: img,
  },
  { name: 'JMD — Jamaican Dollar 🇯🇲',
    symbol: 'J$',
    flag: img,
  },
  { name: 'JOD — Jordanian Dinar 🇯🇴',
    symbol: '',
    flag: img,
  },
  { name: 'KES — Kenyan Shilling 🇰🇪',
    symbol: '',
    flag: img,
  },
  { name: 'KGS — Kyrgystani Som 🇰🇬',
    symbol: '',
    flag: img,
  },
  { name: 'KHR — Cambodian Riel 🇰🇭',
    symbol: '',
    flag: img,
  },
  { name: 'KMF — Comorian Franc 🇰🇲',
    symbol: '',
    flag: img,
  },
  { name: 'KPW — North Korean Won 🇰🇵',
    symbol: '',
    plural: 'North Korean Won',
    flag: img,
  },
  { name: 'KRW — South Korean Won 🇰🇷',
    symbol: '',
    plural: 'South Korean Won',
    flag: img,
  },
  { name: 'KWD — Kuwaiti Dinar 🇰🇼',
    symbol: '',
    flag: img,
  },
  { name: 'KYD — Cayman Islands Dollar 🇰🇾',
    symbol: '',
    alt: 'Caymanian Dollar',
    flag: img,
  },
  { name: 'KZT — Kazakhstani Tenge 🇰🇿',
    symbol: '',
    plural: 'Kazakhstani Tenge', // same
    flag: img,
  },
  { name: 'LAK — Laotian Kip 🇱🇦',
    symbol: '',
    alt: 'Lao Kip',
    flag: img,
  },
  { name: 'LBP — Lebanese Pound 🇱🇧',
    symbol: '',
    flag: img,
  },
  { name: 'LKR — Sri Lankan Rupee 🇱🇰',
    symbol: '',
    flag: img,
  },
  { name: 'LRD — Liberian Dollar 🇱🇷',
    symbol: '',
    flag: img,
  },
  { name: 'LSL — Lesotho Loti 🇱🇸',
    symbol: '',
    alt: 'Lesotho or Basotho Loti',
    plural: 'Lesotho or Basotho Maloti',
    flag: img,
  },
  { name: 'LTL — Lithuanian Litas 🇱🇹',
    symbol: '',
    plural: 'Lithuanian Litai',
    flag: img,
  },
  { name: 'LVL — Latvian Lat 🇱🇻',
    symbol: '',
    plural: 'Latvian Lati',
    flag: img,
  },
  { name: 'LYD — Libyan Dinar 🇱🇾',
    symbol: '',
    flag: img,
  },
  { name: 'MAD — Moroccan Dirham 🇲🇦',
    symbol: '',
    flag: img,
  },
  { name: 'MDL — Moldovan Leu 🇲🇩',
    symbol: '',
    plural: 'Moldovan Lei',
    flag: img,
  },
  { name: 'MGA — Malagasy Ariary 🇲🇬',
    symbol: '',
    plural: 'Malagasy Ariary',
    flag: img,
  },
  { name: 'MKD — Macedonian Denar 🇲🇰',
    symbol: '',
    flag: img,
  },
  { name: 'MMK — Myanmar Kyat 🇲🇲',
    symbol: '',
    alt: 'Myanmar or Burmese Kyat',
    flag: img,
  },
  { name: 'MNT — Mongolian Tugrik 🇲🇳',
    symbol: '',
    flag: img,
  },
  { name: 'MOP — Macanese Pataca 🇲🇴',
    symbol: '',
    flag: img,
  },
  { name: 'MRO — Mauritanian Ouguiya 🇲🇷',
    symbol: '',
    flag: img,
  },
  { name: 'MUR — Mauritian Rupee 🇲🇺',
    symbol: '',
    flag: img,
  },
  { name: 'MVR — Maldivian Rufiyaa 🇲🇻',
    symbol: '',
    plural: 'Maldivian Rufiyaa', // same
    flag: img,
  },
  { name: 'MWK — Malawian Kwacha 🇲🇼',
    symbol: '',
    flag: img,
  },
  { name: 'MXN — Mexican Peso 🇲🇽',
    symbol: '',
    flag: img,
  },
  { name: 'MYR — Malaysian Ringgit 🇲🇾',
    symbol: '',
    flag: img,
  },
  { name: 'MZN — Mozambican Metical 🇲🇿',
    symbol: '',
    plural: 'Mozambican Meticais',
    flag: img,
  },
  { name: 'NAD — Namibian Dollar 🇳🇦',
    symbol: '',
    flag: img,
  },
  { name: 'NGN — Nigerian Naira 🇳🇬',
    symbol: '',
    flag: img,
  },
  { name: 'NIO — Nicaraguan C\u00f3rdoba 🇳🇮',
    symbol: '',
    flag: img,
  },
  { name: 'NOK — Norwegian Krone 🇳🇴',
    symbol: '',
    plural: 'Norwegian Kroner',
    flag: img,
  },
  { name: 'NPR — Nepalese Rupee 🇳🇵',
    symbol: '',
    flag: img,
  },
  { name: 'NZD — New Zealand Dollar 🇳🇿',
    symbol: '',
    flag: img,
  },
  { name: 'OMR — Omani Rial 🇴🇲',
    symbol: '',
    flag: img,
  },
  { name: 'PAB — Panamanian Balboa 🇵🇦',
    symbol: '',
    plural: 'Panamanian Balboa', // same
    flag: img,
  },
  { name: 'PEN — Peruvian Nuevo Sol 🇵🇪',
    symbol: '',
    alt: 'Peruvian Sol',
    plural: 'Peruvian Soles',
    flag: img,
  },
  { name: 'PGK — Papua New Guinean Kina 🇵🇬',
    symbol: '',
    plural: 'Papua New Guinean Kina', // same
    flag: img,
  },
  { name: 'PHP — Philippine Peso 🇵🇭',
    symbol: '',
    flag: img,
  },
  { name: 'PKR — Pakistani Rupee 🇵🇰',
    symbol: '',
    flag: img,
  },
  { name: 'PLN — Polish Zloty 🇵🇱',
    symbol: '',
    plural: 'Polish Zlotych',
    flag: img,
  },
  { name: 'PYG — Paraguayan Guarani 🇵🇾',
    symbol: '',
    plural: 'Paraguayan Guarani', // same
    flag: img,
  },
  { name: 'QAR — Qatari Rial 🇶🇦',
    symbol: '',
    flag: img,
  },
  { name: 'RON — Romanian Leu 🇷🇴',
    symbol: '',
    plural: 'Romanian Lei',
    flag: img,
  },
  { name: 'RSD — Serbian Dinar 🇷🇸',
    symbol: '',
    flag: img,
  },
  { name: 'RWF — Rwandan Franc 🇷🇼',
    symbol: '',
    flag: img,
  },
  { name: 'SAR — Saudi Arabian Riyal 🇸🇦',
    symbol: '',
    alt: 'Saudi Riyal',
    flag: img,
  },
  { name: 'SBD — Solomon Islander Dollar 🇸🇧',
    symbol: '',
    flag: img,
  },
  { name: 'SCR — Seychellois Rupee 🇸🇨',
    symbol: '',
    flag: img,
  },
  { name: 'SDG — Sudanese Pound 🇸🇩',
    symbol: '',
    flag: img,
  },
  { name: 'SEK — Swedish Krona 🇸🇪',
    symbol: '',
    plural: 'Swedish Kronor',
    flag: img,
  },
  { name: 'SGD — Singapore Dollar 🇸🇬',
    symbol: '',
    flag: img,
  },
  { name: 'SHP — Saint Helenian Pound 🇸🇭',
    symbol: '',
    flag: img,
  },
  { name: 'SLL — Sierra Leonean Leone 🇸🇱',
    symbol: '',
    flag: img,
  },
  { name: 'SOS — Somali Shilling 🇸🇴',
    symbol: '',
    flag: img,
  },
  { name: 'SRD — Surinamese Dollar 🇸🇷',
    symbol: '',
    flag: img,
  },
  { name: 'STN — S\u00e3o Tom\u00e9 and Pr\u00edncipe Dobra 🇸🇹',
    symbol: '',
    alt: 'S\u00e3o Tom\u00e9an Dobra',
    flag: img,
  },
  { name: 'SVC — Salvadoran Col\u00f3n 🇸🇻',
    symbol: '',
    plural: 'Salvadoran Col\u00f3nes',
    flag: img,
  },
  { name: 'SYP — Syrian Pound 🇸🇾',
    symbol: '',
    flag: img,
  },
  { name: 'SZL — Swazi Lilangeni 🇸🇿',
    symbol: '',
    plural: 'Swazi Emalangeni',
    flag: img,
  },
  { name: 'THB — Thai Baht 🇹🇭',
    symbol: '',
    plural: 'Thai Baht', // same
    flag: img,
  },
  { name: 'TJS — Tajikistani Somoni 🇹🇯',
    symbol: '',
    plural: 'Tajikistani Somoni', // same
    flag: img,
  },
  { name: 'TMT — Turkmenistani Manat 🇹🇲',
    symbol: '',
    flag: img,
  },
  { name: 'TND — Tunisian Dinar 🇹🇳',
    symbol: '',
    flag: img,
  },
  { name: 'TOP — Tongan Pa\u02bbanga 🇹🇴',
    symbol: '',
    plural: 'Tongan Pa\u02bbanga', // same
    flag: img,
  },
  { name: 'TRY — Turkish Lira 🇹🇷',
    symbol: '',
    plural: 'Turkish Lire',
    flag: img,
  },
  { name: 'TTD — Trinidad and Tobago Dollar 🇹🇹',
    symbol: '',
    alt: 'Trinidadian Dollar',
    flag: img,
  },
  { name: 'TWD — New Taiwan Dollar 🇹🇼',
    symbol: '',
    flag: img,
  },
  { name: 'TZS — Tanzanian Shilling 🇹🇿',
    symbol: '',
    flag: img,
  },
  { name: 'UAH — Ukrainian Hryvnia 🇺🇦',
    symbol: '',
    plural: 'Ukrainian Hryvni',
    flag: img,
  },
  { name: 'UGX — Ugandan Shilling 🇺🇬',
    symbol: '',
    flag: img,
  },
  { name: 'UYU — Uruguayan Peso 🇺🇾',
    symbol: '',
    flag: img,
  },
  { name: 'UZS — Uzbekistan Som 🇺🇿',
    symbol: '',
    plural: 'Uzbekistani Sums',
    flag: img,
  },
  { name: 'VEF — Venezuelan Bol\u00edvar Fuerte 🇻🇪',
    symbol: '',
    alt: 'Venezuelan Bol\u00edvar',
    plural: 'Venezuelan Bol\u00edvares',
    flag: img,
  },
  { name: 'VND — Vietnamese Dong 🇻🇳',
    symbol: '',
    flag: img,
  },
  { name: 'VUV — Ni-Vanuatu Vatu 🇻🇺',
    symbol: '',
    plural: 'Ni-Vanuatu Vatu', // same
    flag: img,
  },
  { name: 'WST — Samoan Tala 🇼🇸',
    symbol: '',
    plural: 'Samoan Tala', // same
    flag: img,
  },
  { name: 'XAF — CFA Franc BEAC 🌍',
    symbol: '',
    alt: 'Central African Franc',
    flag: img,
  },
  { name: 'XAG — Silver(troy) ounce 🪙',
    symbol: '',
    flag: img,
  },
  { name: 'XAU — Gold(troy) ounce ⚱️',
    symbol: '',
    flag: img,
  },
  { name: 'XCD — East Caribbean Dollar 🏝',
    symbol: '',
    flag: img,
  },
  { name: 'XDR — Special Drawing Rights 🇺🇳',
    symbol: '',
    plural: 'update',
    flag: img,
  },
  { name: 'XOF — CFA Franc BCEAO 🌍',
    symbol: '',
    alt: 'CFA Franc',
    flag: img,
  },
  { name: 'XPF — CFP Franc 🇵🇫',
    symbol: '',
    flag: img,
  },
  { name: 'YER — Yemeni Rial 🇾🇪',
    symbol: '',
    flag: img,
  },
  { name: 'ZAR — South African Rand 🇿🇦',
    symbol: '',
    plural: 'South African Rand' , // same
    flag: img,
  },
  { name: 'ZMK — Zambian Kwacha(pre-2013) 🇿🇲',
    symbol: '',
    alt: 'Zambian Kwacha',
    flag: img,
  },
  { name: 'ZMW — Zambian Kwacha 🇿🇲',
    symbol: '',
    plural: 'Zambian Kwacha', // same
    flag: img,
  },
  { name: 'ZWL — Zimbabwean Dollar 🇿🇼',
    symbol: '',
    flag: img,
  }
]

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

for (let i = 0; i < currencies.length; i++) {
    let acronym = currencies[i].name.slice(0,3);

    if (pounds.includes(acronym)) currencies[i].symbol = '£'; // 10
    if (dollars.includes(acronym)) currencies[i].symbol = '$'; // 23
    if (pounds.includes(acronym)) currencies[i].symbol = '£'; // 10
    if (guilder.includes(acronym)) currencies[i].symbol = 'ƒ'; // 2
    if (Y.includes(acronym)) currencies[i].symbol = '¥'; // 2
    if (rial.includes(acronym)) currencies[i].symbol = '﷼'; // 5
    if (won.includes(acronym)) currencies[i].symbol = '₩'; // 2
    if (cyrillic.includes(acronym)) currencies[i].symbol = 'лв'; // 4
    if (peso.includes(acronym)) currencies[i].symbol = '₱'; // 2
    if (rupee.includes(acronym)) currencies[i].symbol = '₨'; // 5
    if (nordic.includes(acronym)) currencies[i].symbol = 'kr' // 4
}

// switch (acronym) {
        //     case 'BZD':
        //         symbol = 'BZ$';
        //         break;
        //     case 'BOB':
        //         symbol = '$b';
        //         break;
        //     case 'BRL':
        //         symbol = 'R$';
        //         break;
        //     case 'DOP':
        //         symbol = 'RD$';
        //         break;
        //     case 'JMD':
        //         symbol = 'J$';
        //         break;
        //     case 'NIO':
        //         symbol = 'C$';
        //         break;
        //     case 'TWD':
        //         symbol = 'NT$';
        //         break;
        //     case 'TTD':
        //         symbol = 'TT$';
        //         break;
        //     case 'UYU':
        //         symbol = '$U';
        //         break;
        //     case 'ZWL':
        //         symbol = 'Z$';
        //         break;
        //     case 'EUR':
        //         symbol = '€';
        //         break;
        //     case 'ALL':
        //         symbol = 'Lek';
        //         break;
        //     case 'AFN':
        //         symbol = '؋';
        //         break;
        //     case 'AZN':
        //         symbol = '₼';
        //         break;
        //     case 'BYN':
        //         symbol = 'Br';
        //         break;
        //     case 'BAM':
        //         symbol = 'KM';
        //         break;
        //     case 'BWP':
        //         symbol = 'P';
        //         break;
        //     case 'KHR':
        //         symbol = '៛';
        //         break;
        //     case 'CRC':
        //         symbol = '₡';
        //         break;
        //     case 'HRK':
        //         symbol = 'kn';
        //         break;
        //     case 'CZK':
        //         symbol = 'Kč';
        //         break;
        //     case 'GHS':
        //         symbol = '¢';
        //         break;
        //     case 'GTQ':
        //         symbol = 'Q';
        //         break;
        //     case 'HNL':
        //         symbol = 'L';
        //         break;
        //     case 'HUF':
        //         symbol = 'Ft';
        //         break;
        //     case 'INR':
        //         symbol = '₹';
        //         break;
        //     case 'IDR':
        //         symbol = 'Rp';
        //         break;
        //     case 'ILS':
        //         symbol = '₪';
        //         break;
        //     case 'LAK':
        //         symbol = '₭';
        //         break;
        //     case 'MKD':
        //         symbol = 'ден';
        //         break;
        //     case 'MYR':
        //         symbol = 'RM';
        //         break;
        //     case 'MNT':
        //         symbol = '₮';
        //         break;
        //     case 'MZN':
        //         symbol = 'MT';
        //         break;
        //     case 'NGN':
        //         symbol = '₦';
        //         break;
        //     case 'PAB':
        //         symbol = 'B/.';
        //         break;
        //     case 'PYG':
        //         symbol = 'Gs';
        //         break;
        //     case 'PEN':
        //         symbol = 'S/.';
        //         break;
        //     case 'PLN':
        //         symbol = 'zł';
        //         break;
        //     case 'RON':
        //         symbol = 'lei';
        //         break;
        //     case 'RUB':
        //         symbol = '₽';
        //         break;
        //     case 'RSD':
        //         symbol = 'Дин';
        //         break;
        //     case 'SOS':
        //         symbol = 'S';
        //         break;
        //     case 'ZAR':
        //         symbol = 'R';
        //         break;
        //     case 'CHF':
        //         symbol = 'CHF';
        //         break;
        //     case 'THB':
        //         symbol = '฿';
        //         break;
        //     case 'TRY':
        //         symbol = '₺';
        //         break;
        //     case 'UAH':
        //         symbol = '₴';
        //         break;
        //     case 'VEF':
        //         symbol = 'Bs';
        //         break;
        //     case 'VND':
        //         symbol = '₫';
        //         break;
        //     case 'AED':
        //         symbol = `د.إ`;
        //         break;
        // }

// const old = [
//     'USD — United States Dollar 🇺🇸',
//     'EUR — Euro 🇪🇺',
//     'GBP — British Pound Sterling 🇬🇧', // alt output
//     'JPY — Japanese Yen 🇯🇵', // alt plural
//     'RUB — Russian Ruble 🇷🇺',
//     'CAD — Canadian Dollar 🇨🇦',
//     'AED — United Arab Emirates Dirham 🇦🇪', // alt output
//     'AFN — Afghan Afghani 🇦🇫',
//     'ALL — Albanian Lek 🇦🇱', // alt plural
//     'AMD — Armenian Dram 🇦🇲',
//     'ANG — Netherlands Antillean Guilder 🇳🇱', // alt output // alt plural
//     'AOA — Angolan Kwanza 🇦🇴',
//     'ARS — Argentine Peso 🇦🇷',
//     'AUD — Australian Dollar 🇦🇺',
//     'AWG — Aruban Florin 🇦🇼', // alt output
//     'AZN — Azerbaijani Manat 🇦🇿',
//     'BAM — Bosnia-Herzegovina Convertible Mark 🇧🇦', // alt output
//     'BBD — Barbadian Dollar 🇧🇧', // alt output
//     'BDT — Bangladeshi Taka 🇧🇩',
//     'BGN — Bulgarian Lev 🇧🇬', // alt plural
//     'BHD — Bahraini Dinar 🇧🇭',
//     'BIF — Burundian Franc 🇧🇮',
//     'BMD — Bermudian Dollar 🇧🇲',
//     'BND — Bruneian Dollar 🇧🇳',
//     'BOB — Bolivian Boliviano 🇧🇴',
//     'BRL — Brazilian Real 🇧🇷', // alt plural
//     'BSD — Bahamian Dollar 🇧🇸',
//     'BTC — Bitcoin 🪙',
//     'BTN — Bhutanese Ngultrum 🇧🇹',
//     'BWP — Botswanan Pula 🇧🇼', // alt plural
//     'BYN — (New) Belarusian Ruble 🇧🇾',
//     'BYR — (Old) Belarusian Ruble 🇧🇾',
//     'BZD — Belizean Dollar 🇧🇿',
//     'CDF — Congolese Franc 🇨🇩',
//     'CHF — Swiss Franc 🇨🇭',
//     'CLF — Chilean Unit of Account (UF) 🇨🇱', // ???
//     'CLP — Chilean Peso 🇨🇱',
//     'CNY — Chinese Yuan Renminbi 🇨🇳', // alt plural
//     'COP — Colombian Peso 🇨🇴',
//     'CRC — Costa Rican Col\u00f3n 🇨🇷', // alt plural
//     'CUC — Cuban Convertible Peso 🇨🇺',
//     'CUP — Cuban Peso 🇨🇺',
//     'CVE — Cape Verdean Escudo 🇨🇻',
//     'CZK — Czech Republic Koruna 🇨🇿', // alt plural
//     'DJF — Djiboutian Franc 🇩🇯',
//     'DKK — Danish Krone 🇩🇰', // alt plural
//     'DOP — Dominican Peso 🇩🇴',
//     'DZD — Algerian Dinar 🇩🇿',
//     'EGP — Egyptian Pound 🇪🇬',
//     'ERN — Eritrean Nakfa 🇪🇷',
//     'ETB — Ethiopian Birr 🇪🇹',
//     'FJD — Fijian Dollar 🇫🇯',
//     'FKP — Falkland Islands Pound 🇫🇰',
//     'GEL — Georgian Lari 🇬🇪', // alt plural
//     'GGP — Guernsey Pound 🇬🇬',
//     'GHS — Ghanaian Cedi 🇬🇭',
//     'GIP — Gibraltar Pound 🇬🇮',
//     'GMD — Gambian Dalasi 🇬🇲',
//     'GNF — Guinean Franc 🇬🇳',
//     'GTQ — Guatemalan Quetzal 🇬🇹', // alt plural
//     'GYD — Guyanese Dollar 🇬🇾',
//     'HKD — Hong Kong Dollar 🇭🇰',
//     'HNL — Honduran Lempira 🇭🇳',
//     'HRK — Croatian Kuna 🇭🇷',
//     'HTG — Haitian Gourde 🇭🇹',
//     'HUF — Hungarian Forint 🇭🇺',
//     'IDR — Indonesian Rupiah 🇮🇩',
//     'ILS — Israeli New Sheqel 🇮🇱',
//     'IMP — Isle of Man Pound 🇮🇲', // alt output
//     'INR — Indian Rupee 🇮🇳',
//     'IQD — Iraqi Dinar 🇮🇶',
//     'IRR — Iranian Rial 🇮🇷',
//     'ISK — Icelandic Kr\u00f3na 🇮🇸', // alt plural
//     'JEP — Jersey Pound 🇯🇪',
//     'JMD — Jamaican Dollar 🇯🇲',
//     'JOD — Jordanian Dinar 🇯🇴',
//     'KES — Kenyan Shilling 🇰🇪',
//     'KGS — Kyrgystani Som 🇰🇬',
//     'KHR — Cambodian Riel 🇰🇭',
//     'KMF — Comorian Franc 🇰🇲',
//     'KPW — North Korean Won 🇰🇵', // alt plural
//     'KRW — South Korean Won 🇰🇷', // alt plural
//     'KWD — Kuwaiti Dinar 🇰🇼',
//     'KYD — Cayman Islands Dollar 🇰🇾', // alt output
//     'KZT — Kazakhstani Tenge 🇰🇿', // alt plural
//     'LAK — Laotian Kip 🇱🇦', // alt output
//     'LBP — Lebanese Pound 🇱🇧',
//     'LKR — Sri Lankan Rupee 🇱🇰',
//     'LRD — Liberian Dollar 🇱🇷',
//     'LSL — Lesotho Loti 🇱🇸', // alt output // alt plural
//     'LTL — Lithuanian Litas 🇱🇹', // alt plural
//     'LVL — Latvian Lat 🇱🇻', // alt plural
//     'LYD — Libyan Dinar 🇱🇾',
//     'MAD — Moroccan Dirham 🇲🇦',
//     'MDL — Moldovan Leu 🇲🇩', // alt plural
//     'MGA — Malagasy Ariary 🇲🇬', // alt plural
//     'MKD — Macedonian Denar 🇲🇰',
//     'MMK — Myanmar Kyat 🇲🇲', // alt output
//     'MNT — Mongolian Tugrik 🇲🇳',
//     'MOP — Macanese Pataca 🇲🇴',
//     'MRO — Mauritanian Ouguiya 🇲🇷', // obsolete, now MRU
//     'MUR — Mauritian Rupee 🇲🇺',
//     'MVR — Maldivian Rufiyaa 🇲🇻', // alt plural
//     'MWK — Malawian Kwacha 🇲🇼',
//     'MXN — Mexican Peso 🇲🇽',
//     'MYR — Malaysian Ringgit 🇲🇾',
//     'MZN — Mozambican Metical 🇲🇿', // alt plural
//     'NAD — Namibian Dollar 🇳🇦',
//     'NGN — Nigerian Naira 🇳🇬',
//     'NIO — Nicaraguan C\u00f3rdoba 🇳🇮',
//     'NOK — Norwegian Krone 🇳🇴', // alt plural
//     'NPR — Nepalese Rupee 🇳🇵',
//     'NZD — New Zealand Dollar 🇳🇿',
//     'OMR — Omani Rial 🇴🇲',
//     'PAB — Panamanian Balboa 🇵🇦', // alt plural
//     'PEN — Peruvian Nuevo Sol 🇵🇪', // alt output // alt plural
//     'PGK — Papua New Guinean Kina 🇵🇬',// alt plural
//     'PHP — Philippine Peso 🇵🇭',
//     'PKR — Pakistani Rupee 🇵🇰',
//     'PLN — Polish Zloty 🇵🇱', // alt plural
//     'PYG — Paraguayan Guarani 🇵🇾', // alt plural
//     'QAR — Qatari Rial 🇶🇦', // or Riyal???
//     'RON — Romanian Leu 🇷🇴', // alt plural
//     'RSD — Serbian Dinar 🇷🇸',
//     'RWF — Rwandan Franc 🇷🇼',
//     'SAR — Saudi Arabian Riyal 🇸🇦', // alt output
//     'SBD — Solomon Islander Dollar 🇸🇧',
//     'SCR — Seychellois Rupee 🇸🇨',
//     'SDG — Sudanese Pound 🇸🇩',
//     'SEK — Swedish Krona 🇸🇪', // alt plural
//     'SGD — Singapore Dollar 🇸🇬',
//     'SHP — Saint Helenian Pound 🇸🇭',
//     'SLL — Sierra Leonean Leone 🇸🇱',
//     'SOS — Somali Shilling 🇸🇴',
//     'SRD — Surinamese Dollar 🇸🇷',
//     'STN — S\u00e3o Tom\u00e9 and Pr\u00edncipe Dobra 🇸🇹', // STD obsolete, STN current // alt output
//     'SVC — Salvadoran Col\u00f3n 🇸🇻', // Obsolete
//     'SYP — Syrian Pound 🇸🇾',
//     'SZL — Swazi Lilangeni 🇸🇿', // alt plural
//     'THB — Thai Baht 🇹🇭', // alt plural
//     'TJS — Tajikistani Somoni 🇹🇯', // alt plural
//     'TMT — Turkmenistani Manat 🇹🇲',
//     'TND — Tunisian Dinar 🇹🇳',
//     'TOP — Tongan Pa\u02bbanga 🇹🇴', // alt plural
//     'TRY — Turkish Lira 🇹🇷', // alt plural🇹
//     'TTD — Trinidad and Tobago Dollar 🇹🇹', // alt output
//     'TWD — New Taiwan Dollar 🇹🇼',
//     'TZS — Tanzanian Shilling 🇹🇿',
//     'UAH — Ukrainian Hryvnia 🇺🇦', // alt plural
//     'UGX — Ugandan Shilling 🇺🇬',
//     'UYU — Uruguayan Peso 🇺🇾',
//     'UZS — Uzbekistan Som 🇺🇿', // alt plural
//     'VEF — Venezuelan Bol\u00edvar Fuerte 🇻🇪', // alt output // alt plural
//     'VND — Vietnamese Dong 🇻🇳',
//     'VUV — Ni-Vanuatu Vatu 🇻🇺',
//     'WST — Samoan Tala 🇼🇸', // alt plural
//     'XAF — CFA Franc BEAC 🌍', // alt output
//     'XAG — Silver (troy) ounce 🪙',
//     'XAU — Gold (troy) ounce ⚱️',
//     'XCD — East Caribbean Dollar 🏝',
//     'XDR — Special Drawing Rights 🇺🇳', // alt plural
//     'XOF — CFA Franc BCEAO 🌍', // alt output
//     'XPF — CFP Franc 🇵🇫',
//     'YER — Yemeni Rial 🇾🇪',
//     'ZAR — South African Rand 🇿🇦', // alt plural
//     'ZMK — Zambian Kwacha (pre-2013) 🇿🇲', // alt output // alt plural
//     'ZMW — Zambian Kwacha 🇿🇲', // alt plural
//     'ZWL — Zimbabwean Dollar 🇿🇼'
// ]


// switch (acronym) { // No-change on plural
            
//     case 'CNY':
//         plural: 'Chinese Yuan Renminbi'
         
//     case 'JPY':
//         plural: 'Japanese Yen'
        
//     case 'KZT':
//         plural: 'Kazakhstani Tenge'
        
//     case 'MVR':
//         plural: 'Maldivian Rufiyaa'
    
//     case 'PAB':
//         plural: 'Panamanian Balboa'

//     case 'PGK':
//         plural: 'Papua New Guinean Kina'

//     case 'PYG':
//         plural: 'Paraguayan Guarani'
        
//     case 'THB':
//         plural: 'Thai Baht'
    
//     case 'TJS':
//         plural: 'Tajikistani Somoni'   
        
//     case 'TOP':
//         plural: 'Tongan Pa\u02bbanga'
            
//     case 'VUV':
//         plural: 'Ni-Vanuatu Vatu'
   
//     case 'WST':
//         plural: 'Samoan Tala'
        
//     case 'ZAR':
//         plural: 'South African Rand'            
        
//     case 'ZMW':
//         plural: 'Zambian Kwacha'
        
    
//     default: optional
// }