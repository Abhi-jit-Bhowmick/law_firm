import React from 'react';
import "./Faq.css"
import { faq } from '../../data/Data';
import Accordian from '../Accordian/Accordian';

function Faq() {
    return (
        <div className='faq-container'>
            <p className='faq'>Faq</p>

            <div className='faq-content'>
                <div className='sub-heading'>
                    <p>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                    </p>
                </div>
                <div className='sub-heading-two'>
                    <p className='report'>
                        Do I need a personal injury report?
                    </p>
                    <p className='report-details'>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.
                    </p>
                    <div>
                        {
                            faq.map((item) => (
                                <Accordian
                                    key={item.id}
                                    data={item}
                                />
                            ))
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Faq