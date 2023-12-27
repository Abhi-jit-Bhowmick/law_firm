import React from 'react'
import "./ClintCard.css"

function ClintCard({ data }) {
    return (

        <div className='card-container-clint'>
            <div className='icon-clint'>
                <img src={data.image} alt={data.name} />
            </div>
            <div className='para-clint'>
                <p className='clint-name'> {data.name}</p>
                <p className='clint-designation'>{data.designation}</p>
                <p className='text-clint'>
                    {data.detail}
                </p>
            </div>
        </div>

    )
}

export default ClintCard