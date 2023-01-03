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
        } else {
            fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`, requestOptions)
            //.then(response => response.text())
            .then(response => response.json())
            //.then(result => console.log(result))
            .then(result => props.result(result))
            .then(console.log('DONE'))
            .catch(error => alert('error', error));
        }

        setButtonText('Refresh');
        const btn = document.getElementsByClassName('btn')[0];
        if(firstClick) {
            btn.style.opacity = 0;
            setTimeout(function () {
                btn.style.opacity = 1;
            }, 350)
        }
        setFirsClick(false);
    }

    useEffect(() => {
        // const bottom = document.getElementsByClassName('bottom')[0];
        // const rates = document.getElementsByClassName('rates')[0];

        // if (from !== to) {
        //     bottom.style.opacity = '1';
        //     rates.style.opacity = '1';
        // }
        setLoading(false)
        
    }, [result])

    useEffect(() => {
        if(!enabled) setButtonText('Convert');
    }, [enabled])

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