export const currencies = [
  { name: 'USD β United States Dollar', // alt output
    output: 'US Dollar', flag: 'us', emoji: 'πΊπΈ'
  },
  { name: 'EUR β Euro',
    symbol: 'β¬', flag: 'eu', emoji: 'πͺπΊ'
  },
  { name: 'GBP β British Pound Sterling', // alt output
    output: 'British Pound', flag: 'gb', emoji: 'π¬π§'
  },
  { name: 'JPY β Japanese Yen', // alt plural
    plural: 'Japanese Yen' /* same */, flag: 'jp', emoji: 'π―π΅'
  },
  { name: 'RUB β Russian Ruble',
    symbol: 'β½', flag: 'ru', emoji: 'π·πΊ'
  },
  { name: 'CAD β Canadian Dollar',
    flag: 'ca', emoji: 'π¨π¦'
  },
  { name: 'AED β United Arab Emirates Dirham', // alt output
    output: 'Emirati Dirham', symbol: `Ψ―.Ψ₯`, flag: 'ae', emoji: 'π¦πͺ'
  },
  { name: 'AFN β Afghan Afghani',
    symbol: 'Ψ', flag: 'af', emoji: 'π¦π«'
  },
  { name: 'ALL β Albanian Lek', // alt plural
    plural: 'Albanian Leke', symbol: 'Lek', flag: 'al', emoji: 'π¦π±'
  },
  { name: 'AMD β Armenian Dram',
    symbol: 'Τ΄', flag: 'am', emoji: 'π¦π²'
  },
  { name: 'ANG β Netherlands Antillean Guilder ', // alt output & plural
    output: 'Dutch Guilder', plural: 'Dutch Guilders (also called Florins)', flag: 'cw', emoji: 'π³π±'
  },
  { name: 'AOA β Angolan Kwanza',
    symbol: 'Kz', flag: 'ao', emoji: 'π¦π΄'
  },
  { name: 'ARS β Argentine Peso',
    flag: 'ar', emoji: 'π¦π·'
  },
  { name: 'AUD β Australian Dollar',
    flag: 'au', emoji: 'π¦πΊ'
  },
  { name: 'AWG β Aruban Florin', // alt output
    output: 'Aruban or Dutch Florin', plural: 'Aruban or Dutch Guilders (also called Florins)', flag: 'aw', emoji: 'π¦πΌ'
  },
  { name: 'AZN β Azerbaijani Manat',
    symbol: 'βΌ', flag: 'az', emoji: 'π¦πΏ'
  },
  { name: 'BAM β Bosnia-Herzegovina Convertible Mark', // alt output
    output: 'Bosnian Covertible Mark', symbol: 'KM', flag: 'ba', emoji: 'π§π¦'
  },
  { name: 'BBD β Barbadian Dollar', // alt output
    output: 'Barbadian or Bajan Dollar', flag: 'bb', emoji: 'π§π§'
  },
  { name: 'BDT β Bangladeshi Taka',
    symbol: 'ΰ§³', flag: 'bd', emoji: 'π§π©'
  },
  { name: 'BGN β Bulgarian Lev', // alt plural
    plural: 'Bulgarian Leva', flag: 'bg', emoji: 'π§π¬'
  },
  { name: 'BHD β Bahraini Dinar',
    symbol: '.Ψ―.Ψ¨', flag: 'bh', emoji: 'π§π­'
  },
  { name: 'BIF β Burundian Franc',
    symbol: 'FBu', flag: 'bi', emoji: 'π§π?'
  },
  { name: 'BMD β Bermudian Dollar',
    flag: 'bm', emoji: 'π§π²'
  },
  { name: 'BND β Bruneian Dollar',
    flag: 'bn', emoji: 'π§π³'
  },
  { name: 'BOB β Bolivian Boliviano',
    symbol: '$b', flag: 'bo', emoji: 'π§π΄'
  },
  { name: 'BRL β Brazilian Real', // alt plural
    symbol: 'R$', plural: 'Brazilian Reais', flag: 'br', emoji: 'π§π·'
  },
  { name: 'BSD β Bahamian Dollar',
    flag: 'bs', emoji: 'π§πΈ'
  },
  { name: 'BTC β Bitcoin',
    symbol: 'βΏ', flag: null, emoji: 'πͺ'
  },
  { name: 'BTN β Bhutanese Ngultrum',
    symbol: 'Nu.', flag: 'bt', emoji: 'π§πΉ'
  },
  { name: 'BWP β Botswanan Pula', // alt plural
    plural: 'Botswanan Pule', symbol: 'P', flag: 'bw', emoji: 'π§πΌ'
  },
  { name: 'BYN β (New) Belarusian Ruble',
    flag: 'by', emoji: 'π§πΎ'
  },
  { name: 'BYR β (Old) Belarusian Ruble ',
    flag: 'by', emoji: 'π§πΎ'
  },
  { name: 'BZD β Belizean Dollar',
    symbol: 'BZ$', flag: 'bz', emoji: 'π§πΏ'
  },
  { name: 'CDF β Congolese Franc',
    symbol: 'FC', flag: 'cd', emoji: 'π¨π©'
  },
  { name: 'CHF β Swiss Franc',
    symbol: 'CHF', flag: 'ch', emoji: 'π¨π­'
  },
  { name: 'CLF β Chilean Unit of Account', // alt output & plural
    output: 'Unidad de Fomento', plural: 'Unidades de Fomento', symbol: 'UF', flag: 'cl', emoji: 'π¨π±'
  },
  { name: 'CLP β Chilean Peso',
    flag: 'cl', emoji: 'π¨π±'
  },
  { name: 'CNY β Chinese Yuan Renminbi', // alt plural
    plural: 'Chinese Yuan Renminbi'/* same */,  flag: 'cn', emoji: 'π¨π³'
  },
  { name: 'COP β Colombian Peso',
    flag: 'co', emoji: 'π¨π΄'
  },
  { name: 'CRC β Costa Rican Col\u00f3n', // alt plural
    plural: 'Costa Rican Colones', symbol: 'β‘', flag: 'cr', emoji: 'π¨π·'
  },
  { name: 'CUC β Cuban Convertible Peso',
    flag: 'cu', emoji: 'π¨πΊ'
  },
  { name: 'CUP β Cuban Peso',
    flag: 'cu', emoji: 'π¨πΊ'
  },
  { name: 'CVE β Cape Verdean Escudo',
    flag: 'cv', emoji: 'π¨π»'
  },
  { name: 'CZK β Czech Republic Koruna', // alt plural
    output: 'Czech Koruna', plural: 'Czech Koruny', symbol: 'KΔ', flag: 'cz', emoji: 'π¨πΏ'
  },
  { name: 'DJF β Djiboutian Franc',
    symbol: 'Fdj', flag: 'dj', emoji: 'π©π―'
  },
  { name: 'DKK β Danish Krone',
    plural: 'Danish Kroner', flag: 'dk', emoji: 'π©π°'
  },
  { name: 'DOP β Dominican Peso',
    symbol: 'RD$', flag: 'do', emoji: 'π©π΄'
  },
  { name: 'DZD β Algerian Dinar',
    symbol: 'Ψ―Ψ¬', flag: 'dz', emoji: 'π©πΏ'
  },
  { name: 'EGP β Egyptian Pound',
    flag: 'eg', emoji: 'πͺπ¬'
  },
  { name: 'ERN β Eritrean Nakfa',
    symbol: 'Nfk', flag: 'er', emoji: 'πͺπ·'
  },
  { name: 'ETB β Ethiopian Birr',
    flag: 'et', emoji: 'πͺπΉ'
  },
  { name: 'FJD β Fijian Dollar',
    flag: 'fj', emoji: 'π«π―'
  },
  { name: 'FKP β Falkland Islands Pound',
    flag: 'fk', emoji: 'π«π°'
  },
  { name: 'GEL β Georgian Lari', // alt plural
    plural: 'Georgian Lari', symbol: 'α', flag: 'ge', emoji: 'π¬πͺ'
  },
  { name: 'GGP β Guernsey Pound',
    flag: 'gg', emoji: 'π¬π¬'
  },
  { name: 'GHS β Ghanaian Cedi',
    symbol: 'Β’', flag: 'gh', emoji: 'π¬π­'
  },
  { name: 'GIP β Gibraltar Pound',
    flag: 'gi', emoji: 'π¬π?'
  },
  { name: 'GMD β Gambian Dalasi',
    symbol: 'D', flag: 'gm', emoji: 'π¬π²'
  },
  { name: 'GNF β Guinean Franc',
    symbol: 'FG', flag: 'gn', emoji: 'π¬π³'
  },
  { name: 'GTQ β Guatemalan Quetzal', // alt plural
    plural: 'Guatemalan Quetzales', symbol: 'Q', flag: 'gt', emoji: 'π¬πΉ'
  },
  { name: 'GYD β Guyanese Dollar',
    flag: 'gy', emoji: 'π¬πΎ'
  },
  { name: 'HKD β Hong Kong Dollar',
    flag: 'hk', emoji: 'π­π°'
  },
  { name: 'HNL β Honduran Lempira',
    symbol: 'L', flag: 'hn', emoji: 'π­π³'
  },
  { name: 'HRK β Croatian Kuna',
    symbol: 'kn', flag: 'hr', emoji: 'π­π·'
  },
  { name: 'HTG β Haitian Gourde',
    symbol: 'G', flag: 'ht', emoji: 'π­πΉ'
  },
  { name: 'HUF β Hungarian Forint',
    symbol: 'Ft', flag: 'hu', emoji: 'π­πΊ'
  },
  { name: 'IDR β Indonesian Rupiah',
    symbol: 'Rp', flag: 'id', emoji: 'π?π©'
  },
  { name: 'ILS β Israeli New Sheqel',
    symbol: 'βͺ', flag: 'il', emoji: 'π?π±'
  },
  { name: 'IMP β Isle of Man Pound', // alt output
    output: 'Isle of Man or Manx Pound', flag: 'im', emoji: 'π?π²'
  },
  { name: 'INR β Indian Rupee',
    symbol: 'βΉ', flag: 'in', emoji: 'π?π³'
  },
  { name: 'IQD β Iraqi Dinar',
    symbol: 'ΨΉ.Ψ―', flag: 'iq', emoji: 'π?πΆ'
  },
  { name: 'IRR β Iranian Rial',
    flag: 'ir', emoji: 'π?π·'
  },
  { name: 'ISK β Icelandic Kr\u00f3na', // alt plural
    plural: 'Icelandic Kr\u00f3nur', flag: 'is', emoji: 'π?πΈ'
  },
  { name: 'JEP β Jersey Pound',
    flag: 'je', emoji: 'π―πͺ'
  },
  { name: 'JMD β Jamaican Dollar',
    symbol: 'J$', flag: 'jm', emoji: 'π―π²'
  },
  { name: 'JOD β Jordanian Dinar',
    symbol: 'Ψ―.Ψ§', flag: 'jo', emoji: 'π―π΄'
  },
  { name: 'KES β Kenyan Shilling',
    symbol: 'KSh', flag: 'ke', emoji: 'π°πͺ'
  },
  { name: 'KGS β Kyrgystani Som',
    flag: 'kg', emoji: 'π°π¬'
  },
  { name: 'KHR β Cambodian Riel',
    symbol: 'α', flag: 'kh', emoji: 'π°π­'
  },
  { name: 'KMF β Comorian Franc',
    symbol: 'CF',flag: 'km', emoji: 'π°π²'
  },
  { name: 'KPW β North Korean Won', // alt plural
    plural: 'North Korean Won', flag: 'kp', emoji: 'π°π΅'
  },
  { name: 'KRW β South Korean Won', // alt plural
    plural: 'South Korean Won', flag: 'kr', emoji: 'π°π·'
  },
  { name: 'KWD β Kuwaiti Dinar',
    symbol: 'Ψ―.Ω', flag: 'kw', emoji: 'π°πΌ'
  },
  { name: 'KYD β Cayman Islands Dollar', // alt output
    output: 'Caymanian Dollar', flag: 'ky', emoji: 'π°πΎ'
  },
  { name: 'KZT β Kazakhstani Tenge', //alt plural
    plural: 'Kazakhstani Tenge'/* same */, flag: 'kz', emoji: 'π°πΏ'
  },
  { name: 'LAK β Laotian Kip', // alt output
    output: 'Lao Kip', symbol: 'β­', flag: 'la', emoji: 'π±π¦'
  },
  { name: 'LBP β Lebanese Pound',
    flag: 'lb', emoji: 'π±π§'
  },
  { name: 'LKR β Sri Lankan Rupee',
    flag: 'lk', emoji: 'π±π°'
  },
  { name: 'LRD β Liberian Dollar',
    flag: 'lr', emoji: 'π±π·'
  },
  { name: 'LSL β Lesotho Loti', // alt output & plural
    output: 'Lesotho or Basotho Loti', plural: 'Lesotho or Basotho Maloti', symbol: 'M', flag: 'ls', emoji: 'π±πΈ'
  },
  { name: 'LTL β Lithuanian Litas', // alt plural
    plural: 'Lithuanian Litai', symbol: 'Lt', flag: 'lt', emoji: 'π±πΉ'
  },
  { name: 'LVL β Latvian Lat', // alt plural
    plural: 'Latvian Lati', symbol: 'Ls', flag: 'lv', emoji: 'π±π»'
  },
  { name: 'LYD β Libyan Dinar',
    symbol: 'Ω.Ψ―', flag: 'ly', emoji: 'π±πΎ'
  },
  { name: 'MAD β Moroccan Dirham',
    symbol: 'MAD', flag: 'ma', emoji: 'π²π¦'
  },
  { name: 'MDL β Moldovan Leu', // alt plural
    plural: 'Moldovan Lei', flag: 'md', emoji: 'π²π©'
  },
  { name: 'MGA β Malagasy Ariary', // alt plural
    plural: 'Malagasy Ariary'/* same */, symbol: 'Ar', flag: 'mg', emoji: 'π²π¬'
  },
  { name: 'MKD β Macedonian Denar',
    symbol: 'Π΄Π΅Π½', flag: 'mk', emoji: 'π²π°'
  },
  { name: 'MMK β Myanmar Kyat', // alt output
    output: 'Myanmar or Burmese Kyat', flag: 'mm', emoji: 'π²π²'
  },
  { name: 'MNT β Mongolian Tugrik',
    symbol: 'β?', flag: 'mn', emoji: 'π²π³'
  },
  { name: 'MOP β Macanese Pataca',
    symbol: 'MOP$', flag: 'mo', emoji: 'π²π΄'
  },
  { name: 'MRO β Mauritanian Ouguiya', // obsolete now MRU
    symbol: 'UM', flag: 'mr', emoji: 'π²π·'
  },
  { name: 'MUR β Mauritian Rupee',
    flag: 'mu', emoji: 'π²πΊ'
  },
  { name: 'MVR β Maldivian Rufiyaa', // alt plural
    plural: 'Maldivian Rufiyaa'/* same */, symbol: 'Rf', flag: 'mv', emoji: 'π²π»'
  },
  { name: 'MWK β Malawian Kwacha',
    symbol: 'MK', flag: 'mw', emoji: 'π²πΌ'
  },
  { name: 'MXN β Mexican Peso',
    flag: 'mx', emoji: 'π²π½'
  },
  { name: 'MYR β Malaysian Ringgit',
    symbol: 'RM', flag: 'my', emoji: 'π²πΎ'
  },
  { name: 'MZN β Mozambican Metical', // alt plural
    plural: 'Mozambican Meticais', symbol: 'MT', flag: 'mz', emoji: 'π²πΏ'
  },
  { name: 'NAD β Namibian Dollar',
    flag: 'na', emoji: 'π³π¦'
  },
  { name: 'NGN β Nigerian Naira',
    symbol: 'β¦', flag: 'ng', emoji: 'π³π¬'
  },
  { name: 'NIO β Nicaraguan C\u00f3rdoba',
    symbol: 'C$', flag: 'ni', emoji: 'π³π?'
  },
  { name: 'NOK β Norwegian Krone', // alt plural
    plural: 'Norwegian Kroner', flag: 'no', emoji: 'π³π΄'
  },
  { name: 'NPR β Nepalese Rupee',
    flag: 'np', emoji: 'π³π΅'
  },
  { name: 'NZD β New Zealand Dollar',
    flag: 'nz', emoji: 'π³πΏ'
  },
  { name: 'OMR β Omani Rial',
    flag: 'om', emoji: 'π΄π²'
  },
  { name: 'PAB β Panamanian Balboa', // alt plural
    plural: 'Panamanian Balboa'/* same */, symbol: 'B/.', flag: 'pa', emoji: 'π΅π¦'
  },
  { name: 'PEN β Peruvian Nuevo Sol', // alt output & plural
    output: 'Peruvian Sol', plural: 'Peruvian Soles', symbol: 'S/.', flag: 'pe', emoji: 'π΅πͺ'
  },
  { name: 'PGK β Papua New Guinean Kina', // alt plural
    plural: 'Papua New Guinean Kina'/* same */, flag: 'pg', emoji: 'π΅π¬'
  },
  { name: 'PHP β Philippine Peso',
    flag: 'ph', emoji: 'π΅π­'
  },
  { name: 'PKR β Pakistani Rupee',
    flag: 'pk', emoji: 'π΅π°'
  },
  { name: 'PLN β Polish Zloty', // alt plural
    plural: 'Polish Zlotych', symbol: 'zΕ', flag: 'pl', emoji: 'π΅π±'
  },
  { name: 'PYG β Paraguayan Guarani', // alt plural
    plural: 'Paraguayan Guarani'/* same */, symbol: 'Gs', flag: 'py', emoji: 'π΅πΎ'
  },
  { name: 'QAR β Qatari Rial',
    flag: 'qa', emoji: 'πΆπ¦'
  },
  { name: 'RON β Romanian Leu', // alt plural
    plural: 'Romanian Lei', flag: 'ro', emoji: 'π·π΄'
  },
  { name: 'RSD β Serbian Dinar',
    symbol: 'ΠΠΈΠ½', flag: 'rs', emoji: 'π·πΈ'
  },
  { name: 'RWF β Rwandan Franc',
    symbol: 'Rβ£', flag: 'rw', emoji: 'π·πΌ'
  },
  { name: 'SAR β Saudi Arabian Riyal', // alt output
    output: 'Saudi Riyal', flag: 'sa', emoji: 'πΈπ¦'
  },
  { name: 'SBD β Solomon Islander Dollar',
    flag: 'sb', emoji: 'πΈπ§'
  },
  { name: 'SCR β Seychellois Rupee',
    flag: 'sc', emoji: 'πΈπ¨'
  },
  { name: 'SDG β Sudanese Pound',
    symbol: 'Ψ¬.Ψ³.', flag: 'sd', emoji: 'πΈπ©'
  },
  { name: 'SEK β Swedish Krona', // alt plural
    plural: 'Swedish Kronor', flag: 'se', emoji: 'πΈπͺ'
  },
  { name: 'SGD β Singapore Dollar',
    flag: 'sg', emoji: 'πΈπ¬'
  },
  { name: 'SHP β Saint Helenian Pound',
    flag: 'sh', emoji: 'πΈπ­'
  },
  { name: 'SLL β Sierra Leonean Leone',
    symbol: 'Le', flag: 'sl', emoji: 'πΈπ±'
  },
  { name: 'SOS β Somali Shilling',
    symbol: 'S', flag: 'so', emoji: 'πΈπ΄'
  },
  { name: 'SRD β Surinamese Dollar',
    flag: 'sr', emoji: 'πΈπ·'
  },
  { name: 'STD β S\u00e3o Tom\u00e9 and Pr\u00edncipe Dobra', // alt output, obsolote, current STN
    output: 'S\u00e3o Tom\u00e9an Dobra', symbol: 'Db', flag: 'st', emoji: 'πΈπΉ'
  },
  { name: 'SVC β Salvadoran Col\u00f3n', // obsolete, alt plural
    plural: 'Salvadoran Colones', flag: 'sv', emoji: 'πΈπ»'
  },
  { name: 'SYP β Syrian Pound',
    flag: 'sy', emoji: 'πΈπΎ'
  },
  { name: 'SZL β Swazi Lilangeni', // alt plural
    plural: 'Swazi Emalangeni', symbol: 'E', flag: 'sz', emoji: 'πΈπΏ'
  },
  { name: 'THB β Thai Baht', // alt plural
    plural: 'Thai Baht'/* same */, symbol: 'ΰΈΏ', flag: 'th', emoji: 'πΉπ­'
  },
  { name: 'TJS β Tajikistani Somoni', // alt plural
    plural: 'Tajikistani Somoni'/* same */, symbol: 'SM', flag: 'tj', emoji: 'πΉπ―'
  },
  { name: 'TMT β Turkmenistani Manat',
    symbol: 'T', flag: 'tm', emoji: 'πΉπ²'
  },
  { name: 'TND β Tunisian Dinar',
    symbol: 'Ψ―.Ψͺ', flag: 'tn', emoji: 'πΉπ³'
  },
  { name: 'TOP β Tongan Pa\u02bbanga', // alt plural
    plural: 'Tongan Pa\u02bbanga'/* same */, symbol: 'T$', flag: 'to', emoji: 'πΉπ΄'
  },
  { name: 'TRY β Turkish Lira', // alt plural
    plural: 'Turkish Lire', symbol: 'βΊ', flag: 'tr', emoji: 'πΉπ·'
  },
  { name: 'TTD β Trinidad and Tobago Dollar', // alt output
    output: 'Trinidadian Dollar', symbol: 'TT$', flag: 'tt', emoji: 'πΉπΉ'
  },
  { name: 'TWD β New Taiwan Dollar',
    symbol: 'NT$', flag: 'tw', emoji: 'πΉπΌ'
  },
  { name: 'TZS β Tanzanian Shilling',
    symbol: 'TSh', flag: 'tz', emoji: 'πΉπΏ'
  },
  { name: 'UAH β Ukrainian Hryvnia', // alt plural
    plural: 'Ukrainian Hryvni', symbol: 'β΄', flag: 'ua', emoji: 'πΊπ¦'
  },
  { name: 'UGX β Ugandan Shilling',
    symbol: 'USh', flag: 'ug', emoji: 'πΊπ¬'
  },
  { name: 'UYU β Uruguayan Peso',
    symbol: '$U', flag: 'uy', emoji: 'πΊπΎ'
  },
  { name: 'UZS β Uzbekistan Som', // alt plural
    plural: 'Uzbekistani Sums', flag: 'uz', emoji: 'πΊπΏ'
  },
  { name: 'VEF β Venezuelan Bol\u00edvar Fuerte', // alt output & plural
    output: 'Venezuelan Bol\u00edvar', plural: 'Venezuelan Bol\u00edvares', symbol: 'Bs', flag: 've', emoji: 'π»πͺ'
  },
  { name: 'VND β Vietnamese Dong',
    symbol: 'β«', flag: 'vn', emoji: 'π»π³'
  },
  { name: 'VUV β Ni-Vanuatu Vatu',
    plural: 'Ni-Vanuatu Vatu'/* same */, symbol: 'VT', flag: 'vu', emoji: 'π»πΊ'
  },
  { name: 'WST β Samoan Tala', // alt plural
    plural: 'Samoan Tala'/* same */, symbol: 'WS$', flag: 'ws', emoji: 'πΌπΈ'
  },
  { name: 'XAF β CFA Franc BEAC', // alt output
    output: 'Central African Franc', symbol: 'FCFA', flag: 'cf', emoji: 'π'
  },
  { name: 'XAG β Silver(troy) ounce',
    flag: null, emoji: 'πͺ'
  },
  { name: 'XAU β Gold(troy) ounce',
    flag: null, emoji: 'β±οΈ'
  },
  { name: 'XCD β East Caribbean Dollar',
    flag: 'lc', emoji: 'π'
  },
  { name: 'XDR β Special Drawing Rights', // alt plural
    plural: 'Special Drawing Rights'/* same */, flag: null, emoji: 'πΊπ³'
  },
  { name: 'XOF β CFA Franc BCEAO', // alt output
    output: 'CFA Franc', symbol: 'CFA', flag: 'cf', emoji: 'π'
  },
  { name: 'XPF β CFP Franc',
    symbol: 'β£', flag: 'pf', emoji: 'π΅π«'
  },
  { name: 'YER β Yemeni Rial',
    flag: 'ye', emoji: 'πΎπͺ'
  },
  { name: 'ZAR β South African Rand', // alt plural
    plural: 'South African Rand'/* same */, symbol: 'R', flag: 'za', emoji: 'πΏπ¦'
  },
  { name: 'ZMK β Zambian Kwacha(pre-2013)', // obsolete, alt output & plural
    output: 'Zambian Kwacha', plural: 'Zambian Kwacha'/* same */, flag: 'zm', emoji: 'πΏπ²'
  },
  { name: 'ZMW β Zambian Kwacha', // alt plural
    plural: 'Zambian Kwacha'/* same */, symbol: 'ZK', flag: 'zm', emoji: 'πΏπ²'
  },
  { name: 'ZWL β Zimbabwean Dollar',
    symbol: 'Z$', flag: 'zw', emoji: 'πΏπΌ'
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
    if (pounds.includes(acronym)) currencies[i].symbol = 'Β£'; //   10
    if (guilder.includes(acronym)) currencies[i].symbol = 'Ζ'; //   2
    if (Y.includes(acronym)) currencies[i].symbol = 'Β₯'; //         2
    if (rial.includes(acronym)) currencies[i].symbol = "\uFDFC"; // 5
    if (won.includes(acronym)) currencies[i].symbol = 'β©'; //       2
    if (cyrillic.includes(acronym)) currencies[i].symbol = 'Π»Π²'; // 4
    if (peso.includes(acronym)) currencies[i].symbol = 'β±'; //      2
    if (rupee.includes(acronym)) currencies[i].symbol = 'β¨'; //     5
    if (nordic.includes(acronym)) currencies[i].symbol = 'kr' //    4
    if (lei.includes(acronym)) currencies[i].symbol = 'lei'; //     2
    if (br.includes(acronym)) currencies[i].symbol = 'br'; //       3
    if (k.includes(acronym)) currencies[i].symbol = 'K'; //         2
}