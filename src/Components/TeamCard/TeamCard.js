import React from 'react'
import "./TeamCard.css"

function TeamCard({ data }) {
    return (
        <div className='team-container'>
            <div className='team-member-img'>
                <img src={`team${data.id}.png`} alt={data.name} />
            </div>
            <div className='team-member-details'>
                <p className='member-name'>{data.name}</p>
                <p className='case-number'>{data.case} Case</p>
            </div>
        </div>
    )
}

export default TeamCard