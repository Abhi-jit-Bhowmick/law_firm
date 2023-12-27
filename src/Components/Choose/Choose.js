import React from 'react'
import "./Choose.css"
import Card from '../Card/Card'
let successRate = [98, 100, 100]

function Choose() {
    return (
        <div className='choose-container'>

            <div className='card-wrapper'>
                <div className='heading'>
                    <h1>Why Choose Us?</h1>
                </div>
                <div className='choose-card'>
                    {
                        successRate.map((item, index) => (
                            <Card rate={item} key={`${item + index}`} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Choose