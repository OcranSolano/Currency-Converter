export const currencies = [
  { name: 'USD — United States Dollar', // alt output
    output: 'US Dollar', flag: 'us', emoji: '🇺🇸'
  },
  { name: 'EUR — Euro',
    symbol: '€', flag: 'eu', emoji: '🇪🇺'
  },
  { name: 'GBP — British Pound Sterling', // alt output
    output: 'British Pound', flag: 'gb', emoji: '🇬🇧'
  },
  { name: 'JPY — Japanese Yen', // alt plural
    plural: 'Japanese Yen' /* same */, flag: 'jp', emoji: '🇯🇵'
  },
  { name: 'RUB — Russian Ruble',
    symbol: '₽', flag: 'ru', emoji: '🇷🇺'
  },
  { name: 'CAD — Canadian Dollar',
    flag: 'ca', emoji: '🇨🇦'
  },
  { name: 'AED — United Arab Emirates Dirham', // alt output
    output: 'Emirati Dirham', symbol: `د.إ`, flag: 'ae', emoji: '🇦🇪'
  },
  { name: 'AFN — Afghan Afghani',
    symbol: '؋', flag: 'af', emoji: '🇦🇫'
  },
  { name: 'ALL — Albanian Lek', // alt plural
    plural: 'Albanian Leke', symbol: 'Lek', flag: 'al', emoji: '🇦🇱'
  },
  { name: 'AMD — Armenian Dram',
    symbol: 'Դ', flag: 'am', emoji: '🇦🇲'
  },
  { name: 'ANG — Netherlands Antillean Guilder ', // alt output & plural
    output: 'Dutch Guilder', plural: 'Dutch Guilders (also called Florins)', flag: 'cw', emoji: '🇳🇱'
  },
  { name: 'AOA — Angolan Kwanza',
    symbol: 'Kz', flag: 'ao', emoji: '🇦🇴'
  },
  { name: 'ARS — Argentine Peso',
    flag: 'ar', emoji: '🇦🇷'
  },
  { name: 'AUD — Australian Dollar',
    flag: 'au', emoji: '🇦🇺'
  },
  { name: 'AWG — Aruban Florin', // alt output
    output: 'Aruban or Dutch Florin', plural: 'Aruban or Dutch Guilders (also called Florins)', flag: 'aw', emoji: '🇦🇼'
  },
  { name: 'AZN — Azerbaijani Manat',
    symbol: '₼', flag: 'az', emoji: '🇦🇿'
  },
  { name: 'BAM — Bosnia-Herzegovina Convertible Mark', // alt output
    output: 'Bosnian Covertible Mark', symbol: 'KM', flag: 'ba', emoji: '🇧🇦'
  },
  { name: 'BBD — Barbadian Dollar', // alt output
    output: 'Barbadian or Bajan Dollar', flag: 'bb', emoji: '🇧🇧'
  },
  { name: 'BDT — Bangladeshi Taka',
    symbol: '৳', flag: 'bd', emoji: '🇧🇩'
  },
  { name: 'BGN — Bulgarian Lev', // alt plural
    plural: 'Bulgarian Leva', flag: 'bg', emoji: '🇧🇬'
  },
  { name: 'BHD — Bahraini Dinar',
    symbol: '.د.ب', flag: 'bh', emoji: '🇧🇭'
  },
  { name: 'BIF — Burundian Franc',
    symbol: 'FBu', flag: 'bi', emoji: '🇧🇮'
  },
  { name: 'BMD — Bermudian Dollar',
    flag: 'bm', emoji: '🇧🇲'
  },
  { name: 'BND — Bruneian Dollar',
    flag: 'bn', emoji: '🇧🇳'
  },
  { name: 'BOB — Bolivian Boliviano',
    symbol: '$b', flag: 'bo', emoji: '🇧🇴'
  },
  { name: 'BRL — Brazilian Real', // alt plural
    symbol: 'R$', plural: 'Brazilian Reais', flag: 'br', emoji: '🇧🇷'
  },
  { name: 'BSD — Bahamian Dollar',
    flag: 'bs', emoji: '🇧🇸'
  },
  { name: 'BTC — Bitcoin',
    symbol: '₿', flag: null, emoji: '🪙'
  },
  { name: 'BTN — Bhutanese Ngultrum',
    symbol: 'Nu.', flag: 'bt', emoji: '🇧🇹'
  },
  { name: 'BWP — Botswanan Pula', // alt plural
    plural: 'Botswanan Pule', symbol: 'P', flag: 'bw', emoji: '🇧🇼'
  },
  { name: 'BYN — (New) Belarusian Ruble',
    flag: 'by', emoji: '🇧🇾'
  },
  { name: 'BYR — (Old) Belarusian Ruble ',
    flag: 'by', emoji: '🇧🇾'
  },
  { name: 'BZD — Belizean Dollar',
    symbol: 'BZ$', flag: 'bz', emoji: '🇧🇿'
  },
  { name: 'CDF — Congolese Franc',
    symbol: 'FC', flag: 'cd', emoji: '🇨🇩'
  },
  { name: 'CHF — Swiss Franc',
    symbol: 'CHF', flag: 'ch', emoji: '🇨🇭'
  },
  { name: 'CLF — Chilean Unit of Account', // alt output & plural
    output: 'Unidad de Fomento', plural: 'Unidades de Fomento', symbol: 'UF', flag: 'cl', emoji: '🇨🇱'
  },
  { name: 'CLP — Chilean Peso',
    flag: 'cl', emoji: '🇨🇱'
  },
  { name: 'CNY — Chinese Yuan Renminbi', // alt plural
    plural: 'Chinese Yuan Renminbi'/* same */,  flag: 'cn', emoji: '🇨🇳'
  },
  { name: 'COP — Colombian Peso',
    flag: 'co', emoji: '🇨🇴'
  },
  { name: 'CRC — Costa Rican Col\u00f3n', // alt plural
    plural: 'Costa Rican Colones', symbol: '₡', flag: 'cr', emoji: '🇨🇷'
  },
  { name: 'CUC — Cuban Convertible Peso',
    flag: 'cu', emoji: '🇨🇺'
  },
  { name: 'CUP — Cuban Peso',
    flag: 'cu', emoji: '🇨🇺'
  },
  { name: 'CVE — Cape Verdean Escudo',
    flag: 'cv', emoji: '🇨🇻'
  },
  { name: 'CZK — Czech Republic Koruna', // alt plural
    output: 'Czech Koruna', plural: 'Czech Koruny', symbol: 'Kč', flag: 'cz', emoji: '🇨🇿'
  },
  { name: 'DJF — Djiboutian Franc',
    symbol: 'Fdj', flag: 'dj', emoji: '🇩🇯'
  },
  { name: 'DKK — Danish Krone',
    plural: 'Danish Kroner', flag: 'dk', emoji: '🇩🇰'
  },
  { name: 'DOP — Dominican Peso',
    symbol: 'RD$', flag: 'do', emoji: '🇩🇴'
  },
  { name: 'DZD — Algerian Dinar',
    symbol: 'دج', flag: 'dz', emoji: '🇩🇿'
  },
  { name: 'EGP — Egyptian Pound',
    flag: 'eg', emoji: '🇪🇬'
  },
  { name: 'ERN — Eritrean Nakfa',
    symbol: 'Nfk', flag: 'er', emoji: '🇪🇷'
  },
  { name: 'ETB — Ethiopian Birr',
    flag: 'et', emoji: '🇪🇹'
  },
  { name: 'FJD — Fijian Dollar',
    flag: 'fj', emoji: '🇫🇯'
  },
  { name: 'FKP — Falkland Islands Pound',
    flag: 'fk', emoji: '🇫🇰'
  },
  { name: 'GEL — Georgian Lari', // alt plural
    plural: 'Georgian Lari', symbol: 'ლ', flag: 'ge', emoji: '🇬🇪'
  },
  { name: 'GGP — Guernsey Pound',
    flag: 'gg', emoji: '🇬🇬'
  },
  { name: 'GHS — Ghanaian Cedi',
    symbol: '¢', flag: 'gh', emoji: '🇬🇭'
  },
  { name: 'GIP — Gibraltar Pound',
    flag: 'gi', emoji: '🇬🇮'
  },
  { name: 'GMD — Gambian Dalasi',
    symbol: 'D', flag: 'gm', emoji: '🇬🇲'
  },
  { name: 'GNF — Guinean Franc',
    symbol: 'FG', flag: 'gn', emoji: '🇬🇳'
  },
  { name: 'GTQ — Guatemalan Quetzal', // alt plural
    plural: 'Guatemalan Quetzales', symbol: 'Q', flag: 'gt', emoji: '🇬🇹'
  },
  { name: 'GYD — Guyanese Dollar',
    flag: 'gy', emoji: '🇬🇾'
  },
  { name: 'HKD — Hong Kong Dollar',
    flag: 'hk', emoji: '🇭🇰'
  },
  { name: 'HNL — Honduran Lempira',
    symbol: 'L', flag: 'hn', emoji: '🇭🇳'
  },
  { name: 'HRK — Croatian Kuna',
    symbol: 'kn', flag: 'hr', emoji: '🇭🇷'
  },
  { name: 'HTG — Haitian Gourde',
    symbol: 'G', flag: 'ht', emoji: '🇭🇹'
  },
  { name: 'HUF — Hungarian Forint',
    symbol: 'Ft', flag: 'hu', emoji: '🇭🇺'
  },
  { name: 'IDR — Indonesian Rupiah',
    symbol: 'Rp', flag: 'id', emoji: '🇮🇩'
  },
  { name: 'ILS — Israeli New Sheqel',
    symbol: '₪', flag: 'il', emoji: '🇮🇱'
  },
  { name: 'IMP — Isle of Man Pound', // alt output
    output: 'Isle of Man or Manx Pound', flag: 'im', emoji: '🇮🇲'
  },
  { name: 'INR — Indian Rupee',
    symbol: '₹', flag: 'in', emoji: '🇮🇳'
  },
  { name: 'IQD — Iraqi Dinar',
    symbol: 'ع.د', flag: 'iq', emoji: '🇮🇶'
  },
  { name: 'IRR — Iranian Rial',
    flag: 'ir', emoji: '🇮🇷'
  },
  { name: 'ISK — Icelandic Kr\u00f3na', // alt plural
    plural: 'Icelandic Kr\u00f3nur', flag: 'is', emoji: '🇮🇸'
  },
  { name: 'JEP — Jersey Pound',
    flag: 'je', emoji: '🇯🇪'
  },
  { name: 'JMD — Jamaican Dollar',
    symbol: 'J$', flag: 'jm', emoji: '🇯🇲'
  },
  { name: 'JOD — Jordanian Dinar',
    symbol: 'د.ا', flag: 'jo', emoji: '🇯🇴'
  },
  { name: 'KES — Kenyan Shilling',
    symbol: 'KSh', flag: 'ke', emoji: '🇰🇪'
  },
  { name: 'KGS — Kyrgystani Som',
    flag: 'kg', emoji: '🇰🇬'
  },
  { name: 'KHR — Cambodian Riel',
    symbol: '៛', flag: 'kh', emoji: '🇰🇭'
  },
  { name: 'KMF — Comorian Franc',
    symbol: 'CF',flag: 'km', emoji: '🇰🇲'
  },
  { name: 'KPW — North Korean Won', // alt plural
    plural: 'North Korean Won', flag: 'kp', emoji: '🇰🇵'
  },
  { name: 'KRW — South Korean Won', // alt plural
    plural: 'South Korean Won', flag: 'kr', emoji: '🇰🇷'
  },
  { name: 'KWD — Kuwaiti Dinar',
    symbol: 'د.ك', flag: 'kw', emoji: '🇰🇼'
  },
  { name: 'KYD — Cayman Islands Dollar', // alt output
    output: 'Caymanian Dollar', flag: 'ky', emoji: '🇰🇾'
  },
  { name: 'KZT — Kazakhstani Tenge', //alt plural
    plural: 'Kazakhstani Tenge'/* same */, flag: 'kz', emoji: '🇰🇿'
  },
  { name: 'LAK — Laotian Kip', // alt output
    output: 'Lao Kip', symbol: '₭', flag: 'la', emoji: '🇱🇦'
  },
  { name: 'LBP — Lebanese Pound',
    flag: 'lb', emoji: '🇱🇧'
  },
  { name: 'LKR — Sri Lankan Rupee',
    flag: 'lk', emoji: '🇱🇰'
  },
  { name: 'LRD — Liberian Dollar',
    flag: 'lr', emoji: '🇱🇷'
  },
  { name: 'LSL — Lesotho Loti', // alt output & plural
    output: 'Lesotho or Basotho Loti', plural: 'Lesotho or Basotho Maloti', symbol: 'M', flag: 'ls', emoji: '🇱🇸'
  },
  { name: 'LTL — Lithuanian Litas', // alt plural
    plural: 'Lithuanian Litai', symbol: 'Lt', flag: 'lt', emoji: '🇱🇹'
  },
  { name: 'LVL — Latvian Lat', // alt plural
    plural: 'Latvian Lati', symbol: 'Ls', flag: 'lv', emoji: '🇱🇻'
  },
  { name: 'LYD — Libyan Dinar',
    symbol: 'ل.د', flag: 'ly', emoji: '🇱🇾'
  },
  { name: 'MAD — Moroccan Dirham',
    symbol: 'MAD', flag: 'ma', emoji: '🇲🇦'
  },
  { name: 'MDL — Moldovan Leu', // alt plural
    plural: 'Moldovan Lei', flag: 'md', emoji: '🇲🇩'
  },
  { name: 'MGA — Malagasy Ariary', // alt plural
    plural: 'Malagasy Ariary'/* same */, symbol: 'Ar', flag: 'mg', emoji: '🇲🇬'
  },
  { name: 'MKD — Macedonian Denar',
    symbol: 'ден', flag: 'mk', emoji: '🇲🇰'
  },
  { name: 'MMK — Myanmar Kyat', // alt output
    output: 'Myanmar or Burmese Kyat', flag: 'mm', emoji: '🇲🇲'
  },
  { name: 'MNT — Mongolian Tugrik',
    symbol: '₮', flag: 'mn', emoji: '🇲🇳'
  },
  { name: 'MOP — Macanese Pataca',
    symbol: 'MOP$', flag: 'mo', emoji: '🇲🇴'
  },
  { name: 'MRO — Mauritanian Ouguiya', // obsolete now MRU
    symbol: 'UM', flag: 'mr', emoji: '🇲🇷'
  },
  { name: 'MUR — Mauritian Rupee',
    flag: 'mu', emoji: '🇲🇺'
  },
  { name: 'MVR — Maldivian Rufiyaa', // alt plural
    plural: 'Maldivian Rufiyaa'/* same */, symbol: 'Rf', flag: 'mv', emoji: '🇲🇻'
  },
  { name: 'MWK — Malawian Kwacha',
    symbol: 'MK', flag: 'mw', emoji: '🇲🇼'
  },
  { name: 'MXN — Mexican Peso',
    flag: 'mx', emoji: '🇲🇽'
  },
  { name: 'MYR — Malaysian Ringgit',
    symbol: 'RM', flag: 'my', emoji: '🇲🇾'
  },
  { name: 'MZN — Mozambican Metical', // alt plural
    plural: 'Mozambican Meticais', symbol: 'MT', flag: 'mz', emoji: '🇲🇿'
  },
  { name: 'NAD — Namibian Dollar',
    flag: 'na', emoji: '🇳🇦'
  },
  { name: 'NGN — Nigerian Naira',
    symbol: '₦', flag: 'ng', emoji: '🇳🇬'
  },
  { name: 'NIO — Nicaraguan C\u00f3rdoba',
    symbol: 'C$', flag: 'ni', emoji: '🇳🇮'
  },
  { name: 'NOK — Norwegian Krone', // alt plural
    plural: 'Norwegian Kroner', flag: 'no', emoji: '🇳🇴'
  },
  { name: 'NPR — Nepalese Rupee',
    flag: 'np', emoji: '🇳🇵'
  },
  { name: 'NZD — New Zealand Dollar',
    flag: 'nz', emoji: '🇳🇿'
  },
  { name: 'OMR — Omani Rial',
    flag: 'om', emoji: '🇴🇲'
  },
  { name: 'PAB — Panamanian Balboa', // alt plural
    plural: 'Panamanian Balboa'/* same */, symbol: 'B/.', flag: 'pa', emoji: '🇵🇦'
  },
  { name: 'PEN — Peruvian Nuevo Sol', // alt output & plural
    output: 'Peruvian Sol', plural: 'Peruvian Soles', symbol: 'S/.', flag: 'pe', emoji: '🇵🇪'
  },
  { name: 'PGK — Papua New Guinean Kina', // alt plural
    plural: 'Papua New Guinean Kina'/* same */, flag: 'pg', emoji: '🇵🇬'
  },
  { name: 'PHP — Philippine Peso',
    flag: 'ph', emoji: '🇵🇭'
  },
  { name: 'PKR — Pakistani Rupee',
    flag: 'pk', emoji: '🇵🇰'
  },
  { name: 'PLN — Polish Zloty', // alt plural
    plural: 'Polish Zlotych', symbol: 'zł', flag: 'pl', emoji: '🇵🇱'
  },
  { name: 'PYG — Paraguayan Guarani', // alt plural
    plural: 'Paraguayan Guarani'/* same */, symbol: 'Gs', flag: 'py', emoji: '🇵🇾'
  },
  { name: 'QAR — Qatari Rial',
    flag: 'qa', emoji: '🇶🇦'
  },
  { name: 'RON — Romanian Leu', // alt plural
    plural: 'Romanian Lei', flag: 'ro', emoji: '🇷🇴'
  },
  { name: 'RSD — Serbian Dinar',
    symbol: 'Дин', flag: 'rs', emoji: '🇷🇸'
  },
  { name: 'RWF — Rwandan Franc',
    symbol: 'R₣', flag: 'rw', emoji: '🇷🇼'
  },
  { name: 'SAR — Saudi Arabian Riyal', // alt output
    output: 'Saudi Riyal', flag: 'sa', emoji: '🇸🇦'
  },
  { name: 'SBD — Solomon Islander Dollar',
    flag: 'sb', emoji: '🇸🇧'
  },
  { name: 'SCR — Seychellois Rupee',
    flag: 'sc', emoji: '🇸🇨'
  },
  { name: 'SDG — Sudanese Pound',
    symbol: 'ج.س.', flag: 'sd', emoji: '🇸🇩'
  },
  { name: 'SEK — Swedish Krona', // alt plural
    plural: 'Swedish Kronor', flag: 'se', emoji: '🇸🇪'
  },
  { name: 'SGD — Singapore Dollar',
    flag: 'sg', emoji: '🇸🇬'
  },
  { name: 'SHP — Saint Helenian Pound',
    flag: 'sh', emoji: '🇸🇭'
  },
  { name: 'SLL — Sierra Leonean Leone',
    symbol: 'Le', flag: 'sl', emoji: '🇸🇱'
  },
  { name: 'SOS — Somali Shilling',
    symbol: 'S', flag: 'so', emoji: '🇸🇴'
  },
  { name: 'SRD — Surinamese Dollar',
    flag: 'sr', emoji: '🇸🇷'
  },
  { name: 'STD — S\u00e3o Tom\u00e9 and Pr\u00edncipe Dobra', // alt output, obsolote, current STN
    output: 'S\u00e3o Tom\u00e9an Dobra', symbol: 'Db', flag: 'st', emoji: '🇸🇹'
  },
  { name: 'SVC — Salvadoran Col\u00f3n', // obsolete, alt plural
    plural: 'Salvadoran Colones', flag: 'sv', emoji: '🇸🇻'
  },
  { name: 'SYP — Syrian Pound',
    flag: 'sy', emoji: '🇸🇾'
  },
  { name: 'SZL — Swazi Lilangeni', // alt plural
    plural: 'Swazi Emalangeni', symbol: 'E', flag: 'sz', emoji: '🇸🇿'
  },
  { name: 'THB — Thai Baht', // alt plural
    plural: 'Thai Baht'/* same */, symbol: '฿', flag: 'th', emoji: '🇹🇭'
  },
  { name: 'TJS — Tajikistani Somoni', // alt plural
    plural: 'Tajikistani Somoni'/* same */, symbol: 'SM', flag: 'tj', emoji: '🇹🇯'
  },
  { name: 'TMT — Turkmenistani Manat',
    symbol: 'T', flag: 'tm', emoji: '🇹🇲'
  },
  { name: 'TND — Tunisian Dinar',
    symbol: 'د.ت', flag: 'tn', emoji: '🇹🇳'
  },
  { name: 'TOP — Tongan Pa\u02bbanga', // alt plural
    plural: 'Tongan Pa\u02bbanga'/* same */, symbol: 'T$', flag: 'to', emoji: '🇹🇴'
  },
  { name: 'TRY — Turkish Lira', // alt plural
    plural: 'Turkish Lire', symbol: '₺', flag: 'tr', emoji: '🇹🇷'
  },
  { name: 'TTD — Trinidad and Tobago Dollar', // alt output
    output: 'Trinidadian Dollar', symbol: 'TT$', flag: 'tt', emoji: '🇹🇹'
  },
  { name: 'TWD — New Taiwan Dollar',
    symbol: 'NT$', flag: 'tw', emoji: '🇹🇼'
  },
  { name: 'TZS — Tanzanian Shilling',
    symbol: 'TSh', flag: 'tz', emoji: '🇹🇿'
  },
  { name: 'UAH — Ukrainian Hryvnia', // alt plural
    plural: 'Ukrainian Hryvni', symbol: '₴', flag: 'ua', emoji: '🇺🇦'
  },
  { name: 'UGX — Ugandan Shilling',
    symbol: 'USh', flag: 'ug', emoji: '🇺🇬'
  },
  { name: 'UYU — Uruguayan Peso',
    symbol: '$U', flag: 'uy', emoji: '🇺🇾'
  },
  { name: 'UZS — Uzbekistan Som', // alt plural
    plural: 'Uzbekistani Sums', flag: 'uz', emoji: '🇺🇿'
  },
  { name: 'VEF — Venezuelan Bol\u00edvar Fuerte', // alt output & plural
    output: 'Venezuelan Bol\u00edvar', plural: 'Venezuelan Bol\u00edvares', symbol: 'Bs', flag: 've', emoji: '🇻🇪'
  },
  { name: 'VND — Vietnamese Dong',
    symbol: '₫', flag: 'vn', emoji: '🇻🇳'
  },
  { name: 'VUV — Ni-Vanuatu Vatu',
    plural: 'Ni-Vanuatu Vatu'/* same */, symbol: 'VT', flag: 'vu', emoji: '🇻🇺'
  },
  { name: 'WST — Samoan Tala', // alt plural
    plural: 'Samoan Tala'/* same */, symbol: 'WS$', flag: 'ws', emoji: '🇼🇸'
  },
  { name: 'XAF — CFA Franc BEAC', // alt output
    output: 'Central African Franc', symbol: 'FCFA', flag: 'cf', emoji: '🌍'
  },
  { name: 'XAG — Silver(troy) ounce',
    flag: null, emoji: '🪙'
  },
  { name: 'XAU — Gold(troy) ounce',
    flag: null, emoji: '⚱️'
  },
  { name: 'XCD — East Caribbean Dollar',
    flag: 'lc', emoji: '🏝'
  },
  { name: 'XDR — Special Drawing Rights', // alt plural
    plural: 'Special Drawing Rights'/* same */, flag: null, emoji: '🇺🇳'
  },
  { name: 'XOF — CFA Franc BCEAO', // alt output
    output: 'CFA Franc', symbol: 'CFA', flag: 'cf', emoji: '🌍'
  },
  { name: 'XPF — CFP Franc',
    symbol: '₣', flag: 'pf', emoji: '🇵🇫'
  },
  { name: 'YER — Yemeni Rial',
    flag: 'ye', emoji: '🇾🇪'
  },
  { name: 'ZAR — South African Rand', // alt plural
    plural: 'South African Rand'/* same */, symbol: 'R', flag: 'za', emoji: '🇿🇦'
  },
  { name: 'ZMK — Zambian Kwacha(pre-2013)', // obsolete, alt output & plural
    output: 'Zambian Kwacha', plural: 'Zambian Kwacha'/* same */, flag: 'zm', emoji: '🇿🇲'
  },
  { name: 'ZMW — Zambian Kwacha', // alt plural
    plural: 'Zambian Kwacha'/* same */, symbol: 'ZK', flag: 'zm', emoji: '🇿🇲'
  },
  { name: 'ZWL — Zimbabwean Dollar',
    symbol: 'Z$', flag: 'zw', emoji: '🇿🇼'
  }
]

const dollars = ['ARS', 'AUD', 'BSD', 'BBD', 'BMD', 'BND', 'CAD', 'CUC', 'KYD', 'CLP', 'COP', 'CVE', 'XCD', 'SVC', 'FJD', 'GYD', 'HKD', 'LRD', 'MXN', 'NAD', 'NZD', 'SGD', 'SBD', 'SRD', 'USD'];
const pounds = ['EGP', 'FKP', 'GIP', 'GGP', 'IMP', 'JEP', 'LBP', 'SHP', 'SYP', 'GBP'];
const guilder = ['AWG', 'ANG'];
const Y = ['CNY', 'JPY'];
const won = ['KPW', 'KRW'];
const rial = ['IRR', 'OMR', 'QAR', 'SAR', 'YER'];
const cyrillic = ['BGN', 'KZT', 'KGS', 'UZS'];
const peso = ['CUP', 'PHP'];
const rupee = ['MUR', 'NPR', 'PKR', 'SCR', 'LKR'];
const nordic = ['DKK', 'ISK', 'NOK', 'SEK'];
const lei = [ 'RON', 'MDL'];
const br = ['BYN', 'BYR', 'ETB']
const k = ['MMK', 'PGK']

for (let i = 0; i < currencies.length; i++) {
    let acronym = currencies[i].name.slice(0,3);

    if (dollars.includes(acronym)) currencies[i].symbol = '$'; //  23
    if (pounds.includes(acronym)) currencies[i].symbol = '£'; //   10
    if (guilder.includes(acronym)) currencies[i].symbol = 'ƒ'; //   2
    if (Y.includes(acronym)) currencies[i].symbol = '¥'; //         2
    if (rial.includes(acronym)) currencies[i].symbol = "\uFDFC"; // 5
    if (won.includes(acronym)) currencies[i].symbol = '₩'; //       2
    if (cyrillic.includes(acronym)) currencies[i].symbol = 'лв'; // 4
    if (peso.includes(acronym)) currencies[i].symbol = '₱'; //      2
    if (rupee.includes(acronym)) currencies[i].symbol = '₨'; //     5
    if (nordic.includes(acronym)) currencies[i].symbol = 'kr' //    4
    if (lei.includes(acronym)) currencies[i].symbol = 'lei'; //     2
    if (br.includes(acronym)) currencies[i].symbol = 'br'; //       3
    if (k.includes(acronym)) currencies[i].symbol = 'K'; //         2
}