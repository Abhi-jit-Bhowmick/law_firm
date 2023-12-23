import React from 'react'
import "./Card.css"

function Card({ rate }) {
    return (
        <div className='card-container'>
            <div className='icon'>
                <img src='./icon.png' alt='icon' />
            </div>
            <div className='para'>
                <p>{rate} % Success Rate</p>
                <p className='text'>Amet minim mollit non deserunt ullamco est
                    sit aliqua dolor do amet sint. Velit officia
                    consequatduis enim velit mollit Exer.
                </p>
            </div>
            <button>Read More</button>
        </div>
    )
}

export default Card