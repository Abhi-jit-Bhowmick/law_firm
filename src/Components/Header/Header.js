import React from 'react'
import "./Header.css"

function Header() {
    return (
        <div className='header-container'>
            <div className='header-components-container'>
                <div className='header-logo'>
                    <img src='./logo.png' alt='logo' />
                </div>
                <div className='header-items'>
                    <p>Home</p>
                    <p>Attorneys</p>
                    <p>Practice Areas</p>
                    <p>About Us</p>
                </div>
                <div className='header-contact-button'>
                    <input type='button' value="Contact Now" />
                </div>
            </div>
        </div>
    )
}

export default Header