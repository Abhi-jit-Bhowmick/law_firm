import React from 'react';
import "./Subscriber.css";

function Subscriber() {
    return (
        <div className='subscriber-container'>
            <div className='subscriber-heading'>
                <p>Subscribe Our Newsletter</p>
            </div>
            <div className='subscriber-input-box'>
                <input type='text' placeholder='Name:' className='input-name' />
                <input type='text' placeholder='Enter Your Mail' className='input-email' />
                <button className='input-button'>Send</button>
            </div>
        </div>
    )
}

export default Subscriber