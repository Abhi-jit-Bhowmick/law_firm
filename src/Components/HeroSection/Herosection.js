import React from 'react';
import "./HeroSection.css";

function Herosection() {
    return (
        <>
            <div className='herosection-container'>
                <div className='hero-container'>
                    <div className='hero-text'>
                        <p className='hero-head'>
                            You don’t have to
                            Fight them Alone.
                        </p>
                        <p className='hero-paragraph'>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit blandit, curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget, hac massa gravida arcu interdum proin curae.
                        </p>

                        <div class="hero-input-wrapper">
                            <input type="text" placeholder={`Enter your eamil address`} />
                            <button type="submit">Let's Talk</button>
                        </div>
                    </div>
                    <div className='hero-img'>
                        <img src='./HeroImage.png' alt='hero_Image' />
                    </div>
                </div>
            </div>
            <div className='introduce-container'>
                <div className='hero-intro'>
                    <p className='hero-intro-p'>Let’s Introduce Ourself</p>
                    <div className='border'></div>
                    <div className='criminal-sec'>
                        <p className='criminal'>Criminal Lawyer</p>
                        <p className='description'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exercitation.</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Herosection