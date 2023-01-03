import React, { useState } from 'react';

export default function Amount(props) {
    const [ amount, setAmount ] = useState(props.data[0]);

    function update(e) { // onChange: updates local state
        // console.log("New AMOUNT is: " + e.target.value);
        setAmount(e.target.value);
        props.update(e.target.value); // App prop func
    }

    return (
        <div className='form-floating'>
            <input className="amount form-control" 
                type="number" 
                id='amount' 
                placeholder='amount' 
                value={amount} 
                min='0'
                onChange={update}
                required
                /* onInput='validity.valid || (value="1");' */ >
            </input>
            <label htmlFor='amount'>Amount</label> 
        </div>
    )
}

// Format number in input element