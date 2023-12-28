import React from 'react'
import "./Footer.css"

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='details'>
                    <div className='logo'>
                        <img src='./logo.png' alt='logo' />
                    </div>
                    <div className='about'>
                        <p>Home</p>
                        <p>Attorneys</p>
                        <p>Practice Areas</p>
                        <p>About Us</p>
                    </div>
                    <div className='social-icon'>
                        <div className='social-image insta'>
                            <img src='./insta.png' alt='instagram' />
                        </div>
                        <div className='social-image fb'>
                            <img src='./fb.png' alt='facebook' />
                        </div>
                        <div className='social-image twiter'>
                            <img src='./twiter.png' alt='twiter' />
                        </div>
                        <div className='social-image perl'>
                            <img src='./perl.png' alt='perl' />
                        </div>
                    </div>
                </div>

                <div className='copyright'>
                    <p>© 2020 Acme. All right reserved.</p>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                </div>

            </div>
        </div>
    )
}

export default Footer