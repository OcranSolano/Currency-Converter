import React, { useEffect, useState } from 'react';

let myHeaders = new Headers();
myHeaders.append("apikey", "1IBq1WjxEI5NMiLbXVxXsNPNnEKj8Mp7");

let requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
}

export default function Convert(props) {

    const [ firstClick, setFirsClick ] = useState(true);
    const [ loading, setLoading ] = useState(false);
    const [ buttonText, setButtonText ] = useState('Convert');
    
    const amount = props.data[0];
    const from = props.data[1].slice(0,3);
    const to = props.data[2].slice(0,3);
    let result = props.data[3];
    const enabled = props.data[4];

    // useEffect(() => {
    //     if (amount.length === 0) {
        //     alert('Please input AMOUNT to convert')
        // } else if (props.data[1] === props.data[2] || amount === '0') {
        //     props.result(amount); //STRING
        //     console.log(amount.length)
    //     } else {
    //         fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`, requestOptions)
    //         /*.then(response => response.text())*/
    //         .then(response => response.json())
    //         /*.then(result => console.log(result))*/
    //         .then(result => props.result(result))
    //         .then(console.log('DONE'))
    //         .catch(error => alert('error', error));
    //     }
    //     console.log(from, to)
    // },[amount, from, to])

    // function refresh() {

    //     props.reset(0);
        
    //     const bottom = document.getElementsByClassName('bottom')[0];
    //     const rates = document.getElementsByClassName('rates')[0];

    //     bottom.style.opacity = '0.3';
    //     rates.style.opacity = '0.3';
    // }

    function execute() {
        if (amount.length === 0) {
            alert('Please input AMOUNT to convert')
            return
        }

        setLoading(true)
        
        if (props.data[1] === props.data[2] || amount === '0') {
            props.result(amount); // string
            setTimeout(() => {
                setLoading(false);
            }, 500)
        } else { // fluctuation then conversion
            fetch(`https://api.apilayer.com/exchangerates_data/fluctuation?start_date=2022-01-10&end_date=2023-01-10&base=${from}&symbols=${to}`, requestOptions)
            .then(response => response.json())
            //.then(result => console.log(result))
            .then(result => props.fluctuation1(result))
            .catch(error => console.log('error', error));

            fetch(`https://api.apilayer.com/exchangerates_data/fluctuation?start_date=2022-01-10&end_date=2023-01-10&base=${to}&symbols=${from}`, requestOptions)
            .then(response => response.json())
            //.then(result => console.log(result))
            .then(result => props.fluctuation2(result))
            .catch(error => console.log('error', error));

            fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`, requestOptions)
            .then(response => response.json())
            .then(result => props.result(result))
            .then(console.log('DONE'))
            .catch(error => alert('error', error));
        }

        setButtonText('Refresh');
        if(enabled) { // refresh css
            const bottom = document.getElementsByClassName('bottom')[0];
            const rates = document.getElementsByClassName('rates')[0];
            const datetime = document.getElementsByClassName('datetime-2')[0];
            
            bottom.style.opacity = 0.3;
            to === from ? rates.style.opacity = 0 : rates.style.opacity = 0.3;
            
            setTimeout(() => {
                setLoading(false);
                bottom.style.opacity = 1;
                to === from ? rates.style.opacity = 0 : rates.style.opacity = 1;
                datetime.style.color = 'rgb(59, 203, 133)';
                setTimeout(function () {
                    datetime.style.color = 'rgb(92, 102, 123)';
                }, 350)
            }, 350)
        }
    }

    useEffect(() => {
        setLoading(false)

        const btn = document.getElementsByClassName('btn')[0];
        if(firstClick && enabled) {
            btn.style.visibility = 'hidden';
            btn.style.opacity = 0;
            setTimeout(() => {
                btn.style.visibility = 'visible';
                btn.style.opacity = 1;
            }, 350);
            
        setFirsClick(false);
        }

        const datetime = document.getElementsByClassName('datetime-2')[0];
        datetime.style.color = 'rgb(59, 203, 133)';
            setTimeout(function () {
                datetime.style.color = 'rgb(92, 102, 123)';
            }, 350)
    }, [result])

    useEffect(() => {
        if(!enabled) setButtonText('Convert');
    }, [enabled])

    function timeseries() { // for line graph
        fetch("https://api.apilayer.com/exchangerates_data/timeseries?start_date=2022-12-10&end_date=2023-01-10&base=USD&symbols=BRL", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }

    return (
        <button 
            type='button' 
            className='btn btn-primary btn-lg convert'
            onClick={execute}
            disabled={!loading ? false : true}>
                {!loading ? buttonText : <span id='spinner' className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>}
        </button>
    )
}