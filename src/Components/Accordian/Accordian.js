import React from 'react'
import "./Accordian.css"

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';



function Accordian({ data }) {
    return (
        <div>
            <Accordion className='acorddiiaann'>
                <AccordionSummary
                    expandIcon={<button className='accordian-button'>+</button>}
                    className='acorddiiaann-summary'
                >
                    <Typography className='faq-question'>{data.question}</Typography>
                </AccordionSummary>
                <AccordionDetails className='acorddiiaann-details'>
                    <Typography className='faq-answar'>
                        {data.answar}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default Accordian