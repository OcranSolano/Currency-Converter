let myHeaders = new Headers();
myHeaders.append("apikey", "1IBq1WjxEI5NMiLbXVxXsNPNnEKj8Mp7");

let requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
}

export default function Convert(props) {
    
    const amount = props.data[0];
    const from = props.data[1].slice(0,3);
    const to = props.data[2].slice(0,3);

    

    function execute() {
        if (props.data[1] === props.data[2] || amount === '0') {
            props.result(amount); //STRING
        } else {
            fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`, requestOptions)
            /*.then(response => response.text())*/
            .then(response => response.json())
            /*.then(result => console.log(result))*/
            .then(result => props.result(result))
            .then(console.log('DONE'))
            .catch(error => alert('error', error));
        }
        console.log(from, to)
    }

    return (
        <button 
            type='button' 
            className='btn btn-primary btn-lg convert'
            onClick={execute}>
                Convert
        </button>
    )
}