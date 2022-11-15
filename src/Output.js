export default function Output(props) {

    const amount = props.data[0];
    let from = props.data[1].slice(6);
    let to = props.data[2].slice(6);
    const result = props.data[3];

    // Fix GBP plurals...MAYBE SWTICH CASE FOR ALL PLURALS?
    /*const gbp = 'GBP — British Pound Sterling';
    const withoutSterling = 'British Pound'; // or props.data[1].slice(6,19);
    if (props.data[1] === gbp) from = withoutSterling;
    if (props.data[2] === gbp) to = withoutSterling;*/

    switch (props.data[1].slice(0,3)) {
        case 'GBP':
            from = 'British Pound';
            break;
        case 'AED':
            from = 'Emirati Dirham';
            break;
        case 'ANG':
            from = 'Dutch Guilder'
            break;
        case 'AWG':
            from = 'Aruban or Dutch Florin'
            break;
        case 'BAM':
            from = 'Bosnian Covertible Mark '
            break;
        case '':
            from = ''
            break;
        case '':
            from = ''
            break;
        case '':
            from = ''
            break;
        case '':
            from = ''
            break;
        case '':
            from = ''
            break;
        case '':
            from = ''
            break;
        case '':
            from = ''
            break;
        case '':
            from = ''
            break;
        case '':
            from = ''
            break;
        case '':
            from = ''
            break;
        case '':
            from = ''
            break;
        
        
        
        
        default:
            console.log('switch case')
    }

    if (amount > 1 || amount === 9) from += 's'; // Some currencies don't apply (JPY, ALL, ANG, AWG, BGN, BRL, BWP), also make singular if > 1 decimal
    if (result !== '1' && result !== 1) to += 's';

    return (
        <div className='result'>
            <h5 className='output-1'>{`${amount} ${from} = `}</h5>
            <br></br>
            <h3 className='output-2'>{`${result} ${to}`}</h3>
        </div>
    )
}

// ADD A LOADING ICON WHILE WAITING FOR API CALL