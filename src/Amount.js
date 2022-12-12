import React, { useState } from 'react';

export default function Amount(props) {
    const [ amount, setAmount ] = useState(props.data[0]);

    function update(e) { // onChange: updates local state
        console.log("New AMOUNT is: " + e.target.value);
        setAmount(e.target.value);
        props.update(e.target.value); // prop func (parent line 15)
    }

    function validate(e) {
        let input = e.target.value;
        let z = document.getElementsByClassName('amount')[0]

        if(input === '') {
            z.style.border = '1px solid red'
            z.style.focus.boxShadow = '0 0 0.25rem rgb(253 13 13 / 51%'
        }
    }

    return (
        <div className='form-floating'>
            <input className="amount form-control" 
                type="number" 
                id='amount' 
                placeholder='amount' 
                value={amount} 
                min='0'
                onInput={validate}
                //onInput='validity.valid || (value="1");'
                onChange={update}>
            </input>
            <label htmlFor='amount'>Amount</label> 
        </div>
    )
}
