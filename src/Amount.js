import React, { useState } from 'react';

export default function Amount(props) {
    const [ amount, setAmount ] = useState(props.data[0]);

    function update(e) { // onChange: updates local state
        console.log("New AMOUNT is: " + e.target.value);
        setAmount(e.target.value);
        props.update(e.target.value); // prop func (parent line 15)
    }

    return (
        <div className='form-floating'>
            <input className="amount form-control" 
                type="number" 
                id='amount' 
                placeholder='amount' 
                value={amount} 
                onChange={update}>
            </input>
            <label for='amount'>Amount</label> 
        </div>
    )
}
